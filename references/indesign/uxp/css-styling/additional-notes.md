# Additional notes

- **CSS preprocessors**: UXP can consume only plain CSS. SASS or SCSS may still be used if the code is transpiled to a CSS stylesheet before use. You will also need a tool such as Webpack so the plugin bundle is built correctly, along with a somewhat different workflow for [debug using UDT](../working-with-react.md), matching the React framework setup pattern.
