# Extension Size

The extension manifest can define extension size, max size, and min size. Size is required; max size and min size are optional.

A modal or modeless dialog becomes resizable when max and min sizes differ; otherwise it cannot be resized. As the mouse pointer moves over a dialog border, CEP changes the cursor to reflect resizable or non-resizable behavior.

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
