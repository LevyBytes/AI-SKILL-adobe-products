# ComponentParam.setInterpolationTypeAtKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].setInterpolationTypeAtKey(time, interpretationType, [updateUI])

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].setInterpolationTypeAtKey(time, interpretationType, [updateUI])

### Description

Assigns the chosen interpolation type to the keyframe at the given time. Note: use it only with parameter streams that can be keyframed.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Time object | Keyframe time to change. |
| interpolationType | Interpolation Type Enum | One of: - 0 - `KF_Interp_Mode_Linear` - 1 - kfInterpMode_EaseIn_Obsolete - 2 - kfInterpMode_EaseOut_Obsolete - 3 - kfInterpMode_EaseInEaseOut_Obsolete - 4 - `KF_Interp_Mode_Hold` - 5 - `KF_Interp_Mode_Bezier` - 6 - `KF_Interp_Mode_Time` - 7 - kfInterpMode_TimeTransitionStart - 8 - kfInterpMode_TimeTransitionEnd |
| updateUI | Boolean | Whether the UI should refresh afterward. |

### Returns

Returns 0 on success.
