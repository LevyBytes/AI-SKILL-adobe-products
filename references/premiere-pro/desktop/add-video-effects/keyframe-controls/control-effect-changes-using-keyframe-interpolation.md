# Control effect changes using keyframe interpolation

Use interpolation to create new values between keyframes for smooth movement in digital video and film.

Interpolation fills in unknown data between known values. In digital video and film, that commonly means creating values between two keyframes. For example, to move a graphic element such as a title fifty pixels left across the screen over 15 frames, set the graphic's position on the first and 15th frames and mark both frames as keyframes. The software then interpolates the in-between frames so the motion appears smooth. Because interpolation creates the frames between keyframes, it is also known as tweening. Between keyframes, interpolation can drive motion, effects, audio levels, image adjustments, transparency, color changes, plus many other visual or auditory elements.

- Temporal Interpolation applies the chosen interpolation method to motion changes. For instance, Temporal Interpolation can determine whether an object moves at a steady pace or accelerates along a motion path. Premiere supports temporal interpolation of keyframes for only a few effects.
- Spatial Interpolation applies the chosen interpolation method to shape changes. For example, Spatial Interpolation can decide whether corners are rounded or angular. Premiere supports spatial interpolation for the keyframes of many effects.

Linear Interpolation and Bezier Interpolation are the two most common interpolation types. Choose either one according to the kind of change you need.

- Linear Interpolation: creates an even-paced change from one keyframe to the next, giving every frame between them an equal portion of the value change. With Linear Interpolation, changes begin and end abruptly and progress at a constant rate between each keyframe pair.
- Bezier Interpolation: lets the change rate speed up or slow down according to the shape of a Bezier curve, such as gradually gaining speed at the first keyframe and easing down into the second.
