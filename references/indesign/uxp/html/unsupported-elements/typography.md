# Typography

Tags such as `<i>` are absent from the supported set. Add CSS like this when you need those elements to display with their expected visual styling:

```css
i,
em {
  font-style: italic;
}
strong {
  font-weight: bold;
}
q:before {
  content: "â€œ";
}
q:after {
  content: "â€";
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
