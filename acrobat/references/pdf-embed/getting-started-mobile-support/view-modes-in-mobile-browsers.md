# View modes in mobile browsers

So that PDFs read better on a phone, the API offers two viewing layouts in mobile browsers. Keep in mind that both layouts only apply when you are in Full Window embed mode.

- Continuous view mode: Every page stacks in sequence and the reader moves between them just by scrolling up or down. On phone browsers this layout is what renders PDFs unless you choose otherwise.
- Single Page view mode: Only one page shows at any moment, with no neighboring page in sight. Swiping carries the reader from one page to the next, each arriving on its own.

A toggle in the top bar switches between them — tap it, then pick the layout you want from the dropdown.

**Continuous view mode**

[Figure: Continous Mode](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/continuous-mode.png)

**Single page view mode**

[Figure: Single Page Mode](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/single-page-mode.png)

To choose a layout programmatically, use the `defaultViewMode` configuration variable: assign it the value you want and hand it to the `previewFile` API as part of the preview configuration. The specifics live under [Menu and tool options](../menu-and-tool-options.md).
