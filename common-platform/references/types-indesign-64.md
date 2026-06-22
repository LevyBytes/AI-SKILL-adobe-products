# Indesign (part 64)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Options for data merge.
  \*/
  declare class DataMergeOption extends Preference {
  /\*\*
  - When true, the image is centered in the frame while frame size plus content size and proportions are preserved. Note: Content larger than the frame is clipped around the edges by the frame bounding box. This doesn't work with fittingOption `CONTENT_AWARE_FIT`
    \*/
    centerImage: boolean

/\*\*

- When true, merging records creates a new document.
  \*/
  createNewDocument: boolean

/\*\*

- Maximum pages allowed per document.
  \*/
  documentSize: number

/\*\*

- Instructions for fitting content into a frame.
  \*/
  fittingOption: Fitting

/\*\*

- When true, images are linked to the target document. When false, images are embedded in the target document.
  \*/
  linkImages: boolean

/\*\*

- When true, blank lines created by empty fields are removed.
  \*/
  removeBlankLines: boolean
  }

/\*\*

- Data merge object.
  \*/
  declare class DataMerge extends Preference {
  /\*\*
  - Collection containing data merge fields.
    \*/
    readonly dataMergeFields: DataMergeFields

/\*\*

- Data merge preference properties defining target-page layout and content.
  \*/
  readonly dataMergePreferences: DataMergePreference

/\*\*

- Collection containing preference objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Merges records, then exports PDF output.
- @param to Path of exported PDF file.
- @param using PDF export style to use.
- @param outputOversetReportFile File path used for overset report storage.
  \*/
  exportFile(to: File, using: PDFExportPreset, outputOversetReportFile: File): void

/\*\*

- Merges records and can write an overset report.
- @param outputOversetReportFile File path used for overset report storage.
  \*/
  mergeRecords(outputOversetReportFile: File): void

/\*\*

- Deletes the data source.
  \*/
  removeDataSource(): void

/\*\*

- Sets the file used as the data source.
- @param dataSourceFile Path to the data source file.
  \*/
  selectDataSource(dataSourceFile: File): void

/\*\*

- Refreshes the data source file with the latest data.
  \*/
  updateDataSource(): void
  }

/\*\*

- Preferences for chapter numbering.
  \*/
  declare class ChapterNumberPreference extends Preference {
  /\*\*
  - Value for chapter numbering.
    \*/
    chapterNumber: number

/\*\*

- Formatting options for chapter numbers.
  \*/
  chapterNumberFormat: NumberingStyle | string

/\*\*

- Source used to generate the chapter number.
  \*/
  chapterNumberSource: ChapterNumberSources
  }

/\*\*

- Settings for the object style object effects category.
  \*/
  declare class ObjectStyleObjectEffectsCategorySettings extends Preference {
  /\*\*
  - When true, the object style applies bevel emboss.
    \*/
    enableBevelEmboss: boolean

/\*\*

- When true, the object style applies directional feathering.
  \*/
  enableDirectionalFeather: boolean

/\*\*

- When true, the object style applies drop shadows.
  \*/
  enableDropShadow: boolean

/\*\*

- When true, the object style applies feathering.
  \*/
  enableFeather: boolean

/\*\*

- When true, the object style applies gradient feathering.
  \*/
  enableGradientFeather: boolean

/\*\*

- When true, the object style applies inner glow.
  \*/
  enableInnerGlow: boolean

/\*\*

- When true, the object style applies inner shadows.
  \*/
  enableInnerShadow: boolean

/\*\*

- When true, the object style applies outer glow.
  \*/
  enableOuterGlow: boolean

/\*\*

- When true, the object style applies satin.
  \*/
  enableSatin: boolean

/\*\*

- When true, the object style applies transparency settings.
  \*/
  enableTransparency: boolean
  }

/\*\*

- Settings for the object style stroke effects category.
  \*/
  declare class ObjectStyleStrokeEffectsCategorySettings extends Preference {
  /\*\*
  - When true, the object style applies bevel emboss.
    \*/
    enableBevelEmboss: boolean

/\*\*

- When true, the object style applies directional feathering.
  \*/
  enableDirectionalFeather: boolean

/\*\*

- When true, the object style applies drop shadows.
  \*/
  enableDropShadow: boolean

/\*\*

- When true, the object style applies feathering.
  \*/
  enableFeather: boolean

/\*\*

- When true, the object style applies gradient feathering.
  \*/
  enableGradientFeather: boolean

/\*\*

- When true, the object style applies inner glow.
  \*/
  enableInnerGlow: boolean

/\*\*

- When true, the object style applies inner shadows.
  \*/
  enableInnerShadow: boolean

/\*\*

- When true, the object style applies outer glow.
  \*/
  enableOuterGlow: boolean

/\*\*

- When true, the object style applies satin.
  \*/
  enableSatin: boolean

/\*\*

- When true, the object style applies transparency settings.
  \*/
  enableTransparency: boolean
  }

/\*\*

- Settings group for object style fill effects.
  \*/
  declare class ObjectStyleFillEffectsCategorySettings extends Preference {
  /\*\*
  - When true, the object style includes bevel emboss.
    \*/
    enableBevelEmboss: boolean

/\*\*

- When true, the object style includes directional feathering.
  \*/
  enableDirectionalFeather: boolean

/\*\*

- When true, the object style includes drop shadows.
  \*/
  enableDropShadow: boolean

/\*\*

- When true, the object style includes feathering.
  \*/
  enableFeather: boolean

/\*\*

- When true, the object style includes gradient feathering.
  \*/
  enableGradientFeather: boolean

/\*\*

- When true, the object style includes inner glow.
  \*/
  enableInnerGlow: boolean

/\*\*

- When true, the object style includes inner shadows.
  \*/
  enableInnerShadow: boolean

/\*\*

- When true, the object style includes outer glow.
  \*/
  enableOuterGlow: boolean

/\*\*

- When true, the object style includes satin.
  \*/
  enableSatin: boolean

/\*\*

- When true, the object style includes transparency settings.
  \*/
  enableTransparency: boolean
  }

/\*\*

- Settings group for object style content effects.
  \*/
  declare class ObjectStyleContentEffectsCategorySettings extends Preference {
  /\*\*
  - When true, the object style includes bevel emboss.
    \*/
    enableBevelEmboss: boolean

/\*\*

- When true, the object style includes directional feathering.
  \*/
  enableDirectionalFeather: boolean

/\*\*

- When true, the object style includes drop shadows.
  \*/
  enableDropShadow: boolean

/\*\*

- When true, the object style includes feathering.
  \*/
  enableFeather: boolean

/\*\*

- When true, the object style includes gradient feathering.
  \*/
  enableGradientFeather: boolean

/\*\*

- When true, the object style includes inner glow.
  \*/
  enableInnerGlow: boolean

/\*\*

- When true, the object style includes inner shadows.
  \*/
  enableInnerShadow: boolean

/\*\*

- When true, the object style includes outer glow.
  \*/
  enableOuterGlow: boolean

/\*\*

- When true, the object style includes satin.
  \*/
  enableSatin: boolean

/\*\*

- When true, the object style includes transparency settings.
  \*/
  enableTransparency: boolean
  }

/\*\*

- Grabber-related preferences.
  \*/
  declare class GrabberPreference extends Preference {
  /\*\*
  - Display-performance quality used during scrolling.
    \*/
    grabberPanning: PanningTypes
    }

/\*\*

- Type contextual UI preference settings.
  \*/
  declare class TypeContextualUiPreference extends Preference {
  /\*\*
  - Controls whether contextual ui appears for alternates.
    \*/
    showAlternatesUi: boolean

/\*\*

- Controls whether contextual ui appears for fractions.
  \*/
  showFractionsUi: boolean
  }

/\*\*

- Alignment and distribution preference settings.
  \*/
  declare class AlignDistributePreference extends Preference {
  /\*\*
  - Bounds used as the reference for page-item alignment or distribution.
    \*/
    alignDistributeBounds: AlignDistributeBounds

/\*\*

- When true, page-item spacing is distributed while the bounds setting is ignored.
  \*/
  distributeAbsolute: boolean

/\*\*

- Distance applied while distributing page items.
  \*/
  distributeAbsoluteMeasurement: number | string

/\*\*

- When true, page-item spacing is distributed while the bounds setting is ignored.
  \*/
  distributeSpaceAbsolute: boolean

/\*\*

- Distance applied while distributing page items.
  \*/
  distributeSpaceAbsoluteMeasurement: number | string
  }

/\*\*

- Animation preference settings.
  \*/
  declare class AnimationSetting extends Preference {
  /\*\*
  - Animation design option.
    \*/
    designOption: DesignOptions

/\*\*

- Animation duration in seconds.
  \*/
  duration: number

/\*\*

- Animation ease type.
  \*/
  easeType: AnimationEaseOptions

/\*\*

- Indicates whether this animated object uses custom settings.
  \*/
  readonly hasCustomSettings: boolean

/\*\*

- Indicates whether the object becomes hidden after the animation plays in an exported SWF file.
  \*/
  hiddenAfter: boolean

/\*\*

- Indicates whether the object starts hidden when shown in an exported SWF file.
  \*/
  initiallyHidden: boolean

/\*\*

- For this animation, stores motion path points and key frames. Can return: Ordered array containing keyFrame:Long Integer, pathPoint:Ordered array containing anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, rightDirection:Array of 2 Reals.
  \*/
  motionPath: any[]

/\*\*

- For this animation, stores motion path points. Can return: Ordered array containing pathPointArray:Array of Ordered array containing anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, rightDirection:Array of 2 Reals, pathOpen:Boolean.
  \*/
  motionPathPoints: any

/\*\*

- For this animation, stores opacity key frames. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
  \*/
  opacityArray: any[]

/\*\*

- Playback count for this animation.
  \*/
  plays: number

/\*\*

- Set true to loop animation playback.
  \*/
  playsLoop: boolean

/\*\*

- Base animation preset in use.
  \*/
  preset: MotionPreset | string | NothingEnum

/\*\*

- For this animation, stores rotation key frames. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
  \*/
  rotationArray: any[]

/\*\*

- For this animation, stores scale x key frames. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
  \*/
  scaleXArray: any[]

/\*\*

- For this animation, stores scale y key frames. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
  \*/
  scaleYArray: any[]

/\*\*

- Transform offset percentage measured from the target object bounding box's left-top corner.
  \*/
  transformOffsets: number[]

/\*\*

- Stores this motion preset as a custom preset.
- @param name Name assigned to the new motion preset.
  \*/
  save(name: string): MotionPreset

/\*\*

- Creates an InDesign motion preset file from this preset.
- @param to Destination Flash motion preset file.
  \*/
  saveACopy(to: File): void
  }

/\*\*

- Conditional-text preference settings.
  \*/
  declare class ConditionalTextPreference extends Preference {
  /\*\*
  - Currently active condition set.
    \*/
    activeConditionSet: ConditionSet

/\*\*

- Controls visibility for condition indicators.
  \*/
  showConditionIndicators: ConditionIndicatorMode
  }

/\*\*

- EPub export preference settings.
  \*/
  declare class EPubExportPreference extends Preference {
  /\*\*
  - EPub bottom margin.
    \*/
    bottomMargin: number

/\*\*

- When true, epub generation splits the InDesign document into smaller pieces.
  \*/
  breakDocument: boolean

/\*\*

- Bullet export option.
  \*/
  bulletExportOption: BulletListExportOption

/\*\*

- File path for the epub cover image.
  \*/
  coverImageFile: string

/\*\*

- Lets the user choose the image size option for conversion
  \*/
  customImageSizeOption: ImageSizeOption

/\*\*

- When true, fonts are embedded in the epub.
  \*/
  embedFont: boolean

/\*\*

- EPub cover option.
  \*/
  epubCover: EpubCover

/\*\*

- EPub creator.
  \*/
  epubCreator: string

/\*\*

- EPub date.
  \*/
  epubDate: string

/\*\*

- EPub description.
  \*/
  epubDescription: string

/\*\*

- EPub publisher.
  \*/
  epubPublisher: string

/\*\*

- EPub rights.
  \*/
  epubRights: string

/\*\*

- EPub subject.
  \*/
  epubSubject: string

/\*\*

- EPub title.
  \*/
  epubTitle: string

/\*\*

- Export order setting.
  \*/
  exportOrder: ExportOrder

/\*\*

- File paths for external cascading style sheets.
  \*/
  externalStyleSheets: string[]

/\*\*

- Footnote placement for EPub export
  \*/
  footnotePlacement: EPubFootnotePlacement

/\*\*

- When true, InDesign generates a cascade style sheet.
  \*/
  generateCascadeStyleSheet: boolean

/\*\*

- When true, GIF output is interlaced. Note: not valid when image conversion is JPEG.
  \*/
  gifOptionsInterlaced: boolean

/\*\*

- GIF conversion color palette. This applies only when image conversion is not JPEG.
  \*/
  gifOptionsPalette: GIFOptionsPalette

/\*\*

- Unique epub identifier, such as ISBN.
  \*/
  id: string

/\*\*

- Ignores object-level image conversion settings.
  \*/
  ignoreObjectConversionSettings: boolean

/\*\*

- Image alignment setting
  \*/
  imageAlignment: ImageAlignmentType

/\*\*

- File format for converted images. Requires copy optimized images or copy formatted images to be true.
  \*/
  imageConversion: ImageConversion

/\*\*

- Export resolution setting
  \*/
  imageExportResolution: ImageResolution

/\*\*

- Image page-break settings applied to objects
  \*/
  imagePageBreak: ImagePageBreakType

/\*\*

- Space After value for images
  \*/
  imageSpaceAfter: number

/\*\*

- Space Before value for images
  \*/
  imageSpaceBefore: number

/\*\*

- When true, InDesign writes class attributes into HTML elements; otherwise it emits plain html without class attributes.
  \*/
  includeClassesInHTML: boolean

/\*\*

- File paths for external javascripts.
  \*/
  javascripts: string[]

/\*\*

- JPEG conversion formatting method. This setting is unavailable when image conversion is GIF.
  \*/
  jpegOptionsFormat: JPEGOptionsFormat

/\*\*

- JPEG conversion quality. This setting is unavailable when image conversion is GIF.
  \*/
  jpegOptionsQuality: JPEGOptionsQuality

/\*\*

- EPub left margin.
  \*/
  leftMargin: number

/\*\*

- PNG compression level.
  \*/
  readonly level: number

/\*\*

- Numbered-list export option.
  \*/
  numberedListExportOption: NumberedListExportOption

/\*\*

- Paragraph style name used to split the InDesign document.
  \*/
  paragraphStyleName: string

/\*\*

- When true, image formatting follows the layout appearance.
  \*/
  preserveLayoutAppearence: boolean

/\*\*

- When true, local style overrides are output.
  \*/
  preserveLocalOverride: boolean

/\*\*

- EPub right margin.
  \*/
  rightMargin: number

/\*\*

- When true, soft returns are stripped.
  \*/
  stripSoftReturn: boolean

/\*\*

- TOC style name used to generate the epub TOC.
  \*/
  tocStyleName: string

/\*\*

- EPub top margin.
  \*/
  topMargin: number

/\*\*

- When true, InDesign reuses existing images for graphic objects during export.
  \*/
  useExistingImageOnExport: boolean

/\*\*

- When true, objects use image page-break settings
  \*/
  useImagePageBreak: boolean

/\*\*

- Use SVG As
  \*/
  useSVGAs: UseSVGAsEnum

/\*\*

- EPUB version.
  \*/
  version: EpubVersion
  }

/\*\*

- HTML export preference settings.
  \*/
  declare class HTMLExportPreference extends Preference {
  /\*\*
  - Bullet export option.
    \*/
    bulletExportOption: BulletListExportOption

/\*\*

- Lets the user choose the image size option for conversion
  \*/
  customImageSizeOption: ImageSizeOption

/\*\*

- Export order setting.
  \*/
  exportOrder: ExportOrder

/\*\*

- When true and a selection exists, only selected content is exported to HTML.
  \*/
  exportSelection: boolean

/\*\*

- File paths for external cascading style sheets.
  \*/
  externalStyleSheets: string[]

/\*\*

- When true, InDesign generates a cascade style sheet.
  \*/
  generateCascadeStyleSheet: boolean

/\*\*

- When true, GIF output is interlaced. Note: not valid when image conversion is JPEG.
  \*/
  gifOptionsInterlaced: boolean

/\*\*

- GIF conversion color palette. This applies only when image conversion is not JPEG.
  \*/
  gifOptionsPalette: GIFOptionsPalette

/\*\*

- Ignores object-level image conversion settings.
  \*/
  ignoreObjectConversionSettings: boolean

/\*\*

- Image alignment setting
  \*/
  imageAlignment: ImageAlignmentType

/\*\*

- File format for converted images. Requires copy optimized images or copy formatted images to be true.
  \*/
  imageConversion: ImageConversion

/\*\*

- Export order setting.
  \*/
  imageExportOption: ImageExportOption

/\*\*

- Export resolution setting
  \*/
  imageExportResolution: ImageResolution

/\*\*

- Image extension used on the server.
  \*/
  imageExtension: string

/\*\*

- Space After value for images
  \*/
  imageSpaceAfter: number

/\*\*

- Space Before value for images
  \*/
  imageSpaceBefore: number

/\*\*

- When true, InDesign writes class attributes into HTML elements; otherwise it emits plain html without class attributes.
  \*/
  includeClassesInHTML: boolean

/\*\*

- File paths for external javascripts.
  \*/
  javascripts: string[]

/\*\*

- JPEG conversion formatting method. This setting is unavailable when image conversion is GIF.
  \*/
  jpegOptionsFormat: JPEGOptionsFormat

/\*\*

- JPEG conversion quality. This setting is unavailable when image conversion is GIF.
  \*/
  jpegOptionsQuality: JPEGOptionsQuality

/\*\*

- PNG compression level.
  \*/
  level: number

/\*\*

- Numbered-list export option.
  \*/
  numberedListExportOption: NumberedListExportOption

/\*\*

- When true, image formatting follows the layout appearance.
  \*/
  preserveLayoutAppearence: boolean

/\*\*

- When true, local style overrides are output.
  \*/
  preserveLocalOverride: boolean

/\*\*

- Server path for image files.
  \*/
  serverPath: string

/\*\*

- Use SVG As
  \*/
  useSVGAs: UseSVGAsEnum

/\*\*

- When true, opens the document in a viewer after export.
  \*/
  viewDocumentAfterExport: boolean
  }

/\*\*

- Fixed-layout EPub export preference settings.
  \*/
  declare class EPubFixedLayoutExportPreference extends Preference {
  /\*\*
  - File path for the epub cover image.
    \*/
    coverImageFile: string

/\*\*

- EPub cover option.
  \*/
  epubCover: EpubCover

/\*\*

- EPub creator.
  \*/
  epubCreator: string

/\*\*

- EPub date.
  \*/
  epubDate: string

/\*\*

- EPub description.
  \*/
  epubDescription: string

/\*\*

- EPub navigation style.
  \*/
  epubNavigationStyles: EpubNavigationStyle

/\*\*

- EPub page range.
  \*/
  epubPageRange: string

/\*\*

- EPub page range format.
  \*/
  epubPageRangeFormat: PageRangeFormat

/\*\*

- EPub publisher.
  \*/
  epubPublisher: string

/\*\*

- EPub rights.
  \*/
  epubRights: string

/\*\*

- Spread control setting for fixed layout EPub.
  \*/
  epubSpreadControlOptions: EpubFixedLayoutSpreadControl

/\*\*

- EPub subject.
  \*/
  epubSubject: string

/\*\*

- EPub title.
  \*/
  epubTitle: string

/\*\*

- File paths for external cascading style sheets.
  \*/
  externalStyleSheets: string[]

/\*\*

- When true, GIF output is interlaced. Note: not valid when image conversion is JPEG.
  \*/
  gifOptionsInterlaced: boolean

/\*\*

- GIF conversion color palette. This applies only when image conversion is not JPEG.
  \*/
  gifOptionsPalette: GIFOptionsPalette

/\*\*

- Unique epub identifier, such as ISBN.
  \*/
  id: string

/\*\*

- File format for converted images. Requires copy optimized images or copy formatted images to be true.
  \*/
  imageConversion: ImageConversion

/\*\*

- Export resolution setting
  \*/
  imageExportResolution: ImageResolution

/\*\*

- File paths for external javascripts.
  \*/
  javascripts: string[]

/\*\*

- JPEG conversion formatting method. This setting is unavailable when image conversion is GIF.
  \*/
  jpegOptionsFormat: JPEGOptionsFormat

/\*\*

- JPEG conversion quality. This setting is unavailable when image conversion is GIF.
  \*/
  jpegOptionsQuality: JPEGOptionsQuality

/\*\*

- PNG compression level.
  \*/
  readonly level: number
