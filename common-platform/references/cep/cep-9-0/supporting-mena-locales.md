# Supporting MENA locales

MENA means "Middle East and North Africa". The required language coverage includes Arabic, Hebrew, and NA French.

| Language | ISO Code |
| --- | --- |
| Arabic (Middle East Enabled English Arabic) | en_AE |
| Hebrew (Middle East Enabled English Hebrew) | en_IL |
| NA French | fr_MA |

Extensions that must load in host applications using MENA locales need those MENA locales listed among the supported locales in the extension manifest file. For example:

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
