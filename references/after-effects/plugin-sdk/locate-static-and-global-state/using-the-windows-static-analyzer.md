# Using the Windows Static Analyzer

1. Find the executable CheckThreadSafeSymbols.exe in the Win folder
2. Compile your effect in Debug mode and find its .pdb file
3. You should also find some .obj files in the same build directory if you haven't modified your project build settings
   - Use the -source option if you don't know exactly what binaries your source code is ending up in, or if you'd like to keep track of thread safety on a per-source-file basis.
   - Use the -objfile option if you want more fine-grained control over what parts of your project you're scanning.

Replace the quoted example paths with the binary/source and matching PDB produced by the same build.

```powershell
CheckThreadSafeSymbols.exe -objfile "C:/path/to/plugin.aex" "C:/path/to/plugin.pdb"
```

Replace the quoted example paths with the binary/source and matching PDB produced by the same build.

```powershell
CheckThreadSafeSymbols.exe -source "C:/path/to/source.cpp" "C:/path/to/plugin.pdb"
```

Replace the quoted example paths with the binary/source and matching PDB produced by the same build.

```powershell
CheckThreadSafeSymbols.exe -g "C:/path/to/plugin.pdb"
```

Replace the quoted example paths with the binary/source and matching PDB produced by the same build.

```powershell
CheckThreadSafeSymbols.exe -sf "C:/path/to/plugin.pdb"
```

Symbol-inspection output format or example; this is not executable code.

```text
[Symbol name], [Symbol type], [Datakind], ([Section type of data location], [Binary Address][Binary Address Offset])
```

Symbol-inspection output format or example; this is not executable code.

```text
menuBuf, Type: char[0x1000], File Static, (static, [0008FCD0][0003:00001CD0])
```

- menuBuf is the actual variable name.
- Type: char[0x1000] shows what type of the variable it is. The data here is a char.
- File Static shows what kind of that data it is. The data here is a File-scoped static variable. You can find all the data kinds and what they mean on this page https://docs.microsoft.com/en-us/visualstudio/debugger/debug-interface-access/datakind?view=vs-2019
- static shows that the data is in the static section of the memory.
- [0008FCD0][0003:00001CD0] shows the Binary Address and the Binary Address offset of the data.

11. Search for each symbol in your code, fix it (see here on how) and repeat for every binary/source file in your solution
