# AEGP_NewSolidFootage

`AEGP_NewSolidFootage`

This is the way to add a solid.

Until the footage is added to the project, the caller owns the AEGP_FootageH (and must dispose of it if, and only if, it isn't added to the project).

Suite argument declaration (not a standalone call):

```cpp
AEGP_NewSolidFootage(
  const A_char         *nameZ,
  A_long               width,
  A_long               height,
  const AEGP_ColorVal  *colorP,
  AEGP_FootageH        *footagePH);
```
