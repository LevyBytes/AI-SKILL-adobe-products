# `PF_EventExtra` — `PF_EffectWindowInfo`

Should an event land in the ECP, a `PF_EffectWindowInfo` travels along in `PF_EventExtra`.

| Member | Purpose |
| --- | --- |
| index | Tells you which parameter in the effect window is in play. Numbering of the controls runs from 0 up to one less than the control count. |
| area | Tells you whether what's affected is the control title (`PF_EA_PARAM_TITLE`) or the control proper (`PF_EA_CONTROL`). The title is the portion that remains in view once the parameter's topic (the "twirly") is spun up. |
| current_frame | A `PF_Rect` giving the full frame of the region the control occupies. |
| param_title_frame | A `PF_Rect` giving the control's title region. |
| horiz_offset | A horizontal offset, measured from the title area's left edge, at which to draw into the title. |
