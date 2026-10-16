# Unordered Lists

Lists and list item elements are not supported by UXP's default element set. A basic unordered-list look can be recreated with CSS bullets:

```css
ul {
  margin-left: 1em;
}
li:before {
  content: "•";
  display: inline-block;
  text-align: center;
  margin-left: -1em;
  width: 1em;
}
```
