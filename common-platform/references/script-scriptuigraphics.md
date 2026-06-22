# Scriptuigraphics, Scriptuibrush, Scriptuifont, Scriptuiimage ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ScriptUIGraphics; ScriptUIBrush; ScriptUIFont; ScriptUIImage; ScriptUIPath; ScriptUIPen; Custom element class; LayoutManager; AutoLayoutManager object constructor; AutoLayoutManager object properties; AutoLayoutManager object functions; Interapplication Communication with Scripts; Communications overview; Remote function calls; Messaging framework; Identifying applications.

## ScriptUIGraphics

### Graphic customization objects — ScriptUIGraphics Object

Most user-interface element types expose a graphics property containing an object of this type. Through it, scripts can customize appearance details such as color and font. Set these properties, or call the functions, from an onDraw callback function.

All measurements are in pixels.

### ScriptUIGraphics Class Attributes

These static properties supply color type constants used when creating Pen and Brush objects.

### BrushType

### Description

newBrush() accepts these constants for its type argument:

- `SOLID_COLOR`
- `THEME_COLOR`

### Type

Object

### PenType

### Description

newPen() accepts these constants for its type argument:

- `SOLID_COLOR`
- `THEME_COLOR`

### Type

Object

### ScriptUIGraphics Object Attributes

The object has these properties:

### backgroundColor

controlObj.graphics.backgroundColor

### Description

Background color for a container, or the background color inherited from the parent by a control element.

### Type

ScriptUIBrush object

### currentPath

controlObj.graphics.currentPath

### Description

Drawing path currently used by this object.

### Type

ScriptUIPath object

### currentPoint

controlObj.graphics.currentPoint

### Description

Current position in this object's drawing path.

### Type

Point object

### disabledBackgroundColor

controlObj.graphics.disabledBackgroundColor

### Description

Background color used for a disabled container, or the parent background color used for a disabled control element.

### Type

ScriptUIBrush object

### disabledForegroundColor

controlObj.graphics.disabledForegroundColor

### Description

Foreground color used for a disabled container, or the parent foreground color used for a disabled control element.

### Type

ScriptUIPen object

### font

controlObj.graphics.font

### Description

Default font used when writing text.

### Type

ScriptUIFont object

### foregroundColor

controlObj.graphics.foregroundColor

### Description

Foreground color for a container, or the parent foreground color for a control element.

### Type

ScriptUIPen object

### ScriptUIGraphics Object Methods

These functions either draw directly on the screen to customize the related element, or create Pen and Brush objects used to fill the graphics object or passed into drawing methods:

### closePath()

controlObj.graphics.closePath()

### Description

Adds the closing segment between the current position and the start point of currentPath.

### Returns

Nothing

### drawFocusRing()

controlObj.graphics.drawFocusRing(left, top[, width, height])

### Description

Renders a focus ring inside the specified rectangular region. This visual marker shows that a control has keyboard focus and accepts keyboard input.

On Mac OS, this is usually a light blue ring around the control.

On Windows, the indicator is usually a dashed-line rectangle around a portion of the control.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| left, top | Number | Defines the region's top left corner in the owning control's local coordinate system. |
| width, height | Number | Optional. Pixel width and height for the region. |

### Returns

Nothing

### drawImage()

controlObj.graphics.drawImage(image, left, top[, width, height])

### Description

Renders an image inside the specified rectangular region, using the image file from the supplied image object that matches the control's current state.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| image | ScriptUIImage object | ScriptUIImage object containing the images to draw. |
| left, top | Number | Defines the drawing region's top left corner in the owning control's local coordinate system. |
| width, height | Number | Optional. Pixel width and height for the drawing region. If supplied, the image is scaled into that rectangle. If omitted, drawing uses the image's original width or height. |

### Returns

Nothing

### drawOSControl()

controlObj.graphics.drawOSControl()

### Description

Renders this element's native control for the current platform.

### Returns

Nothing

### drawString()

controlObj.graphics.drawString(text, pen, x, y, font)

### Description

Renders text from the specified point with the supplied pen and font.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | String | Text string. |
| pen | ScriptUIPen object | ScriptUIPen object used as the drawing pen. |
| x, y | Number | Starting point for the drawn text, in the owning control's local coordinate system. |
| font | ScriptUIFont object | Optional. ScriptUIFont object specifying the font. The default is this object's font value. |

### Returns

Nothing

### ellipsePath()

controlObj.graphics.ellipsePath(left, top[, width, height])

### Description

In currentPath, defines an elliptical path inside the specified rectangular area; fillPath() can fill it, and strokePath() can stroke it.

Returns a Point object for the upper-left area corner; that point becomes currentPoint.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| left, top | Number | Defines the region's top left corner in the owning control's local coordinate system. |
| width, height | Number | Pixel width and height for the region. |

### Returns

Point object

### fillPath()

controlObj.graphics.fillPath(brush[, path])

### Description

Paints the interior of a path with the supplied brush.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| brush | ScriptUIBrush object | ScriptUIBrush object defining the fill color. |
| path | ScriptUIPath object | Optional ScriptUIPath object for the path. Without this argument, the operation uses currentPath. |

### Returns

Nothing

### lineto()

controlObj.graphics.lineto(x, y)

### Description

Adds a segment beginning at currentPoint and ending at (x, y).

Returns a Point object for the upper-left area corner; that point becomes currentPoint.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| x, y | Number | Line destination point, in the owning control's local coordinate system. |

### Returns

Point object

### measureString()

controlObj.graphics.measureString(text, font[, boundingWidth])

### Description

Computes the space needed to draw a text string in the specified font.

Returns a Dimension object object containing the string height and width in pixels.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | Text | Text string to measure. |
| font | ScriptUIFont object | Optional. ScriptUIFont object specifying the font. The default is this object's font value. |
| boundingWidth | Number | Optional. Maximum placement-area width in pixels for the text. Use it when wrapping a long text string over several lines. |

### Returns

Dimension object

### moveto()

controlObj.graphics.moveto(x, y)

### Description

Adds the supplied point to currentPath and makes it currentPoint.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| x, y | Number | New coordinates, expressed in the owning control's local coordinate system. |

### Returns

Point object

### newBrush()

controlObj.graphics.newBrush(type, color);

### Description

Allocates a new painting brush.

### Parameters

Parameter

Type

Description

type

BrushType

Brush type. Choose one constant: - ScriptUIGraphics.BrushType.`SOLID_COLOR` - ScriptUIGraphics.BrushType.`THEME_COLOR`

color

Array of Numbers

Brush color. With type set to `SOLID_COLOR`, provide three or four numeric entries as [R, B, G, A], representing red, green, blue, and optionally opacity through the alpha channel. Each number must be in the range [0.0...1.0]. Opacity 0 is fully transparent; opacity 1 is fully opaque. With type set to `THEME_COLOR`, provide the theme name string. The host application defines the available theme colors.

| --- | --- | --- |

### Returns

ScriptUIBrush object.

### newPath()

controlObj.graphics.newPath();

### Description

Replaces any existing path in currentPath with a new empty drawing path.

### Returns

ScriptUIPath object.

### newPen()

controlObj.graphics.newPen(type, color, lineWidth);

### Description

Allocates a new drawing pen.

### Parameters

Parameter

Type

Description

type

PenType

Pen type. Choose one constant: - ScriptUIGraphics.PenType.`SOLID_COLOR` - ScriptUIGraphics.PenType.`THEME_COLOR`

color

Array of Numbers

Pen color. With type set to `SOLID_COLOR`, provide three or four numeric entries as [R, B, G, A], representing red, green, blue, and optionally opacity through the alpha channel. Each number must be in the range [0.0...1.0]. Opacity 0 is fully transparent; opacity 1 is fully opaque. With type set to `THEME_COLOR`, provide the theme name string. The host application defines the available theme colors.

lineWidth

Pixels

Line width, in pixels, used by this pen. The line is centered around the current point. For example, when lineWidth is 2, drawing from (0, 10) to (5, 10) paints the two pixel rows adjacent to y-position 10, one above and one below.

| --- | --- | --- |

### Returns

ScriptUIPen object.

### rectPath()

controlObj.graphics.rectPath(left, top[, width, height])

### Description

In currentPath, defines a rectangular path that fillPath() can fill and strokePath() can stroke.

Returns a Point object for the rectangle's upper left corner, which becomes the new currentPoint.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| left, top | Number | Defines the region's top left corner in the owning control's local coordinate system. |
| width, height | Number | Pixel width and height for the region. |

### Returns

Point object

### strokePath()

controlObj.graphics.fillPath(pen[, path])

### Description

Strokes the segments of a path using the supplied drawing pen.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pen | ScriptUIPen object | ScriptUIPen object defining the color and line width. |
| path | ScriptUIPath object | Optional ScriptUIPath object for the path. Without this argument, the operation uses currentPath. |

### Returns

Nothing

## ScriptUIBrush

### Graphic customization objects — ScriptUIBrush Object

ScriptUIBrush is a helper wrapper for the brush settings used when a control fills a path. Create one with the ScriptUIGraphics object's newBrush() method.

Assign it to backgroundColor or disabledBackgroundColor.

Pass it as the argument to fillPath().

### ScriptUIBrush Object Attributes

These properties are available on the object:

Property

Type

Description

color

Array of Number

When type is `SOLID_COLOR`, color supplies the paint color. Use an array shaped [R, B, G, A], where red, green, blue, and opacity (alpha channel) are numbers in the range [0.0...1.0]. Opacity 0 means fully transparent; opacity 1 means fully opaque.

theme

String

For `THEME_COLOR`, theme names the color theme used as the fill texture. The host application defines the available theme colors.

type

Number

type chooses the brush kind, using one of these constants: - ScriptUIGraphics.BrushType.`SOLID_COLOR` - ScriptUIGraphics.BrushType.`THEME_COLOR`

| --- | --- | --- |

## ScriptUIFont

### Graphic customization objects — ScriptUIFont Object

ScriptUIFont is a helper wrapper for the font settings used when text is drawn into a control. Create one with the ScriptUI class's newFont() method.

Assign it to font.

Pass it as the argument to drawString() and measureString().

### ScriptUIFont Object Attributes

These properties are available on the object:

Property

Type

Description

family

String

family stores the font family name.

name

String

name stores the full font name, including family and style when a style is specified.

size

Number

size gives the font point size.

style

Object

style selects the font style. Use one of these constants: - ScriptUI.FontStyle.REGULAR - ScriptUI.FontStyle.BOLD - ScriptUI.FontStyle.ITALIC - ScriptUI.FontStyle.BOLDITALIC

substitute

String

substitute names a fallback font to use when the requested family or style is unavailable.

| --- | --- | --- |

## ScriptUIImage

### Graphic customization objects — ScriptUIImage Object

ScriptUIImage is a helper wrapper for a set of images that a control can draw. Alternate image versions can represent control states, for example a dimmed image for a disabled control.

When a script sets the image property of an Image, IconButton, or ListItem object with a pathname or File object, this type is created automatically and becomes that property's value.

Scripts can also create the object directly with the ScriptUI class's newImage() method. In that form, the script may provide alternate images for control states such as enabled, disabled, and rollover.

Pass this object as the argument to drawImage().

### ScriptUIImage Object Attributes

The object exposes these read-only properties:

| Property | Type | Description |
| --- | --- | --- |
| format | String | Image format. Scripts can supply JPEG and PNG images; applications can provide resource-format images. |
| name | String | Image name, either a file name or a resource name. |
| pathname | String | Full path to the file containing the image. |
| size | Dimension | Dimension object that gives the image size in pixels. |

## ScriptUIPath

### Graphic customization objects — ScriptUIPath Object

ScriptUIPath is a helper wrapper for a drawing path that a control can render as a figure. Create it with newPath(), then define path segments with the ScriptUIGraphics object's moveto(), lineto(), rectPath(), and ellipsePath() methods.

Assign it to currentPath; closePath() and related methods operate on it there.

You may pass it as an optional argument to fillPath() and strokePath(); without that argument, those methods use currentPath.

The class defines no properties or methods.

## ScriptUIPen

### Graphic customization objects — ScriptUIPen Object

ScriptUIPen is a helper wrapper for pen settings used when a control strokes path segments. Create one with the ScriptUIGraphics object's newPen() method.

Assign it to foregroundColor or disabledForegroundColor.

Pass it as the argument to drawString() and strokePath().

### ScriptUIPen Object Attributes

These properties are available on the object:

Property

Type

Description

color

Array of Number

When type is `SOLID_COLOR`, color supplies the paint color. Use an array shaped [R, B, G, A], where red, green, blue, and opacity (alpha channel) are numbers in the range [0.0...1.0]. Opacity 0 means fully transparent; opacity 1 means fully opaque.

lineWidth

Number

lineWidth sets the drawing line width in pixels.

theme

String

For `THEME_COLOR`, theme names the color theme used for drawing. The host application defines the available theme colors.

type

Number

type chooses the pen kind, using one of these constants: - ScriptUIGraphics.PenType.`SOLID_COLOR` - ScriptUIGraphics.PenType.`THEME_COLOR`

| --- | --- | --- |

## Custom element class

### Graphic customization objects — Custom element class

Custom class elements differ from ordinary UI elements because they start with no built-in visual appearance. The script that creates a custom element must draw it in the element's onDraw event handler function, which lets the script render any look supported by the drawing functions on the UI element's graphics object.

Custom elements share the common properties used by other control elements (see Common properties). Each custom element type also adds its own properties.

The Custom element class includes these element types:

Element

Description

customBoundedValue

Use customBoundedValue for controls whose value changes between minimum and maximum bounds, such as Progressbar, Slider, and Scrollbar. It has the same additional properties as those controls: - value - minvalue - maxvalue - shortcutKey When value changes, the control receives onChange and then onDraw, so the element can redraw for the updated state.

customButton

Use customButton for button-style controls, including Button, IconButton with text, Checkbox, and similar controls. Additional properties are: - image - shortcutKey - text - value

customView

customView provides an image property so a script can specify an image to show. If image is set and no onDraw function exists, the default look is that image, rendered centered inside the element bounds.

| --- | --- | --- |

Moving the mouse into or out of the screen area occupied by a custom element does not call that element's onDraw event handler function.

To force a drawing refresh for those cases, call notify("onDraw") on the element from a mouseOver or mouseout event response for that element.

In the example below, the script handles mouseover and mouseout events on a customButton element and forces a visual update when the mouse enters or leaves the button:

```
var res =
"""palette {
    text:'Custom elements demo',
    properties:{ closeOnKey:'OSCmnd+W', resizeable:true },
    customBtn: Custom {
        type:'customButton',
        text:'Redraw original image'
    },
    customImageViewer: Custom {
        type:'customView',
        alignment:['fill','fill']
    }
}""";

var w = new Window (res);
w.customBtn.onDraw = drawButton;
w.customBtn.addEventListener ("mouseover", btnMouseEventHandler, false);
w.customBtn.addEventListener ("mouseout", btnMouseEventHandler, false);

// ...

function btnMouseEventHandler (event) {
    try {
        //
        Redraw the button on mouseover and mouseout
        event.target.notify("onDraw");
    } catch (e) {
        ...
    }
}

function drawButton (drawingState) {
    ...
}
```

## LayoutManager

### LayoutManager object

LayoutManager manages automatic layout for a window or container. AutoLayoutManager, its subclass, supplies the default automatic layout behavior.

## AutoLayoutManager object constructor

### LayoutManager object — AutoLayoutManager object constructor

Instantiate AutoLayoutManager with new:

```
myWin.layout = new AutoLayoutManager( myWin );
```

Creating a Window or container (group or panel) object automatically creates an instance and stores it in the container's layout property. Unless a script overrides it, that instance provides the default layout behavior.

## AutoLayoutManager object properties

### LayoutManager object — AutoLayoutManager object properties

The default object starts without predefined properties. A script can add arbitrary properties to an object it creates when its custom layout algorithm needs stored data.

## AutoLayoutManager object functions

### LayoutManager object — AutoLayoutManager object functions

### layout()

windowObj.layout.layout( recalculate )

### Description

Runs automatic layout for the managed container. Child element sizes and positions are adjusted from the placement and alignment property values on the parent and its children.

The first time the window is displayed, this method is invoked automatically. Afterward, scripts call it explicitly when parent or child size or position changes require a layout update.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| recalculate | Boolean | Optional. If true, tells the layout manager to compute this container's size again, including child containers. Default: false. |

### Returns

Nothing

### resize()

windowObj.layout.resize()

### Description

After the managed container is resized by the user or a script, resize() moves and sizes its child elements according to each child's alignment values.

For how alignment changes an element's size and location, see Automatic layout.

### Returns

Nothing

## Interapplication Communication with Scripts

Adobe scripting includes an interapplication messaging framework that lets Adobe applications exchange scripts and information with each other. Applications implementing the framework are message enabled.

The Adobe ExtendScript SDK includes sample code for several techniques, and the related sections refer to those samples by name.

## Communications overview

Any script running in a message-enabled application has two ways to reach another message-enabled application: directly call functions defined in a remote application, or send messages and receive responses from that remote application. The system also provides syntax for identifying applications unambiguously.

## Remote function calls

### Communications overview — Remote function calls

The cross-DOM is a limited group of basic functions shared by all message-enabled applications. It lets a script do tasks such as open or print files in other applications by calling that application's open or print function.

- Cross-DOM functions explains how to use this feature.
- Cross-DOM API reference gives reference details for the basic cross-DOM functions.

Message-enabled applications can also export selected application-specific functions; Application-specific exported functions covers those exports.

As one example, an Adobe Bridge script can request a Photoshop photo merge by calling photoshop.photomerge(files). The available function set differs widely from one application to another.

## Messaging framework

### Communications overview — Messaging framework

A JavaScript application programming interface (API) underlies the interapplication messaging framework and gives scripts broad control over application-to-application communication. Through the API, a script can send messages to other applications and receive results, or receive messages from other applications and return results. JavaScript scripts are the usual data passed between applications. The framework is extensible, so scripts can define other data types for transfer between applications and specify how those data should be handled.

- Communicating through messages explains how to use this feature.
- Messaging framework API reference supplies the full reference details.

## Identifying applications

### Communications overview — Identifying applications

For external function calls or message exchange, scripts identify target applications with namespace specifiers. A specifier includes a particular name string, such as photoshop, plus optional parts for targeting a release or locale version. Application specifiers also appear in some other contexts. For syntax details, see Application and namespace specifiers.

No matter which interapplication communication method is used, the script must be located where the application intended to run it can see it. Startup scripts for applications use different locations from scripts supplied by developers.

All JavaScript-enabled applications search the same script locations, so each script must state clearly which application should run it. A script should verify that every application it needs is installed at the correct version, and that other installed applications do not run the script. For details, see Scripting for specific applications.
