# Animate (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Represents the Flash application; scripts may address this object through either flash or fl. The examples in this reference use fl.
  \*/
  declare class Flash {
  /\*\*
  - Currently shown Actions panel, exposed as an actionsPanel object. For usage details, see actionsPanel object.
    \*/
    readonly actionsPanel: ActionsPanel
    /\*\*
  - String value for the global Classpath setting in the ActionScript 3.0 Settings dialog box. Semicolons separate the entries. To work with ActionScript 2.0 Classpath settings, use fl.packagePaths - dropped.
    \*/
    as3PackagePaths: string
    /\*\*
  - Errors panel access through a compilerErrors object. For related usage, see compilerErrors object.
    \*/
    readonly compilerErrors: CompilerErrors
    /\*\*
  - Components panel handle, represented by a componentsPanel object.
    \*/
    readonly componentsPanel: ComponentsPanel
    /\*\*
  - Platform-specific full path for the local user's Configuration directory. For a file:/// URI form that is not tied to a platform, use fl.configURI.
    \*/
    readonly configDirectory: string
    /\*\*
  - file:/// URI string for the local user's Configuration directory. See also fl.configDirectory.
    \*/
    readonly configURI: string
    /\*\*
  - Boolean flag for Contact Sensitive selection mode: true means enabled, and false means disabled.
    \*/
    contactSensitiveSelection: boolean
    /\*\*
  - String array listing the document types available for creation.
    \*/
    readonly createNewDocList: string[]
    /\*\*
  - String array containing the file extensions for creatable document types. Its entries line up by index with fl.createNewDocList.
    \*/
    readonly createNewDocListType: string[]
    /\*\*
  - String array naming the template types that can be created.
    \*/
    readonly createNewTemplateList: string[]
    /\*\*
  - Open editable FLA files are exposed as Document objects in this array; see Document object.
    \*/
    readonly documents: Document[]
    /\*\*
  - Extensible tools use this drawingLayer object for temporary drawing during drag gestures, such as a selection marquee.
    \*/
    drawingLayer: DrawingLayer
    /\*\*
  - String list for the global ActionScript 3.0 External library path, where SWC files used as runtime shared libraries are located. Entries are separated with semicolons. In the authoring tool, set these entries with Edit > Preferences > ActionScript > ActionScript 3.0 Settings.
    \*/
    externalLibraryPath: string
    /\*\*
  - Path string for the Flex SDK folder, the folder that includes bin, frameworks, lib, and related folders. In the authoring tool, set this value through Edit > Preferences > ActionScript > ActionScript 3.0 Settings.
    \*/
    flexSDKPath: string
    /\*\*
  - Generic-object array matching the installed Flash Players listed in the document PI.
    \*/
    readonly installedPlayers: InstalledPlayer[]
    /\*\*
  - Five-character code string identifying the locale used by the application's user interface.
    \*/
    languageCode: string
    /\*\*
  - String list for the global ActionScript 3.0 Library path, which points to SWC files or to folders that contain SWC files. Semicolons divide items. In the authoring tool, configure this list with Edit > Preferences > ActionScript > ActionScript 3.0 Settings.
    \*/
    libraryPath: string
    /\*\*
  - Matrix and point operation methods are supplied by the Math object.
    \*/
    readonly Math: Math
    /\*\*
  - Complete filenames in the Flash authoring tool's Most Recently Used (MRU) list.
    \*/
    readonly mruRecentFileList: string[]
    /\*\*
  - File-type array for the Flash authoring tool's MRU list. The entries correspond to fl.mruRecentFileList.
    \*/
    readonly mruRecentFileListType: string[]
    /\*\*
  - Boolean mode switch: true enables object drawing mode, while false enables merge drawing mode.
    \*/
    objectDrawingMode: boolean
    /\*\*
  - Reference for the outputPanel object.
    \*/
    readonly outputPanel: OutputPanel
    /\*\*
  - Access point for a presetPanel object.
    \*/
    readonly presetPanel: PresetPanel
    /\*\*
  - Maximum disk size, in megabytes, assigned to the publish cache.
    \*/
    publishCacheDiskSizeMax: number
    /\*\*
  - Boolean setting that turns the publish cache on or off.
    \*/
    publishCacheEnabled: boolean
    /\*\*
  - Maximum entry size, measured in kilobytes, allowed in the in-memory publish cache. Entries at or below the limit stay in memory; larger entries go to disk.
  - Users with ample memory can raise the value for better performance, while users with limited memory can lower it so the publish cache consumes less memory.
    \*/
    publishCacheMemoryEntrySizeLimit: number
    /\*\*
  - Maximum in-memory publish cache size, measured in megabytes.
    \*/
    publishCacheMemorySizeMax: number
    /\*\*
  - file:/// URI string for the JSFL script that is currently running. When fl.runScript() invoked the script, this value is the path for the direct parent script; it does not walk back through nested fl.runScript() calls to locate the original caller.
    \*/
    readonly scriptURI: string
    /\*\*
  - String list for the global ActionScript 3.0 Source path, which points to ActionScript class-file locations. Semicolons divide the entries. In the authoring tool, configure the list with Edit > Preferences > ActionScript > ActionScript 3.0 Settings.
    \*/
    sourcePath: string
    /\*\*
  - Provides an instance of the SpriteSheetExporter object.
    \*/
    spriteSheetExporter: SpriteSheetExporter
    /\*\*
  - Registered swfPanel objects are returned in this array; see swfPanel object. A swfPanel object becomes registered after it has been opened at least once.
  - Array order follows opening order. If TraceBitmap opens first and AnotherFunction opens second, fl.swfPanels[0] references the TraceBitmap swfPanel object and fl.swfPanels[1] references the AnotherFunction swfPanel object; the pattern continues from there.
  - When no panels have been opened, this property is undefined; that behavior was introduced in Flash Professional CC.
    \*/
    swfPanels: SWFPanel[] | undefined
    /\*\*
  - Tools object array used only when building extensible tools; see Tools object.
    \*/
    readonly tools: Tools[]
    /\*\*
  - Full long-version string for the Flash authoring tool, with platform information included.
    \*/
    readonly version: string
    /\*\*
  - XMLUI object used to read and write XMLUI properties in a XMLUI dialog box and to accept or cancel the dialog box from code.
    \*/
    readonly xmlui: XMLUI
    /\*\*
  - Adds a function that will run for a chosen event. Multiple listeners may be assigned to the same event.
  - If an event fires often, such as mouseMove, and the handler runs for a long time, the application may hang or enter an error state. Keep prePublish and postPublish handlers small and fast.
  - @returns Integer listener ID. Pass this ID to fl.removeEventListener().
  - @param eventType Event type supplied to the callback. Allowed values: "documentNew", "documentOpened", "documentClosed", "mouseMove", "documentChanged", "layerChanged""timelineChanged", "frameChanged", "prePublish", "postPublish", "selectionChanged", and "dpiChanged".
  - The documentChanged value means the foreground document changed, not that the document's contents changed. In other words, fl.getDocumentDOM() returns a different value than it returned before this event.
  - @param callbackFunction Name of the function to run each time the event occurs.
    \*/
    addEventListener(eventType: string, callbackFunction: any): number
    /\*\*
  - Shows a system File Open or File Save dialog box so the user can choose a file for opening or saving.
  - @returns File URL as a file:/// URI, or null when the dialog box is canceled.
  - @param browseType File-browsing operation type. Valid values are "open", "select" or "save". The values "open" and "select" display the system File Open dialog box and are both retained for Dreamweaver compatibility. The value "save" displays a system File Save dialog box.
  - @param title Optional title string for the File Open or File Save dialog box. When omitted, a default title is used. This parameter is optional.
  - @param fileDescription Optional file description, for example:
  - FLA Document (\*.fla)
  - ActionScript File (\*.as)
  - @param fileFilter Optional filter string limiting which files the dialog shows. Examples:
  - "fla"
  - "fla;as"
  - "jsfl;fla;as"
    \*/
    browseForFileURL(
    browseType: string,
    title?: string,
    fileDescription?: string,
    fileFilter?: string,
    ): string | null
    /\*\*
  - Opens a Browse for Folder dialog box for folder selection.
  - @returns Folder URL as a file:/// URI, or null when the dialog box is canceled.
  - @param description Optional description string for the Browse For Folder dialog box. Without this value, "Select Folder." is used as the dialog box title.
    \*/
    browseForFolderURL(description?: string): string | null
    /\*\*
  - Clears out the publish cache.
    \*/
    clearPublishCache(): void
    /\*\*
  - Places the specified string onto the Clipboard.
  - To place the current selection on the Clipboard, call document.clipCopy().
  - @param string String value that will be copied to the Clipboard.
    \*/
    clipCopyString(string: string): void
    /\*\*
  - Closes every open file, including FLA files, SWF files, JSFL files, and related file types. Pass false for bPromptToSave to close without saving changes. This method leaves the application running.
  - @param bPromptToSave Optional Boolean that controls whether changed files show the Save dialog box, and never-saved files show the Save As dialog box. The default value is true.
    \*/
    closeAll(bPromptToSave?: boolean): void
    /\*\*
  - Closes SWF files opened through Control > Test Movie.
  - @returns Boolean result: true when at least one movie window was open; otherwise false.
    \*/
    closeAllPlayerDocuments(): boolean
    /\*\*
  - Closes the supplied document.
  - @param documentObject A Document object. When documentObject is the active document, the Document window may remain open until the calling script finishes.
  - @param bPromptToSaveChanges Boolean value. With false, unsaved changes do not trigger a prompt; the file closes and those changes are discarded. With true, unsaved changes show the usual yes-or-no dialog. The parameter is optional, and its default value is true.
    \*/
    closeDocument(documentObject: Document, bPromptToSaveChanges?: boolean): void
    /\*\*
  - Copies a library item from a document without showing the item in the Flash Pro user interface. Use document.clipPaste() to paste the item into the new document.
  - @returns Boolean result: true when the copy succeeds; otherwise false.
  - @param fileURI String expressed as a file:/// URI, containing the path to the FLA or XFL file.
  - @param libraryItemPath String path for the library item that should be copied.
    \*/
    copyLibraryItem(fileURI: string, libraryItemPath: string): boolean
    /\*\*
  - Creates and selects a new document. Size, resolution, and color use the current defaults.
  - @returns Document object for the new document when creation succeeds. If an error occurs, the value is undefined.
  - @param docType Optional string specifying the requested document type. "timeline" is the sole accepted value and also the default; using it matches File > New > Flash File (ActionScript 3.0).
    \*/
    createDocument(docType?: string): Document | undefined
    /\*\*
  - Returns a publishing profile for a specific document without opening that file. The publish profile can be supplied, but it is optional.
  - @returns String containing that document's publishing profile.
  - @param ucfURI String specifying the file Uniform Resource Identifier (URI) used to export the publish settings.
  - @param profileName String naming the profile that should be exported. This parameter is optional.
    \*/
    exportPublishProfileString(ucfURI: string, profileName?: string): string
    /\*\*
  - Tests whether a file is already present on disk.
  - @returns Boolean value: true when the file exists on disk; otherwise false.
  - @param fileURI String expressed as a file:/// URI, containing the path to the file.
    \*/
    fileExists(fileURI: string): boolean
    /\*\*
  - Locates a particular file by unique identifier instead of by index or similar position. Use together with document.id.
  - @returns Document object, or null if no document has the specified id.
  - @param id Integer unique identifier for a document.
    \*/
    findDocumentDOM(id: number): Document | null
    /\*\*
  - Returns integer positions where the document name appears in the fl.documents array. Multiple open documents can share a name when they are stored in different folders.
  - @returns Integer array containing positions for the document name in fl.documents.
  - @param name Document name whose index should be found. The document must be open.
    \*/
    findDocumentIndex(name: string): number[]
    /\*\*
  - Reveals elements in a document when their instance names match the supplied text.
  - Note: In some cases, this method only works when run as a command from inside a FLA file, rather than while a JSFL file is being viewed or edited.
  - @returns Generic-object array. Use each item's .obj property to obtain the object. The object includes keyframe, layer, timeline, and parent properties, which provide access to the hierarchy. For more information about these properties and access patterns, see fl.findObjectInDocByType().
  - Methods and properties on the layer and timeline values are also available; those values correspond to the Layer object and Timeline object.
  - @param instanceName String specifying the instance name of an item within the specified document.
  - @param document Document object that serves as the search target for the specified item.
    \*/
    findObjectInDocByName(instanceName: string, document: Document): ObjectInDoc[]
    /\*\*
  - Reveals elements of the requested element type in a document.
  - Note: In some cases, this method only works when run as a command from inside a FLA file, rather than while a JSFL file is being viewed or edited.
  - @returns Generic-object array. Use each item's .obj property to obtain the element object. Each object includes keyframe, layer, timeline, and parent properties for hierarchy access.
  - Methods and properties on the layer and timeline values are also available; those values correspond to the Layer object and Timeline object.
  - Example reference location: file:///C:/Users/vstinca/Downloads/flash_cs5_extending.pdf
  - @param elementType String representing the element type to search for. For acceptable values, see element.elementType.
  - @param document Document object that serves as the search target for the specified item.
    \*/
    findObjectInDocByType(elementType: string, document: Document): ObjectInDoc[]
    /\*\*
  - (Windows only); reports the byte count being used in a chosen Flash.exe memory area.
  - @returns Integer byte count for the selected Flash.exe memory area.
  - @param memType Integer selecting the memory utilization area to query. The acceptable values are:
  - 0 - PAGEFAULTCOUNT
  - 1 - PEAKWORKINGSETSIZE
  - 2 - WORKINGSETSIZE
  - 3 - QUOTAPEAKPAGEDPOOLUSAGE
  - 4 - QUOTAPAGEDPOOLUSAGE
  - 5 - QUOTAPEAKNONPAGEDPOOLUSAGE
  - 6 - QUOTANONPAGEDPOOLUSAGE
  - 7 - PAGEFILEUSAGE
  - 8 - PEAKPAGEFILEUSAGE
    \*/
    getAppMemoryInfo(memType: number): number
    /\*\*
  - Gets the DOM (Document object) for the active document (FLA file). If documents are open but none currently has focus, such as when a JSFL file has focus, this returns the DOM for the most recently active document.
  - @returns Document object, or null when no documents are open.
    \*/
    getDocumentDOM(): Document | null
    /\*\*
  - Finds a SWFPanel object by localized panel name or by SWF filename without its extension.
  - @returns SWFPanel object.
  - @param panelName Localized panel name or root filename of the panel's SWF file. Pass false as the second parameter when using the filename form.
  - @param useLocalizedPanelName Optional. Defaults to true. With false, panelName is treated as the English (unlocalized) panel name, matching the SWF filename without its file extension.
    \*/
    getSwfPanel(panelName: string, useLocalizedPanelName?: boolean): SWFPanel
    /\*\*
  -
  - @param themeParamName String containing a theme parameter from fl.getThemeColorParameters(). For themeUseGradients, the result is "true" when gradients are used and "false" otherwise.
    \*/
    getThemeColor(themeParamName: string): string | boolean
    /\*\*
  - Provides the theme color parameters as an Array of strings. Available theme color parameters:
  - themeAppBackgroundColor
  - themeItemSelectedColor
  - themeItemHighlightedColor
  - themeHotTextNormalColor
  - themeHotTextRolloverColor
  - themeHotTextDisableColor
  - themeStaticTextNormalColor
  - themeStaticTextDisableColor
  - themeTextEditNormalBackgroundColor
  - themeTextEditDisableBackgroundColor
  - themeUseGradients
  - themeEnableShading
  - themeDividerLine
  - themeDividerLineBevel
  - themeControlFocus
  - themeControlBorderNormal
  - themeControlBorderDisabled
  - themeControlFillNormal
  - themeControlFillTopNormal
  - themeControlFillBottomNormal
  - themeControlFillOver
  - themeControlFillTopOver
  - themeControlFillBottomOver
  - themeControlFillDown
  - themeControlFillTopDown
  - themeControlFillBottomDown
  - themeControlFillDisabled
  - themeControlFillTopDisabled
  - themeControlFillBottomDisabled
  - themeControlFillSelectedOver
  - themeControlFillTopSelectedOver
  - themeControlFillBottomSelectedOver
  - themeGenericIconNormal
  - themeGenericIconShadowNormal
  - themeGenericIconDisabled
  - themeGenericIconShadowDisabled
  - Flash Professional CC added 2 UI themes, Dark and Light UI; this method obtains current theme color parameters for rendering custom content.
  - Note: The "top" and "bottom" colors apply when drawing controls with shading enabled. If shading is disabled, use themeControlFillNormal, themeControlFillOver without "top" and "bottom" in the names.
  - @returns Array of strings containing the theme color parameters.
    \*/
    getThemeColorParameters(): string[]
    /\*\*
  - Reports either the font Style or the font Size used for drawing UI text at the requested size.
  - @returns String containing either the font style or font size for the specified size.
  - @param infoType String containing one of the following:
  - fontStyle - yields the font style for the supplied size parameter.
  - fontSize - yields the font size for the supplied size parameter.
  - @param size String specifying either "large" or "small".
    \*/
    getThemeFontInfo(infoType: string, size: string): string
    /\*\*
  - Checks whether the named font is installed.
  - @returns Boolean true when the specified font is installed; otherwise false.
  - @param fontName String specifying the name of a device font.
    \*/
    isFontInstalled(fontName: string): boolean
    /\*\*
  - Converts an escaped Unicode URL into a UTF-8 or MBCS URL. Use this method before ActionScript consumes the string for external-resource access. It is required when multibyte characters must be handled.
  - @returns Converted URL string.
  - @param URI String containing the escaped Unicode URL to map.
  - @param returnMBCS Boolean value that must be true when an escaped MBCS path should be returned. Otherwise, the return format is UTF-8. The parameter is optional, with false as its default value.
    \*/
    mapPlayerURL(URI: string, returnMBCS?: boolean): string
    /\*\*
  - A Flash document (FLA file) is opened for editing in a new Flash Document window, and that window receives focus. For a user, this has the same result as choosing File > Open and then choosing a file. If the file is already open, its containing window is brought forward and becomes the selected document.
  - @returns Document object for the opened document when successful. If the file cannot be found or is not valid as a FLA file, an error is reported and the script is canceled.
  - @param fileURI String expressed as a file:/// URI, specifying the name of the file to open.
    \*/
    openDocument(fileURI: string): Document // | Error
    /\*\*
  - In Flash, opens an existing file or creates a new script file such as JSFL, AS, ASC, or another file type such as XML or TXT.
  - @param fileURI String expressed as a file:/// URI, specifying where Flash should load the JSFL, AS, ASC, XML, TXT, or other file from.
    \*/
    openScript(fileURI: string): void
    /\*\*
  -
  - @param bPromptIfNeeded Optional Boolean value, true by default, that controls whether modified documents ask the user to save. Set it to false to bypass save prompts; then open-document changes are discarded and the application exits immediately. Although useful for batch processing, this method should be used carefully.
    \*/
    quit(bPromptIfNeeded?: boolean): void
    /\*\*
  - From the toolconfig.xml file, rebuilds the Tools panel. This method is only for extensible-tool creation. Use it to reload the Tools panel after changing the JSFL file that defines a tool already present in the panel.
    \*/
    reloadTools(): void
    /\*\*
  - Removes a function that was registered with fl.addEventListener().
  - @returns Boolean true when the event listener is removed successfully; false when the function was never in the fl.addEventListener() list.
  - @param eventType String specifying which event type to detach from this callback function. Allowed values: "documentNew", "documentOpened", "documentClosed", "mouseMove", "documentChanged", "layerChanged", "timelineChanged", and "frameChanged".
  - @param id Integer listener ID returned by the matching fl.addEventListener() call.
    \*/
    removeEventListener(eventType: string, id: number): boolean
    /\*\*
  - Restores the ActionScript 3.0 Settings dialog box global Classpath setting to its default. For the ActionScript 2.0 global Classpath reset, use fl.resetPackagePaths() - dropped.
    \*/
    resetAS3PackagePaths(): void
    /\*\*
  - Restores the supplied FLA document to its most recently saved state. Unlike the File > Revert menu command, this method does not open a confirmation warning. See also document.revert() and document.canRevert().
  - @returns Boolean result: true when Revert completes successfully; otherwise false.
  - @param documentObject A Document object. When documentObject is the active document, the Document window may not revert until the calling script finishes.
    \*/
    revertDocument(documentObject: Document): boolean
    /\*\*
  - Runs a JavaScript file. When one argument names a function, that function is invoked along with any script code outside the function. Code outside the function runs first.
  - @returns Function result as a string when funcName is supplied; otherwise no value.
  - @param fileURI String expressed as a file:/// URI, specifying the script file to execute.
  - @param funcName String identifying the function to execute in the JSFL file named by fileURI. This parameter is optional.
  - @param args Optional parameter specifying one or more arguments to pass to funcname.
    \*/
    runScript(fileURI: string, funcName?: string, ...args: any[]): void
    /\*\*
  - Saves all currently open documents.
  - For never-saved files, the Save As dialog box appears. Files unchanged since their previous save are not saved. To force saving for an unsaved or unchanged file, use fl.saveDocumentAs().
    \*/
    saveAll(): void
    /\*\*
  - Saves the supplied document as a FLA document.
  - The method saves the file whether it is new, changed, or unchanged.
  - @returns Boolean result: true when the save operation completes successfully; otherwise false.
  - @param document Document object specifying what to save. If document is null, the active document is saved.
  - @param fileURI String expressed as a file:/// URI, specifying the saved document name. When fileURI is null or absent, the document keeps its current name during save. This parameter is optional.
    \*/
    saveDocument(document: Document | null, fileURI?: string): boolean
    /\*\*
  - Opens the Save As dialog box for the supplied document.
  - @returns Boolean result: true when Save As completes successfully; otherwise false.
  - @param document Document object specifying what to save. A null value saves the active document.
    \*/
    saveDocumentAs(document: Document | null): boolean
    /\*\*
  - Enables selection or editing for an element. This method is typically used on objects returned by fl.findObjectInDocByName() or fl.findObjectInDocByType().
  - @returns Boolean true when the element is selected successfully; otherwise false.
  - @param elementObject Element object to select.
  - @param editMode Boolean setting: true edits the element, and false only selects it.
    \*/
    selectElement(elementObject: Element, editMode: boolean): boolean
    /\*\*
  - Selects a named tool in the Tools panel. Built-in values for toolName include
  - "arrow", "bezierSelect", "freeXform", "fillXform", "lasso", "pen", "penplus", "penminus", "penmodify", "text", "line", "rect", "oval", "rectPrimitive", "ovalPrimitive", "polystar", "pencil", "brush", "inkBottle", "bucket", "eyeDropper", "eraser", "hand", and "magnifier".
  - If you or a user creates custom tools, those tool names may also be supplied as the toolName parameter. The tool-name list is stored in this file:
  - Windows 7: boot drive\Users\username\AppData\Local\Adobe\Flash CC\language\Configuration\Tools\toolConfig.xml
  - Mac OS X: Macintosh HD/Users/username/Library/Application Support/Adobe/Flash CS3/language/Configuration/Tools/toolConfig.xml
  - @param toolName String specifying the tool name to select. See "Description" below for acceptable values for this parameter.
    \*/
    selectTool(toolName: string): void
    /\*\*
  - Makes the specified document the active window. Dreamweaver and Fireworks also support this method. If the document has several views, created with Window > Duplicate Window, the most recently active view is selected.
  - @param document Document object specifying which document becomes the active window.
  - @param bActivateFrame Optional parameter ignored by Flash and Fireworks; it exists only for Dreamweaver compatibility.
    \*/
    setActiveWindow(document: Document, bActivateFrame?: boolean): void
    /\*\*
  - Writes a boolean preference value.
  - @param keySection String containing the preferences section that contains keyName. Usually this is "Settings".
  - @param keyName String containing the boolean preference setting name to set.
  - @param keyValue String or boolean containing the preference value, true or false.
    \*/
    setPrefBoolean(keySection: string, keyName: string, keyValue: string | boolean): void
    /\*\*
  - Controls whether the warning about a script running too long is shown; pass false for show to disable it. This is useful for long batch operations. To turn the alert back on, call the command again with true for show.
  - @param show Boolean value specifying whether the warning about a script running too long is enabled or disabled.
    \*/
    showIdleMessage(show: boolean): void
    /\*\*
  - Toggles a breakpoint for the specified .as file at the specified line. If enable is false, any stored breakpoint at that line is removed.
  - @param fileURI String; URI of the the AS file where the breakpoint is toggled.
  - @param line Integer; line number where the breakpoint is toggled.
  - @param enable Boolean; true enables the breakpoint, and false disables it.
    \*/
    toggleBreakpoint(fileURI: string, line: number, enable: boolean): void
    /\*\*
  - Writes a text string to the Output panel, appends a new line, and shows the Output panel when it is hidden. This method is the same as outputPanel.trace() and behaves like the trace() statement in ActionScript.
  - To write a blank line, use fl.trace("") or fl.trace("\n"). The latter command can be used inline, with \n included in the message string.
  - @param message String that appears in the Output panel.
    \*/
    trace(message: string): void
    /\*\*
  - Opens the XML To UI dialog from a URI pointing to an XML-format file.
  - @returns XMLUI. The returned object contains properties for every control defined in the XML file. All properties come back as strings. The object also has a predefined "dismiss" property whose string value is either "accept" or "cancel".
  - @param xmlURI URI specifying the XML file that defines the controls in the panel. The full path name is required.
    \*/
    xmlPanel(xmlURI: string): XMLUI
    /\*\*
  - Uses an XML-format string to open the XML To UI dialog.
  - @returns XMLUI
  - @param xmlString String containing XML that defines a dialog.
    \*/
    xmlPanelFromString(xmlString: string): XMLUI
    }
