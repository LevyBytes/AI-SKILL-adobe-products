# Changing spacing between charactersin CJK text — Using grid tracking to adjust character spacing

Aki between characters can be tightened by setting tsume on the frame grid itself and adjusting tracking for placed text. This character-compression method is also called grid tracking and uses Adjust Tracking With CJK Grid, available from the Character panel menu or the Control panel.

Because some CJK font characters are smaller than the embox, placing them on a frame grid can leave large aki between characters. Applying grid-level tsume is useful because mojikumi can keep characters properly aligned to the grid. The setting can be saved as a grid format.

In the Frame Grid Settings dialog box, Character Aki defaults to "0". Automated typography calls this tracking "Beta". When Character Aki is set to a negative value for mojikumi, the right grid overlaps the left grid by the specified amount. Characters entered on the grid align around each grid center, compressing spacing for each character. Depending on mojikumi settings, character shapes that are adjusted below maximum width change according to the proportional value of Line Spacing Tsume. For instance, if mojikumi gives yakumono such as parentheses half spacing, setting Character Aki in the grid to -1H compresses yakumono to half of -1H, which is -0.5H. Tracking-based spacing in this grid does not apply to Roman text, so Roman character spacing is not compressed with that tracking. Because the tracking value belongs to the grid itself, it is treated as an absolute value; therefore font-size changes do not alter the tracking value.

By default, this feature is on. To turn it off, open the Character panel menu or Control panel, choose Adjust Tracking With CJK Grid, then clear the box to the left of the item name.
