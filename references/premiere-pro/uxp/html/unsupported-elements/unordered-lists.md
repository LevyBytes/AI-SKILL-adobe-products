# Unordered Lists

Lists and list items are not available as default UXP elements. A simple CSS rule set can still mimic an unordered bullet list.

```css
ul {
  margin-left: 1em;
}
li:before {
  content: "â€¢";
  display: inline-block;
  text-align: center;
  margin-left: -1em;
  width: 1em;
}
```
