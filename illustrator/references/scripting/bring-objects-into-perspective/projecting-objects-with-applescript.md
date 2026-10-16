# Projecting objects with AppleScript

Call bringInPerspective() when an art object needs to be projected onto a perspective-grid plane.

The following AppleScript builds a document and an art object, then positions that object as shown here:

```applescript
tell application "Adobe Illustrator"
    --Create a new document
    set docRef to make new document
    tell docRef
        --Draw star
        set starRef to make new star with properties {center point:{135, 135}, radius:15, inner radius:10, point count:6, reversed:false}

        --Select the default three-point perspective preset
        select perspective preset perspective preset "[3P-Normal View]"

        --Display the perspective grid defined in the document
        show perspective grid

        --Check if active plane is set to left, otherwise set it to left
        if (get perspective active plane) is not leftplane then
            set perspective active plane perspective grid plane leftplane
        end if

        --Bring star to floor plane
        bring in perspective starRef position x 100 position y 100 perspective grid plane floorplane
    end tell
end tell
```

Related references:

- [Projecting objects with JavaScript](project-objects-javascript.md)
- [Projecting objects with VBScript](project-objects-vbscript.md)
