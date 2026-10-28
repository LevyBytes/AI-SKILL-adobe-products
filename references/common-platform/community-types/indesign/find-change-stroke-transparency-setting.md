# FindChangeStrokeTransparencySetting

Community declaration reference: InDesign/2023.

Transparency settings applied to the parent object's stroke.

```typescript
declare class FindChangeStrokeTransparencySetting extends Preference {
    /**
    - Settings that control the bevel and emboss effect.
      */
      readonly bevelAndEmbossSettings: FindChangeBevelAndEmbossSetting
    /**

    - Settings that control blending mode behavior.
      */
      readonly blendingSettings: FindChangeBlendingSetting
    /**

    - Settings that control the directional feather effect.
      */
      readonly directionalFeatherSettings: FindChangeDirectionalFeatherSetting
    /**

    - Settings that control the drop shadow effect.
      */
      readonly dropShadowSettings: FindChangeDropShadowSetting
    /**

    - Settings that control the feather effect.
      */
      readonly featherSettings: FindChangeFeatherSetting
    /**

    - Settings that control the gradient feather effect.
      */
      readonly gradientFeatherSettings: FindChangeGradientFeatherSetting
    /**

    - Settings that control the inner glow effect.
      */
      readonly innerGlowSettings: FindChangeInnerGlowSetting
    /**

    - Settings that control the inner shadow effect.
      */
      readonly innerShadowSettings: FindChangeInnerShadowSetting
    /**

    - Settings that control the outer glow effect.
      */
      readonly outerGlowSettings: FindChangeOuterGlowSetting
    /**

    - Collection containing preference objects.
      */
      readonly preferences: Preferences
    /**

    - Settings that control the satin effect
      */
      readonly satinSettings: FindChangeSatinSetting
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
