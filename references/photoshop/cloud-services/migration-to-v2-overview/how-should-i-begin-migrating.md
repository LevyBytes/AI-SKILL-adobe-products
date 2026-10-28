# How should I begin migrating?

1. **[Read the Key Improvements and Architecture with v2](../key-improvements-and-architecture-with-v2.md)** for the architecture changes
2. **Review storage options** through the [guide to enhanced storage solutions](../storage-solutions.md)
3. **Pick your migration route** from the endpoints you use today, using the reference table below:
   - **Lightroom Operations:**
     - [Edit Operations](../edit-operations/reference-index.md) - Lightroom edit workflows, including autoTone, presets, XMP, and related operations
   - **Document Operations:**
     - [Format Conversion](../format-conversion-migration/reference-index.md) - PSD conversion to other formats (renditionCreate) plus PSDC Engine migration
     - [Document Creation](../document-creation-migration/reference-index.md) - Creation of new blank documents (documentCreate)
     - [Document Operations](../document-operations-migration/reference-index.md) - Document-wide operations such as crop, resize, and trim (documentOperations)
   - **Layer Operations:**
     - [Layer Operations Overview](../layer-operations-migration/layer-operations-overview.md) - V2 layer operations introduction
     - [Image Layer Operations](../layer-operations-migration/image-layer-operations.md) - Image layers and solid color layers
     - [Text Layer Operations](../layer-operations/text/layer-operations-text.md) - Styled text layers
     - [Adjustment Layer Operations](../layer-operations/adjustments/reference-index.md) - Non-destructive adjustment layers
     - [Smart Object Operations](../layer-operations/smart-objects/reference-index.md) - Smart object layer workflows
     - [Advanced Layer Operations](../layer-operations/advanced/reference-index.md) - Layer masks, groups, transforms, and blend-mode handling
   - **Other Operations:**
     - [Actions Migration](../actions-migration/reference-index.md) - Photoshop actions plus convenience API changes
     - [Output Types Migration](../output-types-migration/reference-index.md) - Output format updates for JPEG, PNG, PSD, and TIFF
     - [Artboard Migration](../artboard-migration/reference-index.md) - Artboard workflow changes
     - [Manifest Migration](../manifest-migration/reference-index.md) - Manifest creation flow
     - [Status Migration](../status-migration/reference-index.md) - Job status polling changes
4. **Test your migration** against non-production workloads
5. **Update your production systems** after testing succeeds
