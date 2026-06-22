# Html Dom, Html Elements, Html Events, Image Blob

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: window.AbortController; window.CanvasGradient; window.DocumentFragment; window.Element — localName : `string`; window.getComputedStyle; window.HTMLCollection — item(index); HTML DOM; window.NamedNodeMap — NamedNodeMap(node); window.Path2D; window.ShadowRoot; window.Text — Text(document, textContent); window.HTMLAnchorElement — href : `string`; window.BaseUIEvent — BaseUIEvent(type, eventInit); ImageBlob; Global Members.

## window.AbortController

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

See also [AbortSignal](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/abort-signal.md#module:global.AbortSignal)

### signal : `AbortSignal`

AbortSignal object usable for aborting a request

### abort(reason)

Stops a request before completion.
When reason is omitted, the reason becomes "AbortError" DomException

| Param | Type | Description |
| --- | --- | --- |
| reason | `*` | why the operation was aborted |

## window.CanvasGradient

For details, see [Web APIs - CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient)

Related interface: [HTMLCanvasElement](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md#module:global.htmlcanvaselement)

**Since**: v7.0.0

### addColorStop(offset, colorValue)

For a specified canvas gradient, add a color stop using the provided `offset` and `color value`.

**Throws**:

- `DOMException`

**See**: [CanvasGradient - addColorStop](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient/addColorStop) for more details

| Param | Type | Description |
| --- | --- | --- |
| offset | `number` | Use a value from 0 through 1, inclusive, for the color stop's position; 0 maps to the gradient start, and 1 maps to the end. |
| colorValue | `string` | Provide a CSS `<color>` value for the stop's color. |

## window.DocumentFragment

**See**: [Web APIs - DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)

### childElementCount : `number`

**Read only**
Child count for the element, expressed as a number.

**See**: [DocumentFragment - childElementCount](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/childElementCount)

### querySelector(selector)

Within the DocumentFragment, the selector string is evaluated and the first matching Element node is returned.

**Returns**: `Element`  
**See**: [DocumentFragment - querySelector](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelector)

| Param | Type | Description |
| --- | --- | --- |
| selector | `string` | Provide a comma-separated selector list containing one or more CSS selectors. |

### querySelectorAll(selector)

Produces the NodeList of nodes in the DocumentFragment that satisfy the selector list.

**Returns**: `NodeList`  
**See**: [DocumentFragment - querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelectorAll)

| Param | Type | Description |
| --- | --- | --- |
| selector | `string` | Provide a comma-separated selector list containing one or more CSS selectors. |

### append(...args)

After the document fragment's final child, insert the supplied Node objects or string objects.

**See**: [DocumentFragment - append](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/append)

| Param | Type | Description |
| --- | --- | --- |
| ...args | `any` | The Node or string objects supplied for insertion. |

## window.Element — localName : `string`

**Read only**
The local portion of the element's qualified name, represented as a string.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/localName](https://developer.mozilla.org/en-US/docs/Web/API/Element/localName)

### window.Element — tagName : `string`

**Read only**
The element's tag name as a string.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)

### window.Element — namespaceURI : `string`

**Read only**
For the element, this returns its namespace URI; when it has no namespace, the value is null.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI](https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI)

### window.Element — id : `string`

On `Element`, this property represents the element's identifier and mirrors global attribute `id`.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/id](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)

### window.Element — autofocus : `boolean`

Controls whether the element receives focus automatically once loaded.

### window.Element — shadowRoot : `ShadowRoot`

**Read only**
[ Requires a feature flag: set `enableSWCSupport` under the plugin manifest's featureFlags section before using it. ]

The value is the open shadow root hosted by the element, or null when none is available.

**See**: [Element - shadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot)

### window.Element — innerHTML

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [https://w3c.github.io/DOM-Parsing/#the-innerhtml-mixin](https://w3c.github.io/DOM-Parsing/#the-innerhtml-mixin)

| Param | Type |
| --- | --- |
| value | `string` |

### window.Element — slot : `string`

[ Requires a feature flag: set `enableSWCSupport` under the plugin manifest's featureFlags section before using it. ]

**See**: [Element - slot](https://developer.mozilla.org/en-US/docs/Web/API/Element/slot)

### window.Element — assignedSlot : `HTMLSlotElement`

**Read only**
[ Requires a feature flag: set `enableSWCSupport` under the plugin manifest's featureFlags section before using it. ]

**See**: [Element - assignedSlot](https://developer.mozilla.org/en-US/docs/Web/API/Element/assignedSlot)

### window.Element — append(...nodes)

After the Element's final child, insert the supplied Node objects or string objects.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/append](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)  
**Since**: v8.0

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` |

### window.Element — prepend(...nodes)

Before the Element's first child, insert the supplied Node objects or string objects.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend)  
**Since**: v8.0

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` |

### window.Element — replaceChildren(...nodes)

Replace the Node's current children with the provided set of new children; each item may be a string or a Node object.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren)  
**Since**: v8.0

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` |

### window.Element — scrollTo(xOrOptions, y)

Move the element to the supplied x and y scroll positions. When an options object sets `behavior: "smooth"`, scrolling is animated smoothly.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)

| Param | Type | Description |
| --- | --- | --- |
| xOrOptions | `*` | Use either the target scrollLeft position or an options object. |
| y | `*` | Optional target scrollTop position. |

### window.Element — scrollIntoView(alignToTop)

| Param | Type |
| --- | --- |
| alignToTop | `boolean` |

### window.Element — attachShadow(init)

[ This API is gated by a feature flag. Enable `enableSWCSupport` under the `featureFlags` section of the plugin manifest before using it. ]

Creates a shadow DOM tree on the target element and gives back its `ShadowRoot` reference.

**Returns**: `ShadowRoot`  
**See**: [Element - attachShadow](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow)

| Param | Description |
| --- | --- |
| init | Object carrying the fields : mode(open/closed) , delegatesFocus ,slotAssignment |

### window.Element — getAttribute(name)

**Returns**: `string`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Attribute name whose current value should be returned. |

### window.Element — setAttribute(name, value)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Attribute name to update |
| value | `string` | String value written onto the attribute |

### window.Element — removeAttribute(name)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute)

| Param | Type |
| --- | --- |
| name | `string` |

### window.Element — hasAttribute(name)

**Returns**: `boolean`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute)

| Param | Type |
| --- | --- |
| name | `string` |

### window.Element — hasAttributes()

Reports whether the current element contains at least one attribute.

**Returns**: `boolean`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes)

### window.Element — getAttributeNames()

Gives back the element's attribute names, returned as strings inside an `Array`.

**Returns**: `Array`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNames](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNames)

### window.Element — getAttributeNode(name)

**Returns**: `*`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNode](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNode)

| Param | Type |
| --- | --- |
| name | `string` |

### window.Element — setAttributeNode(newAttr)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNode](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNode)

| Param | Type |
| --- | --- |
| newAttr | `*` |

### window.Element — removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `*` |

### window.Element — getElementsByClassName(name)

**Returns**: `NodeList`

| Param | Type |
| --- | --- |
| name | `string` |

### window.Element — querySelector(selector)

**Returns**: `Element`

| Param | Type |
| --- | --- |
| selector | `string` |

### window.Element — querySelectorAll(selector)

**Returns**: `NodeList`

| Param | Type |
| --- | --- |
| selector | `string` |

### window.Element — setPointerCapture(pointerId)

Applies pointer capture to the element. This implementation does not fire the `gotpointercapture` event on the element.

**Throws**:

- `DOMException` When the element is detached from the DOM tree.

**See**: [Element - setPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture)  
**Since**: v7.1

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | Unique pointer identifier selected for capture. |

**Example**

```js
// HTML
<style>
    div {
        width: 140px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fbe;
        position: absolute;
    }
</style>
<div id="slider">SLIDE ME</div>

// JS
function beginSliding(e) {
     slider.setPointerCapture(e.pointerId);
     slider.addEventListener("pointermove", slide);
 }

 function stopSliding(e) {
     slider.releasePointerCapture(e.pointerId);
     slider.removeEventListener("pointermove", slide);
 }

 function slide(e) {
     slider.style.left = e.clientX;
 }

 const slider = document.getElementById("slider");

 slider.addEventListener("pointerdown", beginSliding);
 slider.addEventListener("pointerup", stopSliding);
```

### window.Element — releasePointerCapture(pointerId)

Clears pointer capture from the element. This implementation does not fire `lostpointercapture` for that element.

**See**: [Element - releasePointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/releasePointerCapture)  
**Since**: v7.1

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | Unique pointer identifier that should be released. |

### window.Element — hasPointerCapture(pointerId)

Determines whether this element currently owns pointer capture for the specified pointer.

**Returns**: `boolean` - `true` when this element has pointer capture for the specified pointer; otherwise `false`.  
**See**: [Element - hasPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasPointerCapture)  
**Since**: v7.1

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | Pointer identifier to test. |

### window.Element — closest(selectorString)

**Returns**: `Element`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)

| Param | Type |
| --- | --- |
| selectorString | `string` |

### window.Element — matches(selectorString)

**Returns**: `boolean`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)

| Param | Type |
| --- | --- |
| selectorString | `string` |

### window.Element — insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |

### window.Element — insertAdjacentElement(position, node)

**Returns**: `Node`

| Param | Type |
| --- | --- |
| position | `*` |
| node | `*` |

### window.Element — insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `*` |
| text | `*` |

### window.Element — cloneNode(deep)

**Returns**: `Node`

| Param | Type |
| --- | --- |
| deep | `boolean` |

### window.Element — appendChild(child)

**Returns**: `Node`

| Param | Type |
| --- | --- |
| child | `Node` |

### window.Element — insertBefore(child, before)

**Returns**: `Node`

| Param | Type |
| --- | --- |
| child | `Node` |
| before | `Node` |

### window.Element — replaceChild(newChild, oldChild)

**Returns**: `Node`

| Param | Type |
| --- | --- |
| newChild | `Node` |
| oldChild | `Node` |

### window.Element — before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` |

### window.Element — contains(node)

| Param | Type |
| --- | --- |
| node | `Node` |

### window.Element — getRootNode(options)

**Returns**: `Node` - resolved root node

| Param | Type |
| --- | --- |
| options | `Object` |

### window.Element — addEventListener(eventName, callback, options)

**See**: [EventTarget - addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

| Param | Type | Description |
| --- | --- | --- |
| eventName | `*` |  |
| callback | `*` |  |
| options | `boolean` \| `Object` | Use either a boolean capture flag or an options object; currently, the object form only recognizes capture (\{ capture: bool_value }). |

### window.Element — removeEventListener(eventName, callback, options)

**See**: [EventTarget - removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

| Param | Type | Description |
| --- | --- | --- |
| eventName | `*` |  |
| callback | `*` |  |
| options | `boolean` \| `Object` | Use either a boolean capture flag or an options object; currently, the object form only recognizes capture (\{ capture: bool_value }). |

### window.Element — dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `*` |

## window.getComputedStyle

After active stylesheets and basic value computations are applied, this returns an object with every CSS property value for the element.

**Returns**: `CSSStyleDeclaration` - - live CSSStyleDeclaration data that refreshes as the element's style changes.  
**See**: [window.getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

| Param | Type | Description |
| --- | --- | --- |
| element | `Element` | Element whose computed style is requested. |
| pseudoState | `string` | String that selects the pseudo-element to evaluate; omit it, or pass null, for actual elements. |

## window.HTMLCollection — item(index)

**Returns**: `Node`

| Param | Type |
| --- | --- |
| index | `number` |

### window.HTMLCollection — forEach(callback)

| Param | Type |
| --- | --- |
| callback | `*` |

## HTML DOM

- [AbortController](uxp-global-members-2.md)
- [AbortSignal](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/abort-signal.md)
- Alerts
  - [Alert](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/alert.md)
  - [Confirm](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/confirm.md)
  - [Prompt](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/prompt.md)
- [Attr](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/attr.md)
- [CanvasGradient](uxp-global-members-2.md)
- [CanvasRenderingContext2D](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/canvas-rendering-context2-d.md)
- [CharacterData](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/character-data.md)
- [ClassList](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/class-list.md)
- [Comment](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/comment.md)
- [CustomElementRegistry](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/custom-element-registry.md)
- [Document](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/document.md)
- [DocumentFragment](uxp-global-members-2.md)
- [DOMTokenList](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/dom-token-list.md)
- [Element](uxp-global-members-2.md)
- [HTMLCollection](uxp-global-members-2.md)
- [NamedNodeMap](uxp-global-members-2.md)
- [Node](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/node.md)
- [NodeFilter](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/node-filter.md)
- [NodeList](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/node-list.md)
- [Path2D](uxp-global-members-2.md)
- [ShadowRoot](uxp-global-members-2.md)
- [Text](uxp-global-members-2.md)
- [TreeWalker](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-dom/tree-walker.md)

## window.NamedNodeMap — NamedNodeMap(node)

Constructs a NamedNodeMap instance.

| Param | Type |
| --- | --- |
| node | `Node` |

### window.NamedNodeMap — getNamedItem(name)

**Returns**: `*`

| Param | Type |
| --- | --- |
| name | `*` |

### window.NamedNodeMap — setNamedItem(attr)

| Param | Type |
| --- | --- |
| attr | `*` |

### window.NamedNodeMap — removeNamedItem(name)

| Param | Type |
| --- | --- |
| name | `*` |

### window.NamedNodeMap — item(index)

**Returns**: `*`

| Param | Type |
| --- | --- |
| index | `*` |

## window.Path2D

**See**: [Web APIs - Path2D](https://developer.mozilla.org/en-US/docs/Web/API/Path2D) for additional detail

Also consult [HTMLCanvasElement](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md#module:global.htmlcanvaselement) entry.

**Since**: v7.0.0

### Path2D(path)

Builds a Path2D instance.

| Param | Type | Description |
| --- | --- | --- |
| path | `Path2D` | `Optional` source Path2D object copied from another Path2D instance |

### addPath(path)

Merges a supplied Path2D object into a target Path2D path.

**See**: [Path2D - addPath](https://developer.mozilla.org/en-US/docs/Web/API/Path2D/addPath) for additional detail

| Param | Type | Description |
| --- | --- | --- |
| path | `Path2D` | Path2D object selected for insertion. |

### closePath()

Closes the current sub-path by drawing a straight segment back to its starting point.

**See**: [CanvasRenderingContext2D - closePath](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath) for additional detail

### moveTo(x, y)

The supplied (x, y) pair becomes the starting point for a new sub-path.

**See**: [CanvasRenderingContext2D - moveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo) for additional detail

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | Horizontal x-axis coordinate for the point. |
| y | `number` | Vertical y-axis coordinate for the point. |

### lineTo(x, y)

A straight segment is added from the active endpoint to the provided (x, y) pair.

**See**: [CanvasRenderingContext2D - lineTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo) for additional detail

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | x-axis coordinate where the line ends. |
| y | `number` | y-axis coordinate where the line ends. |

### bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

Draws a cubic Bézier segment in the active drawing.

**See**: [CanvasRenderingContext2D - bezierCurveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo) for additional detail

| Param | Type | Description |
| --- | --- | --- |
| cp1x | `number` | x-axis coordinate for the first control point. |
| cp1y | `number` | y-axis coordinate for the first control point. |
| cp2x | `number` | x-axis coordinate for the second control point. |
| cp2y | `number` | y-axis coordinate for the second control point. |
| x | `number` | x-axis coordinate for the end point. |
| y | `number` | y-axis coordinate for the end point. |

### quadraticCurveTo(cpx, cpy, x, y)

Draws a quadratic Bézier segment in the active drawing.

**See**: [CanvasRenderingContext2D - quadraticCurveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo) for additional detail

| Param | Type | Description |
| --- | --- | --- |
| cpx | `number` | x-axis coordinate for the control point. |
| cpy | `number` | y-axis coordinate for the control point. |
| x | `number` | x-axis coordinate for the end point. |
| y | `number` | y-axis coordinate for the end point. |

### arc(x, y, radius, startAngle, endAngle, counterclockwise)

Draws a circular arc in the active drawing.

**See**: [CanvasRenderingContext2D - arc](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc) for additional detail
