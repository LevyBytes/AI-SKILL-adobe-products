# Supporting MENA locales

The acronym MENA expands to "Middle East and North Africa". Extensions should cover Arabic, Hebrew, and NA French.

| Language | ISO Code |
| --- | --- |
| Arabic (Middle East Enabled English Arabic) | en_AE |
| Hebrew (Middle East Enabled English Hebrew) | en_IL |
| NA French | fr_MA |

When an extension must load in host applications using MENA locales, add the MENA locales to the extension manifest file's supported locale list. For example:

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<LocaleList>
    <!-- Other manifest settings omitted. -->
    <Locale Code="en_AE"/>
    <Locale Code="en_IL"/>
    <Locale Code="fr_MA"/>
    <!-- Other manifest settings omitted. -->
</LocaleList>
```
