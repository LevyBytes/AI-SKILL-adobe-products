# Global, Sequence, & Frame Data - Flattened And Unflattened Sequence Data

Whenever your sequence data points off to external memory through pointers or handles, you have to flatten and unflatten it so it stores safely to disk. Think of it as rolling your own tiny file format.

When `PF_Cmd_SEQUENCE_FLATTEN` arrives, gather whatever your pointers reference into a single contiguous block from which the former structure can later be rebuilt.

Where your sequence data carries a pointer to a long, set aside 4 bytes to hold the flattened version. Platform-specific byte ordering falls to you to manage.

Bear in mind that your users — the ones who sprang for two copies of your plug-in, at any rate — might want one project to run on both macOS and Windows.

Whenever the data reloads, flat or unflat alike, After Effects issues `PF_Cmd_SEQUENCE_RESETUP`.

Place a flag at a shared offset inside both structures to record which state the data is in.

```cpp
typedef struct {
    A_char*    messageZ;
    PF_FpLong  big_numF;
    void*      temp_storage;
} non_flat_data;

typedef struct {
    char       message[256];
    PF_FpLong  big_numF;
    A_Boolean  big_endianB;
} flat_data;
```
