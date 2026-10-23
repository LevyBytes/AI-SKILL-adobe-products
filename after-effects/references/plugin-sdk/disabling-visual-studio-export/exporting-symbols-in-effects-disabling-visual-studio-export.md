# Exporting Symbols in Effects - Disabling Visual Studio Export

Out of the box, Visual Studio builds switch symbol exports off. Getting symbols exported means either providing a module definition file or applying the __declspec(dllexport) keyword inside the function definition.

Microsoft's Visual Studio documentation covers more https://docs.microsoft.com/en-us/cpp/build/exporting-from-a-dll?view=msvc-160 (excerpt below):

You can export functions from a DLL using two methods:

1. Create a module definition (.def) file and use the .def file when building the DLL. Use this approach if you want to export functions from your DLL by ordinal rather than by name.
2. Use the keyword __declspec(dllexport) in the function's definition.

When exporting functions with either method, make sure to use the __stdcall calling convention.
