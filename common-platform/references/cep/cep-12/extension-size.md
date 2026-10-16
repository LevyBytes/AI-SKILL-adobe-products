# Extension Size

The extension manifest can specify size, max size, and min size. Size is required; max size and min size are optional.

A modal or modeless dialog becomes resizable when max size and min size differ; otherwise it is not resizable. When the mouse pointer moves over the dialog border, CEP shows different cursors for resizable and non-resizable dialogs.

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
