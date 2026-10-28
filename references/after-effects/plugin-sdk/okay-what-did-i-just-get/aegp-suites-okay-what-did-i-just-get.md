# AEGP Suites - Okay, What Did I Just Get?

What a stream value amounts to is a big union, of which just one structure - the one matching the stream type - holds data. Notice how closely it resembles the `PF_ParamDef`.

```cpp
typedef union {
    AEGP_FourDVal         four_d;
    AEGP_ThreeDVal        three_d;
    AEGP_TwoDVal          two_d;
    AEGP_OneDVal          one_d;
    AEGP_ColorVal         color;
    AEGP_ArbBlockVal      arbH;
    AEGP_MarkerValP       markerP;
    AEGP_LayerIDVal       layer_id;
    AEGP_MaskIDVal        mask_id;
    AEGP_MaskOutlineValH  mask;
    AEGP_TextDocumentH    text_documentH;
} AEGP_StreamVal2;
```
