# sourceRectAtTime(t = time, includeExtents = false)

Return type: JavaScript object with four attributes: [top, left, width, height]. Extents apply only to shape layers, increasing the size of the layer bounds as necessary, and paragraph text layers (After Effects 15.1 and later), where it returns the bounds of the paragraph box. Example: myTextLayer.sourceRectAtTime().width.
