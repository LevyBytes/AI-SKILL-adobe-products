# UXP v8.1.0 Integration

> #### New
>
> - [ResizeObserver APIs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/resize-observer.md) can watch dimensions and border-box changes, helping manage automatic adjustments and track element size changes efficiently.
> - [IntersectionObserver APIs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/intersection-observer.md) track a target element's intersection with an ancestor element, enabling lazy asset loading scenarios and infinite scrolling.
> - Existing `Web Component` support gains `:first-child` and `:not(:first-child)` pseudo-classes, allowing authors to target the intended elements.
> - The `linear-gradient` property supports start and end values for web alignment.
>
> #### Fixed
>
> - The default state discrepancy for `enableFillAsCustomAttribute` is fixed; it is now true by default.
> - UXP Dev Tool no longer omits `translate` -> `y` values when those values have been correctly applied on elements.
