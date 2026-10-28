# Effect

Community declaration reference: Audition/2018.

Represents an effect instance in the effects rack for a wave document, clip, or track. Call insertEffect on an effect rack slot to create new effects.

```typescript
declare class Effect {
    /**
    - Component ID for the effect.
      */
      readonly componentID: string
    /**

    - Name of this effect.
      */
      readonly name: string
    /**

    - Returns objects describing each effect parameter. Each object can include name - paramater name; label - parameter title; unit - unit for parameter values (not every effect supplies it); minimum - lower bound for the arameter value range (not every effect supplies it); maximum - upper bound for the parameter value range (not every effect supplies it)
      */
      readonly parameterInfos: any[]
    /**

    - Returns an array with every preset for this effect.
      */
      readonly presets: EffectPreset[]
    /**

    -
    - @param paramName Return the physical value for the parameter named by paramName. Retrieve all available parameter names through parameterInfos.
      */
      getParameter(paramName: string): number
    /**

    -
    - @param paramName
    - @param value Set the physical value for the parameter named by paramName. Retrieve all available parameter names through parameterInfos.
      */
      setParameter(paramName: string, value: number): number
    /**

    -
    - @param preset Apply the specified preset.
      */
      setPreset(preset: EffectPreset): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
