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

echo "Content patching complete."
