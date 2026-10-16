# app.parseSwatchFile()

app.parseSwatchFile(file)

### Description

Reads color swatch data out of an Adobe Swatch Exchange (ASE) file.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File | The ASE file to parse. |

### Returns

The swatch data, in this format:

| Property | Description |
| --- | --- |
| data.majorVersion data.minorVersion | The ASE version number. |
| data.values | An array of Swatch Value. |
| SwatchValue.type | One of "RGB", "CMYK", "LAB", "Gray" |
| SwatchValue.r SwatchValue.g SwatchValue.b | When type = "RGB", the color values in the range [0.0..1.0]. [0, 0, 0] is Black. |
| SwatchValue.c SwatchValue.m SwatchValue.y SwatchValue.k | When type = "CMYK", the color values in the range [0.0..1.0]. [0, 0, 0, 0] is White. |
| SwatchValue.L SwatchValue.a SwatchValue.b | When type = "LAB", the color values. - L is in the range [0.0..1.0] - a and bare in the range [-128.0..+128.0] [0, 0, 0] is Black. |
| SwatchValue.value | When type = "Gray", the value range is [0.0..1.0]. 0.0 is Black. |
