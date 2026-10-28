# style.css

```css
body {
  padding: 16px;
  color: white;
}

sp-divider {
  margin-bottom: 20px;
}

sp-heading {
  color: var(--uxp-host-text-color-secondary, white);
}
```

#### style.css

```css
body {
  color: white;
  padding: 16px;
}

sp-divider {
  margin-bottom: 20px;
}

li:before {
  content: "• ";
  width: 3em;
}

#plugin-body {
  color: var(--uxp-host-text-color-secondary, white);
  height: 220px;
  margin-top: 5px;
  border: 1px solid #808080;
  border-radius: 4px;
  padding: 16px;
  overflow: scroll;
}

sp-heading {
  color: var(--uxp-host-text-color-secondary, white);
}

footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

footer > * {
  margin: 5px;
}

footer div {
  margin-bottom: 1em;
  width: 100%;
}

.main-div {
  position: relative;
}

.clear-btn {
  display: none;
  position: absolute;
  top: 10px;
  right: 6px;
  cursor: pointer;
}

.main-div:hover .clear-btn {
  display: inline;
}
```
