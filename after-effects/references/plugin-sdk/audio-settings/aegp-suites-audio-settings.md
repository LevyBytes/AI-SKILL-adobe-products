# AEGP Suites - Audio Settings

`AEGP_SoundDataFormat` represents audio render settings.

```cpp
typedef struct {
    A_FpLong            sample_rateF;
    AEGP_SoundEncoding  encoding;
    A_long              bytes_per_sampleL;
    A_long              num_channelsL; // 1 for mono, 2 for stereo
} AEGP_SoundDataFormat;
```

bytes_per_sampleL is always either 1, 2, or 4. When float encoding is in use, that field is ignored.

`AEGP_SoundEncoding` is one of the following:

- `AEGP_SoundEncoding_UNSIGNED_PCM`
- `AEGP_SoundEncoding_SIGNED_PCM`
- `AEGP_SoundEncoding_FLOAT`
