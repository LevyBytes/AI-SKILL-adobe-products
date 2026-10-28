# Supporting MENA locales

MENA means "Middle East and North Africa". The related language support covers Arabic, Hebrew, and NA French.

| Language | ISO Code |
| --- | --- |
| Arabic (Middle East Enabled English Arabic) | en_AE |
| Hebrew (Middle East Enabled English Hebrew) | en_IL |
| NA French | fr_MA |

When an extension must load in host applications using MENA locales, add the MENA locales to the extension manifest's supported locale list. Example:

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

```xml
<LocaleList>
    <!-- Other manifest settings omitted. -->
    <Locale Code="en_AE"/>
    <Locale Code="en_IL"/>
    <Locale Code="fr_MA"/>
    <!-- Other manifest settings omitted. -->
</LocaleList>
```
