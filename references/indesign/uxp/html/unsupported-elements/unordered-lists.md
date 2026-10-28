# Unordered Lists

Lists and list items are not available in UXP by default. A short CSS rule set can mimic an unordered list with bullets.

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
