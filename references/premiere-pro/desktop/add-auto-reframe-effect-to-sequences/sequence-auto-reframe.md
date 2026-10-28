# Using Auto Reframe to adapt aspect ratio and framing for different platforms

When a sequence contains multiple clips, applying Auto Reframe to the whole sequence is usually more efficient than handling each clip separately.

Play the video to see a demonstration of Auto Reframe behavior.

Select the sequence in the Project panel, then select Sequence > Auto Reframe Sequence.

In the dialog box, choose the Target Aspect Ratio from the presets or enter a custom aspect ratio.

Choose the option that automatically reframes the selected clip or sequence.

Choose the automatic reframe option for the selected clip or sequence. Note

Premiere makes a duplicate sequence at the correct dimensions for the new aspect ratio. Each clip in that new sequence receives the Auto Reframe effect. The duplicate is stored in the Auto Reframe Sequences folder at the root of the Project panel.

To satisfy quality needs or platform rules, enter a custom Resolution (width and height) for the reframed sequence.

Refine the Auto Reframe effect by selecting an appropriate motion preset from the Motion Tracking drop down list. The available options are:

- Slower Motion: best for footage with little or no camera movement, such as talking head interviews. With this control, results stay nearly static and require very few keyframes.
- Default: suitable for most material. In this mode, the Auto Reframe effect tracks the action, but very fast action may not produce ideal results.
- Faster Motion: intended for footage with substantial movement when the Auto Reframe effect should track the action, such as action sports or skateboarding videos. In this mode, Auto Reframe keeps the moving subject in frame and adds many keyframes to the clip.

(Optional) Apply clip nesting if you need to keep original motion adjustments in the reframed sequence. Select Clip Nesting when you have:

- Complex motion keyframes that should be retained.
- Sequences with speed and duration adjustments.

When clip nesting is enabled, Premiere puts all video clips into a nest and keeps the original edit points and track layering, while graphics and audio remain unchanged.

Note

Nesting clips does not preserve soft transitions correctly because nested clips do not include the handle media.

For a complex sequence with rapid movement or multiple points of interest, keyframes in the reframed sequence may need manual fine-tuning afterward.
