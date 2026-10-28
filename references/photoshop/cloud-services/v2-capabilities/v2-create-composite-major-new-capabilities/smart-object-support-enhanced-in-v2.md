# Smart object support - enhanced in V2

V2 reshapes the smart object API so place, replace, and transform operations behave predictably. It adds SVG source support, linked smart objects, and replacement capabilities that V1 did not offer.

V1 handled smart objects inconsistently across add, edit, and replace workflows. V2 brings those cases under one `operation` model with explicit `type` and `placement` values:

```json
{
  "type": "smart_object_layer",
  "name": "Logo",
  "operation": {
    "type": "add",
    "placement": { "type": "top" }
  },
  "smartObject": {
    "smartObjectFile": {
      "source": { "url": "<SMART_OBJECT_URL>" }
    }
  }
}
```

**New features in V2:**

1. **Expanded File Type Support** - V2 supports SVG (`image/svg+xml`) and AI / Adobe Illustrator (`application/illustrator`) as additional smart object source types. V1 accepted PSD, JPEG, PNG, and PDF.

2. **Linked Smart Objects** - V2 fully supports linked smart objects, where the PSD references external files instead of embedding them. Add a linked smart object by setting `isLinked: true`:

   ```json
   {
     "type": "smart_object_layer",
     "name": "External Logo",
     "operation": {
       "type": "add",
       "placement": { "type": "top" }
     },
     "smartObject": {
       "isLinked": true,
       "smartObjectFile": {
         "source": { "url": "<EXTERNAL_FILE_URL>" }
       }
     }
   }
   ```

3. **Replacement Operations** - V2 adds smart object replacement combinations that V1 could not perform:

   - Swap a linked smart object for a different linked smart object
   - Replace an embedded smart object by using a linked smart object

   Conversion example: embedded smart object to linked smart object:

   ```json
   {
     "name": "Existing Embedded Smart Object",
     "type": "smart_object_layer",
     "operation": {
       "type": "edit"
     },
     "smartObject": {
       "isLinked": true,
       "smartObjectFile": {
         "source": { "url": "<LINKED_FILE_URL>" }
       }
     }
   }
   ```

4. **Resize with Linked Smart Objects** - V1 rejected any resize (`width`/`maxWidth`) on documents containing linked smart objects. V2 removes this restriction. See [resize behavior details](../../layer-operations/smart-objects/new-features-in-v2/resize-with-linked-smart-objects.md) in the Smart Object Operations Migration guide.

**Supported source types:** See [Supported Source File Types](../../layer-operations/smart-objects/supported-source-file-types.md)

**Use cases for linked smart objects:**

- Shared assets across multiple PSDs
- Large files that shouldn't be embedded
- Assets that need to be updated independently

See [Smart Object Operations Migration](../../layer-operations/smart-objects/reference-index.md) for complete documentation and examples.
