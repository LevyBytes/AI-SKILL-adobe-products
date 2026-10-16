# Tools

Community declaration reference: Animate/22.0.

fl.tools provides access to the Tools object from the flash object. tools.toolObjs contains an array of ToolObj objects, and tools.activeTool returns the ToolObj object for the active tool. See also ToolObj object and the Extensible tools list in "Top-Level Functions and Methods" on page 18.
Note: These properties and methods are only for creating extensible tools.

```typescript
declare class Tools {
    /**
    - Provides the ToolObj object for the active tool.
      */
      readonly activeTool: ToolObj
    /**
    - Boolean value indicating whether the Alt key is pressed. The value is true while Alt is down and false otherwise.
      */
      readonly altIsDown: boolean
    /**
    - Boolean value that is true while the Control key is down and false otherwise.
      */
      readonly ctlIsDown: boolean
    /**
    - Boolean value that is true while the left mouse button is down and false otherwise.
      */
      readonly mouseIsDown: boolean
    /**
    - Point for the most recent mouse-down event position on the Stage. tools.penDownLoc has x and y properties for the mouse pointer's x, y location.
      */
      readonly penDownLoc: Point
    /**
    - Point for the current mouse pointer location. tools.penLoc has x and y properties for the mouse pointer's x,y location.
      */
      readonly penLoc: Point
    /**
    - Boolean value that is true while the Shift key is down and false otherwise.
      */
      readonly shiftIsDown: boolean
    /**
    - Array of ToolObj objects (see ToolObj object).
      */
      readonly toolObjs: ToolObj[]
    /**
    - Accepts two points and returns a new point that has been adjusted or constrained. If Shift is pressed when the command runs, the result follows either a 45º constrain, useful for a line with an arrowhead, or an aspect-ratio constraint, for example while drawing a perfect square using the Rectangle tool.
    - @returns Adjusted or constrained point.
    - @param pt1 Point representing the starting-click point.
    - @param pt2 Point representing the drag-to point.
      */
      constrainPoint(pt1: Point, pt2: Point): Point
    /**
    - Provides the key pressed most recently.
    - @returns Integer value of the key.
      */
      getKeyDown(): number
    /**
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
        */
        setCursor(cursor: number): void
    /**
    - Given pt, returns either pt or an adjusted/snap-corrected point near the closest geometric object. If snapping is turned off in the Flash View menu, the original point is returned.
    - @returns Adjusted or snapped point near the closest geometric object.
    - @param pt Location to evaluate when returning a snap point.
      */
      snapPoint(pt: Point): Point
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
