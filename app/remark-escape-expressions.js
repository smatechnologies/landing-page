// Remark plugin: converts MDX text/flow expression nodes back to literal text.
// Needed for .md files that contain {VARIABLE} API placeholder syntax (e.g. IBM i docs).
// Without this, MDX3 tries to evaluate {TOKEN} as a JavaScript expression at SSG time.
const { visit } = require("unist-util-visit");

module.exports = function remarkEscapeExpressions() {
    return function (tree) {
        visit(tree, ["mdxTextExpression", "mdxFlowExpression"], (node, index, parent) => {
            if (!parent || index == null) return;
            parent.children.splice(index, 1, {
                type: "text",
                value: "{" + node.value + "}",
            });
        });
    };
};
