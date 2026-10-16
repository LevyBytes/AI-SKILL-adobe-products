# Drawing on a perspective grid with AppleScript

With Perspective Grid enabled, drawing methods can create or manipulate objects in perspective. The AppleScript below opens a document, turns on a two-point perspective grid, and then runs the drawing commands shown here.

```applescript
tell application "Adobe Illustrator"
    --Create a new document
    set docRef to make new document
    tell docRef
        --Select the default two-point perspective preset
        select perspective preset perspective preset "[2P-Normal View]"

        --Display the perspective grid defined in the document
        show perspective grid

        --Check if active plane is set to left, otherwise set it to left
        if (get perspective active plane) is not leftplane then
            set perspective active plane perspective grid plane leftplane
        end if

        --Draw rectangle in perspective, then resize to 200% and move
        set rectRef to make new rectangle with properties {bounds:{0, 0, 30, 30}, reversed:false}
        scale rectRef horizontal scale 200 vertical scale 200 about top left with transforming objects
        translate rectRef delta x -420 delta y 480

        --Draw ellipse in perspective
        set ellipseRef to make new ellipse with properties {bounds:{60, -60, 90, -30}, reversed:false, inscribed:true}

        --Draw rounded rectangle in perspective
        set rrectRef to make new rounded rectangle with properties {bounds:{90, -90, 30, 30}, horizontal radius:10, vertical radius:10, reversed:false}

        --Draw polygon in perspective
        set polyRef to make new polygon with properties {center point:{105, 105}, radius:15, sides:7, reversed:false}

        --Draw star in perspective
        set starRef to make new star with properties {center point:{135, 135}, radius:15, inner radius:10, point count:6, reversed:false}

        --Draw path in perspective
        set newPath to make new path item with properties {entire path:{ {anchor:{0, 0} }, {anchor:{60, 0} }, {anchor:{30, 45} }, {anchor:{90, 110} } } }
    end tell
end tell
```

Related references:

- [Drawing on a perspective grid with JavaScript](draw-perspective-grid-javascript.md)
- [Drawing on a perspective grid with VBScript](draw-perspective-grid-vbscript.md)
