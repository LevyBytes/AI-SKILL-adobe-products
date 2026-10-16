# OCIO CDL Transform

With the OCIO CDL Transform effect, a CDL transform — or the inverse of one — can be applied to either a layer or a whole composition.

OCIO CDL Transform effect

OCIO CDL Transform effect

These are the options the effect exposes:

Select

Use this to browse the file system and pick a CDL file the effect supports, such as a .ccc file.

CCCID

A drop-down listing every ccc (color correction collection) node as ccc-id entries; any one of them is yours to choose. The list's first entry is what gets picked initially.

Inverse Transform

Flips the transform to its inverse.

Information

Details about the active OCIO configuration show up in the Information section, which also surfaces error messages — for instance, when editing OCIO Configuration in the Project Settings leaves the current effect in an invalid state.

Pairing these effects lets you apply a LUT or CDL that was authored for a particular color space other than the one you've set as the working space:

- Run the OCIO Color Space Transform effect first to move from Working Color Space into whatever color space the CDL/LUT file expects.
- Hand the LUT or CDL to the OCIO File Transform effect to apply it.
- Run the OCIO Color Space Transform effect once more to return to Working Color Space.

### Related resources

- Color basics
- Color management
- Color Correction effects
