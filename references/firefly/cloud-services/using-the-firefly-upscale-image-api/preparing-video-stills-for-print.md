# 2. Preparing video stills for print

**Scenario:** A videographer pulls a frame from footage and needs to enlarge it for a poster, exhibition print, or editorial layout. Video frames are usually much smaller than print specifications require.

**Why Firefly Upscale:** Video stills often include faces, small structural details, and cinematic grain. Aggressive upscalers can distort those areas or invent content. Firefly Upscale API uses a conservative enhancement approach, improving detail without over-inventing so the source frame remains recognizable and authentic. Low geometric distortion also makes it practical for enlarging stills without warping the composition.

[**Recommended scale:**](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/upscale/index.md#scale-factor-guidance) Start with 2x. If the image is still below print requirements, use 4x and plan for possible light retouching to address tonal variation.

Expected output:

- Facial features usually keep a natural softness. Review subtle fine-detail shifts before using portrait-forward prints
- Original footage grain is usually preserved in a controlled way, which supports a filmic look
- At 4x, skies, skin, and other smooth areas may show edge halos or extra noise. These issues are usually minor and can be corrected in post
