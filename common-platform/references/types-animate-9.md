# Animate (part 9)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

\*/
setTransformationPoint(transformationPoint: Point): void
}

/\*\*

- Matrix represents a transformation matrix.
  \*/
  declare class Matrix {
  /\*\*
  - Floating-point value for the transformation matrix element at (0,0). This value gives the object's x-axis scale factor.
  - In a matrix, the a and d properties represent scaling.
    \*/
    a: number
    /\*\*
  - Floating-point value for the matrix element at (0,1). This value gives vertical skew for a shape by moving its right edge along the vertical axis.
  - In a matrix, matrix.b and matrix.c represent skewing (see matrix.c).
    \*/
    b: number
    /\*\*
  - Floating-point value for the matrix element at (1,0). This value skews the object by shifting its bottom edge on a horizontal axis.
  - In a matrix, matrix.b and matrix.c represent skewing.
    \*/
    c: number
    /\*\*
  - Floating-point value for the transformation matrix element at (1,1). This value gives the object's y-axis scale factor.
    \*/
    d: number
    /\*\*
  - Floating-point value for the x-axis location of a symbol's registration point, also called the origin point or zero point, or for a shape's center. It defines the transformation's x translation.
  - Move an object by setting matrix.tx and matrix.ty (see matrix.ty).
    \*/
    tx: number
    /\*\*
  - Floating-point value for the y-axis location of a symbol's registration point or a shape's center. It defines the transformation's y translation.
  - Move an object by setting matrix.tx and matrix.ty.
    \*/
    ty: number
    }

// Instance
declare class Instance extends Element {
/\*\*

- String identifying the instance type. Allowed strings are "symbol", "bitmap", "embedded video", "linked video", "video", and "compiled clip".
  \*/
  readonly instanceType: string
  /\*\*
- Library item used to create this instance. This property can be changed only to another library item of the same type; for example, a bitmap cannot replace a symbol library reference.
  \*/
  libraryItem: Library
  }

// BitmapInstance
declare interface BitMap {
width: number
height: number
depth: number
bits: number[]
cTab?: string[]
}

/\*\*

- BitmapInstance is an Instance subclass for a frame bitmap (see Instance object).
  \*/
  declare class BitmapInstance extends Instance {
  /\*\*
  - Enables bitmap effects by reading bitmap bits, modifying them, and writing them back to Flash.
  - @returns Object containing width, height, depth, bits, and, when the bitmap has a color table, cTab properties. bits is an array of bytes. cTab is an array of color values in "#RRGGBB" form. The array length matches the color table length. The byte array matters only to DLL or shared-library consumers. Typical use is limited to extensible tools or effects. For information on creating DLLs for use with Flash JavaScript.
    \*/
    getBits(): BitMap
    /\*\*
  - Writes bits into an existing bitmap element. This enables bitmap effects by reading bitmap bits, modifying them, and returning the bitmap to Flash.
  - @param bitmap Object containing height, width, depth, bits, and cTab properties. height, width, and depth propertiesare integers. bits is a byte array. cTab applies only to bitmaps whose bit depth is 8 or less, and it is a string representing a color value in "#RRGGBB" form. Note: The byte array matters only to external-library consumers. Typical use is limited to extensible tools or effects.
    \*/
    setBits(bitmap: BitMap): void
    /\*\*
  - Integer width of the bitmap, meaning the number of pixels in the horizontal dimension.
    \*/
    readonly hPixels: number
    /\*\*
  - Integer height of the bitmap, meaning the number of pixels in the vertical dimension.
    \*/
    readonly vPixels: number
    }

/\*\*

- CompiledClipInstance is an Instance subclass for movie clip instances converted into compiled clip library items (see Instance object).
  \*/
  declare class CompiledClipInstance extends Instance {
  /\*\*
  - String matching the Name field in the Accessibility panel. Screen readers identify objects by speaking this name.
    \*/
    accName: string
    /\*\*
  - String for the matte color used when Opaque is selected. The value is either hexadecimal #rrggbb text or an integer containing the value.
    \*/
    backgroundColor: string | number
    /\*\*
  - String matching the Description field in the Accessibility panel. Screen readers read this description.
    \*/
    description: string
    /\*\*
  - String selecting the blend mode. Use one of: normal, layer, darken, multiply, lighten, screen, overlay, hardlight, add, subtract, difference, invert, alpha, or erase.
    \*/
    blendMode: string
    /\*\*
  - int containing the Color Effect Property Inspector value for brightness when colorMode == 'brightness'. Specify a percentage from -100 through 100. An error is returned when colorMode uses another setting.
    \*/
    readonly brightness: number
    /\*\*
  - boolean indicating whether bitmap caching is used. This corresponds to Use runtime bitmap caching in the Property Inspector. Default value: false.
    \*/
    cacheAsBitmap: boolean
    /\*\*
  - int that changes tint and alpha by adding a constant amount to the current values, either reducing or increasing them. Valid values are -255 to 255. This is most useful together with colorAlphaPercent. It mirrors the right-side controls in the Color > Advanced dialog from the Instance Property Inspector.
    \*/
    colorAlphaAmount: number
    /\*\*
  - int that changes tint and alpha by a percentage, reducing or increasing them by multiplying the existing values. Valid values are -100 to 100. It mirrors the left-side controls in the Color > Advanced dialog from the Instance Property Inspector.
    \*/
    colorAlphaPercent: number
    /\*\*
  - int for changing blue tint by a constant amount; the current value receives this added value. Valid values are -255 to 255. This setting corresponds to Color > Advanced in the Instance Property Inspector.
    \*/
    colorBlueAmount: number
    /\*\*
  - int for changing blue tint values by a percentage. The percentage multiplies the current values. Valid values are -100 to 100. This setting corresponds to Color > Advanced in the Instance Property Inspector.
    \*/
    colorBluePercent: number
    /\*\*
  - int for changing green tint by a constant amount; the current value receives this added value. Valid values are -255 to 255. This setting corresponds to Color > Advanced in the Instance Property Inspector.
    \*/
    colorGreenAmount: number
    /\*\*
  - int for changing green tint values by a percentage. The percentage multiplies the current values. Valid values are -100 to 100. This setting corresponds to Color > Advanced in the Instance Property Inspector.
    \*/
    colorGreenPercent: number
    /\*\*
  - String identifying the color mode from the Symbol Properties dialog. Use one of "none", "brightness", "tint", "alpha", or "advanced".
    \*/
    colorMode: string
    /\*\*
  - int for changing red tint by a constant amount; the current value receives this added value. Valid values are -255 to 255. This setting corresponds to Color > Advanced in the Instance Property Inspector.
    \*/
    colorRedAmount: number
    /\*\*
  - int for changing red tint values by a percentage. The percentage multiplies the current values. Valid values are -100 to 100. This setting corresponds to Color > Advanced in the Instance Property Inspector.
    \*/
    colorRedPercent: number
    /\*\*
  - Array of Filter objects. Filter object properties inside the filters array can be read, but cannot be written by direct access through the filters array. To change filter object properties, retrieve the array, modify the properties, and set the array back to filters.
    \*/
    filters: Filter[]
    /\*\*
  - Boolean value controlling whether child objects remain accessible, using inverse logic from the Accessibility panel's Make Child Objects Accessible setting. If forceSimple is true, Make Child Objects Accessible is unchecked. If forceSimple is false, Make Child Object Accessible is checked.
    \*/
    forceSimple: boolean
    /\*\*
  - String matching the Shortcut field in the Accessibility panel. Screen readers read this shortcut. Dynamic text fields do not support this property.
    \*/
    shortcut: string
    /\*\*
  - Boolean value that enables or disables object accessibility, equivalent to the inverse logic of the Make Object Accessible setting in the Accessibility panel. If silent is true, Make Object Accessible is unchecked. If silent is false, Make Object Accessible is checked.
    \*/
    silent: boolean
    /\*\*
  - Integer matching the Tab Index field in the Accessibility panel. It creates a tab order used when the user presses the Tab key.
    \*/
    tabIndex: number
    /\*\*
  - Color object returned when the Color Effect Property Inspector uses style tint (colorMode == 'tint'), representing the applied tint color. Using this property in other modes results in an error.
    \*/
    readonly tintColor: string | number
    /\*\*
  - String returned when the Color Effect Property Inspector uses style tint (colorMode == 'tint'), giving the tint percentage from -100 to 100. Using this property in other modes results in an error.
    \*/
    readonly tintPercent: string
    /\*\*
  - boolean selecting the background color behavior:
  - - true - 32-bit mode with alpha.
  - - false - background color mode.
      \*/
      useBackgroundColor: boolean
      /\*\*
  - boolean controlling visibility. This corresponds to the visible checkbox in the Property Inspector Display section for symbols.
    \*/
    visible: boolean
    }

declare class ComponentInstance extends SymbolInstance {
/\*\*

- Array of ActionScript 2.0 properties exposed through the component Property inspector.
  \*/
  readonly parameters: Parameter[]
  }

/\*\*

- Parameter is accessed from the componentInstance.parameters array, which maps to the component Property inspector in the authoring tool.
  \*/
  declare class Parameter {
  /\*\*
  - String specifying the category property for a screen parameter or componentInstance parameter. It offers another way to present a parameter list. The Flash user interface does not expose this functionality.
    \*/
    category: string
    /\*\*
  - Value of the selected list item. This property applies only when parameter.valueType is "List".
    \*/
    listIndex: number
    /\*\*
  - String naming the parameter.
    \*/
    readonly name: string
    /\*\*
  - Maps to the Value field in the Component inspector Parameters tab, the Property inspector Parameters tab, or the screen Property inspector. The parameter's valueType property determines the value property's type (see parameter.valueType).
    \*/
    value: any
    /\*\*
  - String indicating the screen or component parameter type. Allowed valueType strings include "Default", "Array", "Object", "List", "String", "Number", "Boolean", "Font Name", "Color", "Collection", "Web Service URL", and "Web Service Operation".
    \*/
    readonly valueType: string
    /\*\*
  - Defines where the parameter appears. When this property is 0 (nonverbose), the parameter appears only in the Component inspector. When it is 1 (verbose), the parameter appears in both the Component inspector and the Parameters tab of the Property inspector.
    \*/
    verbose: string
    /\*\*
  - Inserts an item into an object or array. For object or array parameters, value is stored as an array.
  - @param index Zero-based integer index indicating where the item will be inserted in the object or array. If index is 0, insertion happens at the beginning. If index is larger than the list size, insertion happens at the end.
  - @param name String naming the item to insert. This parameter is required for object parameters.
  - @param value String specifying the item value to insert.
  - @param type String for the inserted item's type.
    \*/
    insertItem(index: number, name: string, value: string, type: string): void
    /\*\*
  - Removes one element from an object or array type used by a screen or component parameter.
  - @param index Zero-based integer index of the item to remove from the screen or component property.
    \*/
    removeItem(index: number): void
    }

/\*\*

- SymbolInstance derives from Instance and models a symbol placed in a frame (see Instance object).
  \*/
  declare class SymbolInstance extends Instance {
  /\*\*
  - Corresponds to the Name field in the Accessibility panel. Screen readers use this name when announcing the object. Graphic symbols do not support this property.
    \*/
    accName: string
    /\*\*
  - Provides the matte color used when the instance is in 24 bit mode. Supply either a hexadecimal #rrggbb string or an integer value.
    \*/
    backgroundColor: string | number
    /\*\*
  - Selects the display mode used for the symbol.
  - Supported values:
  - "none"
  - "cache" - makes Flash Player cache the symbol as a bitmap at runtime.
  - "export" - exports the symbol as a bitmap during SWF compilation.
  - The older symbolInstance.cacheAsBitmap on page 472 property covers similar behavior, but because it is boolean, it exposes fewer modes. Adobe may deprecate cacheAsBitmap later, so new scripts should prefer this property. In cacheAsBitmap, true maps to "cache" and false maps to "none".
    \*/
    bitmapRenderMode: string
    /\*\*
  - For a movie clip symbol, chooses how blending is applied. Allowed strings: "normal", "layer", "multiply", "screen", "overlay", "hardlight", "lighten", "darken", "difference", "add", "subtract", "invert", "alpha", and "erase".
    \*/
    blendMode: string
    /\*\*
  - Reads the brightness value from the color effect Property Inspector when colorMode == 'brightness'; the value is a percentage from -100 through 100. A different colorMode causes an error.
    \*/
    readonly brightness: number
    /\*\*
  - For button symbols, mirrors the Property inspector pop-up that chooses Track As Button or Track As Menu Item. Other symbol types ignore it. Acceptable values are "button" or "menu".
    \*/
    buttonTracking: string
    /\*\*
  - Controls whether bitmap caching at run time is active.
  - Note: Beginning with Flash Professional CS5.5, prefer symbolInstance.bitmapRenderMode on page 470 instead of this property.
    \*/
    cacheAsBitmap: boolean
    /\*\*
  - Supplies the Advanced Effect Alpha additive component for the instance color transform. It matches using Color > Advanced in the Property inspector and changing the controls on the right side of the dialog box. The amount is added to the current tint and alpha values, reducing or increasing them by a constant offset. It is most useful together with symbolInstance.colorAlphaPercent. Allowable values are from -255 to 255.
    \*/
    colorAlphaAmount: number
    /\*\*
  - Supplies the percentage component of the instance color transform. It matches Color > Advanced in the instance Property inspector, specifically the percentage controls on the dialog box's left side. The setting changes tint and alpha to the requested percentage. Range: -100 to 100. Related property: symbolInstance.colorAlphaAmount.
    \*/
    colorAlphaPercent: number
    /\*\*
  - Stores the blue additive part of the instance color transform. It matches Color > Advanced in the instance Property inspector. Range: -255 to 255.
    \*/
    colorBlueAmount: number
    /\*\*
  - Stores the blue percentage part of the instance color transform. It matches Color > Advanced in the instance Property inspector, using the percentage controls on the dialog box's left side. The value sets blue values to the chosen percentage. Allowable values are from -100 to 100.
    \*/
    colorBluePercent: number
    /\*\*
  - Stores the green additive part of the instance color transform. It matches Color > Advanced in the instance Property inspector. Range: -255 to 255.
    \*/
    colorGreenAmount: number
    /\*\*
  - Stores the green percentage part of the instance color transform. It matches Color > Advanced in the instance Property inspector, using the percentage controls on the dialog box's left side. The value sets green values by the requested percentage. Allowable values are from -100 to 100.
    \*/
    colorGreenPercent: number
    /\*\*
  - Names the chosen mode from the symbol Property inspector Color pop-up menu. Allowed strings: "none", "brightness", "tint", "alpha", and "advanced".
    \*/
    colorMode: string
    /\*\*
  - Stores the red additive part of the instance color transform. It matches Color > Advanced in the instance Property inspector. Range: -255 to 255.
    \*/
    colorRedAmount: number
    /\*\*
  - Stores the red percentage part of the instance color transform. It matches Color > Advanced in the instance Property inspector, using the percentage controls on the dialog box's left side. The value sets red values to the chosen percentage. Allowable values are from -100 to 100.
    \*/
    colorRedPercent: number
    /\*\*
  - Matches the Description field in the Accessibility panel. Screen readers speak the description text. Graphic symbols do not expose this property.
    \*/
    description: string
    /\*\*
  - Holds the Filter objects applied to the instance (see Filter object). To edit filter settings, retrieve this array, update the individual filter properties, and assign the array back with the changed values.
    \*/
    filters: Filter[]
    /\*\*
  - Gives the zero-based first frame shown on the graphic's timeline. It applies only to graphic symbols and mirrors the First field in the Property inspector. For other symbol types, the property is undefined.
    \*/
    firstFrame: number
    /\*\*
  - Enables or disables accessibility for child objects, using the inverse of Make Child Objects Accessible in the Accessibility panel. For example, forceSimple true corresponds to Make Child Object Accessible unchecked; forceSimple false corresponds to it checked.
  - This property is available only for MovieClip objects.
    \*/
    forceSimple: boolean
    /\*\*
  - Reports whether the symbol instance includes a 3D matrix transform.
    \*/
    readonly is3D: boolean
    /\*\*
  - For graphic symbols, mirrors the Loop pop-up menu in the Property inspector. Other symbol types leave it undefined. Acceptable values are "loop", "play once", and "single frame", which control the graphic's animation mode.
    \*/
    loop: string
    /\*\*
  - Matches the shortcut key assigned to the symbol and corresponds to the Shortcut field in the Accessibility panel. Screen readers announce this key. Graphic symbols do not expose this property.
    \*/
    shortcut: string
    /\*\*
  - Enables or disables object accessibility, using the inverse of Make Object Accessible in the Accessibility panel. If silent is true, Make Object Accessible is unchecked; if silent is false, Make Object Accessible is checked.
  - This property is not available for graphic objects.
    \*/
    silent: boolean
    /\*\*
  - Gives the symbol type and matches the Behavior value shown by the Create New Symbol and Convert To Symbol dialog boxes. Allowed strings: "button", "movie clip", and "graphic".
    \*/
    symbolType: string
    /\*\*
  - Matches the Tab index field in the Accessibility panel and creates the tab order used when the user presses the Tab key. Graphic symbols do not expose this property.
    \*/
    tabIndex: number
    /\*\*
  - When the Color Effect Property Inspector uses style tint (colorMode == 'tint'), returns the tint color. Any other colorMode makes this property error.
    \*/
    tintColor: string | number
    /\*\*
  - When the Color Effect Property Inspector uses style tint (colorMode == 'tint'), returns the tint percentage from -100 to 100. Any other colorMode makes this property error.
    \*/
    tintPercent: number
    /\*\*
  - Chooses 24 bit mode when true, or 32 bit mode with alpha when false. When true, the instance uses its backgroundColor value.
    \*/
    useBackgroundColor: boolean
    /\*\*
  - Sets an object's Visible property on (true) or off (false).
    \*/
    visible: boolean
    }
