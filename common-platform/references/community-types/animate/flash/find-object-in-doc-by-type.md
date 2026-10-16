# Flash.findObjectInDocByType

Community declaration reference: Animate/22.0.

Reveals elements of the requested element type in a document.
Note: In some cases, this method only works when run as a command from inside a FLA file, rather than while a JSFL file is being viewed or edited.
@returns Generic-object array. Use each item's .obj property to obtain the element object. Each object includes keyframe, layer, timeline, and parent properties for hierarchy access.
Methods and properties on the layer and timeline values are also available; those values correspond to the Layer object and Timeline object.
Example reference location: file:///C:/Users/vstinca/Downloads/flash_cs5_extending.pdf
@param elementType String representing the element type to search for. For acceptable values, see element.elementType.
@param document Document object that serves as the search target for the specified item.

```typescript
declare class Flash {
    findObjectInDocByType(elementType: string, document: Document): ObjectInDoc[]
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
