# Issue: Adjustment values out of range

**Problem:** V1 and V2 enforce the same validation ranges

**Solution:** Keep values inside the allowed limits

- Brightness/Contrast: -150 to 150
- Exposure (V2: `exposureValue`): -20 to 20
- Hue: -180 to 180
- Saturation/Lightness: -100 to 100
