# PDFStandard

Community declaration reference: Photoshop/2015.5.

PDF/X standard that the document follows.
PDF/X-compliant files must include information describing the printing condition they target.

```typescript
declare enum PDFStandard {
    /**
    - The document does not follow the PDF/X standard.
      */
      NONE = 0,
    /**

    - PDF/X-1a standard: all fonts must be embedded, the proper PDF bounding boxes must be set, and color must be CMYK, spot colors, or both; Acrobat 4.0 and Acrobat Reader 4.0 and later can open it.
      */
      PDFX1A2001 = 1,
    /**

    - PDF/X-1a standard: all fonts must be embedded, the proper PDF bounding boxes must be set, and color must be CMYK, spot colors, or both; Acrobat 4.0 and Acrobat Reader 4.0 and later can open it.
      */
      PDFX1A2003 = 2,
    /**

    - PDF/X-3 standard: all fonts must be embedded and the proper PDF bounding boxes must be set; color may be handled through color management with device-independent spaces (CIE L*a*b, ICC-based color spaces, CalRGB, and CalGray), or through CMYK, spot colors, or both; Acrobat 4.0 and Acrobat Reader 4.0 and later can open it.
      */
      PDFX32002 = 3,
    /**

    - PDF/X-3 standard: all fonts must be embedded and the proper PDF bounding boxes must be set; color may be handled through color management with device-independent spaces (CIE L*a*b, ICC-based color spaces, CalRGB, and CalGray), or through CMYK, spot colors, or both; Acrobat 4.0 and Acrobat Reader 4.0 and later can open it.
      */
      PDFX32003 = 4,
    /**

    - PDF/X-4 standard: all fonts must be embedded and the proper PDF bounding boxes must be set; color may be handled through color management with device-independent spaces (CIE L*a*b, ICC-based color spaces, CalRGB, and CalGray), or through CMYK, spot colors, or both; Acrobat 8.0 and Acrobat Reader 8.0 and later can open it.
      */
      PDFX42008 = 5,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
