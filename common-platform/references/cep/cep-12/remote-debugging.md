# Remote Debugging

CEP supports remote debugging for HTML extensions beginning with 5.0.

- Create a ".debug" file in the extension root directory, for example `Test_Extension\.debug`. The .debug file stores remote debug ports. Because remote debugging and dev tools both depend on it, developers must create the file and use valid debug ports.
- Because the ".debug" file name is special on both Windows and macOS, create it from the command line.
  - Windows: create an empty file with "copy con .debug" followed by "Ctrl+Z".
  - macOS: create an empty file with "touch .debug".
- Port must be greater than or equal to 1024 and less than 65535; outside that range, remote debugging and dev tools will fail.
- One extension bundle can contain multiple extensions. Use the .debug file to assign debug ports to each extension. Example file:

Example `.debug` file; use the extension IDs from your manifest and available debugging ports.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ExtensionList>
    <Extension Id="com.adobe.CEPHTMLTEST.Panel1">
        <HostList>
            <Host Name="PHXS" Port="8000"/>
            <Host Name="IDSN" Port="8001"/>
            <Host Name="AICY" Port="8002"/>
            <Host Name="ILST" Port="8003"/>
            <Host Name="PPRO" Port="8004"/>
            <Host Name="PRLD" Port="8005"/>
            <Host Name="FLPR" Port="8006"/>
			<Host Name="AUDT" Port="8007"/>
        </HostList>
    </Extension>
    <Extension Id="com.adobe.CEPHTMLTEST.Panel2">
        <HostList>
            <Host Name="PHXS" Port="8100"/>
            <Host Name="IDSN" Port="8101"/>
            <Host Name="AICY" Port="8102"/>
            <Host Name="ILST" Port="8103"/>
            <Host Name="PPRO" Port="8104"/>
            <Host Name="PRLD" Port="8105"/>
            <Host Name="FLPR" Port="8106"/>
			<Host Name="AUDT" Port="8107"/>
        </HostList>
    </Extension>
    <Extension Id="com.adobe.CEPHTMLTEST.ModalDialog">
        <HostList>
            <Host Name="PHXS" Port="8200"/>
            <Host Name="IDSN" Port="8201"/>
            <Host Name="AICY" Port="8202"/>
            <Host Name="ILST" Port="8203"/>
            <Host Name="PPRO" Port="8204"/>
            <Host Name="PRLD" Port="8205"/>
            <Host Name="FLPR" Port="8206"/>
			<Host Name="AUDT" Port="8207"/>
        </HostList>
    </Extension>
    <Extension Id="com.adobe.CEPHTMLTEST.Modeless">
        <HostList>
            <Host Name="PHXS" Port="8300"/>
            <Host Name="IDSN" Port="8301"/>
            <Host Name="AICY" Port="8302"/>
            <Host Name="ILST" Port="8303"/>
            <Host Name="PPRO" Port="8304"/>
            <Host Name="PRLD" Port="8305"/>
            <Host Name="FLPR" Port="8306"/>
			<Host Name="AUDT" Port="8307"/>
        </HostList>
    </Extension>
</ExtensionList>
```

After loading an extension with debug port 8088, open http://localhost:8088/ in Chrome to load the debugger.
