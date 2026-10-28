# app.isoLanguage

app.isoLanguage

### Description

A string reporting the locale, the language and regional settings, under which After Effects is running.

Tip

$.locale returns the operating system language, not the language of the After Effects application.

### Type

String; read-only. Some common values include:

- en_US for English (United States)
- de_DE for German (Germany)
- es_ES for Spanish (Spain)
- fr_FR for French (France)
- it_IT for Italian (Italy)
- ja_JP for Japanese (Japan)
- ko_KR for Korean (Korea)

### Example

```javascript
var lang = app.isoLanguage;
if (lang === "en_US") {
    alert("After Effects is running in English.");
} else if (lang === "fr_FR") {
    alert("After Effects is running in French.");
} else {
    alert("After Effects is running not in English or French.");
}
```
