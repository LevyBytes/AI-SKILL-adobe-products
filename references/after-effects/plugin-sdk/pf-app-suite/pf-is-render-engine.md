# PF_IsRenderEngine

`PF_IsRenderEngine`

Returns TRUE if After Effects is running in watched folder mode, or is a render engine installation.

Suite argument declaration (not a standalone call):

```cpp
PF_IsRenderEngine(
  PF_Boolean  *render_enginePB);
```

As of AE6.5, this function returns TRUE if the installation is the render engine, or if the After Effects is being run with no UI, or if After Effects is in watched folder mode.
