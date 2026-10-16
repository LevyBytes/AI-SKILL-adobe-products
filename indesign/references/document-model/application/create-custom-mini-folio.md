# createCustomMiniFolio

> **createCustomMiniFolio**( Mixed **miniFolioDescription**, File **destination** )
>
> Builds a mini-folio using the supplied asset and overlay descriptions.

Mini folio description schema:
|| Key || Type || Required? || Description ||
| contentstackid | string | yes | Explicit ID assigned to this stack |
| tocImage | file | no | TOC image for the mini-folio |
| narrowdimension | int | no | Target export size measured along the narrow dimension |
| widedimension | int | no | Target export size measured along the wide dimension |
| smoothscrolling | @enum(SmoothScrollingOptions) | no | Smooth scrolling behavior for this stack; default is noSmoothScroll |
| locationforgeneratedassets | file | no | Existing directory where generated assets are created, when supplied. |
| overlays | array | no | see the SDK Overlay Builder APIs |
| assets | array | yes | Asset entries for the mini - folio, described below. |
| assetDependencies | array | no | Files required by the asset; included in the package but omitted from the manifest. |
| metadata | array | no | Metadata entries; details follow below. |
| showprogressbar | boolean | no | Either true or false, controlling whether a progress bar appears; default is false |
| targetviewerversion | string | no | If supplied in the form "major.minor.revision", produces a folio compatible with that viewer version. If omitted, produces the latest folio format. | CS5 |

For the "assets" array, these fields are available:
|| Key || Type || Required? || Description ||
| file | file | yes | Asset file |
| type | string | yes | Kind of asset file: either "web" for HTML or "image" for a raster |
| width | int | yes | Asset width |
| height | int | yes | Asset height |
| orientation | string | yes | Asset orientation: either "portrait" or "landscape" |
| thumbnail | file | no | Thumbnail used for the asset in browse mode |
| scrubber | file | no | Thumbnail used for the asset in scrubber mode |

For the "assetDependencies" array, these fields are available:
|| Key || Type || Required? || Description ||
| file | file | no | Dependent file |
| relativePath | string | no | Relative path to the file for package use |

For the "metadata" array, these fields are available:
|| Key || Type || Required? || Description ||
| any string | string or boolean | no | Freeform metadata entry, including examples from "export folio meta data" |

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | miniFolioDescription | Dictionary for the custom mini folio to create; accepts Ordered array containing key:String, value:Boolean, Long Integer, Long Long Integer, String, File or Array of Any Types. |
| File | destination | File path for the output. |
