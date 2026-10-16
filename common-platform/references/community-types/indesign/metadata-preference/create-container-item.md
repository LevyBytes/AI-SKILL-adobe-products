# MetadataPreference.createContainerItem

Community declaration reference: InDesign/2023.

Builds an empty container.
@param namespace Namespace for the container.
@param path Path to the container.
@param index Item index inside the container. Specified values must be 1 or greater. Use 0 to append the item after the current end and let the next available value be chosen.
@param container Container type. Note: Supply this for the container's initial item.

```typescript
declare class MetadataPreference extends Preference {
    createContainerItem(namespace: string, path: string, index?: number, container?: ContainerType): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
