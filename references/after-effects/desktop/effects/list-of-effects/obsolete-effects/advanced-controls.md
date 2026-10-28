# Advanced controls

Visible Characters

How many characters show at the current time. Keyframe Visible Characters to reveal characters one or more at a time and mimic the look of typing. A positive count reveals characters from the start of the text toward the end; a negative count reveals them from the end back toward the start. Bear in mind that spaces count as characters too.

This control also teams with Fade Time to fade characters in. With Fade Time at 0, the next character pops in once Visible Characters reaches the halfway mark toward the next whole number. So the second character shows at a Visible Characters value of 1.5, the third at 2.5, and so on. A Fade Time of 0 yields that typing-on look.

Note

Wherever the path and the other controls have placed the characters, Visible Characters leaves those positions alone.

Fade Time

Sets the stretch of time across which a given character is only partly visible, working hand in hand with Visible Characters. At a Fade Time of 0, every letter snaps to full opacity at its matching Visible Characters value. At 100%, a character grows steadily more opaque as Visible Characters climbs between whole numbers, its opacity equaling the fractional part of that value. For example, with Visible Characters at 7.10 and Fade Time at 100% the eighth character shows at 10% opacity, and at 7.60 the same character shows at 60% opacity, and so on.

When Fade Time falls between 0% and 100%, a character's opacity is mapped across the halfway point between whole-number Visible Characters values. With Fade Time at 20%, for instance, the eighth character starts showing at a Visible Character value of 7.40 and reaches full opacity at 7.60. Set Fade Time to 60% and that same character starts at 7.20 and is fully opaque at 7.80.

Mode

Which blending mode applies wherever characters overlap.

Jitter Settings

Set the largest random deviation added to baseline, kerning, rotation, or scale. Bigger values mean bigger deviations. Positive values yield smooth motion while negative ones yield jumpy motion. The movement arrives without keyframes or expressions, though you may keyframe or write expressions to vary the maximum values.

Any given jitter value drives the same apparently random motion for matching text and settings. When a composition holds duplicate animated text, you can give each copy its own motion by tweaking a setting in a way that doesn't show. You might, for example, add a space to a second text copy and then kern it so the space stays invisible — an unseen change that nonetheless produces different motion.

You can specify the following Jitter options:

Baseline Jitter Max

Caps how far, in pixels, characters get nudged at random above or below the path once Baseline Shift has been applied.

Kerning Jitter Max

Caps how far, in pixels, characters get nudged apart from each other along the horizontal axis once kerning and tracking have been applied.

Rotation Jitter Max

Caps how much, in degrees, characters get turned at random once Character Rotation has been applied.

Scale Jitter Max

Caps how much, as a percentage, characters get scaled at random once Horizontal Scale and Vertical Scale have been applied. For the best result, characters shouldn't scale past 100%.
