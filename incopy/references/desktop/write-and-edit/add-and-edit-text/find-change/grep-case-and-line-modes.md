# GREP case and line modes

Open when testing grep case and line modes against concrete sample text.

## Case-insensitive on

Find: `(?i)apple`

The scoped alternative `(?i:apple)` applies case-insensitive matching only inside that group.

Matches Apple, apple and APPLE.

```text
Apple apple APPLE
```

## Case-insensitive off

Find: `(?-i)apple`

Matches only lowercase apple.

```text
Apple apple APPLE
```

## Multiline on

Find: `(?m)^\w+`

Matches the first word of each paragraph in the sample.

```text
One Two
Three Four
Five Six
Seven Eight
```

## Multiline off

Find: `(?-m)^\w+`

Matches only the first word at the start of the whole sample.

```text
One Two
Three Four
Five Six
Seven Eight
```

## Single-line on

Find: `(?s)c.a`

The dot can include a paragraph break.

```text
abc abc
abc abc
```

## Single-line off

Find: `(?-s)c.a`

The dot excludes a paragraph break.

```text
abc abc
abc abc
```

Source: [Adobe InCopy Find/Change](https://helpx.adobe.com/uk/incopy/desktop/write-and-edit/add-and-edit-text/find-change.html).
