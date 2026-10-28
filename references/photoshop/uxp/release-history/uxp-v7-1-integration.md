# UXP v7.1 Integration

> #### New
>
> Support was added for these HTMLElement members
>
> - [setPointerCapture](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#setpointercapturepointerid)
> - [releasePointerCapture](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#releasepointercapturepointerid)
> - [hasPointerCapture](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#haspointercapturepointerid)
> - [dir](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-html-element.md#dir--string)
>
> #### Updated
>
> - The `shell` module documentation now lives at the [shell module page](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/shell/index.md)
>
> #### Fixed
>
> - `SVGElement`: The `fill` attribute color now resolves from a CSS variable according to that variable's value. For validation right now, set `"featureFlags" : { "enableFillAsCustomAttribute" : true }` in the plugin manifest. The next UXP release enables this flag by default.
>
```css
/* CSS variable */
html {
  --iconColor: yellow;
}
```

## See also

- [Known Issues](../known-issues/reference-index.md)
