# Terminology and data types

Image data is stored as a collection of `pixels`. Each pixel holds the color information for one image point, consisting of one or more color-value components plus optional alpha information.

An RGB pixel with alpha has four components: "red", "green", "blue", and "alpha". Without alpha, an opaque RGB pixel has three components. Adding alpha as the fourth component produces RGBA.
An opaque gray scale pixel contains one component. Gray scale plus alpha uses two components.

To interpret pixel data correctly, Photoshop must know the color profile used for that data. `\"Adobe RGB (1998)\"` is one example profile. Photoshop performs color conversions when necessary. Call [getColorProfiles](../host-api/application/get-color-profiles.md) on the app object to retrieve available color profiles:

```javascript
const rgbProfiles = await require("photoshop").app.getColorProfiles("RGB");

const grayProfiles = await require("photoshop").app.getColorProfiles("Gray");
```

Lab data uses the "Lab D50" color profile.

For 32 bit images, Photoshop returns color profile names that include the description 'Linear Profile'. For example: `\"(Linear RGB Profile)\"`. Do not include that text when you specify a profile. If the document profile appears as `Adobe RGB (1998) (Linear RGB Profile)`, specify `Adobe RGB (1998)` for methods such as createImageDataFromBuffer.

Photoshop can store pixel information in memory in two layouts:

- `chunky`: Components for the same pixel sit next to one another in memory. With two opaque RGB pixels, pixel 1 followed by pixel 2, storage looks like: `[R1, G1, B1, R2, G2, B2]`.
- `planar`: Matching component types are grouped together in memory, so the components for one pixel may be separated. With two opaque RGB pixels, storage looks like: `[R1, R2, G1, G2, B1, B2]`.

JavaScript APIs default to the chunky format.

A `PhotoshopImageData` instance represents image data and exposes these methods and properties:
