# Bullet

Community declaration reference: InDesign/2023.

Bullet-character preference object.

```typescript
declare class Bullet extends Preference {
    /**
    - Font used by the bullet character.
      */
      bulletsFont: Font | string | AutoEnum
    /**

    - Font style used by the bullet character.
      */
      bulletsFontStyle: string | NothingEnum | AutoEnum
    /**

    - Bullet character type.
      */
      characterType: BulletCharacterType
    /**

    - Bullet character value supplied by unicode ID or glyph ID.
      */
      characterValue: number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
