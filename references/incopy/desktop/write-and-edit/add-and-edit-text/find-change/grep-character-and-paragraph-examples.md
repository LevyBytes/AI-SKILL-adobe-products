# GREP characters and paragraph starts

Open when testing grep characters and paragraph starts against concrete sample text.

## Class of characters

Find: `[abc]`

Matches each a, b or c separately.

```text
Maria cuenta bien.
```

## Beginning of paragraph

Find: `^~_.+`

Matches the paragraph beginning with an em dash; `~_` is the InCopy em-dash metacharacter.

```text
“We saw—or at least we think we saw—a purple cow.”
—Konrad Yoes
```

Source: [Adobe InCopy Find/Change](https://helpx.adobe.com/uk/incopy/desktop/write-and-edit/add-and-edit-text/find-change.html).
