# Customize Extension Menu

This is supported only in InDesign and InCopy.

Customize the extension menu by editing the `<menu/>` item in manifest. In this example, the Adobe Add-ons extension appears under the Windows main menu instead of under the Windows extensions menu. To place the extension elsewhere, change the value of the Placement attribute in `<menu/>`.

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ExtensionList>
    <Extension Id="Adobe Add-ons" Version="1.0"/>
</ExtensionList>
<ExecutionEnvironment>
    <HostList>
        <Host Name="IDSN" Version="8.0"/>
    </HostList>
    <!-- Other manifest settings omitted. -->
</ExecutionEnvironment>
<DispatchInfoList>
    <Extension Id="com.adobe.CEPHTMLTEST.Panel1">
        <DispatchInfo>
             <!-- Other manifest settings omitted. -->
             <UI>
                <!-- Other manifest settings omitted. -->
               <Menu Placement="'Main:&amp;Window',600.0,'KBSCE Window menu'">Adobe Add-ons</Menu> 
<!-- Other manifest settings omitted. -->
</UI>
</DispatchInfo>
</Extension>
</DispatchInfoList>
```
