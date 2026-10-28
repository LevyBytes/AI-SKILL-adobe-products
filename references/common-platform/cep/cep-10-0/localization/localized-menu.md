# Localized menu

The manifest can use a locale string for a menu. For example, the ShareOnBehance manifest uses `%UI_share_on_Behance`. In `messages.properties`, `UI_share_on_Behance` is defined as `UI_share_on_Behance=xxx`.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<UI>
    <Type>ModalDialog</Type>
    <Menu>%UI_share_on_Behance</Menu>
    <!-- Other manifest settings omitted. -->
</UI>
```

### Examples
