# Typography

Tags including `<i>` are absent from the supported element set. You can still reproduce their appearance with CSS such as:

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
