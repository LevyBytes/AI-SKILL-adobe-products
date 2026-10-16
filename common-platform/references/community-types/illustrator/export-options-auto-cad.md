# ExportOptionsAutoCAD

Community declaration reference: Illustrator/2022.

Configuration for document export to AutoCAD formats (.dwg or .dxf).

```typescript
declare class ExportOptionsAutoCAD {
    /**
    - Alters paths for appearance.
      */
      static alterPathsForAppearance: boolean
    /**

    - Reference note: number of colors to export into the AutoCAD file.
      */
      static colors: AutoCADColors
    /**

    - Controls whether to convert text to outlines.
      */
      static convertTextToOutlines: boolean
    /**

    - Format to export the file as.
      */
      static exportFileFormat: AutoCADExportFileFormat
    /**

    - Chooses appearance preservation or editability during export.
      */
      static exportOption: AutoCADExportOption
    /**

    - Exports selected art only.
      */
      static exportSelectedArtOnly: boolean
    /**

    - Reference note: raster format in which to export raster art.
      */
      static rasterFormat: AutoCADRasterFormat
    /**

    - Controls whether lineweights scale by the same amount as the rest of the drawing.
      */
      static scaleLineweights: boolean
    /**

    - Reference note: units from which to map.
      */
      static unit: AutoCADUnit
    /**

    - Reference note: ratio by which to scale the output.
      */
      static unitScaleRatio: number
    /**

    - Reference note: release of AutoCAD to export to.
      */
      static version: AutoCADCompatibility
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
