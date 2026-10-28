# AEIO_InitOutputSpec

`AEIO_InitOutputSpec`

AEIO_Err_USE_DFLT_CALLBACK allowed.

Perform initialization needed for a new AEIO_OutSpecH, then indicate whether changes were made.

Suite argument declaration (not a standalone call):

```cpp
AEIO_InitOutputSpec(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  A_Boolean       *user_interacted);
```

Note

On first use of your AEIO, After Effects stores the last-known-good optionsH in preferences.

When testing this function, delete your preferences frequently.

Output

Yes
