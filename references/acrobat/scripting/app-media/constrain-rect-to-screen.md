# constrainRectToScreen

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a screen-coordinate rectangle, shifted and resized as needed so it lands wholly on one display monitor. When anchorPt is given and rect has to be made smaller to fit, the shrink happens proportionally toward anchorPt — an array of two numbers standing for a point as [x, y].

Parameters

| Parameter | Description |
| --- | --- |
| rect | A four-number array giving the d rectangle's screen coordinates. |
| anchorPt | (optional) A two-point array [x, y] meant to act as an anchor point. |

Returns

A rectangle in screen coordinates.
