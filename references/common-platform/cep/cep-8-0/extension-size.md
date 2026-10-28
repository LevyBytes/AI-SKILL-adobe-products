# Extension Size

The extension manifest can define size, max size, and min size. The size value is required, while max size and min size can be omitted.

Modal and modeless dialogs become resizable when max size differs from min size; otherwise they are not resizable. CEP changes the cursor over the dialog border to indicate whether resizing is available.

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

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
