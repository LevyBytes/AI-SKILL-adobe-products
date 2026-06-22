# Animate (part 10)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Text represents one text item in a document, and its properties apply across the complete text block.
- For properties on an individual text run inside the text field, consult the Property summary for the TextAttrs object. To adjust a selection inside a text field, call document.setElementTextAttr() with a text range or operate on the current selection.
- For general properties on the selected text field, use document.setElementProperty(). This example assigns 50 to the x value of the selected text field's registration point:
- fl.getDocumentDOM().setElementProperty("x", 50);
  \*/
  declare class Text extends Element {
  /\*\*
  - Corresponds to the Name field in the Accessibility panel. Screen readers use this name when announcing the object. Dynamic text cannot use this property.
    \*/
    accName: string
    /\*\*
  - Sets the anti-aliasing sharpness for text rendering. Larger values draw crisper text, while 0 gives the standard sharpness level. Use it only when text.fontRenderingMode is set to customThicknessSharpness.
    \*/
    antiAliasSharpness: number
    /\*\*
  - Sets the anti-aliasing thickness for text rendering. Larger values draw heavier text, while 0 gives the standard thickness level. Use it only when text.fontRenderingMode is set to customThicknessSharpness.
    \*/
    antiAliasThickness: number
    /\*\*
  - Controls automatic expansion. For static text fields, true expands the bounding width so all text is visible. For dynamic or input text fields, true expands both bounding width and bounding height to reveal all text.
    \*/
    autoExpand: boolean
    /\*\*
  - Controls whether Flash displays a border around the text; true shows the border.
    \*/
    border: boolean
    /\*\*
  - Matches the Description field in the Accessibility panel. Screen readers announce the description.
    \*/
    description: string
    /\*\*
  - Lists characters to embed, matching content entered through the Character Embedding dialog box.
  - Only dynamic or input text supports this property; other text types generate a warning.
  - Note: Starting with Flash Professional CS5, font embedding moved to document-level font items instead of text objects. Use fontItem.embeddedCharacters on page 310 instead of text.embeddedCharacters.
    \*/
    embeddedCharacters: string
    /\*\*
  - Contains delimited integers matching selectable items in the Character Embedding dialog box. It works only with dynamic or input text and is ignored for static text.
  - The values correspond to the XML file in the Configuration/Font Embedding folder.
  - Note: Starting with Flash Professional CS5, font embedding moved to document-level font items instead of text objects. Use fontItem.embedRanges on page 311 instead of text.embedRanges.
    \*/
    embedRanges: string
    /\*\*
  - Enables embedding of variant glyphs when true and disables it when false. It works only with dynamic or input text, is ignored for static text, and defaults to false.
  - Note: Starting with Flash Professional CS5, font embedding moved to document-level font items instead of text objects. Use fontItem.embedVariantGlyphs on page 311 instead of text.embedVariantGlyphs. In Flash Professional CS5, text.embedVariantGlyphs has no effect: Flash embeds variant glyphs for TLF text unconditionally and does not embed them for Classic text.
    \*/
    embedVariantGlyphs: boolean
    /\*\*
  - Contains filters applied to the text element. To update filter settings, retrieve this array, change the individual filter properties, and assign the array back with the new values.
    \*/
    filters: Filter[]
    /\*\*
  - Chooses the text rendering mode. The setting affects display on both the Stage and in Flash Player. Acceptable values are described below:
  - device => Uses device fonts to render the text.
  - bitmap => Draws aliased text as a bitmap, similar to a pixel font.
  - standard => Uses the standard Flash MX 2004 anti-aliasing approach. This setting works best for animated, very large, or skewed text.
  - advanced => Uses the advanced anti-aliasing font rendering technology introduced in Flash 8, producing better anti-aliasing and readability, especially at small sizes.
  - customThicknessSharpness => Allows custom sharpness and thickness settings while using the advanced anti-aliasing font rendering technology introduced in Flash 8.
    \*/
    fontRenderingMode: string
    /\*\*
  - Returns the character count in the Text object.
    \*/
    readonly length: number
    /\*\*
  - Chooses the line behavior. Acceptable values are "single line", "multiline", "multiline no wrap", "password".
    \*/
    lineType: string
    /\*\*
  - Caps the number of characters a user may enter in this Text object.
  - Note: Only input text supports this property; other text types generate a warning.
    \*/
    maxCharacters: number
    /\*\*
  - Sets text-field orientation. Allowed strings: "horizontal", "vertical left to right" , and "vertical right to left".
  - Only static text supports this property; other text types generate a warning.
    \*/
    orientation: string
    /\*\*
  - Controls HTML rendering. When true, Flash treats the text as HTML and interprets embedded HTML tags. Only dynamic or input text supports this property; other text types generate a warning.
    \*/
    renderAsHTML: boolean
    /\*\*
  - Controls whether scrolling is available for the text when true.
  - This property works only with dynamic or input text; static text generates a warning.
    \*/
    scrollable: boolean
    /\*\*
  - Controls whether the text can be selected when true.
  - Input text remains selectable in all cases. Setting this property to false on input text makes Flash generate a warning.
    \*/
    selectable: boolean
    /\*\*
  - Holds the zero-based ending position of a text subselection. For more information, see text.selectionStart.
    \*/
    selectionEnd: number
    /\*\*
  - Holds the zero-based starting position of a text subselection. Combine it with text.selectionEnd to select a character range; selected characters extend up to but exclude text.selectionEnd. Related property: text.selectionEnd.
  - With an insertion point or no active selection, text.selectionEnd equals text.selectionStart.
  - If text.selectionStart is set higher than text.selectionEnd, Flash sets text.selectionEnd to text.selectionStart and clears the selection.
    \*/
    selectionStart: number
    /\*\*
  - Matches the Shortcut field in the Accessibility panel. Screen readers announce the shortcut. Dynamic text cannot use this property.
    \*/
    shortcut: string
    /\*\*
  - Controls object accessibility through inverse logic relative to Make Object Accessible in the Accessibility panel. When silent is true, Make Object Accessible is deselected; when false, Make Object Accessible is selected.
    \*/
    silent: boolean
    /\*\*
  - Matches the Tab Index field in the Accessibility panel and determines the order in which objects are reached when the user presses the Tab key.
    \*/
    tabIndex: number
    /\*\*
  - Contains the TextRun objects for this text (see TextRun object).
    \*/
    readonly textRuns: TextRun[]
    /\*\*
  - Identifies the text field type. Acceptable values are "static", "dynamic", and "input".
    \*/
    textType: string
    /\*\*
  - Controls device-font drawing; true makes Flash draw text using device fonts.
    \*/
    useDeviceFonts: boolean
    /\*\*
  - Stores the variable name associated with the Text object. Only dynamic or input text supports this property; other text types generate a warning.
  - Support is limited to ActionScript 1.0 and ActionScript 2.0.
    \*/
    variableName: string
    /\*\*
  - Gets the attrName attribute for text selected by the optional startIndex and endIndex parameters. When the attribute differs within the requested range, Flash returns undefined. Omitting startIndex and endIndex uses the complete text range. Supplying only startIndex uses the single character at that position. Supplying both startIndex and endIndex uses the range from startIndex up to, but not including, endIndex.
  - @returns The value associated with attrName.
  - @param attrName Names the TextAttrs object property to retrieve. For possible attrName values, see the Property summary for the TextAttrs object.
  - @param startIndex Zero-based index of the first character. This parameter is optional.
  - @param endIndex Optional end position for the text range that begins at startIndex and stops before endIndex.
    \*/
    getTextAttr(attrName: string, startIndex?: number, endIndex?: number): any | undefined
    /\*\*
  - Returns text from the requested range. Without startIndex and endIndex, it returns the entire text string. With only startIndex, it returns text from that index through the end of the field. With both startIndex and endIndex, it returns text from startIndex up to, but not including, endIndex.
  - @returns A string containing text from the requested range.
  - @param startIndex Zero-based index of the first character. This parameter is optional.
  - @param endIndex Optional end position for the text range that begins at startIndex and stops before endIndex.
    \*/
    getTextString(startIndex?: number, endIndex?: number): string
    /\*\*
  - Sets the attrName attribute for text selected by startIndex and endIndex to attrValue. This can update attributes across TextRun elements (see TextRun object) or within parts of existing TextRun elements. It may change both positions and the count of TextRun elements in this object's text.textRuns array (see text.textRuns).
  - If the optional parameters are omitted, the method uses the full character range of the Text object. Supplying only startIndex targets the single character at that position. Supplying both startIndex and endIndex targets the range from startIndex up to, but not including, the character at endIndex.
  - @param attrName Names the TextAttrs object property to change.
  - @param attrValue Provides the new value for the TextAttrs object property.
  - For possible attrName and attrValue values, see the Property summary for the TextAttrs object.
  - @param startIndex Optional zero-based index of the first character in the array.
  - @param endIndex Optional end-point index in the selected text string, beginning at startIndex and stopping before endIndex.
    \*/
    setTextAttr(attrName: string, attrValue: any, startIndex?: number, endIndex?: number): void
    /\*\*
  - Replaces or inserts text within this Text object. If both optional parameters are omitted, the whole Text object is replaced. If only startIndex is supplied, the specified string is inserted at startIndex. If both startIndex and endIndex are supplied, the specified string replaces text from startIndex up to, but not including, endIndex.
  - @param text Characters to insert into this Text object.
  - @param startIndex Zero-based index in the string where insertion occurs. This parameter is optional.
  - @param endIndex Optional end-point index in the selected text string. The new text overwrites content from startIndex through the character before endIndex.
    \*/
    setTextString(text: string, startIndex?: number, endIndex?: number): void
    }

/\*\*

- TextRun represents a span of characters whose attributes match every property in the TextAttrs object. Text exposes these objects through text.textRuns.
  \*/
  declare class TextRun {
  /\*\*
  - Text stored by this TextRun object.
    \*/
    characters: string
    /\*\*
  - TextAttrs object that stores the attributes for this text run.
    \*/
    textAttrs: TextAttrs
    }

/\*\*

- TextAttrs contains every text property that can be assigned to a subselection. TextRun exposes this object through textRun.textAttrs.
  \*/
  declare class TextAttrs {
  /\*\*
  - Tells Flash to draw text with a method optimized for improving small-text legibility.
    \*/
    aliasText: boolean
    /\*\*
  - Sets paragraph justification. Acceptable values are "left" , "center", "right", and "justify".
    \*/
    alignment: string
    /\*\*
  - Determines whether Flash applies pair kerning information from the font(s) when kerning text; true uses it and false ignores it.
    \*/
    autoKern: boolean
    /\*\*
  - Controls bold styling; true displays text with the bold version of the font.
    \*/
    bold: boolean
    /\*\*
  - Sets the text baseline position. Allowed strings: "normal", "subscript", and "superscript". Only static text supports this property.
    \*/
    characterPosition: string
    /\*\*
  - Sets character spacing. Range: -60 through 60.
  - Only static text supports this property; other text types generate a warning.
    \*/
    characterSpacing: number
    /\*\*
  - Stores the font name, for example "Arial".
    \*/
    face: string
    /\*\*
  - Defines the fill color in any one of these forms:
  - String format: "#RRGGBB" or "#RRGGBBAA"
  - Hexadecimal-number format: 0xRRGGBB
  - Integer form: decimal equivalent of a hexadecimal number
    \*/
    fillColor: string | number
    /\*\*
  - Sets paragraph indentation. Acceptable values are -720 through 720.
    \*/
    indent: number
    /\*\*
  - Controls italic styling; true displays text with the italic version of the font.
    \*/
    italic: boolean
    /\*\*
  - Sets the left margin for the paragraph. Range: 0 through 720.
    \*/
    leftMargin: number
    /\*\*
  - Sets spacing between characters. Range: -60 through 60.
  - Only static text supports this property; other text types generate a warning.
    \*/
    letterSpacing: number
    /\*\*
  - Sets paragraph line spacing, or leading. Acceptable values are -360 through 720.
    \*/
    lineSpacing: number
    /\*\*
  - Sets the right margin for the paragraph. Range: 0 through 720.
    \*/
    rightMargin: number
    /\*\*
  - Controls character rotation; true rotates the text characters 90 degrees. Default: false. Use it only with static text that has a vertical orientation; other text types generate a warning.
    \*/
    rotation: boolean
    /\*\*
  - Sets the font size.
    \*/
    size: number
    /\*\*
  - Stores the text field's target property. This property works only with static text.
    \*/
    target: string
    /\*\*
  - Stores the text field's URL property. This property works only with static text.
    \*/
    url: string
    }

/\*\*

- Shape extends Element. Compared with the drawing APIs, Shape gives scripts finer control while creating or editing Stage geometry, which is needed for useful effects and other drawing commands (see Element object).
- Any Shape method or property that modifies a shape or one of its child parts must run between shape.beginEdit() and shape.endEdit() calls.
  \*/
  declare class Shape extends Element {
  /\*\*
  - Contour objects that belong to the shape (see Contour object).
    \*/
    readonly contours: Contour[]
    /\*\*
  - Edge objects for the shape (see Edge object).
    \*/
    readonly edges: Edge[]
    /\*\*
  - True indicates that the shape is a drawing object.
    \*/
    readonly isDrawingObject: boolean
    /\*\*
  - True indicates that the shape floats above the shape in the parent frame or group. In that state, the shape has its own matrix, similar to a drawing object.
    \*/
    readonly isFloating: boolean
    /\*\*
  - True indicates that the shape is a group. A group may include elements such as text elements and symbols, but the group itself is still treated as a shape, so shape.isGroup can be used regardless of the contained element types.
    \*/
    readonly isGroup: boolean
    /\*\*
  - True indicates that the shape is a primitive Oval object created with the Oval Primitive tool.
    \*/
    readonly isOvalObject: boolean
    /\*\*
  - True indicates that the shape is a primitive Rectangle object created with the Rectangle Primitive tool.
    \*/
    readonly isRectangleObject: boolean
    /\*\*
  - Objects in the selected group. This property is available only when shape.isGroup is true. Raw shapes inside the group are excluded from shape.members.
  - For example, a group with three drawing objects and three raw shapes gives shape.members three entries, one for each drawing object. A group containing only raw shapes returns an empty array.
    \*/
    members: any[]
    /\*\*
  - Number of cubic segments in the shape.
    \*/
    readonly numCubicSegments: number
    /\*\*
  - Vertex objects for the shape (see Vertex object).
    \*/
    readonly vertices: Vertex[]
    /\*\*
  - Returns points defining a cubic curve.
  - @returns Points defining the cubic curve for the Edge object that matches the specified cubicSegmentIndex (see edge.cubicSegmentIndex).
  - @param cubicSegmentIndex Integer selecting the cubic segment whose points should be returned.
    \*/
    getCubicSegmentPoints(cubicSegmentIndex: number): Point[]
    /\*\*
  - Starts an edit session. Call this method before any commands that modify the Shape object or its subordinate parts.
    \*/
    beginEdit(): void
    /\*\*
  - Removes the specified edge. Call shape.beginEdit() before invoking this method.
  - @param index Zero-based index of the edge to remove from shape.edges. Calling this method changes shape.edges.length.
    \*/
    deleteEdge(index: number): void
    /\*\*
  - Ends the shape edit session. Changes made to the Shape object or its subordinate parts are then applied to the shape. Call this method after commands that modify the Shape object or any subordinate part.
    \*/
    endEdit(): void
    }

/\*\*

- Oval is a shape drawn with the Oval Primitive tool. Use shape.isOvalObject when checking whether an item is an Oval object.
  \*/
  declare class Oval extends Shape {
  /\*\*
  - Reports whether the Close Path check box in the Property inspector is selected. When the object's start angle and end angle are equal, changing this property has no effect until those angle values change.
  - To set this value, use document.setOvalObjectProperty().
    \*/
    readonly closePath: boolean
    /\*\*
  - Gives the Oval object's end angle. Range: 0 to 360.
  - Assign it with document.setOvalObjectProperty().
    \*/
    readonly endAngle: number
    /\*\*
  - Gives the Oval object's inner radius as a percentage. Range: 0 to 99.
  - Assign it with document.setOvalObjectProperty().
    \*/
    readonly innerRadius: number
    /\*\*
  - Gives the Oval object's start angle. Range: 0 to 360.
  - Assign it with document.setOvalObjectProperty().
    \*/
    readonly startAngle: number
    }

/\*\*

- Rectangle is a shape drawn with the Rectangle Primitive tool. Use shape.isRectangleObject when checking whether an item is a Rectangle object.
  \*/
  declare class Rectangle extends Shape {
  /\*\*
  - Sets the Rectangle object's bottom-left corner radius. If RectangleObject.lockFlag is true, attempts to change this value have no effect.
  - To set this value, use document.setRectangleObjectProperty().
    \*/
    readonly bottomLeftRadius: number
    /\*\*
  - Sets the Rectangle object's bottom-right corner radius. If RectangleObject.lockFlag is true, attempts to change this value have no effect.
  - To set this value, use document.setRectangleObjectProperty().
    \*/
    readonly bottomRightRadius: number
    /\*\*
  - Controls whether rectangle corners can use separate radius values. If true, every corner uses the value assigned to RectangleObject.topLeftRadius. If false, each corner radius can be changed independently.
  - To set this value, use document.setRectangleObjectProperty().
    \*/
    readonly lockFlag: number
    /\*\*
  - Sets every rectangle corner radius when RectangleObject.lockFlag is true, or only the top-left corner radius when RectangleObject.lockFlag is false.
  - Assign it with document.setRectangleObjectProperty().
    \*/
    readonly topLeftRadius: number
    /\*\*
  - Sets the Rectangle object's top-right corner radius. If RectangleObject.lockFlag is true, attempts to change this value have no effect.
  - To set this value, use document.setRectangleObjectProperty().
    \*/
    readonly topRightRadius: number
    }

/\*\*

- Contour represents a closed path made from half edges along a shape boundary.
  \*/
  declare class Contour {
  /\*\*
  - A Fill object.
    \*/
    fill: Fill
    /\*\*
  - True means the contour encloses an area; false means it does not.
    \*/
    readonly interior: boolean
    /\*\*
  - Indicates contour orientation. The integer is -1 for counterclockwise, 1 for clockwise, and 0 when the contour has no area.
    \*/
    readonly orientation: number
    /\*\*
  - Returns a HalfEdge object on the selection's contour.
  - @returns A HalfEdge object
    \*/
    getHalfEdge(): HalfEdge
    }

/\*\*

- HalfEdge is the directed side of an edge on a Shape object. Each edge has two half edges. Scripts can traverse a shape's contours by walking through these half edges; for example, starting from one half edge, a script can follow every half edge around a contour and arrive back at the starting half edge.
- Half edges have an order. One half edge covers one side of the edge, and the other covers the opposite side.
  \*/
  declare class HalfEdge {
  /\*\*
  - Unique integer identifier for the HalfEdge object.
    \*/
    readonly id: number
    /\*\*
  - Returns the Edge object for this HalfEdge object. See Edge object.
    \*/
    getEdge(): Edge
    /\*\*
  - Returns the next half edge on the current contour.
  - Note: Half edges carry direction and sequence order, but edges do not.
    \*/
    getNext(): HalfEdge
    /\*\*
  - Returns the HalfEdge object on the edge's opposite side.
    \*/
    getOppositeHalfEdge(): HalfEdge
    /\*\*
  - Returns the preceding HalfEdge object on the current contour.
  - Note: Half edges carry direction and sequence order, but edges do not.
    \*/
    getPrev(): HalfEdge
    /\*\*
  - Returns the Vertex object at this HalfEdge object's head. See Vertex object.
    \*/
    getVertex(): Vertex
    }

/\*\*

- Vertex is the part of the shape data structure that stores coordinate data.
  \*/
  declare class Vertex {
  /\*\*
  - Vertex x location, measured in pixels.
    \*/
    readonly x: number
    /\*\*
  - Vertex y location, measured in pixels.
    \*/
    readonly y: number
    /\*\*
  - Returns a HalfEdge object that shares this vertex.
    \*/
    getHalfEdge(): HalfEdge
    /\*\*
  - Sets the vertex location. Call shape.beginEdit() before invoking this method.
  - @param x Floating-point x coordinate for the vertex position, in pixels.
  - @param y Floating-point y coordinate for the vertex position, in pixels.
    \*/
    setLocation(x: number, y: number): void
    }

/\*\*

- Shape edges on the Stage are modeled by Edge.
  \*/
  declare class Edge {
  /\*\*
  - Integer index for one cubic segment on this edge; see shape.getCubicSegmentPoints().
    \*/
    readonly cubicSegmentIndex: number
    /\*\*
  - Integer identifier assigned uniquely to this edge.
    \*/
    readonly id: number
    /\*\*
  - Integer flag with value 0 or 1. When the value is 1, the edge is a straight line, and the middle control point bisects the segment between the two endpoints.
    \*/
    readonly isLine: number
    /\*\*
  - Stroke object associated with the edge.
    \*/
    stroke: Stroke
    /\*\*
  - Provides a point object positioned at one requested control point on the edge.
  - @returns The requested control point.
  - @param i Integer selector for the control point to read: 0 selects the first control point, 1 selects the middle control point, and 2 selects the end control point. When edge.isLine is true, the middle control point is placed at the midpoint of the segment from the beginning control point to the ending control point.
    \*/
    getControl(i: number): Point
    /\*\*
  - Provides a HalfEdge object.
  - @returns A HalfEdge object.
  - @param index Integer selector for the half edge to retrieve. Acceptable values: 0 selects first half edge; 1 selects second half edge.
    \*/
    getHalfEdge(index: number): HalfEdge
    /\*\*
  - Moves one edge control point. Before calling this method, first call shape.beginEdit(). See shape.beginEdit().
  - @param index Integer selector for the control point to change. Values 0, 1, and 2 address the beginning, middle, and end control points, respectively.
  - @param x Floating-point horizontal coordinate for the control point. In edit or edit-in-place mode on the Stage, the coordinate is measured relative to the object being edited; otherwise it is measured relative to the Stage.
  - @param y Floating-point vertical coordinate for the control point. In edit or edit-in-place mode on the Stage, the coordinate is measured relative to the object being edited; otherwise it is measured relative to the Stage.
    \*/
    setControl(index: number, x: number, y: number): void
    /\*\*
  - Divides the edge into two pieces. Before using this method, call shape.beginEdit().
  - @param t Floating-point split position from 0 through 1. The value 0 means one endpoint, and 1 means the other endpoint. Passing 0.5 cuts a line at its exact center; for a curve, 0.5 is the parametric midpoint.
    \*/
    splitEdge(t: number): void
    }
