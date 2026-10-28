# Localized menu

The manifest can use a locale string as a menu value. For example, ShareOnBehance's manifest uses `%UI_share_on_Behance`. `UI_share_on_Behance` is defined in `messages.properties` as `UI_share_on_Behance=xxx`.

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

```xml
<UI>
    <Type>ModalDialog</Type>
    <Menu>%UI_share_on_Behance</Menu>
    <!-- Other manifest settings omitted. -->
</UI>
```
