# Expression Selector

Through JavaScript expressions you get exact, math-driven say over which characters get hit. The property that matters most here is Amount:

- Whatever value the expression evaluates to sets how strongly each character is affected
- It can read a character's index and position, the current time, and plenty besides

A couple you might experiment with:

#### Weight Based on Character Position

**Expression (Amount)**

```javascript

			// In Expression Selector Amount property:
linear(textIndex, 1, textTotal, 0, 100)
```

**Animator Axis**

- Font Axis Weight: 900

**Result**

First character lightest, last character boldest, linear gradient

#### Oscillating Slant

**Expression (Amount)**

```javascript

			// In Expression Selector Amount property:
Math.sin(time * 3 + textIndex * 0.5) * 50 + 50
```

**Animator Axis**

- Slant: -15

**Result**

Slant waves through text in a sine pattern


A handful of the expression variables you'll reach for most, plus the many others After Effects offers:

- textIndex - the running index of the current character, counted from 1
- textTotal - how many characters there are in total
- time - where the composition's playhead sits right now
