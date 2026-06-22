# Animate (part 12)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- A swfPanel object models a Window SWF panel. Window SWF panels are SWF files that provide applications runnable from the Flash authoring environment, and they appear under Window > Other Panels. By default, these panels are kept in a Configuration folder subfolder (see "Saving JSFL files" on page 2).
- On Windows XP, for example, the folder is boot drive\Documents and Settings\user\Local Settings\Application Data\Adobe\Flash CS4\language\Configuration\WindowSWF. A sample Window SWF panel is available; see "Sample Trace Bitmap panel" on page 17 (https://help.adobe.com/archive/en_US/flash/cs5/flash_cs5_extending.pdf). Registered Window SWF panels are listed in fl.swfPanels.
  \*/
  declare class SWFPanel {
  /\*\*
  - String containing swfPanel's DPI scale factor (scaleX). SwfPanel can adapt its contents based on this scale factor.
    \*/
    readonly dpiScaleFactorX: string
    /\*\*
  - String containing swfPanel's DPI scale factor (scaleY). SwfPanel can adapt its contents based on this scale factor.
    \*/
    readonly dpiScaleFactorY: string
    /\*\*
  - String name for the specified Window SWF panel.
    \*/
    readonly name: string
    /\*\*
  - String path to the SWF file used by the specified Window SWF panel.
    \*/
    readonly path: string
    /\*\*
  - Communicates from the authoring environment to the SWF panel together with ActionScript ExternalInterface.addCallback() and MMExecute().
  - Example
  - In this example, ActionScript and JavaScript set up a Window SWF panel, then the authoring environment sends messages to it.
  - 1 Start with an ActionScript 3.0 FLA file, use a medium gray color, and make it 400 pixels wide and 250 pixels high.
  - 2 In the center of the Stage, place a dynamic text box, set Instance name to myTextField, and enter "Status" as the text.
  - 3 Configure the other text box properties like this:
  - - Alignment: Center
  - - Size: 355 pixels wide and 46 pixels high
  - - Font: Times New Roman, 28 points, red
  - 4 Insert this listing:
  - // Here's the callback function to be called from JSAPI
  - function callMeFromJavascript(arg:String):void {
  - try {
  - var name:String = String(arg);
  - myTextField.text = name;
  - } catch (e:Error) {}
  - }
  - // Expose the callback function as "callMySWF"
  - ExternalInterface.addCallback("callMySWF", callMeFromJavascript);
  - // run the JSAPI to wire up the callback
  - MMExecute("fl.runScript( fl.configURI + \"WindowSWF/fileOp.jsfl\" );");
  - MMExecute("fl.trace(\"AS3 File Status Panel Initialized\");");
  - 5 Save the file as fileStatus.fla, then publish the SWF file using the default Publish settings.
  - 6 Close Flash.
  - 7 Copy fileStatus.swf to the WindowSWF folder, which is a Configuration folder subfolder (see "Saving JSFL files" on page 2). On Windows XP, for example, the folder is boot drive\Documents and Settings\user\Local Settings\Application Data\Adobe\Flash CS4\language\Configuration\WindowSWF.
  - 8 Start Flash.
  - 9 Create a JSFL file with the following code:
  - function callMyPanel(panelName, arg) {
  - if(fl.swfPanels.length > 0){
  - for(x = 0; x < fl.swfPanels.length; x++){
  -      // look for a SWF panel of the specified name, then call the specified AS3 function
  -      // in this example, the panel is named "test" and the AS3 callback is "callMySWF"
  -      if(fl.swfPanels[x].name == panelName) // name busted?
  -      {
  -        fl.swfPanels[x].call("callMySWF",arg);
  -        break;
  -      }
  - }
  - } else {
  - fl.trace("no panels");
  - }
  - }
  - // define the various handlers for events
  - documentClosedHandler = function () { callMyPanel("fileStatus", "Document Closed");};
  - fl.addEventListener("documentClosed", documentClosedHandler );
  - var dater = "New Document";
  - documentNewHandler = function () { callMyPanel("fileStatus", dater );};
  - fl.addEventListener("documentNew", documentNewHandler );
  - documentOpenedHandler = function () { callMyPanel("fileStatus", "Document Opened");};
  - fl.addEventListener("documentOpened", documentOpenedHandler );
  - 10 Save the JSFL file in the same directory as the SWF file, with the name fileOp.jsfl.
  - 11 Choose Window > Other panels > fileStatus.
  - After that, creating, opening, and closing FLA files causes the fileStatus panel to show a message for the action performed.
  - @returns null, or a string produced by the function call. Empty string is also possible.
  - @param request Function parameters; see "Description" and "Example" below.
    \*/
    call(request: any): string | null | any
    /\*\*
  - Loads the SWF panel content again.
    \*/
    reload(): void
    /\*\*
  - Gives keyboard focus to the specified SWF panel.
    \*/
    setFocus(): void
    }

/\*\*

- fl.tools provides access to the Tools object from the flash object. tools.toolObjs contains an array of ToolObj objects, and tools.activeTool returns the ToolObj object for the active tool. See also ToolObj object and the Extensible tools list in "Top-Level Functions and Methods" on page 18.
- Note: These properties and methods are only for creating extensible tools.
  \*/
  declare class Tools {
  /\*\*
  - Provides the ToolObj object for the active tool.
    \*/
    readonly activeTool: ToolObj
    /\*\*
  - Boolean value indicating whether the Alt key is pressed. The value is true while Alt is down and false otherwise.
    \*/
    readonly altIsDown: boolean
    /\*\*
  - Boolean value that is true while the Control key is down and false otherwise.
    \*/
    readonly ctlIsDown: boolean
    /\*\*
  - Boolean value that is true while the left mouse button is down and false otherwise.
    \*/
    readonly mouseIsDown: boolean
    /\*\*
  - Point for the most recent mouse-down event position on the Stage. tools.penDownLoc has x and y properties for the mouse pointer's x, y location.
    \*/
    readonly penDownLoc: Point
    /\*\*
  - Point for the current mouse pointer location. tools.penLoc has x and y properties for the mouse pointer's x,y location.
    \*/
    readonly penLoc: Point
    /\*\*
  - Boolean value that is true while the Shift key is down and false otherwise.
    \*/
    readonly shiftIsDown: boolean
    /\*\*
  - Array of ToolObj objects (see ToolObj object).
    \*/
    readonly toolObjs: ToolObj[]
    /\*\*
  - Accepts two points and returns a new point that has been adjusted or constrained. If Shift is pressed when the command runs, the result follows either a 45º constrain, useful for a line with an arrowhead, or an aspect-ratio constraint, for example while drawing a perfect square using the Rectangle tool.
  - @returns Adjusted or constrained point.
  - @param pt1 Point representing the starting-click point.
  - @param pt2 Point representing the drag-to point.
    \*/
    constrainPoint(pt1: Point, pt2: Point): Point
    /\*\*
  - Provides the key pressed most recently.
  - @returns Integer value of the key.
    \*/
    getKeyDown(): number
    /\*\*
  - Changes the pointer to the requested appearance.
  - @param cursor Integer pointer appearance code, using this list:
  - - 0 = Plus cursor (+)
  - - 1 = black arrow
  - - 2 = white arrow
  - - 3 = four-way arrow
  - - 4 = two-way horizontal arrow
  - - 5 = two-way vertical arrow
  - - 6 = X
  - - 7 = hand cursor
      \*/
      setCursor(cursor: number): void
      /\*\*
  - Given pt, returns either pt or an adjusted/snap-corrected point near the closest geometric object. If snapping is turned off in the Flash View menu, the original point is returned.
  - @returns Adjusted or snapped point near the closest geometric object.
  - @param pt Location to evaluate when returning a snap point.
    \*/
    snapPoint(pt: Point): Point
    }

/\*\*

- A ToolObj instance is one entry in the Tools panel. Access it through the Tools object by using tools.toolObjs or tools.activeTool.
  \*/
  declare class ToolObj {
  /\*\*
  - Integer depth for this tool's place inside the Tools panel pop-up menu. Only extensible-tool creation uses this property.
    \*/
    depth: number
    /\*\*
  - Integer value -1. Extensible-tool creation is the only use; when iconID is -1, Flash does not look up an icon, so the tool script supplies the Tools panel icon through toolObj.setIcon().
    \*/
    iconID: number
    /\*\*
  - Integer position for the tool inside the Tools panel; used only during extensible-tool creation.
    \*/
    readonly position: number
    /\*\*
  - Turns a Property inspector control on or off for extensible tools.
  - @param control String naming the control to toggle. Available names come from the Property inspector assigned to this tool; see toolObj.setPI().
  - Shape Property inspector controls:
  - stroke, fill
  - Text Property inspector controls:
  - type, font, pointsize, color, bold, italic, direction, alignLeft, alignCenter, alignRight, alignJustify, spacing, position, autoKern, small, rotation, format, lineType, selectable, html, border, deviceFonts, varEdit, options, link, maxChars, target
  - Movie Property inspector controls:
  - size, framerate, publish, player, background, profile
  - @param bEnable Boolean selector: true enables the control, false disables it.
    \*/
    enablePIControl(control: string, bEnable: boolean): void
    /\*\*
  - Names the PNG file that should serve as the Tools panel icon; this applies only to extensible tools.
  - @param file String containing the PNG file name for the icon. Put that PNG beside the JSFL file.
    \*/
    setIcon(file: string): void
    /\*\*
  - Sets the pop-up menu text used as this tool's name; intended for extensible tools.
  - @param menuStr String for the tool name shown in the pop-up menu.
    \*/
    setMenuString(menuStr: string): void
    /\*\*
  - Links an XML file to the tool. That file defines options for the modal panel opened by the Property inspector's Options button. In practice, call this from configureTool() in the JSFL file. See configureTool().
  - Example: PolyStar.xml declares three options for the Polygon tool:
  - @param xmlFile String naming the XML file that describes the tool's options. Keep that XML beside its JSFL.
  - <properties>
  - <property name="Style"
  - variable="style"
  - list="polygon,star"
  - defaultValue="0"
  - type="Strings"/>
  - <property name="Number of Sides"
  - variable="nsides"
  - min="3"
  - max="32"
  - defaultValue="5"
  - type="Number" />
  - <property name="Star point size"
  - variable="pointParam"
  - min="0"
  - max="1"
  - defaultValue=".5"
  - type="Double" />
  - </properties>
     */
    setOptionsFile(xmlFile: string): void
    /**
  - Selects the Property inspector opened when this tool becomes active. Extensible tools use this method; acceptable values are "shape" (the default), "text", and "movie".
  - @param pi String naming the Property inspector to open for this tool.
    \*/
    setPI(pi: string): void
    /\*\*
  - Gives the tool a name for Tools panel configuration. This is only for extensible tools; the XML layout file uses the name while Flash builds the Tools panel, and the Flash UI does not show it.
  - @param name String containing the tool name.
    \*/
    setToolName(name: string): void
    /\*\*
  - Defines the tooltip shown while the pointer rests over the tool icon; used only for extensible tools.
  - @param toolTip String to use as this tool's tooltip.
    \*/
    setToolTip(toolTip: string): void
    /\*\*
  - Changes visibility for a Property inspector control; this method applies only to extensible tools.
  - @param control String naming the control whose visibility should change. This is for extensible tools only; allowed names come from the Property inspector used by the tool (see toolObj.setPI()).
  - Shape Property inspector controls: stroke, fill
  - Text Property inspector controls:
  - type, font, pointsize, color, bold, italic, direction, alignLeft, alignCenter, alignRight, alignJustify, spacing, position, autoKern, small, rotation, format, lineType, selectable, html, border, deviceFonts, varEdit, options, link, maxChars, target
  - Movie Property inspector controls:
  - size, publish, background, framerate, player, profile
  - @param bShow Boolean selector for visibility of the named control: true shows it, false hides it.
    \*/
    showPIControl(control: string, bShow: boolean): void
    /\*\*
  - Call this from configureTool() in an extensible tool's JavaScript file when the active tool should display free transform handles. Extensible-tool creation is the only intended use.
  - @param bShow Boolean selector for free transform handles on the current tool: true displays them, false hides them.
    \*/
    showTransformHandles(bShow: boolean): void
    }

declare interface XMLUIObj {
label: string
value?: string
}

/\*\*

- Flash 8 can display custom dialog boxes written with a subset of XML User Interface Language (XUL). An XML User Interface (XMLUI) dialog can support Flash extensibility features such as commands and behaviors by presenting UI for custom features. The XMLUI object lets code read or change dialog properties and finish the dialog with accept or cancel. XMLUI methods are callable from callbacks, including button oncommand handlers.
- Create dialog.xml and open it from the JavaScript API through document.xmlPanel(). To obtain the object for the active XMLUI dialog box, read fl.xmlui.
  \*/
  declare class XMLUI {
  /\*\*
  - Closes the active XMLUI dialog box as accepted, matching an OK button click.
    \*/
    accept(): void
    /\*\*
  - Closes the active XMLUI dialog box as canceled, matching a Cancel button click.
    \*/
    cancel(): void
    /\*\*
  - Reads one property value from the active XMLUI dialog box.
  - @returns String value for the requested property. Boolean-style results arrive as the strings "true" or "false".
  - @param controlPropertyName String naming the XMLUI property to read.
    \*/
    get(controlPropertyName: string): string
    /\*\*
  - Gets the label/value pair for the selected row in a ListBox or ComboBox identified by controlPropertyName.
  - @returns Object for the current item in the control named by controlPropertyName.
  - @param controlPropertyName String naming the property whose control-item element should be returned.
    \*/
    getControlItemElement(controlPropertyName: string): XMLUIObj
    /\*\*
  - Reports whether the control is enabled or dimmed.
  - @returns true when the control is enabled; otherwise false.
  - @param controlID String containing the ID attribute of the control whose status is requested.
    \*/
    getEnabled(controlID: string): boolean
    /\*\*
  - Reports whether the control is visible or hidden.
  - @returns true when the control is visible; false when it is hidden.
  - @param controlID String containing the ID attribute of the control whose visibility is requested.
    \*/
    getVisible(controlID: string): boolean
    /\*\*
  - Changes one property value on the active XMLUI dialog box.
  - @param controlPropertyName String naming the XMLUI property to change.
  - @param value String holding the new value for that XMLUI property.
    \*/
    set(controlPropertyName: string, value: string): void
    /\*\*
  - Updates the label/value pair for the selected row in the ListBox or ComboBox named by controlPropertyName.
  - @param controlPropertyName String naming the control item element being set.
  - @param elementItem JavaScript object with a string label property and optional string value property. If value is missing, it is added and set equal to label.
    \*/
    setControlItemElement(controlPropertyName: string, elementItem: XMLUIObj): void
    /\*\*
  - Empties the ListBox or ComboBox identified by controlID, then fills it with the label/value pairs in elementItemArray.
  - @param controlID String containing the ID attribute of the control to update.
  - @param elementItemArray Array of JavaScript objects with string label properties and optional string value properties. Missing value properties are created and set equal to label.
    \*/
    setControlItemElements(controlID: string, elementItemArray: XMLUIObj[]): void
    /\*\*
  - Enables a control or disables/dims it.
  - @param controlID String containing the ID attribute of the control to enable or disable.
  - @param enable Boolean selector: true enables the control, false disables/dims it.
    \*/
    setEnabled(controlID: string, enable: boolean): void
    /\*\*
  - Makes a control visible or hides it.
  - @param controlID String containing the ID attribute of the control to show or hide.
  - @param visible Boolean selector: true shows the control, false hides it.
    \*/
    setVisible(controlID: string, visible: boolean): void
    }

/**\*** Classes **\***/

/\*\*

- The actionsPanel object represents the displayed Actions panel and is exposed from the flash object; see fl.actionsPanel.
  \*/
  declare class ActionsPanel {
  /\*\*
  - Gets the current text selection from the Actions panel.
  - @returns String containing the current Actions panel selection.
    \*/
    getSelectedText(): string
    /\*\*
  - Gets all text from the Actions panel.
  - @returns String containing the full Actions panel text.
    \*/
    getText(): string
    /\*\*
  - Reports whether the Actions panel currently has selected text.
  - @returns Boolean result: true when text is selected in the Actions panel, false when no selection exists.
    \*/
    hasSelection(): boolean
    /\*\*
  - Substitutes replacementText for the current selection.
  - When replacementText is longer than the selected span, text after the selection is shifted after replacementText instead of being overwritten.
  - @returns true when the Actions panel is found; otherwise false.
  - @param replacementText String to insert in place of the Actions panel selection.
    \*/
    replaceSelectedText(replacementText: string): boolean
    /\*\*
  - Selects a character range in the Actions panel.
  - @returns Boolean result showing whether the requested character range can be selected.
  - @param startIndex Zero-based integer for the first character in the selection.
  - @param numberOfChars Integer count of characters to select.
    \*/
    setSelection(startIndex: number, numberOfChars: number): boolean
    /\*\*
  - Removes the existing Actions panel text, then inserts replacementText.
  - @returns true when the specified text is placed in the Actions panel; otherwise false.
  - @param replacementText String to put into the Actions panel.
    \*/
    setText(replacementText: string): boolean
    }

/\*\*

- Represents the color object returned by Tween.getColorTransform().
  \*/
  declare interface TweenColor {
  colorAlphaAmount: number
  colorAlphaPercent: number
  colorRedAmount: number
  colorRedPercent: number
  colorGreenAmount: number
  colorGreenPercent: number
  colorBlueAmount: number
  colorBluePercent: number
  }

/\*\*

- Use Tween to read interpolated tween properties; accessing those properties on a non-tween frame raises errors.
  \*/
  declare class Tween {
  /\*\*
  - Tween span duration, expressed as its frame count.
    \*/
    duration: number
    /\*\*
  - Tween start frame.
    \*/
    startFrame: number
    /\*\*
  - Tween type, such as "motion" or "shape".
    \*/
    tweenType: string
    /\*\*
  - Reads color-transform data between frames.
  - @param frameIndex Offset index for the interpolated frame;
    \*/
    getGeometricTransform(frameIndex: number): TweenColor
    /\*\*
  - Gets filter data for a selected frame in a tween span.
  - @returns Array of Filter objects.
  - @param frameIndex Frame index whose filter data should be retrieved.
    \*/
    getFilters(frameIndex: number): Filter[]
    /\*\*
  - Returns the Matrix object for a tween's geometric transform over a user-defined range, from the offset through the selected frame.
  - @returns Matrix object for geometric transforms at the frame offset.
  - @param frameIndex Offset index for the frame whose geometric transforms should be retrieved.
    \*/
    getGeometricTransform(frameIndex: number): Matrix
    /\*\*
  - Gets the interpolated shape for a selected frame in a tween span.
  - @returns Shape coordinates at the frame offset.
  - @param frameIndex Offset index for the frame whose shape data should be retrieved.
    \*/
    getShape(frameIndex: number): Shape | SimpleShape
    }
