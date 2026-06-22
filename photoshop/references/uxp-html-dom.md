# Abort Controller, Abort Signal, Alert, Attr ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: window.AbortController; window.AbortSignal; window.alert(); window.Attr — Attr(document, nodeName); window.CanvasGradient; window.CanvasRenderingContext2D; window.CharacterData — substringData(offset, count); window.ClassList — ClassList(node); window.Comment — Comment(document, comment); window.confirm(); window.CustomElementRegistry; window.DocumentFragment; window.Document.

## window.AbortController

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

See also [AbortSignal](uxp-html-dom.md)

### signal : `AbortSignal`

AbortController exposes an AbortSignal object for canceling a request.

### abort(reason)

abort(reason) cancels a request before completion.
When reason is omitted, "AbortError" DomException becomes the reason.

| Param | Type | Description |
| --- | --- | --- |
| reason | `*` | the reason why the operation was aborted |

## window.AbortSignal

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)

AbortSignal works only for web streams.

### aborted : `boolean`

Indicates whether the request associated with the signal has been aborted.

### reason : `*`

After a signal aborts, this property contains the abort reason.
Before the signal has been aborted, the value is `Undefined`.

### throwIfAborted()

If the signal has been aborted, throwIfAborted() throws that abort reason.
When the signal is not aborted, nothing happens.

### abort(reason)

Creates an AbortSignal object with aborted state already applied.

**Returns**: `AbortSignal` - AbortSignal object whose AbortSignal.aborted property is set to true
and whose AbortSignal.reason uses the specified or default reason

| Param | Type |
| --- | --- |
| reason | `*` |

## window.alert()

**Since**: v7.0.0

Opens an Alert message dialog and places the application in a modal state; the JavaScript thread remains **not blocking**, and events can continue through the main event loop.

Unlike the usual alert pattern, UXP does not pause JavaScript execution until the dialog is dismissed.

UXP also supports these additional simple alert APIs:

1. [confirm()](uxp-html-dom.md)
2. [prompt()](uxp-html-dom-2.md)

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | Alert-dialog text to present |

**Example**

```javascript
alert("This is alert message");
```

** Note: **

1. Starting in UXP v7.4, `plugin` code can invoke `alert()` only when the `featureFlags` entry `enableAlerts` is enabled. Add the following to Manifest v5:

```json
"featureFlags": {
     "enableAlerts": true
 }
```

2. In UXP v7.4 and later, `scripts` cannot use `alert()`

## window.Attr — Attr(document, nodeName)

Constructs an `Attr` instance.

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

**Returns**: `Node` - root node

| Param | Type |
| --- | --- |
| options | `Object` |

### window.Attr — addEventListener(eventName, callback, options)

**See**: [EventTarget - addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

| Param | Type | Description |
| --- | --- | --- |
| eventName | `*` |  |
| callback | `*` |  |
| options | `boolean` \| `Object` | Accepts either a capture boolean or an options object; within the options object, only capture is currently supported (\{ capture: bool_value }). |

### window.Attr — removeEventListener(eventName, callback, options)

**See**: [EventTarget - removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

| Param | Type | Description |
| --- | --- | --- |
| eventName | `*` |  |
| callback | `*` |  |
| options | `boolean` \| `Object` | Accepts either a capture boolean or an options object; within the options object, only capture is currently supported (\{ capture: bool_value }). |

### window.Attr — dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `*` |

## window.CanvasGradient

**See**: [Web APIs - CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient) for API details

For the related interface, see [HTMLCanvasElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md#module:global.htmlcanvaselement)

**Since**: v7.0.0

### addColorStop(offset, colorValue)

On a canvas gradient, inserts a color stop using the supplied `offset` and `color value`.

**Throws**:

- `DOMException`

**See**: [CanvasGradient - addColorStop](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient/addColorStop) for API details

| Param | Type | Description |
| --- | --- | --- |
| offset | `number` | A `number` from 0 through 1 inclusive that places the color stop. 0 maps to the gradient start; 1 maps to the gradient end. |
| colorValue | `string` | CSS `<color>` string used for the stop's color. |

## window.CanvasRenderingContext2D

**See**: [Web APIs - CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) for API details

For the related interface, see [HTMLCanvasElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md#module:global.htmlcanvaselement)

**Since**: v7.0.0

### CanvasRenderingContext2D()

Constructs a `CanvasRenderingContext2D` instance.

### lineWidth : `number`

Returns the current line thickness.

**See**: [CanvasRenderingContext2D - lineWidth](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth) for API details

### lineJoin : `string`

Returns the join shape applied at the contact point between two line segments.

**See**: [CanvasRenderingContext2D - lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for API details

### lineCap : `string`

Returns the cap shape used at line endpoints.

**See**: [CanvasRenderingContext2D - lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for API details

### globalAlpha : `number`

Returns the global alpha(transparency) setting.

**See**: [CanvasRenderingContext2D - globalAlpha](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalAlpha) for API details

### fillStyle : `string` \| `CanvasGradient`

Provides the fill styling applied while shapes are drawn.

**See**: [CanvasRenderingContext2D - fillStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) for more details

### strokeStyle : `string`

Provides the stroke color used for shape outlines.

**See**: [CanvasRenderingContext2D - strokeStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle) for more details

### createLinearGradient(x0, y0, x1, y1)

Builds a gradient on the segment between two supplied coordinate points.

**Returns**: `CanvasGradient` - a CanvasGradient configured from that line segment.  
**Throws**:

- `DOMException`

**See**: [CanvasRenderingContext2D - createLinearGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) for more details

| Param | Type | Description |
| --- | --- | --- |
| x0 | `number` | The x-axis coordinate of the start point. |
| y0 | `number` | The y-axis coordinate of the start point. |
| x1 | `number` | The x-axis coordinate of the end point. |
| y1 | `number` | The y-axis coordinate of the end point. |

### createRadialGradient(x0, y0, r0, x1, y1, r1)

Builds a radial gradient from two circular geometries and their positions.

**Returns**: `CanvasGradient` - a radial CanvasGradient configured from that paired circular geometry.  
**Throws**:

- `DOMException`

**See**: [CanvasRenderingContext2D - createRadialGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) for more details

| Param | Type | Description |
| --- | --- | --- |
| x0 | `number` | The x-axis coordinate of the start circle. |
| y0 | `number` | The y-axis coordinate of the start circle. |
| r0 | `number` | The radius of the start circle. Must be non-negative and finite. |
| x1 | `number` | The x-axis coordinate of the end circle. |
| y1 | `number` | The y-axis coordinate of the end circle. |
| r1 | `number` | The radius of the end circle. Must be non-negative and finite. |

### beginPath()

Starts a fresh path.

**See**: [CanvasRenderingContext2D - beginPath](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath) for more details

### closePath()

Connects the current point back to the current sub-path's start with a straight segment.

**See**: [CanvasRenderingContext2D - closePath](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath) for more details

### moveTo(x, y)

Starts a fresh sub-path at the point identified by the supplied x and y values.

**See**: [CanvasRenderingContext2D - moveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo) for more details

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis (horizontal) coordinate of the point. |
| y | `number` | The y-axis (vertical) coordinate of the point. |

### lineTo(x, y)

Extends the current sub-path with a straight segment from its last point to the provided (x, y) coordinate pair.

**See**: [CanvasRenderingContext2D - lineTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo) for more details

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis coordinate of the line's end point. |
| y | `number` | The y-axis coordinate of the line's end point. |

### arc(x, y, radius, startAngle, endAngle, counterclockwise)

Places a circular arc onto the path currently being constructed.

**See**: [CanvasRenderingContext2D - arc](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc) for more details

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | `number` |  | The horizontal coordinate of the arc's center. |
| y | `number` |  | The vertical coordinate of the arc's center. |
| radius | `number` |  | The arc's radius. Must be positive. |
| startAngle | `number` |  | The angle at which the arc starts in radians, measured from the positive x-axis. |
| endAngle | `number` |  | The angle at which the arc ends in radians, measured from the positive x-axis. |
| counterclockwise | `boolean` | `false` | An optional boolean value. If true, draws the arc counter-clockwise between the start and end angles. The default is false (clockwise). |

### arcTo(x1, y1, x2, y2, radius)

Uses two supplied control points and the radius to place an arc on the active path geometry.

**See**: [CanvasRenderingContext2D - arcTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo) for more details

| Param | Type | Description |
| --- | --- | --- |
| x1 | `number` | The x-axis coordinate of the first control point. |
| y1 | `number` | The y-axis coordinate of the first control point. |
| x2 | `number` | The x-axis coordinate of the second control point. |
| y2 | `number` | The y-axis coordinate of the second control point. |
| radius | `number` | The arc's radius. Must be non-negative. |

### bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

Adds a cubic Bezier curve segment to the path being built.

**See**: [CanvasRenderingContext2D - bezierCurveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo) for more details

| Param | Type | Description |
| --- | --- | --- |
| cp1x | `number` | The x-axis coordinate of the first control point. |
| cp1y | `number` | The y-axis coordinate of the first control point. |
| cp2x | `number` | The x-axis coordinate of the second control point. |
| cp2y | `number` | The y-axis coordinate of the second control point. |
| x | `number` | The x-axis coordinate of the end point. |
| y | `number` | The y-axis coordinate of the end point. |

### quadraticCurveTo(cpx, cpy, x, y)

Adds a quadratic Bezier curve segment to the path being built.

**See**: [CanvasRenderingContext2D - quadraticCurveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo) for more details

| Param | Type | Description |
| --- | --- | --- |
| cpx | `number` | The x-axis coordinate of the control point. |
| cpy | `number` | The y-axis coordinate of the control point. |
| x | `number` | The x-axis coordinate of the end point. |
| y | `number` | The y-axis coordinate of the end point. |

### rect(x, y, width, height)

Adds a rectangle segment to the active path.

**See**: [CanvasRenderingContext2D - rect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect) for more details

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis coordinate of the rectangle's starting point. |
| y | `number` | The y-axis coordinate of the rectangle's starting point. |
| width | `number` | The rectangle's width. |
| height | `number` | The rectangle's height. |

### stroke(path)

Applies the current stroke style to outline either the active path or a supplied path.

**See**: [CanvasRenderingContext2D - stroke](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke) for more details

| Param | Type | Description |
| --- | --- | --- |
| path | `Path2D` | An optional Path2D object to stroke. |

### fill(pathOrFillRule)

Paints either the active path or a supplied path with fillStyle.

**See**: [CanvasRenderingContext2D - fill](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill) for more details

| Param | Type | Description |
| --- | --- | --- |
| pathOrFillRule | `Path2D` \| `string` | An optional Path2D object to fill or String which defines an algorithm to determine if a point is inside or outside the filling region. |

### fillRect(x, y, width, height)

Draws a rectangle filled with the active fillStyle.

**See**: [CanvasRenderingContext2D - fillRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect) for more details

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis coordinate of the rectangle's starting point. |
| y | `number` | The y-axis coordinate of the rectangle's starting point. |
| width | `number` | The rectangle's width. |
| height | `number` | The rectangle's height. |

### strokeRect(x, y, width, height)

Draws a rectangle outlined with the active strokeStyle.

**See**: [CanvasRenderingContext2D - strokeRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect) for more details

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis coordinate of the rectangle's starting point. |
| y | `number` | The y-axis coordinate of the rectangle's starting point. |
| width | `number` | The rectangle's width. |
| height | `number` | The rectangle's height. |

### clearRect(x, y, width, height)

Clears a rectangular region by making the affected pixels black with zero opacity.

**See**: [CanvasRenderingContext2D - clearRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect) for more details

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis coordinate of the rectangle's starting point. |
| y | `number` | The y-axis coordinate of the rectangle's starting point. |
| width | `number` | The rectangle's width. |
| height | `number` | The rectangle's height. |

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

Instantiates `ClassList`.

| Param | Type |
| --- | --- |
| node | `any` |

### window.ClassList — length

**Read only**
Reports how many tokens the list currently contains.

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-length](https://dom.spec.whatwg.org/#dom-domtokenlist-length)

### window.ClassList — add(...tokens)

Places the supplied tokens into the token list; an already-present token does not raise an error.

**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-add](https://dom.spec.whatwg.org/#dom-domtokenlist-add)

| Param | Type |
| --- | --- |
| ...tokens | `string` |

### window.ClassList — remove(...tokens)

Deletes the supplied items from the token list; missing tokens do not raise an error.

**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-remove](https://dom.spec.whatwg.org/#dom-domtokenlist-remove)

| Param | Type |
| --- | --- |
| ...tokens | `string` |

### window.ClassList — replace(oldToken, newToken)

Substitutes `newToken` for `oldToken`. When `oldToken` is absent,
the list stays unchanged and the method returns `false`.

**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-replace](https://dom.spec.whatwg.org/#dom-domtokenlist-replace)

| Param | Type |
| --- | --- |
| oldToken | `any` |
| newToken | `any` |

### window.ClassList — toggle(token, force)

Flips membership of `token` in the list. When `force` is omitted, these
rules apply:

- a present token is removed, and `false` is returned
- a missing token is added, and `true` is returned

When `force` is provided:

- `true` adds the token
- `false` removes the token

**Returns**: `boolean` - whether `token` is still present once the operation completes  
**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-toggle](https://dom.spec.whatwg.org/#dom-domtokenlist-toggle)

| Param | Type |
| --- | --- |
| token | `string` |
| force | `boolean` |

### window.ClassList — item(index)

Gets the item at `index`; returns `null` when `index` falls outside the list.

**Returns**: `string` - item found at `index`, or null when `index` is outside valid bounds  
**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-item](https://dom.spec.whatwg.org/#dom-domtokenlist-item)

| Param | Type |
| --- | --- |
| index | `number` |

### window.ClassList — contains(token)

Checks whether `token` appears in the list.

**Returns**: `boolean` - when `true`, `token` is present; otherwise it is absent  
**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-contains](https://dom.spec.whatwg.org/#dom-domtokenlist-contains)

| Param | Type |
| --- | --- |
| token | `any` |

### window.ClassList — supports(token)

Checks whether the list accepts `token`; accepted tokens yield `true`, and
rejected ones yield `false`. When `false` comes back, using that token with
any other method would throw an error.

**Returns**: `boolean` - when `true`, `token` is acceptable for ClassList calls  
**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-supports](https://dom.spec.whatwg.org/#dom-domtokenlist-supports)

| Param | Type |
| --- | --- |
| token | `string` |

## window.Comment — Comment(document, comment)

Instantiates `Comment`.

| Param | Type |
| --- | --- |
| document | `Document` |
| comment | `string` |

## window.confirm()

**Returns**: `boolean` - `true` when OK button is pressed; `false` when Cancel button is pressed.  
**Since**: v7.0.0

A Confirm message dialog is shown and the application enters a modal state, while **not blocking** the Javascript thread; events can continue through the main event loop.

Unlike standard dialog behavior, UXP does not block the javascript execution thread until the dialog is dismissed.

UXP also supports these simple alert APIs

1. [alert()](uxp-html-dom.md)
2. [prompt()](uxp-html-dom-2.md)

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | Confirmation dialog text. |

**Example**

```javascript
confirm("This is confirmation message");
```

** Note: **

1. As of UXP v7.4, `plugin` code may invoke `confirm()` only when featureFlags includes `enableAlerts`. Add the following to Manifest v5:

```json
"featureFlags": {
     "enableAlerts": true
 }
```

2. As of UXP v7.4, `confirm()` is not available to `scripts`

## window.CustomElementRegistry

**See**: Refer [Web APIs - CustomElementRegistry](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry)

### define(name, constructor, options)

Registers a custom element definition.

**See**

- [CustomElementRegistry - define](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define)
- [HTML Spec - Element definition](https://html.spec.whatwg.org/multipage/custom-elements.html#element-definition)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name assigned to the new custom element |
| constructor | `CustomElement` | Constructor used for the new custom element |
| options | `Object` | Object configuring how the element is defined |
| options.extends | `string` | Built-in element name to extend |

### get(name)

Gets the constructor associated with a registered custom element name.

**See**: [CustomElementRegistry - get](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/get)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Custom element name to look up |

### upgrade(root)

Upgrades every potential custom element beneath the tree whose root is `root`.

[ This feature requires a feature flag. Enable `enableSWCSupport` in the plugin manifest featureFlags section before using it ]

**See**: [CustomElementRegistry - upgrade](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/upgrade)

| Param | Description |
| --- | --- |
| root | Node instance whose shadow-containing descendants should be upgraded |

### whenDefined(name)

Provides a Promise that resolves after the named custom-element has been defined.

[ This feature requires a feature flag. Enable `enableSWCSupport` in the plugin manifest featureFlags section before using it ]

**See**: [CustomElementRegistry - whenDefined](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Custom element name to wait for |

## window.DocumentFragment

**See**: [Web APIs - DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)

### childElementCount : `number`

**Read only**
Numeric value for the element's child count.

**See**: [DocumentFragment - childElementCount](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/childElementCount)

### querySelector(selector)

Within the DocumentFragment, finds the first Element node that satisfies the selector expression.

**Returns**: `Element`  
**See**: [DocumentFragment - querySelector](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelector)

| Param | Type | Description |
| --- | --- | --- |
| selector | `string` | A string containing one or more CSS selectors separated by commas |

### querySelectorAll(selector)

Within the DocumentFragment, produces the NodeList for nodes matching the selector set.

**Returns**: `NodeList`  
**See**: [DocumentFragment - querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelectorAll)

| Param | Type | Description |
| --- | --- | --- |
| selector | `string` | A string containing one or more CSS selectors separated by commas |

### append(...args)

After the document fragment's final child, adds the supplied Node objects or string objects.

**See**: [DocumentFragment - append](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/append)

| Param | Type | Description |
| --- | --- | --- |
| ...args | `any` | A set of Node or string objects to insert. |

## window.Document

**See**: [Web APIs - Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

### Document()

Builds a Document instance.

### onLine : `boolean`

**Read only**
Reports whether the computer currently has an online connection.

### createElement(name)

**Returns**: `Element`

| Param | Type |
| --- | --- |
| name | `string` |

### createElementNS(ns, name)

**Returns**: `Element`

| Param | Type |
| --- | --- |
| ns | `string` |
| name | `string` |

### createEvent(eventType)

**See**: [dom-document-createevent](https://dom.spec.whatwg.org/#dom-document-createevent)

| Param | Type |
| --- | --- |
| eventType | `string` |

### createAttribute(nodeName)

**Returns**: `Attr`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute)

| Param | Type |
| --- | --- |
| nodeName | `string` |

### createTextNode([text=])

**Returns**: `Text`

| Param | Type |
| --- | --- |
| [text=] | `string` |

### createComment([comment])

**Returns**: `Comment`

| Param | Type | Default |
| --- | --- | --- |
| [comment] | `string` | `"\\"\\""` |

### createTreeWalker(root, whatToShow, filter)

[ This feature is gated by a feature flag. Enable `enableSWCSupport` in the featureFlags section of plugin manifest before using it. ]

Represents both the nodes in a document subtree and the current position inside that subtree.

**Returns**: `TreeWalker`

| Param | Type | Description |
| --- | --- | --- |
| root | `Node` | A Node representing the root node as specified when the TreeWalker was created |
| whatToShow | `number` | An unsigned long being a bitmask made of constants describing the types of Node that must be presented |
| filter | `NodeFilter` | NodeFilter used to select the relevant nodes |

### cloneNode(deep)

**Returns**: `Document`

| Param | Type |
| --- | --- |
| deep | `boolean` |

### adoptNode(externalNode, deep)

**Returns**: `Node`

| Param | Type |
| --- | --- |
| externalNode | `Node` |
| deep | `boolean` |

### querySelector(selector)

**Returns**: `Node`

| Param | Type |
| --- | --- |
| selector | `string` |

### querySelectorAll(selector)

**Returns**: `NodeList`

| Param | Type |
| --- | --- |
| selector | `string` |

### getElementsByClassName(name)

**Returns**: `NodeList`

| Param | Type |
| --- | --- |
| name | `string` |

### getElementById(id)

**Returns**: `Element`

| Param | Type |
| --- | --- |
| id | `string` |
