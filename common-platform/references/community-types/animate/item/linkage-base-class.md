# Item.linkageBaseClass

Community declaration reference: Animate/22.0.

ActionScript 3.0 class name associated with the symbol. The specified value is shown in the authoring environment's Linkage dialog box and in other dialog boxes that include those Linkage controls, including the Symbol Properties dialog box. For an ActionScript 2.0 class value, use item.linkageClassName.
When the base class is the default for the symbol type, such as "flash.display.MovieClip" for movie clips or "flash.display.SimpleButton" for buttons, this property is an empty string (""). To restore an item to the default base class, set this value to an empty string as well.
Setting this property by script does not run the validation performed by the Linkage dialog box, and Flash does not throw errors if it cannot set the base class to the provided value. For example, the Linkage dialog box checks that the base class exists in the FLA file's classpath, that ActionScript 3.0 is selected in the Flash tab of the Publish Settings dialog box, and similar conditions. Script assignment skips those checks.

```typescript
declare class Item {
    linkageBaseClass: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
