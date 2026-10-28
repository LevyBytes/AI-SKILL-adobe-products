# GREP assertions and capture groups

Open when testing grep assertions and capture groups against concrete sample text.

## Negative lookahead

Find: `InDesign(?! CS)`

Matches InDesign when the following characters are not a space and CS.

```text
InDesign, InDesign 2.0, InDesign CS, and InDesign CS2
```

## Positive lookahead

Find: `InDesign(?= CS)`

Matches InDesign only when a space and CS immediately follow it; the lookahead does not consume them.

```text
InDesign, InDesign 2.0, InDesign CS, and InDesign CS2
```

## Groupings

Find: `(quick) (brown) (fox)`

Captures quick, brown and fox as groups 1, 2 and 3.

```text
The quick brown fox jumps up and down.
```

## Non-marking parentheses

Find: `(quick) (?:brown) (fox)`

Captures quick and fox as groups 1 and 2; brown participates in the match without creating a capture.

```text
The quick brown fox jumps up and down.
```

Source: [Adobe InCopy Find/Change](https://helpx.adobe.com/uk/incopy/desktop/write-and-edit/add-and-edit-text/find-change.html).
