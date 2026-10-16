# Paragraph style properties

When a V2 request leaves out any of the paragraph style fields below, the API applies defaults; every listed property is optional.

| Property | V1 Support | V2 Support | Description (V2) |
| --- | --- | --- | --- |
| `alignment` | ✅ | ✅ | Controls alignment. Values: `left` (default), `center`, `right`, `justify`, `justify_left`, `justify_right`, `justify_center`. |
| `writingDirection` | ❌ | ✅ | Sets writing direction. Values: `left_to_right` (default), `right_to_left`. |
| `firstLineIndent` | ❌ | ✅ | Pixel indent for the first line. Default 0. |
| `startIndent` | ❌ | ✅ | Pixel indent at the start side. Default 0. |
| `endIndent` | ❌ | ✅ | Pixel indent at the end side. Default 0. |
| `spaceBefore` | ❌ | ✅ | Pixel spacing before the paragraph. Default 0. |
| `spaceAfter` | ❌ | ✅ | Pixel spacing after the paragraph. Default 0. |
