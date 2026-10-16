# Invisible HTML Extensions

An HTML extension may stay invisible for its entire life cycle. In that mode:

- It always runs in the background
- It is never visible

To create an invisible HTML extension:

- Use extension manifest version "5.0" or higher.
- In the manifest file, set the window type to 'Custom'.
- In the manifest file, set `<AutoVisible>` to false.
- Omit the `<Menu>` tag when the extension should stay out of the Window->Extensions menu.
- Declare events with the `<StartOn>` tag when those event types should launch the extension.

Example:

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

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

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

Keep in mind that Invisible HTML Extension support is not available in every host application. The table gives the product details:

| Point Product | Supports Invisible Extension | Misc. |
| --- | --- | --- |
| Photoshop | Yes |  |
| Premiere Pro | Yes |  |
| Prelude | Yes |  |
| After Effects | Yes |  |
| Animate (Flash Pro) | Yes |  |
| Audition | Yes |  |
| InDesign | Yes | However, as of 2019 you must include a width and height. |
| InCopy | Yes | However, as of 2019 you must include a width and height. |
| Illustrator | Yes |  |
