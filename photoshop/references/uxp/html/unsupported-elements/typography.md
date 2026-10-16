# Typography

Tags like `<i>` have no built-in UXP handling. To make their presentation appear as expected, add CSS such as:

```css
i,
em {
  font-style: italic;
}
strong {
  font-weight: bold;
}
q:before {
  content: "“";
}
q:after {
  content: "”";
}
blockquote {
  margin: 1em;
}
pre {
  white-space: pre;
}
code {
  font-family: Courier;
}
```
