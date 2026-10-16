# Standard profiles

For built-in profile choices, pass the profile name directly and no external file is required:

```json
{
  "iccProfile": {
    "type": "standard",
    "name": "sRGB IEC61966-2.1",
    "imageMode": "rgb"
  }
}
```

**RGB profiles:** `"Adobe RGB (1998)"`, `"Apple RGB"`, `"ColorMatch RGB"`, `"sRGB IEC61966-2.1"`

**Grayscale profiles (Dot Gain):** `"Dot Gain 10%"`, `"Dot Gain 15%"`, `"Dot Gain 20%"`, `"Dot Gain 25%"`, `"Dot Gain 30%"`

**Grayscale profiles (Gray Gamma):** `"Gray Gamma 1.8"`, `"Gray Gamma 2.2"`

The profile name comparison is exact, including punctuation and spacing. For standard profiles, `imageMode` may be only `"rgb"` or `"grayscale"`; CMYK is unavailable for this profile type.
