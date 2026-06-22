# Html Dom, Html Elements, Html Events, Image Blob (part 2)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | `number` |  | Horizontal coordinate for the arc's center. |
| y | `number` |  | Vertical coordinate for the arc's center. |
| radius | `number` |  | Arc radius; it must be positive. |
| startAngle | `number` |  | Starting angle for the arc, in radians, measured from the positive x-axis. |
| endAngle | `number` |  | Ending angle for the arc, in radians, measured from the positive x-axis. |
| counterclockwise | `boolean` | `false` | Optional boolean. A true value renders the arc counter-clockwise from startAngle to endAngle; false (clockwise) is the default. |

### arcTo(x1, y1, x2, y2, radius)

Uses the supplied control points and radius to add a circular arc to the current sub-path.

**See**: [CanvasRenderingContext2D - arcTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo) for additional detail

| Param | Type | Description |
| --- | --- | --- |
| x1 | `number` | x-axis coordinate for the first control point. |
| y1 | `number` | y-axis coordinate for the first control point. |
| x2 | `number` | x-axis coordinate for the second control point. |
| y2 | `number` | y-axis coordinate for the second control point. |
| radius | `number` | Arc radius; it must be non-negative. |

### rect(x, y, width, height)

Inserts a rectangle into the path under construction.

**See**: [CanvasRenderingContext2D - rect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect) for additional detail

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | x-axis coordinate for the rectangle's starting point. |
| y | `number` | y-axis coordinate for the rectangle's starting point. |
| width | `number` | Width of the rectangle. |
| height | `number` | Height of the rectangle. |

## window.ShadowRoot

[ This capability remains unavailable until a feature flag is enabled. Set `enableSWCSupport` in the plugin manifest's featureFlags section before using it ]

**See**: [Web APIs - ShadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot)  
**Since**: v7.0.0

### mode : `Element`

**Read only**
Reports whether the ShadowRoot mode is open or closed, which controls JavaScript access to shadow-root internals.

**See**: [ShadowRoot - mode](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode)

### host : `Element`

**Read only**
Provides the DOM element hosting the ShadowRoot.

**See**: [ShadowRoot - host](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host)

### innerHTML : `string`

Exposes the DOM tree enclosed by ShadowRoot content

**See**: [ShadowRoot - innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/innerHTML)

### activeElement : `Element`

**Read only**
Reports the focused element from the shadow tree

**See**: [ShadowRoot - activeElement](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/activeElement)

### cloneNode(deep)

Creates a duplicate of the node that received the call. The `deep` argument determines whether the contained subtree is cloned too.

**See**: [ShadowRoot - cloneNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)

| Param | Type | Description |
| --- | --- | --- |
| deep | `boolean` | When set to True, the whole sub tree is cloned; False limits the copy to the node. |

## window.Text — Text(document, textContent)

Builds a Text instance.

| Param | Type |
| --- | --- |
| document | `*` |
| textContent | `*` |

### window.Text — nodeName : `string`

**Read only**
**Default**: `"\"#text\""`

### window.Text — nodeType : `number`

**Read only**
**Default**: `Node.TEXT_NODE`

### window.Text — substringData(offset, count)

**Returns**: `string`

| Param | Type |
| --- | --- |
| offset | `*` |
| count | `*` |

### window.Text — appendData(arg)

| Param | Type |
| --- | --- |
| arg | `string` |

### window.Text — insertData(offset, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| arg | `string` |

### window.Text — deleteData(offset, count)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |

### window.Text — replaceData(offset, count, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |
| arg | `string` |

## window.HTMLAnchorElement — href : `string`

Anchor target stored in `href`.

### window.HTMLAnchorElement — pathname : `string`

**Read only**
Path segment derived from the anchor's `href`.

### window.HTMLAnchorElement — protocol : `string`

**Read only**
Protocol segment derived from the anchor's `href`.

### window.HTMLAnchorElement — dataset

Provides the complete set of custom `data-*` attributes present on the element.

**See**: [HTMLElement - dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

### window.HTMLAnchorElement — lang : `string`

Sets which base language applies to text content and attribute values for the element.

**See**: [HTMLElement - lang](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang)

### window.HTMLAnchorElement — dir : `string`

Specifies the element content's text direction, restricted to recognized values only.

**See**: [HTMLElement - dir](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dir)  
**Since**: v7.1

### window.HTMLAnchorElement — hidden : `boolean` \| `string`

Signals that the element's contents should stay unrendered by the browser. Note: support does not include "until-found".

**See**: [HTMLElement - hidden](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden), [Spec - `hidden` attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute)

## window.BaseUIEvent — BaseUIEvent(type, eventInit)

Constructs a BaseUIEvent instance.

| Param | Type |
| --- | --- |
| type | `*` |
| eventInit | `*` |

### window.BaseUIEvent — initEvent(typeArg, bubblesArg, cancelableArg)

| Param | Type |
| --- | --- |
| typeArg | `string` |
| bubblesArg | `boolean` |
| cancelableArg | `boolean` |

### window.BaseUIEvent — composedPath()

Provides the route for the event.

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath)
- [https://dom.spec.whatwg.org/#dom-event-composedpath](https://dom.spec.whatwg.org/#dom-event-composedpath)

## ImageBlob

For complete coverage, refer to [ImageBlob API](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/image-blob/image-blob.md).

## Global Members

- [Crypto](uxp-global-members.md)
- [Data Storage](uxp-global-members.md)
- [Data Transfers](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-transfers/index.md)
- [HTML DOM](uxp-global-members-2.md)
- [HTML Elements](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/index.md)
- [HTML Events](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-events/index.md)
- [ImageBlob](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/image-blob/index.md)
- [Path](uxp-global-members-3.md)
- [Streams](uxp-global-members-3.md)
