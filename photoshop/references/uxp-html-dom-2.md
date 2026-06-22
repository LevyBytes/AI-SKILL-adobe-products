# Dom Token List, Element, Get Computed Style, Html Collection ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: window.DOMTokenList; window.Element — localName : `string`; window.getComputedStyle; window.HTMLCollection — item(index); HTML DOM; window.IntersectionObserverEntry; window.NamedNodeMap — NamedNodeMap(node); window.NodeFilter; window.NodeList — NodeList(staticList, updater); window.Path2D; window.prompt(); window.ResizeObserverEntry; window.ShadowRoot; window.Text — Text(document, textContent); window.TreeWalker.

## window.DOMTokenList

DOMTokenList provides ClassList support along with related token-list behavior.

**See**

- [https://dom.spec.whatwg.org/#interface-domtokenlist](https://dom.spec.whatwg.org/#interface-domtokenlist)
- [https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList)

### value

**Read only**
This exposes the token list as its serialized string value.

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-value](https://dom.spec.whatwg.org/#dom-domtokenlist-value)

## window.Element — localName : `string`

**Read only**
The element's qualified name contributes its local portion as this string.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/localName](https://developer.mozilla.org/en-US/docs/Web/API/Element/localName)

### window.Element — tagName : `string`

**Read only**
This string identifies the tag name for the element.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)

### window.Element — namespaceURI : `string`

**Read only**
For namespaced elements, this gives the namespace URI; otherwise it is null.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI](https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI)

### window.Element — id : `string`

The `Element` interface property reflects the id global attribute and holds the element identifier.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/id](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)

### window.Element — autofocus : `boolean`

Shows whether the element is set to receive focus automatically after loading.

### window.Element — shadowRoot : `ShadowRoot`

**Read only**
[ This feature requires a feature flag. Enable `enableSWCSupport` in the plugin manifest's featureFlags section before using it. ]

If the element hosts an open shadow root, this yields it; otherwise the value is null.

**See**: [Element - shadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot)

### window.Element — innerHTML

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [https://w3c.github.io/DOM-Parsing/#the-innerhtml-mixin](https://w3c.github.io/DOM-Parsing/#the-innerhtml-mixin)

| Param | Type |
| --- | --- |
| value | `string` |

### window.Element — slot : `string`

[ This feature requires a feature flag. Enable `enableSWCSupport` in the plugin manifest's featureFlags section before using it. ]

**See**: [Element - slot](https://developer.mozilla.org/en-US/docs/Web/API/Element/slot)

### window.Element — assignedSlot : `HTMLSlotElement`

**Read only**
[ This feature requires a feature flag. Enable `enableSWCSupport` in the plugin manifest's featureFlags section before using it. ]

**See**: [Element - assignedSlot](https://developer.mozilla.org/en-US/docs/Web/API/Element/assignedSlot)

### window.Element — append(...nodes)

Adds the supplied Node objects or string objects at the end of the Element's child list.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/append](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)  
**Since**: v8.0

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` |

### window.Element — prepend(...nodes)

Adds the supplied Node objects or string objects before the Element's first child.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend)  
**Since**: v8.0

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` |

### window.Element — replaceChildren(...nodes)

The Node's current children are exchanged for a specified replacement set, using Node objects or strings.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren)  
**Since**: v8.0

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` |

### window.Element — scrollTo(xOrOptions, y)

Moves the element to the requested x and y scroll positions. When an options object sets behavior: "smooth", scrolling is animated smoothly.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)

| Param | Type | Description |
| --- | --- | --- |
| xOrOptions | `*` | either the new scrollLeft position or an options object. |
| y | `*` | the optional new scrollTop position. |

### window.Element — scrollIntoView(alignToTop)

| Param | Type |
| --- | --- |
| alignToTop | `boolean` |

### window.Element — attachShadow(init)

[ This feature requires a feature flag. Enable `enableSWCSupport` in the plugin manifest's featureFlags section before using it. ]

Creates a shadow DOM tree on the target element and returns its ShadowRoot reference.

**Returns**: `ShadowRoot`  
**See**: [Element - attachShadow](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow)

| Param | Description |
| --- | --- |
| init | An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment |

### window.Element — getAttribute(name)

**Returns**: `string`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the attribute whose value you want to get. |

### window.Element — setAttribute(name, value)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the attribute whose value is to be set |
| value | `string` | Value to assign to the attribute |

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

Reports whether the current element currently carries one or more attributes.

**Returns**: `boolean`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes)

### window.Element — getAttributeNames()

Provides a string `Array` containing the element's attribute names.

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

### window.Element — querySelector(selector)

**Returns**: `Element`

| Param | Type |
| --- | --- |
| selector | `string` |

### window.Element — setPointerCapture(pointerId)

Pointer capture is enabled for this element. In this UXP implementation, `gotpointercapture` is not emitted there.

**Throws**:

- `DOMException` If the element is not connected to the DOM.

**See**: [Element - setPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture)  
**Since**: v7.1

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | Unique pointer identifier to capture. |

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

Pointer capture is cleared for this element. This UXP implementation does not emit `lostpointercapture` there.

**See**: [Element - releasePointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/releasePointerCapture)  
**Since**: v7.1

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | Unique pointer identifier to release. |

### window.Element — hasPointerCapture(pointerId)

Tests whether this element currently holds pointer capture for the specified pointer.

**Returns**: `boolean` - True when the specified pointer is captured by this element; otherwise, false.  
**See**: [Element - hasPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasPointerCapture)  
**Since**: v7.1

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | Unique pointer identifier to check. |

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

## window.getComputedStyle

After active stylesheets are applied and basic computations are resolved, this returns an object with the element's CSS property values.

**Returns**: `CSSStyleDeclaration` - - Live CSSStyleDeclaration object that refreshes automatically after the element's styles change.  
**See**: [window.getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

| Param | Type | Description |
| --- | --- | --- |
| element | `Element` | Element whose computed style should be read. |
| pseudoState | `string` | String naming the pseudo-element to match; omit it or pass null for real elements. |

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

- [AbortController](uxp-html-dom.md)
- [AbortSignal](uxp-html-dom.md)
- [alert](uxp-html-dom.md)
- [Attr](uxp-html-dom.md)
- [CanvasGradient](uxp-html-dom.md)
- [CanvasRenderingContext2D](uxp-html-dom.md)
- [CharacterData](uxp-html-dom.md)
- [ClassList](uxp-html-dom.md)
- [Comment](uxp-html-dom.md)
- [CustomElementRegistry](uxp-html-dom.md)
- [Document](uxp-html-dom.md)
- [DocumentFragment](uxp-html-dom.md)
- [DOMTokenList](uxp-html-dom-2.md)
- [Element](uxp-html-dom-2.md)
- [HTMLCollection](uxp-html-dom-2.md)
- [IntersectionObserver](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/intersection-observer.md)
- [IntersectionObserverEntry](uxp-html-dom-2.md)
- [NamedNodeMap](uxp-html-dom-2.md)
- [Node](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/node.md)
- [NodeFilter](uxp-html-dom-2.md)
- [NodeList](uxp-html-dom-2.md)
- [Path2D](uxp-html-dom-2.md)
- [ResizeObserver](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/resize-observer.md)
- [ResizeObserverEntry](uxp-html-dom-2.md)
- [ResizeObserverSize](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-dom/resize-observer-size.md)
- [ShadowRoot](uxp-html-dom-2.md)
- [Text](uxp-html-dom-2.md)
- [TreeWalker](uxp-html-dom-2.md)

## window.IntersectionObserverEntry

**See**: [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)  
**Since**: v8.1

### IntersectionObserverEntry(intersectionObserverEntryInit)

Carries intersection details for a target element relative to an intersection observer's root.

| Param | Type | Description |
| --- | --- | --- |
| intersectionObserverEntryInit | `IntersectionObserverEntryInit` | An object that supplies the entry's initial values. |

### time : `number`

**Read only**
Because UXP does not support DOMHighResTimeStamp, this readout uses a number for the recorded intersection time.

**See**: [IntersectionObserverEntry - time](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/time)  
**Since**: v8.1

### rootBounds : `DOMRectReadOnly`

**Read only**
Reports the root element's bounds rectangle for the moment when the intersection occurred.

**See**: [IntersectionObserverEntry - rootBounds](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/rootBounds)  
**Since**: v8.1

### boundingClientRect : `DOMRectReadOnly`

**Read only**
Reports the target element's bounds rectangle for the moment when the intersection occurred.

**See**: [IntersectionObserverEntry - boundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/boundingClientRect)  
**Since**: v8.1

### intersectionRect : `DOMRectReadOnly`

**Read only**
Gives the rectangular overlap made by the observer root and target element.

**See**: [IntersectionObserverEntry - intersectionRect](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRect)  
**Since**: v8.1

### isIntersecting : `boolean`

**Read only**
Uses a boolean to show whether observer-root intersection is happening for the target element.

**See**: [IntersectionObserverEntry - isIntersecting](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting)  
**Since**: v8.1

### intersectionRatio : `number`

**Read only**
Reports the intersection-area ratio against the target element's bounding client rectangle area, with 0.0 as the minimum and 1.0 as the maximum.

**See**: [IntersectionObserverEntry - intersectionRatio](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRatio)  
**Since**: v8.1

### target : `Element`

**Read only**
Returns the observed target element after its intersection amount relative to root changes.

**See**: [IntersectionObserverEntry - target](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/target)  
**Since**: v8.1

## window.NamedNodeMap — NamedNodeMap(node)

Instantiates NamedNodeMap.

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

## window.NodeFilter

**See**: [interface-nodefilter](https://dom.spec.whatwg.org/#interface-nodefilter)  
**Since**: v7.0.0

## window.NodeList — NodeList(staticList, updater)

Instantiates NodeList.

| Param | Type |
| --- | --- |
| staticList | `*` |
| updater | `*` |

## window.Path2D

**See**: for additional details, [Web APIs - Path2D](https://developer.mozilla.org/en-US/docs/Web/API/Path2D)

Related interface: [HTMLCanvasElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md#module:global.htmlcanvaselement)

**Since**: v7.0.0

### Path2D(path)

Instantiates Path2D.

| Param | Type | Description |
| --- | --- | --- |
| path | `Path2D` | `Optional` Path2D Object supplied from another Path2D Instance |

### addPath(path)

Combines paths by adding the supplied Path2D object to a different Path2D object.

**See**: for additional details, [Path2D - addPath](https://developer.mozilla.org/en-US/docs/Web/API/Path2D/addPath)

| Param | Type | Description |
| --- | --- | --- |
| path | `Path2D` | The Path2D object that should be added. |

## window.prompt()

**Returns**: `string` - text entered by the user in the prompt field, or the default value when nothing is entered.  
**Since**: v7.0.0

A Prompt message dialog appears and the application enters a modal state; the Javascript thread remains **not blocking**, and the main event loop can continue processing events.

Unlike the standard behavior, UXP does not block the javascript thread of execution while waiting for the dialog to be dismissed.

UXP also supports these additional simple alerts

1. [confirm()](uxp-html-dom.md)
2. [alert()](uxp-html-dom.md)

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | Text string shown to the user. |
| prompt | `string` | Initial field value. |

**Example**

```javascript
// Below prompt function has 2 params
// "Enter your name: " - Message to display
// "Adobe" - Default value that will be present in the Prompt pop-up at launch
prompt("Enter your name: ", "Adobe");
```

** Note: **

1. Since UXP v7.4, `prompt()` is available in `plugin` only when the featureFlags `enableAlerts` setting is enabled. Use this Manifest v5 fragment:

```json
"featureFlags": {
     "enableAlerts": true
 }
```

2. Since UXP v7.4, `prompt()` remains disabled for `scripts`

## window.ResizeObserverEntry

**See**: [ResizeObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry)  
**Since**: v8.1

### ResizeObserverEntry(target)

A `ResizeObserver()` callback receives this `ResizeObserverEntry` object so code can inspect the `Element`'s updated dimensions.

| Param | Type | Description |
| --- | --- | --- |
| target | `Element` | Element currently under observation as the target. |

### target : `Element`

**Read only**
Provides the observed target `Element`.

**See**: [ResizeObserverEntry - target](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/target)  
**Since**: v8.1

### contentRect : `DOMRectReadOnly`

**Read only**
Provides the target `Element`'s content rectangle.

**See**: [ResizeObserverEntry - contentRect](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentRect)  
**Since**: v8.1

### borderBoxSize : `Array<ResizeObserverSize>`

**Read only**
Reports the target `Element`'s border box size.

**See**: [ResizeObserverEntry - borderBoxSize](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/borderBoxSize)  
**Since**: v8.1

### contentBoxSize : `Array<ResizeObserverSize>`

**Read only**
Reports the target `Element`'s content box size.

**See**: [ResizeObserverEntry - contentBoxSize](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize)  
**Since**: v8.1

### devicePixelContentBoxSize : `Array<ResizeObserverSize>`

**Read only**
Accessing `devicePixelContentBoxSize` raises an error because UXP does not support it.

**Throws**:

- `DOMException` Always throws a NotSupportedError.

**See**: [ResizeObserverEntry - devicePixelContentBoxSize](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize)  
**Since**: v8.1

## window.ShadowRoot

[ This feature requires a feature flag. Set `enableSWCSupport` in the plugin manifest's featureFlags section before using it. ]

**See**: [Web APIs - ShadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot)  
**Since**: v7.0.0

### mode : `Element`

**Read only**
For a `ShadowRoot`, this value is its mode, either open or closed. The mode determines whether JavaScript can reach the shadow root's internal features.

**See**: [ShadowRoot - mode](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode)

### host : `Element`

**Read only**
Provides the host DOM element for this `ShadowRoot`.

**See**: [ShadowRoot - host](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host)

### innerHTML : `string`

Provides this `ShadowRoot`'s internal DOM tree.

**See**: [ShadowRoot - innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/innerHTML)

### activeElement : `Element`

**Read only**
Identifies the focused element inside the shadow tree.

**See**: [ShadowRoot - activeElement](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/activeElement)

### cloneNode(deep)

Creates a duplicate of the node receiving this call. The `deep` parameter decides whether cloning includes the node's subtree.

**See**: [ShadowRoot - cloneNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)

| Param | Type | Description |
| --- | --- | --- |
| deep | `boolean` | Optional parameter: clone the whole sub tree (True) or just the node (False). |

## window.Text — Text(document, textContent)

Constructs a `Text` instance.

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

## window.TreeWalker

[ This feature requires a feature flag. Set `enableSWCSupport` in the plugin manifest's featureFlags section before using it. ]

**See**: [WebAPIs - TreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker)

### root : `Node`

**Read only**
**See**: [https://dom.spec.whatwg.org/#dom-treewalker-root](https://dom.spec.whatwg.org/#dom-treewalker-root)

### whatToShow : `Number`

**Read only**
**See**: [https://dom.spec.whatwg.org/#dom-treewalker-whattoshow](https://dom.spec.whatwg.org/#dom-treewalker-whattoshow)

### filter : `NodeFilter`

**Read only**
**See**: [https://dom.spec.whatwg.org/#dom-treewalker-filter](https://dom.spec.whatwg.org/#dom-treewalker-filter)

### parentNode()

**Returns**: `Node` \| `null`  
**See**: [https://dom.spec.whatwg.org/#dom-treewalker-parentnode](https://dom.spec.whatwg.org/#dom-treewalker-parentnode)

### firstChild()

**Returns**: `Node` \| `null`  
**See**: [https://dom.spec.whatwg.org/#dom-treewalker-firstchild](https://dom.spec.whatwg.org/#dom-treewalker-firstchild)

### lastChild()

**Returns**: `Node` \| `null`  
**See**: [https://dom.spec.whatwg.org/#dom-treewalker-lastchild](https://dom.spec.whatwg.org/#dom-treewalker-lastchild)

### previousSibling()

**Returns**: `Node` \| `null`  
**See**: [https://dom.spec.whatwg.org/#dom-node-previoussibling](https://dom.spec.whatwg.org/#dom-node-previoussibling)

### nextSibling()

**Returns**: `Node` \| `null`  
**See**: [https://dom.spec.whatwg.org/#dom-treewalker-nextsibling](https://dom.spec.whatwg.org/#dom-treewalker-nextsibling)

### previousNode()

**Returns**: `Node` \| `null`  
**See**: [https://dom.spec.whatwg.org/#dom-treewalker-previousnode](https://dom.spec.whatwg.org/#dom-treewalker-previousnode)

### nextNode()

**Returns**: `Node` \| `null`  
**See**: [https://dom.spec.whatwg.org/#dom-treewalker-nextnode](https://dom.spec.whatwg.org/#dom-treewalker-nextnode)
