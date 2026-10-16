# CEP 11 debugging tools

- Add a file named [.debug](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/CEP_11.x/Documentation/.debug) at the root of the extension folder. Put that folder in one of these locations:
  - **Mac:** `/Library/Application Support/Adobe/CEP/extensions`
  - **Windows:** `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`
- Example contents:
```xml
<?xml version="1.0" encoding="UTF-8"?> 
<ExtensionList>
    <Extension Id="com.adobe.cep.exchange.extension.panel">
        <HostList>
            <Host Name="DRWV" Port="8701"/>
            <Host Name="FLPR" Port="8702"/>
            <Host Name="IDSN" Port="8703"/>
            <Host Name="AICY" Port="8704"/>
            <Host Name="ILST" Port="8705"/>
            <Host Name="PHSP" Port="8706"/>
            <Host Name="PHXS" Port="8707"/>
            <Host Name="PPRO" Port="8708"/>
            <Host Name="PRLD" Port="8709"/>
            <Host Name="AEFT" Port="8710"/>
            <Host Name="DEMO" Port="8711"/>
        </HostList>
    </Extension>
</ExtensionList>
```
