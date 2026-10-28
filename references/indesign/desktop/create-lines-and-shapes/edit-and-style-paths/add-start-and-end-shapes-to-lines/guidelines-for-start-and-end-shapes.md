# Guidelines for start and end shapes

Keep these points in view while working with start and end shapes:

- The built-in start and end shapes cannot be edited, but plug-in software can add choices that appear in the Start and End menus in the Stroke panel.
- Start and end shapes scale relative to stroke weight. Adding one to either end leaves the path length unchanged.
- Each start or end shape turns automatically to align with the angle of that endpoint's direction line.
- Start and end shapes display only on endpoints of open paths; they do not appear on separate dashes within a dashed stroke.
- When a compound path has open subpaths, applying start and end shapes gives every open subpath the same start and end shapes.
- Closed paths can receive start and end shapes, but those shapes stay hidden until the path is opened.
