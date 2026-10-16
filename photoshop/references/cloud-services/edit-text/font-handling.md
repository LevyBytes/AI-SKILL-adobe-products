# Font handling

For text-layer operations to work correctly, the required fonts for those layers must be present during PSD processing.

In the API request, refer to fonts by the correct Postscript name for each font. Any different name is handled by the API as a missing font.

To supply a custom font, include an href for that font in request `inputs`; use `<font_postscript_name>.<ext>` as the naming pattern.

**Example**

```js
{
  "storage": "external",
  "href": "<STORAGE_URL_TO_OPEN_SANS_CONDENSED_LIGHT_TTF>"
}
```
