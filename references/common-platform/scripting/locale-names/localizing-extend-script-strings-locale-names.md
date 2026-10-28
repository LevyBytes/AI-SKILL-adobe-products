# Localizing ExtendScript strings - Locale names

A locale name is an identifier string that includes an ISO 639 language specifier. It can also include an ISO 3166 region specifier, with an underscore between the language and region portions. ISO 639 supplies language codes of two letters, including en for English and de for German.

ISO 3166 supplies a separate two-letter region code, which can be appended to the language identifier after an underscore. For instance, en_US means U.S. English, and en_GB means British English.

The following object defines one message for British English, one for every other English variant, and one for all German variants:

```javascript
message = {
    en_GB: "Please select a colour.",
    en: "Please select a colour.",
    de: "Bitte wählen Sie eine Farbe."
};
```

When platform-specific messages are needed, add another underline character followed by one of the platform names Win, Mac, or Unix. For example, this object supplies a British English message for Mac OS, a different English message for other Mac OS locales, and a general English message for every other platform:

```javascript
pressMsg = {
    en_GB_Mac: "Press Cmd-S to select a colour.",
    en_Mac: "Press Cmd-S to select a color.",
    en: "Press Ctrl-S to select a color."
};
```

Case matters in these identifiers; for example, `EN_US` is invalid.
