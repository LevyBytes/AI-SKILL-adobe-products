# Abort Controller, Abort Signal, Alert, Attr ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: window.AbortController; window.AbortSignal; window.alert(); window.Attr — Attr(document, nodeName); window.CanvasGradient; window.CharacterData — substringData(offset, count); window.ClassList — ClassList(node); window.Comment — Comment(document, comment); window.confirm(); window.CustomElementRegistry; window.DocumentFragment; window.DOMTokenList; window.Element — localName : `string`; window.getComputedStyle; window.HTMLCollection — item(index); HTML DOM.

## window.AbortController

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

See also [AbortSignal](uxp-html-dom.md)

### signal : `AbortSignal`

AbortSignal object for aborting a request.

### abort(reason)

Stops a request before completion.
When reason is omitted, "AbortError" DomException is stored as the reason.

| Param | Type | Description |
| --- | --- | --- |
| reason | `*` | the reason why the operation was aborted |

## window.AbortSignal

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)

AbortSignal works only for web streams.

### aborted : `boolean`

Indicates whether the request linked to the signal has been aborted.

### reason : `*`

The reason for the abort after the signal has aborted.
`Undefined` applies until the signal has aborted.

### throwIfAborted()

Raises the signal's abort reason when the signal has aborted.
Otherwise, no action occurs.

### abort(reason)

Produces an AbortSignal object that starts out in the aborted state.

**Returns**: `AbortSignal` - an AbortSignal object where AbortSignal.aborted is true and AbortSignal.reason contains the supplied reason, or the default reason when none is supplied

| Param | Type |
| --- | --- |
| reason | `*` |

## window.alert()

**Since**: v7.0.0

Shows an Alert message dialog and puts the application into a modal state; the JavaScript thread remains **not blocking**, so events in the main event loop can still be processed.

UXP handles this differently from the usual model, where JavaScript thread execution waits until the dialog is dismissed.

UXP also supports these additional simple alert calls:

1. [confirm()](uxp-html-dom.md)
2. [prompt()](uxp-html-dom-2.md)

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | Alert dialog text to display |

**Example**

```javascript
alert("This is alert message");
```

** Note: **

1. Starting with UXP v7.4, `plugin` code may invoke `alert()` only when the featureFlags entry `enableAlerts` is enabled. Add the following to your Manifest v5

```json
"featureFlags": {
     "enableAlerts": true
 }
```

2. Starting with UXP v7.4, `alert()` is disabled for `scripts`

## window.Attr — Attr(document, nodeName)

Creates an Attr instance.

| Param | Type |
| --- | --- |
| document | `Document` |
| nodeName | `string` |

### window.Attr — cloneNode(deep)

**Returns**: `Node`

| Param | Type |
| --- | --- |
| deep | `boolean` |

### window.Attr — appendChild(child)

**Returns**: `Node`

| Param | Type |
| --- | --- |
| child | `Node` |

### window.Attr — insertBefore(child, before)

**Returns**: `Node`

| Param | Type |
| --- | --- |
| child | `Node` |
| before | `Node` |

### window.Attr — replaceChild(newChild, oldChild)

**Returns**: `Node`

| Param | Type |
| --- | --- |
| newChild | `Node` |
| oldChild | `Node` |

### window.Attr — before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` |

### window.Attr — contains(node)

| Param | Type |
| --- | --- |
| node | `Node` |

### window.Attr — getRootNode(options)

**Returns**: `Node` - the root node

| Param | Type |
| --- | --- |
| options | `Object` |

### window.Attr — addEventListener(eventName, callback, options)

**See**: [EventTarget - addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

| Param | Type | Description |
| --- | --- | --- |
| eventName | `*` |  |
| callback | `*` |  |
| options | `boolean` \| `Object` | Boolean flag for the capture setting, or an options object. At present, the options object recognizes only capture (\{ capture: bool_value }). |

### window.Attr — removeEventListener(eventName, callback, options)

**See**: [EventTarget - removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

| Param | Type | Description |
| --- | --- | --- |
| eventName | `*` |  |
| callback | `*` |  |
| options | `boolean` \| `Object` | Boolean flag for the capture setting, or an options object. At present, the options object recognizes only capture (\{ capture: bool_value }). |

### window.Attr — dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `*` |

## window.CanvasGradient

**See**: [Web APIs - CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient) for additional details

Also see the interface [HTMLCanvasElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md#module:global.htmlcanvaselement)

**Since**: v7.0.0

### addColorStop(offset, colorValue)

Adds a color stop to a canvas gradient using the supplied `offset` and `color value`.

**Throws**:

- `DOMException`

**See**: [CanvasGradient - addColorStop](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient/addColorStop) for additional details

| Param | Type | Description |
| --- | --- | --- |
| offset | `number` | A value from 0 through 1, inclusive, that marks where the color stop sits. 0 marks the gradient start; 1 marks its end. |
| colorValue | `string` | A CSS `<color>` value for the stop's color. |

## window.CharacterData — substringData(offset, count)

**Returns**: `string`

| Param | Type |
| --- | --- |
| offset | `*` |
| count | `*` |

### window.CharacterData — appendData(arg)

| Param | Type |
| --- | --- |
| arg | `string` |

### window.CharacterData — insertData(offset, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| arg | `string` |

### window.CharacterData — deleteData(offset, count)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |

### window.CharacterData — replaceData(offset, count, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |
| arg | `string` |

## window.ClassList — ClassList(node)

Instantiates `ClassList` for the supplied `node`.

| Param | Type |
| --- | --- |
| node | `any` |

### window.ClassList — length

**Read only**
Reports how many tokens the list currently contains.

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-length](https://dom.spec.whatwg.org/#dom-domtokenlist-length)

### window.ClassList — add(...tokens)

Inserts the supplied tokens into the token list; an already-present token is ignored without raising an error.

**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-add](https://dom.spec.whatwg.org/#dom-domtokenlist-add)

| Param | Type |
| --- | --- |
| ...tokens | `string` |

### window.ClassList — remove(...tokens)

Deletes the supplied items from the token list; a token that is absent is ignored without raising an error.

**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-remove](https://dom.spec.whatwg.org/#dom-domtokenlist-remove)

| Param | Type |
| --- | --- |
| ...tokens | `string` |

### window.ClassList — replace(oldToken, newToken)

Swaps `oldToken` for `newToken`; when `oldToken` is absent, nothing changes and the method returns `false`.

**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-replace](https://dom.spec.whatwg.org/#dom-domtokenlist-replace)

| Param | Type |
| --- | --- |
| oldToken | `any` |
| newToken | `any` |

### window.ClassList — toggle(token, force)

Changes membership for `token` in the list. When `force` is omitted, these outcomes apply:

- an existing token is removed, and `false` is returned
- an absent token is inserted, and `true` is returned

When `force` is provided, behavior is:

- `true` adds the token
- `false` removes the token

**Returns**: `boolean` - whether the token exists in the list once the call finishes  
**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-toggle](https://dom.spec.whatwg.org/#dom-domtokenlist-toggle)

| Param | Type |
| --- | --- |
| token | `string` |
| force | `boolean` |

### window.ClassList — item(index)

Fetches the item at `index`; returns `null` when `index` is outside the valid range.

**Returns**: `string` - item found at `index`, or `null` when `index` falls outside valid bounds  
**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-item](https://dom.spec.whatwg.org/#dom-domtokenlist-item)

| Param | Type |
| --- | --- |
| index | `number` |

### window.ClassList — contains(token)

Checks whether `token` is present in the list.

**Returns**: `boolean` - `true` means `token` is present; otherwise it is not  
**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-contains](https://dom.spec.whatwg.org/#dom-domtokenlist-contains)

| Param | Type |
| --- | --- |
| token | `any` |

### window.ClassList — supports(token)

Reports `true` when the list accepts `token`; otherwise it reports `false`.
A `false` result means that using the token with any other method would throw an error.

**Returns**: `boolean` - `true` indicates the token is valid for other method calls  
**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-supports](https://dom.spec.whatwg.org/#dom-domtokenlist-supports)

| Param | Type |
| --- | --- |
| token | `string` |

## window.Comment — Comment(document, comment)

Instantiates `Comment` with `document` and `comment`.

| Param | Type |
| --- | --- |
| document | `Document` |
| comment | `string` |

## window.confirm()

**Returns**: `boolean` - `true` when OK button is pressed; `false` when Cancel button is pressed.  
**Since**: v7.0.0

Shows a Confirm message dialog that makes the application modal while **not blocking** the Javascript thread, so main-event-loop processing can continue.

UXP does not follow the standard pattern where the javascript execution thread stays blocked until the dialog is dismissed.

UXP also supports these additional simple alerts

1. [alert()](uxp-html-dom.md)
2. [prompt()](uxp-html-dom-2.md)

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | Text displayed by the Confirm message dialog. |

**Example**

```javascript
confirm("This is confirmation message");
```

** Note: **

1. As of UXP v7.4, `plugin` can invoke `confirm()` only when Manifest v5 sets featureFlags `enableAlerts`. Configure Manifest v5 like this:

```json
"featureFlags": {
     "enableAlerts": true
 }
```

2. Starting with UXP v7.4, `scripts` cannot use `confirm()`

## window.CustomElementRegistry

**See**: Refer [Web APIs - CustomElementRegistry](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry)

### define(name, constructor, options)

Registers a custom element definition.

**See**

- [CustomElementRegistry - define](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define)
- [HTML Spec - Element definition](https://html.spec.whatwg.org/multipage/custom-elements.html#element-definition)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Identifier used for the new custom element |
| constructor | `CustomElement` | Constructor used to create the new custom element |
| options | `Object` | Object controlling how the element is defined |
| options.extends | `string` | Name of the built-in element being extended |

### get(name)

Provides the constructor associated with `name`.

**See**: [CustomElementRegistry - get](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/get)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Custom element name to look up |

### upgrade(root)

Upgrades every candidate custom element under the tree rooted at `root`.

[ This feature is gated by a feature flag. Enable `enableSWCSupport` in the plugin manifest featureFlags section before using it ]

**See**: [CustomElementRegistry - upgrade](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/upgrade)

| Param | Description |
| --- | --- |
| root | Node instance whose descendants may include shadow-containing elements to upgrade |

### whenDefined(name)

Returns a Promise that resolves once the named custom element has been defined.

[ This feature is gated by a feature flag. Enable `enableSWCSupport` in the plugin manifest featureFlags section before using it ]

**See**: [CustomElementRegistry - whenDefined](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the custom element to wait for |

## window.DocumentFragment

**See**: [Web APIs - DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)

### childElementCount : `number`

**Read only**
Reports how many child elements the fragment contains.

**See**: [DocumentFragment - childElementCount](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/childElementCount)

### querySelector(selector)

Finds the first `Element` inside the `DocumentFragment` that matches the selector text.

**Returns**: `Element`  
**See**: [DocumentFragment - querySelector](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelector)

| Param | Type | Description |
| --- | --- | --- |
| selector | `string` | One or more comma-separated CSS selectors as a string |

### querySelectorAll(selector)

Collects the `NodeList` of nodes inside the `DocumentFragment` for the matching selector set.

**Returns**: `NodeList`  
**See**: [DocumentFragment - querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelectorAll)

| Param | Type | Description |
| --- | --- | --- |
| selector | `string` | One or more comma-separated CSS selectors as a string |

### append(...args)

Adds Node objects or string objects to the document fragment after its current final child.

**See**: [DocumentFragment - append](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/append)

| Param | Type | Description |
| --- | --- | --- |
| ...args | `any` | Node or string objects that should be inserted. |

## window.DOMTokenList

DOMTokenList supplies the token-list behavior used by ClassList and related token collections.

**See**

- [https://dom.spec.whatwg.org/#interface-domtokenlist](https://dom.spec.whatwg.org/#interface-domtokenlist)
- [https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList)

### value

**Read only**
Serialized string form for the token list.

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-value](https://dom.spec.whatwg.org/#dom-domtokenlist-value)

## window.Element — localName : `string`

**Read only**
String value for the local part of the element's qualified name.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/localName](https://developer.mozilla.org/en-US/docs/Web/API/Element/localName)

### window.Element — tagName : `string`

**Read only**
String value that reports the element's tag name.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)

### window.Element — namespaceURI : `string`

**Read only**
Yields the element's namespace URI, or null when no namespace applies.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI](https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI)

### window.Element — id : `string`

For the `Element` interface, this property exposes the element identifier and reflects the id global attribute.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/id](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)

### window.Element — autofocus : `boolean`

Reports whether the element receives focus automatically when loaded.

### window.Element — shadowRoot : `ShadowRoot`

**Read only**
[ This feature requires the `enableSWCSupport` feature flag in the featureFlags section of plugin manifest. Enable it before using this member. ]

Provides the open shadow root hosted by the element, or null when no open shadow root exists.

**See**: [Element - shadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot)

### window.Element — innerHTML

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [https://w3c.github.io/DOM-Parsing/#the-innerhtml-mixin](https://w3c.github.io/DOM-Parsing/#the-innerhtml-mixin)

| Param | Type |
| --- | --- |
| value | `string` |

### window.Element — slot : `string`

[ This feature requires the `enableSWCSupport` feature flag in the featureFlags section of plugin manifest. Enable it before using this member. ]

**See**: [Element - slot](https://developer.mozilla.org/en-US/docs/Web/API/Element/slot)

### window.Element — assignedSlot : `HTMLSlotElement`

**Read only**
[ This feature requires the `enableSWCSupport` feature flag in the featureFlags section of plugin manifest. Enable it before using this member. ]

**See**: [Element - assignedSlot](https://developer.mozilla.org/en-US/docs/Web/API/Element/assignedSlot)

### window.Element — append(...nodes)

Adds Node objects or string objects to the Element after its current final child.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/append](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)  
**Since**: v8.0

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` |

### window.Element — prepend(...nodes)

Adds Node objects or string objects to the Element before its current first child.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend)  
**Since**: v8.0

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` |

### window.Element — replaceChildren(...nodes)

Replaces the Node's current children with the supplied child set, which may contain string or Node objects.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren)  
**Since**: v8.0

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` |

### window.Element — scrollTo(xOrOptions, y)

Moves the element to the requested x and y scroll positions. When the options object includes behavior: "smooth", scrolling animates smoothly.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)

| Param | Type | Description |
| --- | --- | --- |
| xOrOptions | `*` | new scrollLeft position, or an options object. |
| y | `*` | optional new scrollTop position. |

### window.Element — scrollIntoView(alignToTop)

| Param | Type |
| --- | --- |
| alignToTop | `boolean` |

### window.Element — attachShadow(init)

[ This feature requires the `enableSWCSupport` feature flag in the featureFlags section of plugin manifest. Enable it before using this member. ]

Creates a shadow DOM tree on the specified element and returns the resulting ShadowRoot reference.

**Returns**: `ShadowRoot`  
**See**: [Element - attachShadow](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow)

| Param | Description |
| --- | --- |
| init | Object containing fields: mode(open/closed) , delegatesFocus ,slotAssignment |

### window.Element — getAttribute(name)

**Returns**: `string`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Attribute name whose value should be returned. |

### window.Element — setAttribute(name, value)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Attribute name to update. |
| value | `string` | Attribute value to assign. |

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

Reports, as a boolean, whether the current element currently contains any attributes.

**Returns**: `boolean`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes)

### window.Element — getAttributeNames()

Provides the element's attribute names as an Array of strings.

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

Applies pointer capture to this element. In this implementation, the element does not receive a `gotpointercapture` event.

**Throws**:

- `DOMException` when the element has no active connection to the DOM.

**See**: [Element - setPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture)  
**Since**: v7.1

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | Identifier for the pointer that should be captured. |

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

Removes pointer capture from this element. This implementation does not send a `lostpointercapture` event to the element.

**See**: [Element - releasePointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/releasePointerCapture)  
**Since**: v7.1

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | Identifier for the pointer whose capture should be released. |

### window.Element — hasPointerCapture(pointerId)

Tests whether the specified pointer is currently captured by the element.

**Returns**: `boolean` - True when the element has captured the specified pointer; false when it has not.  
**See**: [Element - hasPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasPointerCapture)  
**Since**: v7.1

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | Identifier for the pointer being queried. |

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

Provides an object with every CSS property value for an element after active stylesheets have been applied and basic computations in those values have been resolved.

**Returns**: `CSSStyleDeclaration` - - A live CSSStyleDeclaration object that refreshes automatically when the element's styles change.  
**See**: [window.getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

| Param | Type | Description |
| --- | --- | --- |
| element | `Element` | The Element whose computed style should be retrieved. |
| pseudoState | `string` | String naming the pseudo-element to match; omit it, or pass null, for real elements. |

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
- [CanvasRenderingContext2D](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-dom/canvas-rendering-context2-d.md)
- [CharacterData](uxp-html-dom.md)
- [ClassList](uxp-html-dom.md)
- [Comment](uxp-html-dom.md)
- [CustomElementRegistry](uxp-html-dom.md)
- [Document](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-dom/document.md)
- [DocumentFragment](uxp-html-dom.md)
- [DOMTokenList](uxp-html-dom.md)
- [Element](uxp-html-dom.md)
- [HTMLCollection](uxp-html-dom.md)
- [IntersectionObserver](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-dom/intersection-observer.md)
- [IntersectionObserverEntry](uxp-html-dom-2.md)
- [NamedNodeMap](uxp-html-dom-2.md)
- [Node](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-dom/node.md)
- [NodeFilter](uxp-html-dom-2.md)
- [NodeList](uxp-html-dom-2.md)
- [Path2D](uxp-html-dom-2.md)
- [ResizeObserver](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-dom/resize-observer.md)
- [ResizeObserverEntry](uxp-html-dom-2.md)
- [ResizeObserverSize](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-dom/resize-observer-size.md)
- [ShadowRoot](uxp-html-dom-2.md)
- [Text](uxp-html-dom-2.md)
- [TreeWalker](uxp-html-dom-2.md)
