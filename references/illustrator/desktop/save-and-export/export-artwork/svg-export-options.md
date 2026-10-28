# SVG export options

For SVG artwork export, these options are available:

SVG export options

SVG export options

| Option | Description |
| --- | --- |
| Styling | Chooses the way visual styling information is written into SVG markup.<br><br>- Internal CSS: Uses one `<style>` tag plus CSS classes, so objects with matching styles share styling settings. This can reduce file size.<br>- Inline Style: Uses one `style` attribute on each SVG tag, with all of that tag's style properties combined as CSS.<br>- Presentation Attributes: Uses individual XML attributes for each style property on every SVG tag. Android Studio requires this format for SVG assets. |
| Font | Chooses how fonts are represented in the SVG file. Outlines keep path definitions and have broad compatibility. |
| Images | Chooses whether images are embedded in the document or saved as linked external files. |
| Object IDs | Sets how ID types (names) are assigned to SVG objects. Choose between Layer Names, Minimal, or Unique. This setting controls duplicate object-name handling and naming in the exported CSS. |
| Decimal | Sets how much object-location precision is retained. Higher Decimal values increase layout precision and visual fidelity in the rendered SVG, while also increasing exported SVG file size. |
| Minify | Reduces SVG file size by removing empty groups and blank spaces. It also makes the resulting SVG code harder to read. |
| Responsive | When enabled, browser scaling is used for the SVG-generated output, and no absolute size values are written. |
| Show Code | Launches the default text editor with the exported content. |
| Show in browser | Displays the image in the default web browser. |
