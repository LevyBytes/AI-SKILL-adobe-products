# Application.createCustomMiniFolio

Community declaration reference: InDesign/2023.

Builds a mini-folio from asset and overlay description data.
Mini folio descriptions use this schema:
|| Key || Type || Required? || Description ||
| contentstackid | string | yes | explicit ID assigned to this stack |
| tocImage | file | no | TOC image used for the mini-folio |
| narrowdimension | int | no | Targetted export size along the narrow dimension |
| widedimension | int | no | Targetted export size along the wide dimension |
| smoothscrolling | @enum(SmoothScrollingOptions) | no | smooth scrolling setting for this stack (default is noSmoothScroll) |
| locationforgeneratedassets | file | no | existing directory to receive generated assets when this key is supplied |
| overlays | array | no | refer to the SDK Overlay Builder APIs |
| assets | array | yes | mini - folio assets, defined below |
| assetDependencies | array | no | asset-required files included in the package but left out of the manifest |
| metadata | array | no | mini-folio metadata, defined below |
| showprogressbar | boolean | no | true or false flag for showing a progress bar (default is false) |
| targetviewerversion | string | no | when supplied in "major.minor.revision" form, produces a folio for that viewer version; when omitted, produces the latest folio format. | CS5 |
Fields in the "assets" array:
|| Key || Type || Required? || Description ||
| file | file | yes | asset file |
| type | string | yes | asset kind: "web" for HTML content, or "image" for raster content |
| width | int | yes | asset width |
| height | int | yes | asset height |
| orientation | string | yes | asset orientation: either "portrait" or "landscape" |
| thumbnail | file | no | asset thumbnail used in browse mode |
| scrubber | file | no | asset thumbnail used in scrubber mode |
Fields in the "assetDependencies" array:
|| Key || Type || Required? || Description ||
| file | file | no | dependent file |
| relativePath | string | no | relative path to the file for package use |
Fields in the "metadata" array:
|| Key || Type || Required? || Description ||
| any string | string or boolean | no | arbitrary key/value pair whose key is a string and whose value is a string or boolean, including values described in "export folio meta data" |
@param miniFolioDescription Dictionary for the custom mini folio being created. Can accept: Ordered array containing key:String, value:Boolean, Long Integer, Long Long Integer, String, File or Array of Any Types.
@param destination File-writing destination.

```typescript
declare class Application {
    createCustomMiniFolio(miniFolioDescription: any[], destination: File): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
