# PushStateStack

PushStateStack

Push the current surface state onto the stack. It should be popped to retrieve old state.

It is required to restore state if you are going to clip or transform a surface or change the interpolation or anti-aliasing policy.

Suite argument declaration (not a standalone call):

```cpp
PushStateStack(
  DRAWBOT_SurfaceRef  in_surface_ref);
```
