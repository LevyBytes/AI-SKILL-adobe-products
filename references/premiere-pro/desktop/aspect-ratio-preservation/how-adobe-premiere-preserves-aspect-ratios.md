# How Adobe Premiere preserves aspect ratios

When an asset is imported, Adobe Premiere tries to retain its frame aspect ratio, pixel aspect ratio, and frame dimensions so the asset is not cropped or distorted. If the asset includes metadata, Premiere can calculate those values automatically and accurately. Examples include:

- NTSC captured or imported footage at ATSC frame size 704x480, D1 frame size 720x486, or DV frame size 720x480 receives D1/DV NTSC (0.91) as its pixel aspect ratio.
- Captured or imported footage at HD frame size 1440x1080 receives HD 1080 Anamorphic (1.33) as its pixel aspect ratio.
- PAL captured or imported footage at D1 or DV resolution 720x576 receives D1/DV PAL (1.094) as its pixel aspect ratio.

For other frame sizes, Premiere treats the asset as square-pixel material and adjusts the pixel aspect ratio and frame dimensions to keep the image aspect ratio intact. If the imported asset appears distorted, change the pixel aspect ratio manually.
