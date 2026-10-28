# Element.depth

Community declaration reference: Animate/22.0.

Integer depth for the object in the view, with values greater than 0. Stage drawing order determines which object appears above others. The Modify > Arrange menu item can also change object order.
Example script after selecting an object: fl.trace("Depth of selected object: " + fl.getDocumentDOM().selection[0].depth);

```typescript
declare class Element {
    readonly depth: number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
