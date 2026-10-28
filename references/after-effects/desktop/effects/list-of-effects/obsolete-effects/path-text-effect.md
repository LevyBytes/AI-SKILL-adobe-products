# Path Text effect

Should the Path Text effect already sit on one or more layers in a project built with an earlier After Effects release, you may keep using it; otherwise switch to text layers for far more command over formatting and animation. (See Creating and animating text on a path.)

With the Path Text effect you can run text along a path, where that path may be a straight line, a circle of any diameter, or a Bezier curve. A path made in another program — Adobe Photoshop or Adobe Illustrator, say — can be imported too. The effect handles nonsquare pixels, reshaping both the characters and the path to match.

This effect works with 8-bpc color.

Note

When you rely on Adobe Type Manager (ATM) and big text turns blocky or otherwise won't render cleanly, bump up the Character Cache Size in the ATM control column.

As you reshape a Bezier path over time, be sure to lay down initial keyframes on all four path control points; shift a control point that has no initial keyframe and it won't move over time. Animating a path can be simpler if you edit the individual control points' motion paths in the Layer panel.

Note

For handles to show in the Composition panel, the effect has to be selected in the Effect Controls panel and you must not be animating text along a mask or path.

To slide a Bezier path across the composition without altering its shape, animate the layer instead of the path. To stretch, shrink, or wag one half of the Bezier path while the other half stays put, shift a tangent-vertex pair as a unit — make keyframes for both by dragging the outer circle of the relevant vertex.

Note

While animating a Bezier path's control points, don't mix up the Bezier path shape and the keyframes' Bezier spatial interpolation. As with keyframes for other position controls, a vertex or tangent keyframe on a Bezier path may be linear or Bezier. Default spatial interpolation is set in General Preferences. For a single keyframe, set its spatial interpolation by choosing Animation > Keyframe Interpolation.

Motion you build with the Path Text effect can take motion blur, and that blur lands on each character. As with layer motion blur, the faster the movement the more obvious the character blur. It shows up strongly, for example, when you dial in negative jitter values that produce jumpy motion.
