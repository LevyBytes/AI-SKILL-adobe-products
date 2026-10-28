# Making your Plugin Theme-aware - How to Use CSS Variables

In your plugin panel CSS, reference the built-in CSS variables in this pattern:

```css
body {
  background-color: var(--uxp-host-background-color);
  color: var(--uxp-host-text-color);
  border-color: var(--uxp-host-border-color);
  font-size: var(--uxp-host-font-size);
}
```

You are not required to apply these variables to the whole panel body; individual CSS classes can use them too.

```css
.bigText {
  color: var(--uxp-host-text-color);
  font-size: var(--uxp-host-font-size-larger);
}
.smallText {
  color: var(--uxp-host-text-color);
  font-size: var(--uxp-host-font-size-smaller);
}
```
