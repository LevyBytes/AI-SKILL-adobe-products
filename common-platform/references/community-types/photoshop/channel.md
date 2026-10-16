# Channel

Community declaration reference: Photoshop/2015.5.

Stores image color-element information, similar to a printing plate that applies one color. The document's color mode controls how many default channels exist. For example, an RGB document includes four defaults: the composite channel RGB plus the red, green, and blue component channels. A channel may also be an alpha channel for mask-style selections or a spot channel for spot colors.

```typescript
declare class Channel {
    /**
    - Channel color; not valid for component channels.
      */
      color: SolidColor
    /**

    - Color histogram for the channel.
      */
      readonly histogram: number[]
    /**

    - Channel type.
      */
      kind: ChannelType
    /**

    - Channel name.
      */
      name: string
    /**

    - Opacity for alpha channels, known as solidity on spot channels. Range: 0 to 100. Applies only when 'type' = masked area or selected area.
      */
      opacity: number
    /**

    - Container object.
      */
      readonly parent: object
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - When true, the channel is shown.
      */
      visible: boolean
    /**

    - Adds an element.
      */
      add(): Channel
    /**

    - Creates a duplicate of this object.
    - @param relativeObject
    - @param insertionLocation
      */
      duplicate(relativeObject: object, insertionLocation: ElementPlacement): Channel
    /**

    - Creates a copy of the channel.
    - @param targetDocument Document receiving the duplicated channel.
      */
      duplicate(targetDocument?: Document): Channel
    /**

    - Combines a spot channel with the component channels.
      */
      merge(): void
    /**

    - Removes this object.
      */
      remove(): void
    /**

    - Removes every element.
      */
      removeAll(): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
