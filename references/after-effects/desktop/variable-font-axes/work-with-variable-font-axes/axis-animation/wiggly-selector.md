# Wiggly Selector

Per-character random shifts get applied to axis values here. A few of its main properties are:

| Property | Description | Results |
| --- | --- | --- |
| Max Amount / Min Amount | Maximum and minimum variation from base value | Creates random fluctuation per character |
| Wiggles/Second | How fast the random values change | Higher means more frenetic movement |
| Correlation | How related neighboring characters are | - 100% - All characters change together<br>- 0% - Each character changes independently |
| Temporal Phase | Randomizes timing offset per character | Adds variation in timing |

A couple you might experiment with:

| Example | Font axis setting | Wiggly Selector settings | Additional settings | Result |
| --- | --- | --- | --- | --- |
| Jittery Weight Effect | Weight: 400 (Regular) | - Max Amount: 100%<br>- Min Amount: -100%<br>- Wiggles/Second: 5<br>- Correlation: 0% | - Font Axis Weight: 200 (Light to Bold range) | Each character's weight randomly fluctuates independently |
| Breathing Width | Width: 100% (Normal) | - Max Amount: 50%<br>- Min Amount: -50%<br>- Wiggles/Second: 1<br>- Correlation: 80% |  | Text gently expands/contracts in waves |
