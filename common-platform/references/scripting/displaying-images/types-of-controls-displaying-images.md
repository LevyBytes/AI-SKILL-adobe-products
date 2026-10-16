# Types of controls — Displaying images

Image and IconButton controls can show icon images. Listbox or DropdownList controls can also use images as selectable items, either instead of text strings or alongside them. Each of these uses the element's image property. The property value may be a named icon resource, a ScriptUIImage object, a File object, a path string pointing to the image file, or a path string for an alias or shortcut to that file; see Specifying paths.

Icon data can be stored as PNG (Portable Network Graphics) or JPEG (Joint Photographic Experts Group). Format details are available at http://www.libpng.org and http://www.jpeg.org/.

Changing the image property later replaces the image currently shown by the element.

Some scripting environments provide named icon resources for scripts. To use one, assign the resource's JavaScript name to a control's image property, or use that resource name when creating the control. This example creates an application-defined-icon button:

```javascript
myWin.upBtn = myWin.add ( "iconbutton", undefined, "SourceFolderIcon" );
```

Example Photoshop CC icon resources include:

- Step1Icon
- Step2Icon
- Step3Icon
- Step4Icon
- SourceFolderIcon
- DestinationFolderIcon

When an element that shows an icon image has no explicit preferredSize or size value, preferredSize comes from the image's own dimensions. Explicit size values smaller than the graphic crop the display. Values larger than the graphic center the image in the extra area. Images are not scaled to fill the available space.
