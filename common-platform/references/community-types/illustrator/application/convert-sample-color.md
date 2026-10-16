# Application.convertSampleColor

Community declaration reference: Illustrator/2022.

Converts sample-component color values between color spaces.
@param sourceColorSpace Specifies the source color space.
@param sourceColor Color being converted, supplied as an array of color components; when source-has-alpha is true, the first array position contains alpha.
@param destColorSpace Specifies the destination color space.
@param colorConvertPurpose Specifies the parameter which passes the purpose of conversion.
@param sourceHasAlpha True when the source color includes an alpha channel.
@param destHasAlpha True when the destination color includes an alpha channel.

```typescript
declare class Application {
    convertSampleColor(
      sourceColorSpace: ImageColorSpace,
      sourceColor: number[],
      destColorSpace: ImageColorSpace,
      colorConvertPurpose: ColorConvertPurpose,
      sourceHasAlpha?: boolean,
      destHasAlpha?: boolean,
      ): number[]
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
