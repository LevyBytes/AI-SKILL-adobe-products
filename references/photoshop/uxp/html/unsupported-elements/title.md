# Title

UXP does not use `<title>` for document metadata, and including it can make that content appear inside the plugin UI. Hide it with CSS:

```css
title {
  display: none;
}
```
