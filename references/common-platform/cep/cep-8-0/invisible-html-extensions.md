# Invisible HTML Extensions

An HTML extension may remain invisible for its entire lifetime. In that mode:

- It runs in the background continuously
- It never becomes visible

To configure an HTML extension as invisible:

- Use extension manifest version "5.0" or higher.
- In the manifest file, set the window type to 'Custom'.
- In the manifest file, set `<AutoVisible>` to false.
- To keep the extension out of the Window->Extensions menu, omit the `<Menu>` tag.
- To start the extension from particular event types, list those events with the `<StartOn>` tag.

Example:

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<ExtensionManifest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ExtensionBundleId="IamInvisible" ExtensionBundleVersion="1.0" Version="5.0">
    <ExtensionList>
        <Extension Id="IamInvisible" Version="1.0"/>
    </ExtensionList>
    <ExecutionEnvironment>
        <HostList>
            <Host Name="PHXS" Version="13.0"/>
        </HostList>
        <LocaleList>
            <Locale Code="All"/>
        </LocaleList>
        <RequiredRuntimeList>
            <RequiredRuntime Name="CSXS" Version="5.0"/>
        </RequiredRuntimeList>
    </ExecutionEnvironment>
    <DispatchInfoList>
        <Extension Id="IamInvisible">
            <DispatchInfo>
                <Resources>
                    <MainPath>./html/index.html</MainPath>
                </Resources>
                <Lifecycle>
                    <AutoVisible>false</AutoVisible>
                    <StartOn>
                        <!-- Photoshop dispatches this event on startup -->
                        <Event>applicationActivate</Event> 
                        <!-- Premiere Pro dispatches this event on startup -->
                        <Event>com.adobe.csxs.events.ApplicationActivate</Event>
                        <!-- You can add more events -->
                        <Event>another_event</Event>
                    </StartOn>
                </Lifecycle>
                <UI>
                    <Type>Custom</Type>
                    <Geometry>
                        <Size>
                            <Height>1</Height>
                            <Width>1</Width>
                        </Size>
                    </Geometry>
                </UI>
            </DispatchInfo>
        </Extension>
    </DispatchInfoList>
</ExtensionManifest>
```

Support for Invisible HTML Extension is not universal across host applications. The table shows the details.

| Point Product | Supports Invisible Extension | Misc. |
| --- | --- | --- |
| Photoshop | Yes |  |
| Premiere Pro | Yes |  |
| Prelude | Yes | Animate (Flash Pro) Yes |
| Audition | Yes | InDesign No Fails completely because InDesign does not support the 'Custom' window type. |
| InCopy | No | Fails completely because InCopy does not support the 'Custom' window type. |
| Illustrator | Yes |  |
