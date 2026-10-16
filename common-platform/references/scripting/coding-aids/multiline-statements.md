# Multiline statements

Triple-quote syntax in the Script Editor lets strings span several source-code lines. For a very long string, you can enter:

```javascript
var myString = "This very long string might wrap onto a second line visually, but you typed no CR character when entering it."
```

```javascript
var myString = "This string spans \
two lines."
```

ExtendScript triple-quoted string syntax; this literal is not portable to standard JavaScript engines.

```javascript
var myString = """This "quoted" word is inside the
multiline string enclosed by triple quotes."""
```

With triple quotes, embedded quotes can appear inside the string.
