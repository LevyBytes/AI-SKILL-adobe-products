# Animation examples

Working with one axis at a time? Give these a go:

| Example | Time and value changes | Result |
| --- | --- | --- |
| Smooth weight transition | - 0:00 – Weight: 300 (Light)<br>- 1:00 – Weight: 700 (Bold) | Text gradually gets bolder |
| Width squeeze effect | - 0:00 – Width: 100% (Normal) 0:15 – Width: 50% (Condensed) 1:00 – Width: 100% (Normal) | Text squeezes in then returns |
| Slant or Italic Animation | - 0:00 – Slant: 0° (Upright)<br>- 1:00 – Slant: -15° (Slanted) | Text leans into italic style |

A single text layer can host several axis animators at once: drop in one axis first (Weight, say), then a second (such as Width), then a third (Slant), and key each on its own or in concert. The samples below show what happens when you stack several axes:

| Example | Time and value changes | Result |
| --- | --- | --- |
| Dynamic logo animation | Animator 1 - Font Axis Weight<br><br>- Time 0:00 - Weight: 300<br>- Time 1:00 - Weight: 900<br><br>Animator 2 - Font Axis Width<br><br>- Time 0:00 - Width: 75%<br>- Time 1:00 - Width: 125% | Text grows bold and wide simultaneously |
