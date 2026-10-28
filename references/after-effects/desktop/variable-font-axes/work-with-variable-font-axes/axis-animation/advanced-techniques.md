# Advanced techniques

Apply distinct treatments to separate spans of characters. Two such examples:

| Example | Animator settings | Selector settings |
| --- | --- | --- |
| First letter bold, rest normal | Font Axis Weight: 900 (Black) | Range Selector:<br><br>- Based On: Characters<br>- Start: 1<br>- End: 1<br>- Units: Index |
| Alternating weight | Animator 1 (Odd characters):<br><br>- Font Axis Weight: 700<br>- Expression Selector Amount: (textIndex % 2) \* 100<br><br>Animator 2 (Even characters):<br><br>- Font Axis Weight: 300<br>- Expression Selector Amount: ((textIndex + 1) % 2) \* 100 | Two Expression Selectors controlling odd/even characters |

Lean on expressions to tie axis values to other animation properties. Here are two you might weigh:

1. With Weight Driven by Position, how heavy the text reads tracks where the layer sits vertically.

```javascript
// In Font Axis Weight property:
linear(transform.position[1], 0, thisComp.height, 300, 900)
```

2. With Width Responds to Audio, the text's width swells and shrinks in step with how loud the audio gets.

```javascript
// In Font Axis Width property:
audioLevel = thisComp.layer("Audio Layer").audio.audioLevels;
linear(audioLevel[0], -48, 0, 75, 150)
```

Moving animators from one text layer to another goes like this: open the source layer in the Timeline panel, highlight the animator(s) you want, copy with Ctrl/Cmd + C, click the destination text layer, and paste with Ctrl/Cmd + V.

A few points worth bearing in mind:

- An axis animator carries over only when the destination font shares that same axis.
- Should the destination font be missing an axis, the source's axis gets pasted in anyway.
- Pasting across two different axes isn't allowed.
- Selectors of the Range, Wiggly, and Expression kinds all come through intact.
- Whatever keyframes you had stay put.

What about a text layer built from several fonts (mixed formatting)? Inside Text Animators:

- Per character, the animator applies its axis shifts according to that character's own font
- A character whose font lacks the axis is simply left untouched
- Range selectors keep aiming at character spans, though the outcome differs from font to font

A quick illustration:

- "He" uses VariableFont A (has Weight axis)
- "llo" uses VariableFont B (no Weight axis)

- Animator: Font Axis Weight - 900
- Result: "He" becomes bold, "llo" unchanged
