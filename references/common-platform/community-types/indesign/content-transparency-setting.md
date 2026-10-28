# ContentTransparencySetting

Community declaration reference: InDesign/2023.

Transparency settings applied to the parent object's content.

```typescript
declare class ContentTransparencySetting extends Preference {
    /**
    - Settings that control the bevel and emboss effect.
      */
      readonly bevelAndEmbossSettings: BevelAndEmbossSetting
    /**

    - Settings that control blending mode behavior.
      */
      readonly blendingSettings: BlendingSetting
    /**

    - Settings that control the directional feather effect.
      */
      readonly directionalFeatherSettings: DirectionalFeatherSetting
    /**

    - Settings that control the drop shadow effect.
      */
      readonly dropShadowSettings: DropShadowSetting
    /**

    - Settings that control the feather effect.
      */
      readonly featherSettings: FeatherSetting
    /**

    - Settings that control the gradient feather effect.
      */
      readonly gradientFeatherSettings: GradientFeatherSetting
    /**

    - Settings that control the inner glow effect.
      */
      readonly innerGlowSettings: InnerGlowSetting
    /**

    - Settings that control the inner shadow effect.
      */
      readonly innerShadowSettings: InnerShadowSetting
    /**

    - Settings that control the outer glow effect.
      */
      readonly outerGlowSettings: OuterGlowSetting
    /**

    - Collection containing preference objects.
      */
      readonly preferences: Preferences
    /**

    - Settings that control the satin effect
      */
      readonly satinSettings: SatinSetting
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
