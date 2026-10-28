# PF_GetConstSequenceData

`PF_GetConstSequenceData`

Retrieves the read-only const sequence_data object for a rendering thread when Multi-Frame Rendering is enabled for an effect.

```cpp
PF_Err(*PF_GetConstSequenceData)(
  PF_ProgPtr effect_ref,
  PF_ConstHandle *sequence_data);
```


Include the SDK effect headers and `AEFX_SuiteHelper.h`. This excerpt demonstrates read-only sequence-data access, not a pixel renderer: integrate the successful read into your existing render body. The returned handle is borrowed and must not be changed or disposed.

```cpp
static PF_Err Render(
    PF_InData   *in_dataP,
    PF_OutData  *out_dataP,
    PF_ParamDef *params[],
    PF_LayerDef *output )
{
    AEFX_SuiteScoper<PF_EffectSequenceDataSuite1> seqdata_suite =
        AEFX_SuiteScoper<PF_EffectSequenceDataSuite1>(
            in_dataP,
            kPFEffectSequenceDataSuite,
            kPFEffectSequenceDataSuiteVersion1,
            out_dataP);

    PF_ConstHandle const_seq = nullptr;
    PF_Err err = seqdata_suite->PF_GetConstSequenceData(in_dataP->effect_ref, &const_seq);

    if (err) return err;
    // Read const_seq using the effect-specific sequence-data type.

    return PF_Err_NONE;
}
```
