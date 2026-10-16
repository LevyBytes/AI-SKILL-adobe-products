# CSS Problems

The browser layer beneath UXP supports common HTML/CSS patterns for rich plugin interfaces, but some parts of those languages are unsupported, limited, or behave differently.

For some web developers, CSS troubleshooting is a major ongoing task. UXP plugins narrow the target to one "browser," which helps, but CSS bugs can still be hard to locate. One useful technique is selective refinement: comment out or remove portions of CSS definitions until a visible change appears.

The Debug window also helps: open the leftmost `Elements` menu to expand the plugin's HTML. After you select an element, the applied CSS appears in the debugger window's `Styles` area:

[Figure: Styles Tab](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/debugging/images/css-styles.png)

Compared with a browser's CSS view, the Developer Tool CSS view is less powerful; for instance, it does not allow live CSS edits. Even so, it is still very useful.
