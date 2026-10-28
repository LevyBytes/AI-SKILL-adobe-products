# Flash.getThemeColorParameters

Community declaration reference: Animate/22.0.

Provides the theme color parameters as an Array of strings. Available theme color parameters:
themeAppBackgroundColor
themeItemSelectedColor
themeItemHighlightedColor
themeHotTextNormalColor
themeHotTextRolloverColor
themeHotTextDisableColor
themeStaticTextNormalColor
themeStaticTextDisableColor
themeTextEditNormalBackgroundColor
themeTextEditDisableBackgroundColor
themeUseGradients
themeEnableShading
themeDividerLine
themeDividerLineBevel
themeControlFocus
themeControlBorderNormal
themeControlBorderDisabled
themeControlFillNormal
themeControlFillTopNormal
themeControlFillBottomNormal
themeControlFillOver
themeControlFillTopOver
themeControlFillBottomOver
themeControlFillDown
themeControlFillTopDown
themeControlFillBottomDown
themeControlFillDisabled
themeControlFillTopDisabled
themeControlFillBottomDisabled
themeControlFillSelectedOver
themeControlFillTopSelectedOver
themeControlFillBottomSelectedOver
themeGenericIconNormal
themeGenericIconShadowNormal
themeGenericIconDisabled
themeGenericIconShadowDisabled
Flash Professional CC added 2 UI themes, Dark and Light UI; this method obtains current theme color parameters for rendering custom content.
Note: The "top" and "bottom" colors apply when drawing controls with shading enabled. If shading is disabled, use themeControlFillNormal, themeControlFillOver without "top" and "bottom" in the names.
@returns Array of strings containing the theme color parameters.

```typescript
declare class Flash {
    getThemeColorParameters(): string[]
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
