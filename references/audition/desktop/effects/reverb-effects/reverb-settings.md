# Reverb Settings

Decay Time

Sets the time, in milliseconds, for reverb to decay by 60 dB. Depending on the Coloration settings, some frequencies can take longer to reach 60 dB while others decay much sooner. Longer settings create longer reverb tails and require more processing. The practical limit is about 6000 milliseconds, a 6-second tail, although the generated tail is much longer so it can fade into the background noise level.

Pre-Delay Time

Sets how many milliseconds pass before reverb builds to maximum amplitude. Reverbs usually build quickly and then decay far more slowly. Extremely long pre-delay values of 400 milliseconds or more can create interesting effects.

Diffusion

Sets the speed of echo buildup. High diffusion values, above 900 milliseconds, create very smooth reverb without obvious echoes. Lower values make distinct echoes easier to hear because the starting echo density is lower, even though density increases through the reverb tail.

Tip

Bouncy echo effects can be made with low Diffusion values and high Perception values. With long reverb tails, combining low Diffusion with somewhat low Perception can suggest a football stadium or similar arena.

Perception

Models environmental irregularities such as objects, walls, and connecting rooms. Low values produce a smooth, plain decay. Higher values create more distinct echoes from different locations.

Tip

If reverb is too smooth, it may sound unnatural. Perception values up to about 40 simulate typical room variation.

Room Size

Sets the virtual room volume in cubic meters. Larger rooms produce longer reverb. Use this control for spaces ranging from a few square meters to giant coliseums.

Dimension

Sets the ratio of room width, left to right, to room depth, front to back. A sonically suitable height is calculated and shown as Actual Room Dimensions at the bottom of the dialog box. In general, width-to-depth ratios between 0.25 and 4 create the best-sounding reverbs.

Left/Right Location

For stereo audio only, this positions early reflections away from center. Use Include Direct in the Output Level section to put the original signal at that same location. Singers placed slightly off center, 5-10% left or right, can create very nice effects.

High Pass Cutoff

Protects low-frequency sounds at 100 Hz or below, such as bass or drums, from being lost. In small rooms, those sounds can phase out when early reflections mix with the original signal. Specify a frequency above the sound you want to preserve. Useful settings are generally 80 Hz to 150 Hz. If the cutoff is too high, the room-size image may become unrealistic.

Set Reverb Based On Room Size

Sets Decay and Pre-Delay times according to the selected room size for a more convincing reverb. You can fine-tune Decay and Pre-Delay afterward if needed.
