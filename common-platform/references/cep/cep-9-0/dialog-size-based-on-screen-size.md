# Dialog Size based on Screen Size

A CEP dialog can size itself from screen-size percentages. Example:

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<UI>
    <Type>Modeless</Type>                  
    <!-- Other manifest settings omitted. -->
    <Geometry>
        <ScreenPercentage>
            <Height>50%</Height>
            <Width>50%</Width>
        </ScreenPercentage>
        <!-- Other manifest settings omitted. -->
    </Geometry>
</UI>
```
