# PF_AreStatesIdentical

`PF_AreStatesIdentical`

Suite argument declaration (not a standalone call):

```cpp
PF_AreStatesIdentical(
  PF_ProgPtr      effect_ref,
  const PF_State  *state1P,
  const PF_State  *state2P,
  A_Boolean       *samePB);
```

New in CS6. Pits two separate states, each obtained through `PF_GetCurrentState` above, against each other.
