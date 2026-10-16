# The Artwork Tree — Color objects

Scripts can set a color, pattern, or gradient on a path item object through the fill color or stroke color properties:

- New color swatches can be defined by scripts with the make command or add method on the swatches object. A script can also produce a new spot color through the make command or add property of the spots object.
- Ink object attributes are defined with the ink info object, which is stored as a property of an ink object. Ink objects are reached through the ink list property on the document object.

Use these objects to create colors in defined color spaces:

- The RGB color object, where each of the three color values uses the range 0.0 to 255.0.
- The CMYK color object, where each of the four color values is expressed as 0.0 through 100.0 percent.
- The grayscale color or LAB color objects, following the same value range and value count used in the Illustrator application.
