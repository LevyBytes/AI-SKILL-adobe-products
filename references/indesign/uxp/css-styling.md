# CSS styling

Adobe uses Spectrum as its design system across many applications. For UI consistency, prefer Spectrum-based controls whenever you can. UXP also includes a ready-made UI library styled with Spectrum.

When importing a stylesheet or adjusting styles, remember that **UXP is not a browser**. Its architecture lacks support for some CSS properties and is not planned to support all of them. For example, UXP does not provide native support for grid layout. Documented supported properties appear under [API reference docs](css/reference-index.md).

Scripts and plugins

**In scripts**, there is no separate HTML file, so styling has to be applied to UI components through JavaScript.

**In plugins**, CSS styling can be managed more flexibly. You can use CSS classes, inline styling, or JavaScript-applied styling.

### Example

This example applies background color to divs using three approaches:

- CSS class
- Inline style
- Via JavaScript
