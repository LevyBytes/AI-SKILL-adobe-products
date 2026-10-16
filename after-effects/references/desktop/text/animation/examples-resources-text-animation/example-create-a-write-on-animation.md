# Example: Create a write-on animation

Faking the look of text being written across the screen is easy once you put the Opacity animator property to work.

Writing text on using the Opacity property

1. Create a new composition.
2. Create a text layer with the characters 01234.
   Choose Animation > Animate Text > Opacity.

Set Opacity to 0%.

Open up Range Selector 1 and click the stopwatch icon beside Start.

Inside the Composition panel, pull the start selector over to the left edge of the text (its value will read 0).

Move the current-time indicator out to 5 seconds and drag the start selector in the Composition panel across to the right edge of the text (its value will read 5).

The Smoothness property sits at 100% out of the box. For a typewriter effect, open the Advanced property and drop Smoothness to 0%.
