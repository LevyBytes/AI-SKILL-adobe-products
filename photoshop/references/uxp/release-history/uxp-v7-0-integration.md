# UXP v7.0 Integration

> #### New
>
> - UXP Plugins now support Web Components. Additional HTML elements and methods were added for that feature.
>   - Classes
>     - [HTMLSlotElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-slot-element.md)
>     - [HTMLTemplateElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-template-element.md)
>   - Methods
>     - [Element.assignedSlot](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#assignedslot--htmlslotelement)
>     - [Element.slot](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#slot--string)
>     - [Element.attachShadow](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#attachshadowinit)
>     - [Element.shadowRoot](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#shadowroot--shadowroot)
>     - [CustomElementRegistry.upgrade](../dom/custom-element-registry/upgrade.md)
>     - [CustomElementRegistry.whenDefined](../dom/custom-element-registry/when-defined.md)
> - Adobe SWC support is provided through [Spectrum Web Components (Beta)](../spectrum-web-component/reference-index.md).
> - The JS API set gained these additions
>   - Properties
>     - [HTMLElement.lang](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md#lang--string)
>   - Classes added to the global scope
>     - [TreeWalker](../dom/tree-walker/reference-index.md)
>     - [NodeFilter](../dom/node-filter/reference-index.md)
>   - Methods
>     - [Element.hasAttributes](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#hasattributes)
>     - [Element.getAttributeNames](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/Element.md#getattributenames)
>     - [Event.composed](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-events/Event.md#composed--boolean)
>     - [Event.composedPath](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-events/Event.md#composedpath)
>     - [DocumentFragment.append](../dom/document-fragment/append.md)
>     - [DocumentFragment.querySelector](../dom/document-fragment/query-selector.md)
>     - [DocumentFragment.querySelectorAll](../dom/document-fragment/query-selector-all.md)
> - React 16 support gained these focus events
>   - [Focusin Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
>   - [Focusout Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
> - Basic shape and styling work is covered by HTML [2D Canvas Support](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md).
> - Alerts
>   - [alert()](../dom/window/alert.md)
>   - [prompt()](../dom/window/prompt.md)
>   - [confirm()](../dom/window/confirm.md)
> - In [ReadableStream](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md), [pipeThrough](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md#pipeThroughtransform-options) and [tee](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md#tee) are supported. More information is in [Streams](../streams.md)
> - [ImageBlob](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/image-blob/index.md) displays uncompressed image buffer data inside UXP
>
> #### Changed
>
> - [HTMLVideoElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md): `preload` now defaults to 'metadata'
> - [FS API](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/fs/index.md): `file://` is no longer required
