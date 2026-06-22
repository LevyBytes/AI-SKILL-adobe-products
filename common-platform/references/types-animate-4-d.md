# Animate (part 4) (cont. 3)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

> _(continued)_

    /\*\*
  - Runs a Test Scene operation on the current document scene.
    \*/
    testScene(): void
    /\*\*
  - Runs trace bitmap on the current selection. This matches choosing Modify > Bitmap > Trace Bitmap.
  - @param threshold Integer controlling the number of colors in the traced bitmap. Acceptable values are integers between 0 and 500.
  - @param minimumArea Integer specifying the pixel radius. Allowed integer range: 1 to 1000.
  - @param curveFit String choosing outline smoothness. Allowed curveFit values: "pixels", "very tight", "tight", "normal", "smooth", and "very smooth".
  - @param cornerThreshold String like curveFit, but for bitmap-image corners. Allowed cornerThreshold values: "many corners", "normal", and "few corners".
    \*/
    traceBitmap(
    threshold: number,
    minimumArea: number,
    curveFit: string,
    cornerThreshold: string,
    ): void
    /\*\*
  - Applies a general transformation to the current selection using the matrix values passed as arguments. For more information, see the element.matrix property.
  - @param a Floating-point number for the (0,0) transformation matrix element.
  - @param b Floating-point number for the (0,1) transformation matrix element.
  - @param c Floating-point number for the (1,0) transformation matrix element.
  - @param d Floating-point number for the (1,1) transformation matrix element.
    \*/
    transformSelection(a: number, b: number, c: number, d: number): void
    /\*\*
  - Defines the XYZ center used for selection translation or rotation. This method is available only for movie clips.
  - @param xyzCoordinate XYZ coordinate identifying the 3D rotation or translation center point.
    \*/
    translate3DCenter(xyzCoordinate: Point3D): void
    /\*\*
  - Translates the selection in 3D. This method is available only for movie clips.
  - @param xyzCoordinate XYZ coordinate identifying the 3D translation axes.
  - @param bGlobalTransform Boolean selecting global transformation mode when true; otherwise local mode is used.
    \*/
    translate3DSelection(xyzCoordinate: Point3D, bGlobalTransform: boolean): void
    /\*\*
  - Breaks apart the current group selection.
    \*/
    unGroup(): void
    /\*\*
  - Combines all selected shapes into a drawing object. With no selected objects, the call raises an error and stops the script there.
    \*/
    union(): void
    /\*\*
  - Unlocks every locked element on the currently selected frame.
    \*/
    unlockAllElements(): void
    /\*\*
  - Opens an XMLUI dialog box. See fl.xmlui.
  - @returns Object with properties for every control defined in the XML file. Each property is returned as a string. The returned object includes one predefined property named "dismiss" with string value "accept" or "cancel".
  - @param fileURI String as a file:/// URI giving the XML file path for the panel controls. The full path is required.
    \*/
    xmlPanel(fileURI: string): any
    }
