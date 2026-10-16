# UXP Hybrid plugin vs Photoshop C++ plugins

Do not treat a UXP hybrid plugin as the same thing as a Photoshop C++ plugin; see the [C++ SDK reference](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/media/cpp-pluginsdk.md).

Choose based on the use case. For a Photoshop filter under the Filter menu or a new file type, PS CSDK is probably the better route. Choose UXP Hybrid plugins when generic C++ code should sit alongside JavaScript.

The pathway now permits a .uxpaddon to use the [Photoshop C++ SDK route](../getting-started-download-the-sdk/getting-started-photoshop-c-sdk.md). That lets you create a compiled filter and bundle it with a UXP dialog for control. Remember that, in this example, the filter is known only to the UXP hybrid plugin.
