# Extension Size

In the extension manifest, declare size, max size, and min size as needed. Size is required, while max size and min size are optional.

A modal or modeless dialog can be resized only when max size and min size differ. Otherwise, it is un-resizable. CEP changes the cursor at the dialog border to indicate whether resizing is available.

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
