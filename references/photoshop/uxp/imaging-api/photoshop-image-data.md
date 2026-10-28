# _PhotoshopImageData_

| Name | Type | Description |
| --- | --- | --- |
| width | Number | Width of the image data, in pixels. |
| height | Number | Height of the image data, in pixels. |
| colorSpace | String | Image data color space or mode; valid values include `\"RGB\"`, `\"Grayscale\"`, `\"Lab\"`. |
| colorProfile | String | Image data color profile, such as `\"sRGB IEC61966-2.1\"`. An empty value makes Photoshop use the target document profile. |
| hasAlpha | Boolean | True when the image data contains an alpha channel. |
| components | Number | Component count per pixel; RGB uses 3, RGBA uses 4, and other formats follow their component counts. |
| componentSize | Number | Bit count for each component; allowed values are 8, 16, or 32. |
| pixelFormat | String | Component memory order within a pixel. Possible values include `\"RGB\"`, `\"RGBA\"`, `\"Grayscale\"`, `\"GrayscaleAlpha\"`, `\"LAB\"`, or `\"LABAlpha\"`. |
| isChunky | Boolean | True when the image data uses the chunky internal format. |
| type | String | Contained-data type. Supported value at present: "image/uncompressed". |
| getData | Method | [See documentation below.](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#getdata) |
| dispose | Method | [See documentation below.](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#dispose) |

Bounds in the Imaging API include the left and top coordinates through, but not including, the right and bottom coordinates. For example, `{left: 0, top: 0, right: 10, bottom: 10}` selects ten pixels, 0 through 9, in each direction and excludes pixels at location 10. You may provide height and width instead of right and bottom, which can make code clearer: `{left: 0, top: 0, width: 10, height: 10}`.

Pixel component ranges depend on `componentSize`.

| Component Size | Value range | Comments |
| --- | --- | --- |
| 8 | 0..255 |  |
| 16 | 0..32768 |  |
| 32 | 0..1+ | High dynamic range images can contain component values below 0 or greater than 1.0 |

JavaScript cannot explicitly create `PhotoshopImageData` instances; Imaging API methods return them.

- [getPixels](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#getpixels)
- [getLayerMask](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#getlayermask)
- [getSelection](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#getselection)
- [createImageDataFromBuffer](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#createimagedatafrombuffer)
