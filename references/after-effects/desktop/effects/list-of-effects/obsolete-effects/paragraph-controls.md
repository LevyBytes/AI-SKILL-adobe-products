# Paragraph controls

Alignment

Sets how the text aligns horizontally along the path you've chosen.

Left

Pins the first character where Left Margin sits and arranges every other character relative to it. Right Margin is ignored.

Right

Pins the last character where Right Margin sits and arranges every other character relative to it; here Left Margin has no effect.

Center

Sits the text midway between the Left Margin and Right Margin points.

Force

Pins the first character at Left Margin and the last at Right Margin, then spreads all the rest evenly between them. Tracking is ignored.

Left Margin, Right Margin

Set the margins. Left Margin gives the first character's position in pixels measured from the starting point, and Right Margin gives the last character's position measured from the ending point. Across path shapes, Bezier curves and lines start at Vertex 1 while circles and loops start at Tangent 1. Bezier curves and lines end at Vertex 2, and circles and loops end at Tangent 1. To run text along the path shape you've laid out, keyframe or write expressions for the Left or Right margin (whichever the chosen alignment uses). Positive values slide the text rightward; negative values slide it leftward.

Line Spacing

Sets how much room separates one line of characters from the next.

Baseline Shift

Gives, in pixels, how far the character bottoms sit from the path. With some path shapes the text reads as better spaced once the path passes through the middle of each character. Make Baseline Shift negative and those character centers land right on the path.
