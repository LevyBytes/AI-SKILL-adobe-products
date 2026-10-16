# Decision tree for migration path selection

```text
START: Choose the operation you need.
│
├─ Applying image adjustments such as autoTone or exposure?
│  └─> Use /v2/edit endpoint
│     └─> Guide: Edit Operations Migration
│
├─ Converting PSD to JPEG/PNG/TIFF with no edits?
│  └─> Route to /v2/create-composite without an edits block
│     └─> Guide: Format Conversion Migration
│
├─ Is PSD/Cloud PSD conversion using sensei PSDC engine?
│  └─> Use /v2/create-composite
│     └─> URNs map to creativeCloudFileId, paths to creativeCloudPath
│     └─> Guide: Format Conversion Migration (PSDC Engine section)
│
├─ Creating a blank new document?
│  └─> Use /v2/create-composite with document params
│     └─> Guide: Document Creation Migration
│
├─ Resizing, cropping, or trimming an existing document?
│  └─> Route to /v2/create-composite and put changes in edits.document
│     └─> Guide: Document Operations Migration
│
├─ Need to add, change, or remove layers in a PSD?
│  └─> Route to /v2/create-composite and put changes in edits.layers
│     ├─> Image layers? → Layer Operations: Image
│     ├─> Text layers? → Layer Operations: Text
│     ├─> Adjustment layers? → Layer Operations: Adjustments
│     ├─> Smart objects (via V1 documentOperations)? → Layer Operations: Smart Objects
│     ├─> Smart objects (via V1 /psdService/smartObject)? → convenience-apis/smart-object-replace
│     └─> Move/delete/masks? → Layer Operations: Advanced
│
├─ Running Photoshop actions or scripts?
│  └─> Use /v2/execute-actions
│     └─> Guide: Actions Migration
│
├─ Editing text layers from the V1 /psdService/text endpoint?
│  └─> Run ActionJSON or UXP through /v2/execute-actions
│     └─> Guide: Text Endpoint Migration Specific (validation checklist section)
│
├─ Building artboards from multiple images?
│  └─> Use /v2/create-artboard
│     └─> Guide: Artboard Migration
│
├─ Reading PSD structure and layer details?
│  └─> Use /v2/generate-manifest
│     └─> Guide: Manifest Migration
│
└─ Need job status?
   └─> Query /v2/status/{jobId}
      └─> Guide: Status Migration
```
