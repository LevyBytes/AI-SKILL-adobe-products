# AEGP_SetInSpecEmbeddedColorProfile

`AEGP_SetInSpecEmbeddedColorProfile`

For RGB data with an embedded icc profile, create an AEGP_ColorProfile from that icc profile using AEGP_GetNewColorProfileFromICCProfile from AEGP_ColorSettingsSuite5, and set the profile description to NULL.

For non-RGB data, when there is an embedded non-RGB icc profile or you know the data's color space, set the color profile to NULL and provide the description as a NULL-terminated unicode string. This disables the color management UI that would let the user affect profile selection in the application UI.

When unpacking non-RGB data directly into working space, use AEGP_GetNewWorkingSpaceColorProfile to get the working space; no more work is needed.

When unpacking non-RGB data into a particular RGB color space, pass the profile for that space to AEGP_SetInSpecAssignedColorProfile below. Otherwise, the RGB data is interpreted incorrectly as working-space data.

For this function, either color profile or profile description should be NULL. Do not use both.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetInSpecEmbeddedColorProfile(
  AEIO_InSpecH             inH,
  AEGP_ConstColorProfileP  color_profileP0,
  const A_UTF16Char        *profile_descP0);
```
