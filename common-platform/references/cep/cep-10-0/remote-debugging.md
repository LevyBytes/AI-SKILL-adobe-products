# Remote Debugging

CEP supports remote debugging for HTML extensions from 5.0.

- Add a “.debug” file at the extension root directory, for example `Test_Extension\.debug`. The .debug file records remote debug ports. Create this file with valid ports because remote debugging and dev tools both read it.
- Because ".debug" is a special file name on Windows and macOS, create it from the command line.
  - On Windows, create an empty file with "copy con .debug" and "Ctrl+Z".
  - On macOS, create an empty file with "touch .debug".
- Port values must be at least 1024 and less than 65535; outside that range, remote debugging and dev tools will not work.
- A single extension bundle may include multiple extensions. The .debug file can assign a debug port to each extension. Example file:

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

When an extension uses debug port 8088, open Chrome at http://localhost:8088/ to load the debugger.
