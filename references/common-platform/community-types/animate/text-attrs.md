# TextAttrs

Community declaration reference: Animate/22.0.

TextAttrs contains every text property that can be assigned to a subselection. TextRun exposes this object through textRun.textAttrs.

```typescript
declare class TextAttrs {
    /**
    - Tells Flash to draw text with a method optimized for improving small-text legibility.
      */
      aliasText: boolean
    /**
    - Sets paragraph justification. Acceptable values are "left" , "center", "right", and "justify".
      */
      alignment: string
    /**
    - Determines whether Flash applies pair kerning information from the font(s) when kerning text; true uses it and false ignores it.
      */
      autoKern: boolean
    /**
    - Controls bold styling; true displays text with the bold version of the font.
      */
      bold: boolean
    /**
    - Sets the text baseline position. Allowed strings: "normal", "subscript", and "superscript". Only static text supports this property.
      */
      characterPosition: string
    /**
    - Sets character spacing. Range: -60 through 60.
    - Only static text supports this property; other text types generate a warning.
      */
      characterSpacing: number
    /**
    - Stores the font name, for example "Arial".
      */
      face: string
    /**
    - Defines the fill color in any one of these forms:
    - String format: "#RRGGBB" or "#RRGGBBAA"
    - Hexadecimal-number format: 0xRRGGBB
    - Integer form: decimal equivalent of a hexadecimal number
      */
      fillColor: string | number
    /**
    - Sets paragraph indentation. Acceptable values are -720 through 720.
      */
      indent: number
    /**
    - Controls italic styling; true displays text with the italic version of the font.
      */
      italic: boolean
    /**
    - Sets the left margin for the paragraph. Range: 0 through 720.
      */
      leftMargin: number
    /**
    - Sets spacing between characters. Range: -60 through 60.
    - Only static text supports this property; other text types generate a warning.
      */
      letterSpacing: number
    /**
    - Sets paragraph line spacing, or leading. Acceptable values are -360 through 720.
      */
      lineSpacing: number
    /**
    - Sets the right margin for the paragraph. Range: 0 through 720.
      */
      rightMargin: number
    /**
    - Controls character rotation; true rotates the text characters 90 degrees. Default: false. Use it only with static text that has a vertical orientation; other text types generate a warning.
      */
      rotation: boolean
    /**
    - Sets the font size.
      */
      size: number
    /**
    - Stores the text field's target property. This property works only with static text.
      */
      target: string
    /**
    - Stores the text field's URL property. This property works only with static text.
      */
      url: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
