# Customize Extension Menu

This is supported only in InDesign and InCopy.

Customize the extension menu by editing the `<menu/>` item in the manifest. Example: the Adobe Add-ons extension appears under the Windows main menu instead of the extensions menu under Windows. To place the extension elsewhere, change the Placement attribute value in the `<menu/>` item.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

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
