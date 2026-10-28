# Extension Size

In the extension manifest, specify extension size, max size, and min size. Size is required, while max size and min size can be omitted.

A modal or modeless dialog is resizable when max size and min size differ; if they match, resizing is disabled. As the mouse pointer passes over the dialog border, CEP shows distinct cursors for resizable versus non-resizable dialogs.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<Geometry>
    <Size>
        <Height>580</Height>
        <Width>1000</Width>
    </Size>
    <MaxSize>
        <Height>800</Height>
        <Width>1200</Width>
    </MaxSize>
    <MinSize>
        <Height>400</Height>
        <Width>600</Width>
    </MinSize>
</Geometry>
```
