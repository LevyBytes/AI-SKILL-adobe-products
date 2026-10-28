# Parameter

Community declaration reference: Animate/22.0.

Parameter is accessed from the componentInstance.parameters array, which maps to the component Property inspector in the authoring tool.

```typescript
declare class Parameter {
    /**
    - String specifying the category property for a screen parameter or componentInstance parameter. It offers another way to present a parameter list. The Flash user interface does not expose this functionality.
      */
      category: string
    /**
    - Value of the selected list item. This property applies only when parameter.valueType is "List".
      */
      listIndex: number
    /**
    - String naming the parameter.
      */
      readonly name: string
    /**
    - Maps to the Value field in the Component inspector Parameters tab, the Property inspector Parameters tab, or the screen Property inspector. The parameter's valueType property determines the value property's type (see parameter.valueType).
      */
      value: any
    /**
    - String indicating the screen or component parameter type. Allowed valueType strings include "Default", "Array", "Object", "List", "String", "Number", "Boolean", "Font Name", "Color", "Collection", "Web Service URL", and "Web Service Operation".
      */
      readonly valueType: string
    /**
    - Defines where the parameter appears. When this property is 0 (nonverbose), the parameter appears only in the Component inspector. When it is 1 (verbose), the parameter appears in both the Component inspector and the Parameters tab of the Property inspector.
      */
      verbose: string
    /**
    - Inserts an item into an object or array. For object or array parameters, value is stored as an array.
    - @param index Zero-based integer index indicating where the item will be inserted in the object or array. If index is 0, insertion happens at the beginning. If index is larger than the list size, insertion happens at the end.
    - @param name String naming the item to insert. This parameter is required for object parameters.
    - @param value String specifying the item value to insert.
    - @param type String for the inserted item's type.
      */
      insertItem(index: number, name: string, value: string, type: string): void
    /**
    - Removes one element from an object or array type used by a screen or component parameter.
    - @param index Zero-based integer index of the item to remove from the screen or component property.
      */
      removeItem(index: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
