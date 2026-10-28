# Write Contents for the `.debug` File

Add the elements below to the `.debug` file; notes **#1-2** describe what each placeholder represents:

```xml
<ExtensionList>
        <!-- 1 -->
        <Extension Id="com.example.helloworld">
           <HostList>

               <!-- 2 -->
               <Host Name="PHXS" Port="8088"/>
               <Host Name="PHSP" Port="8088"/>

            </HostList>
        </Extension>
    </ExtensionList>
```

1. In the sample `.debug` file, the Extension ID must be identical to the Extenstion ID declared in `manifest.xml`; [CEP setup guidance](https://github.com/Adobe-CEP/Getting-Started-guides/blob/master/readme.md) explains the surrounding setup.

1. For every supported app, include its _Host IDs_ and pair each one with the debugging port you want to use. This sample uses Photoshop Host IDs. [The CEP Cookbook lists all host application ports](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md).
