#!/bin/bash
# patch-content.sh
# Applies fixes to Azure-downloaded content required for the Docusaurus 3 build.
# Run this after azcopy populates app/ and content/ directories.

set -e

echo "Patching versioned sidebar names for Docusaurus 3 compatibility..."

# Docusaurus 3 no longer accepts "version-X.Y/" prefix in versioned sidebar keys or doc IDs.
# Fix all sidebar files that contain the legacy prefix pattern, regardless of version number.
for FILE in app/opcon-docs_versioned_sidebars/version-*-sidebars.json \
            app/ibm-i-agent-docs_versioned_sidebars/version-*-sidebars.json; do
  if [ -f "$FILE" ]; then
    # Extract version from filename (e.g. version-26.0-sidebars.json -> 26.0)
    VERSION=$(basename "$FILE" | sed 's/version-\(.*\)-sidebars\.json/\1/')
    if grep -q "\"version-${VERSION}/" "$FILE"; then
      sed -i "s/\"version-${VERSION}\/mySidebar\"/\"mySidebar\"/g" "$FILE"
      sed -i "s/\"id\": \"version-${VERSION}\//\"id\": \"/g" "$FILE"
      echo "  Patched: $FILE"
    fi
  fi
done

echo "Patching invalid URLs in SSO configuration docs..."

# https://host:80443 has an invalid port (>65535) which causes MDX URL-parse errors.
SSO_FILE="Files/UI/Solution-Manager/Library/ServerOptions/Managing-SSO-Configurations.md"
for DIR in \
  "app/opcon-docs_versioned_docs/version-22.0" \
  "app/opcon-docs_versioned_docs/version-23.0" \
  "app/opcon-docs_versioned_docs/version-25.0" \
  "app/opcon-docs_versioned_docs/version-26.0" \
  "content/smatechnologies/opcon-docs/docs" \
  "content/smatechnologies/opcon-docs/opcon-docs/docs"; do
  FILE="$DIR/$SSO_FILE"
  if [ -f "$FILE" ]; then
    sed -i 's/\*\*https:\/\/host:80443\/login\/callback\*\*/`https:\/\/host:80443\/login\/callback`/g' "$FILE"
    sed -i 's/\*\*https:\/\/host:80443\*\*/`https:\/\/host:80443`/g' "$FILE"
    echo "  Patched: $FILE"
  fi
done

echo "Patching invalid angle-bracket URL in Jaspersoft connector docs..."

# http://<I.P.>:8080/... contains angle brackets which break MDX link parsing.
JASPER="content/smatechnologies/jaspersoft-connector-docs/docs/appendix-c.md"
if [ -f "$JASPER" ]; then
  sed -i 's/\[`http:\/\/<I\.P\.>:8080\/jasperserver-pro\/login\.html`\](http:\/\/<I\.P\.>:8080\/jasperserver-pro\/login\.html)/`http:\/\/<I.P.>:8080\/jasperserver-pro\/login.html`/g' "$JASPER"
  echo "  Patched: $JASPER"
fi

echo "Patching admonition syntax for Docusaurus 3 compatibility..."

# Docusaurus 3 requires lowercase admonition types and exactly three colons.
# Find all .md files in content/ and versioned_docs, fix known issues:
#   :::NOTE  -> :::note
#   :::CAUTION -> :::caution
#   :::WARNING -> :::warning
#   :::TIP -> :::tip
#   :::INFO -> :::info
#   :::DANGER -> :::danger
#   ::note (two colons) -> :::note  (three colons)
find content app/opcon-docs_versioned_docs app/ibm-i-agent-docs_versioned_docs \
  -name "*.md" -type f | while read -r FILE; do
  if grep -qE '^:::NOTE|^:::CAUTION|^:::WARNING|^:::TIP|^:::INFO|^:::DANGER|^::note|^::tip|^::warning|^::info|^::caution|^::danger' "$FILE" 2>/dev/null; then
    sed -i \
      -e 's/^:::NOTE$/:::note/' \
      -e 's/^:::CAUTION$/:::caution/' \
      -e 's/^:::WARNING$/:::warning/' \
      -e 's/^:::TIP$/:::tip/' \
      -e 's/^:::INFO$/:::info/' \
      -e 's/^:::DANGER$/:::danger/' \
      -e 's/^::note$/:::note/' \
      -e 's/^::tip$/:::tip/' \
      -e 's/^::warning$/:::warning/' \
      -e 's/^::info$/:::info/' \
      -e 's/^::caution$/:::caution/' \
      -e 's/^::danger$/:::danger/' \
      "$FILE"
    echo "  Patched admonitions: $FILE"
  fi
done

echo "Setting MDX format for index pages with JSX card grids..."

# In Docusaurus 3, .md files are processed as CommonMark by default (not MDX).
# Index pages that use JSX inline styles (style={{...}}) need format: mdx
# to compile the JSX correctly. The mdx.format frontmatter key overrides the
# global markdown.format: 'detect' setting for individual files.
find content -name "index.md" -type f | while read -r FILE; do
  if grep -q "style={{" "$FILE" && ! grep -q "^mdx:" "$FILE"; then
    awk '/^---$/{c++; if(c==2){print "mdx:"; print "  format: mdx"}} {print}' "$FILE" > "${FILE}.tmp" && mv "${FILE}.tmp" "$FILE"
    echo "  Set mdx format: $FILE"
  fi
done

echo "Content patching complete."
