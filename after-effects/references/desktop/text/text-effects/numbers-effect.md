# Numbers effect

With the Numbers effect you can churn out numbers — random or in sequence — across a range of formats: plain decimals, dates, timecode, and even the live date and time captured when the frame renders. That makes it handy for building counters of all sorts. Sequential numbering caps its offset at 30,000.

This effect works with 8-bpc color.

In the Font Style dialog box you'll find these controls: Font, Style, Direction, and Alignment. Need to reopen that dialog? Click Options near the top of the effect's listing in the Effect Controls panel.

Type

Which numbering scheme to use:

Number

Decimal numbers.

Number [Leading Zeros]

Decimal numbers whose integer part is padded out to five digits.

Timecode [30], Timecode [25], and Timecode [24]

Standard non-drop-frame timecode formats (XX:XX:XX:XX) using the stated frame rate. Each of these timecode types takes the layer's current time as its starting reference.

Time

Hours plus minutes. Turn on Current Time/Date alongside it and the Value/Offset/Random Max value gets ignored. With Random chosen, the time falls between 0 (12:00 AM) and wherever the slider sits.

Numerical Date, Short Date, and Long Date

Leave Current Time/Date unchecked and Value/Offset/Random Max counts the days elapsed since January 1, 1995 (slider 0 lands on January 1, 1995). Check Current Time/Date and instead it counts days since today (slider 0 lands on the current date). Choose Random and the date is held between 0 (today or January 1, 1995) and the slider's value.

Note

Leap years are considered.

Hexadecimal

Base-16 numbers (digits from 0 to F). Each 0.0000125 rise in the Value/Offset/Random Max value bumps a hexadecimal number up by 0x1, while every 1.0 rise bumps it up by 0x10000. Under Random, the result stays between 0 and the Value/Offset/Random Max value.

Random Values

Caps random values at the Value/Offset/Random Max value. Set Value/Offset/Random Max to 0 and the values range randomly across the widest span they can reach.

Value/Offset/Random Max

What this controls shifts with the Type you picked and whether Random Values is on.

Decimal Places

Sets how many digits sit to the right of the decimal point.

Current Time/Date

Check this to anchor the time and date numbers to the present moment.

Position

The position of the numbers on the layer.

Display Options

Controls whether the text gets a fill, a stroke, or both at once. Fill Only pours color into the characters. Stroke Only outlines their edges with color. Fill Over Stroke puts the fill on top of the stroke; Stroke Over Fill flips that, putting the stroke on top.

Size

Size of the characters.

Tracking

The mean gap separating one character from the next.

Proportional Spacing

Spaces the numbers proportionally rather than as monospace.

Composite On Original

The text rides on top of the original image. Leave Composite On Original unchecked and the original image stays hidden.
