# Known limitations

- Documents with transparent pixels, such as some .png files, can produce inconsistent bounds.
- Linked Smart Objects are not currently supported.
- When several layers reference the same embedded Smart Object, update each layer separately so the Smart Object is replaced in those layers.
- To improve performance, smart objects larger than 2000x2000 pixels are rasterized. For best processing behavior, ensure the embedded smart object being replaced has a name made only from alphanumeric characters.
