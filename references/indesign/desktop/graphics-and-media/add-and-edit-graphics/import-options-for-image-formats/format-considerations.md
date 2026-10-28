# Format considerations

Keep these details in view while planning an import workflow:

- Clipping paths: For a bitmap image that has no clipping path, create one in InDesign after placing it.
- Alpha channels: For complex transparency work, PSD and TIFF are the strongest choices when several alpha channels are needed.
- Multiple instances: If the same file is imported more than once in a document, every instance uses the proxy setting from the first placed instance.
- Removable media: Links break when graphics are placed or dragged from removable media and that media is later removed from the system.
- Display quality: When placed images look low-resolution, inspect the display setting at View > Display Performance.

Note

Large thumbnail-heavy placement operations can slow performance. To improve responsiveness, open Edit > Preferences > Interface and deselect Show Thumbnails on Place.
