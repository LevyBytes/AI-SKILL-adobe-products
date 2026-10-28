# EffectRackSlot

Community declaration reference: Audition/2018.

Represents one slot in an effect rack.

```typescript
declare class EffectRackSlot {
    /**
    - Effect assigned to the slot.
      */
      readonly effect: Effect
    /**

    - Slot power state.
      */
      power: boolean
    /**

    -
    - @param nameOrComponentID Create an effect instance and place it in this slot.
      */
      insertEffect(nameOrComponentID: string): boolean
    /**

    - Remove the effect currently stored in this slot.
      */
      removeEffect(): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
