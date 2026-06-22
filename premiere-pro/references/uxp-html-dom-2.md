# Intersection Observer Entry, Named Node Map, Node Filter, Node List ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: window.IntersectionObserverEntry; window.NamedNodeMap — NamedNodeMap(node); window.NodeFilter; window.NodeList — NodeList(staticList, updater); window.Path2D; window.prompt(); window.ResizeObserverEntry; window.ShadowRoot; window.Text — Text(document, textContent); window.TreeWalker.

## window.IntersectionObserverEntry

**See**: [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)  
**Since**: v8.1

### IntersectionObserverEntry(intersectionObserverEntryInit)

Stores details for how a target element intersects the root used by an intersection observer.

| Param | Type | Description |
| --- | --- | --- |
| intersectionObserverEntryInit | `IntersectionObserverEntryInit` | Supplies the entry's starting values. |

### time : `number`

**Read only**
Reports when the intersection was captured. UXP does not support DOMHighResTimeStamp, so the value comes back as a number.

**See**: [IntersectionObserverEntry - time](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/time)  
**Since**: v8.1

### rootBounds : `DOMRectReadOnly`

**Read only**
Provides the root element's bounds rectangle from the moment the intersection occurred.

**See**: [IntersectionObserverEntry - rootBounds](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/rootBounds)  
**Since**: v8.1

### boundingClientRect : `DOMRectReadOnly`

**Read only**
Provides the target element's bounds rectangle from the moment the intersection occurred.

**See**: [IntersectionObserverEntry - boundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/boundingClientRect)  
**Since**: v8.1

### intersectionRect : `DOMRectReadOnly`

**Read only**
Describes the rectangle where the root bounds overlap the target element bounds.

**See**: [IntersectionObserverEntry - intersectionRect](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRect)  
**Since**: v8.1

### isIntersecting : `boolean`

**Read only**
Shows whether the target element currently crosses into the root.

**See**: [IntersectionObserverEntry - isIntersecting](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting)  
**Since**: v8.1

### intersectionRatio : `number`

**Read only**
Returns a 0.0 through 1.0 ratio comparing the intersected area with the target element's bounding client rectangle area.

**See**: [IntersectionObserverEntry - intersectionRatio](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRatio)  
**Since**: v8.1

### target : `Element`

**Read only**
Identifies the observed target element whose intersection amount with the root changed.

**See**: [IntersectionObserverEntry - target](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/target)  
**Since**: v8.1

## window.NamedNodeMap — NamedNodeMap(node)

Initializes a NamedNodeMap instance.

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

Initializes a NodeList instance.

| Param | Type |
| --- | --- |
| staticList | `*` |
| updater | `*` |

## window.Path2D

**See**: [Web APIs - Path2D](https://developer.mozilla.org/en-US/docs/Web/API/Path2D) for additional details

Also see the [HTMLCanvasElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md#module:global.htmlcanvaselement) interface

**Since**: v7.0.0

### Path2D(path)

Initializes a Path2D instance.

| Param | Type | Description |
| --- | --- | --- |
| path | `Path2D` | `Optional` Path2D object copied from another Path2D instance |

### addPath(path)

Appends one Path2D object into a different Path2D path.

**See**: [Path2D - addPath](https://developer.mozilla.org/en-US/docs/Web/API/Path2D/addPath) for more details

| Param | Type | Description |
| --- | --- | --- |
| path | `Path2D` | Path2D object that will be appended. |

### closePath()

Draws a straight segment from the current point back to the sub-path origin.

**See**: [CanvasRenderingContext2D - closePath](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath) for more details

### moveTo(x, y)

Starts a fresh sub-path at the location described by the supplied (x, y) coordinate pair.

**See**: [CanvasRenderingContext2D - moveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo) for more details

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | Horizontal x-axis coordinate for that point. |
| y | `number` | Vertical y-axis coordinate for that point. |

### lineTo(x, y)

Draws a straight line from the current sub-path's last point to the given (x, y) position.

**See**: [CanvasRenderingContext2D - lineTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo) for more details

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | Line endpoint's x-axis coordinate. |
| y | `number` | Line endpoint's y-axis coordinate. |

### bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

Extends the active sub-path with a cubic BÃ©zier curve.

**See**: [CanvasRenderingContext2D - bezierCurveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo) for more details

| Param | Type | Description |
| --- | --- | --- |
| cp1x | `number` | First control point's x-axis coordinate. |
| cp1y | `number` | First control point's y-axis coordinate. |
| cp2x | `number` | Second control point's x-axis coordinate. |
| cp2y | `number` | Second control point's y-axis coordinate. |
| x | `number` | End point's x-axis coordinate. |
| y | `number` | End point's y-axis coordinate. |

### quadraticCurveTo(cpx, cpy, x, y)

Adds a quadratic BÃ©zier segment within the active path segment.

**See**: [CanvasRenderingContext2D - quadraticCurveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo) for more details

| Param | Type | Description |
| --- | --- | --- |
| cpx | `number` | Control point's x-axis coordinate. |
| cpy | `number` | Control point's y-axis coordinate. |
| x | `number` | End point's x-axis coordinate. |
| y | `number` | End point's y-axis coordinate. |

### arc(x, y, radius, startAngle, endAngle, counterclockwise)

Places a circular arc within the active path segment.

**See**: [CanvasRenderingContext2D - arc](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc) for more details

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | `number` |  | Horizontal coordinate for the arc center. |
| y | `number` |  | Vertical coordinate for the arc center. |
| radius | `number` |  | Radius for the arc. Value must be positive. |
| startAngle | `number` |  | Start angle for the arc, in radians, measured from the positive x-axis. |
| endAngle | `number` |  | End angle for the arc, in radians, measured from the positive x-axis. |
| counterclockwise | `boolean` | `false` | Optional boolean. When true, the arc is drawn counter-clockwise from startAngle to endAngle. With the default `false`, drawing is clockwise. |

### arcTo(x1, y1, x2, y2, radius)

Creates a circular arc in the current sub-path from the supplied control-point pair and radius value.

**See**: [CanvasRenderingContext2D - arcTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo) for more details

| Param | Type | Description |
| --- | --- | --- |
| x1 | `number` | First control point's x-axis coordinate. |
| y1 | `number` | First control point's y-axis coordinate. |
| x2 | `number` | Second control point's x-axis coordinate. |
| y2 | `number` | Second control point's y-axis coordinate. |
| radius | `number` | Radius for the arc. Value must be non-negative. |

### rect(x, y, width, height)

Creates a rectangle within the active drawing path for subsequent operations.

**See**: [CanvasRenderingContext2D - rect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect) for more details

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | Rectangle starting point's x-axis coordinate. |
| y | `number` | Rectangle starting point's y-axis coordinate. |
| width | `number` | Width of the rectangle. |
| height | `number` | Height of the rectangle. |

## window.prompt()

**Returns**: `string` - text the user enters in the prompt field, or the default value when no entry is supplied.  
**Since**: v7.0.0

Shows a Prompt message dialog and leaves the application in a modal state, but it **does not block** the Javascript thread; events in the main loop can still be processed.

Unlike standard prompts, UXP does not pause javascript execution until the dialog is dismissed.

UXP also supports these additional simple alerts:

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

1. In UXP v7.4 and later, `plugin` code may call `prompt()` only when the Manifest v5 featureFlags include `enableAlerts`; use this configuration:

```json
"featureFlags": {
     "enableAlerts": true
 }
```

2. Starting with UXP v7.4, `scripts` cannot use `prompt()`.

## window.ResizeObserverEntry

**See**: [ResizeObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry)  
**Since**: v8.1

### ResizeObserverEntry(target)

ResizeObserver() callback code receives this object, which exposes the Element's updated dimensions.

| Param | Type | Description |
| --- | --- | --- |
| target | `Element` | Element currently under observation. |

### target : `Element`

**Read only**
Provides the observed target element.

**See**: [ResizeObserverEntry - target](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/target)  
**Since**: v8.1

### contentRect : `DOMRectReadOnly`

**Read only**
Provides the target element's content rectangle.

**See**: [ResizeObserverEntry - contentRect](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentRect)  
**Since**: v8.1

### borderBoxSize : `Array<ResizeObserverSize>`

**Read only**
Provides the target element's border box size.

**See**: [ResizeObserverEntry - borderBoxSize](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/borderBoxSize)  
**Since**: v8.1

### contentBoxSize : `Array<ResizeObserverSize>`

**Read only**
Provides the target element's content box size.

**See**: [ResizeObserverEntry - contentBoxSize](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize)  
**Since**: v8.1

### devicePixelContentBoxSize : `Array<ResizeObserverSize>`

**Read only**
Raises an error because UXP does not support devicePixelContentBoxSize.

**Throws**:

- `DOMException` Always raises a NotSupportedError in this API.

**See**: [ResizeObserverEntry - devicePixelContentBoxSize](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize)  
**Since**: v8.1

## window.ShadowRoot

[ This feature is gated by a feature flag. To use it, enable `enableSWCSupport` in the plugin manifest's featureFlags section. ]

**See**: [Web APIs - ShadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot)  
**Since**: v7.0.0

### mode : `Element`

**Read only**
Reports whether the ShadowRoot mode is open or closed; that value controls whether JavaScript can reach the shadow root's internals.

**See**: [ShadowRoot - mode](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode)

### host : `Element`

**Read only**
Provides the host DOM element for that ShadowRoot.

**See**: [ShadowRoot - host](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host)

### innerHTML : `string`

Exposes ShadowRoot's internal DOM tree.

**See**: [ShadowRoot - innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/innerHTML)

### activeElement : `Element`

**Read only**
Identifies the focused element located within the shadow tree.

**See**: [ShadowRoot - activeElement](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/activeElement)

### cloneNode(deep)

Creates a duplicate for the node that received the call. The argument determines whether that duplicate includes the node's contained subtree.

**See**: [ShadowRoot - cloneNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)

| Param | Type | Description |
| --- | --- | --- |
| deep | `boolean` | Optional setting: use True to duplicate the entire sub tree; use False for just the node. |

## window.Text — Text(document, textContent)

Instantiates Text.

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

[ Access requires the feature flag. Enable `enableSWCSupport` in the featureFlags section of plugin manifest before using it. ]

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
