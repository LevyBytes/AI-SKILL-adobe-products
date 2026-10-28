# On MacOS

1. Pull down the Git Repo from the URL given above, whether by clone or download
2. Inside the Mac folder, look for the bash script check_symbols_for_thread_safety.sh
3. Dig into a plugin or effect's package content and track down the binary files. (As an example, Curves.plugin keeps its binary file at: /Applications/Adobe After Effects [your AE version]/Plug-ins/Effects/Curves.plugin/Contents/MacOS/Curves)

Replace `VERSION` and the binary path with your installed version and plug-in. Run the SDK-provided helper; the path is one argument.

```bash
check_symbols_for_thread_safety.sh "/Applications/Adobe After Effects VERSION/Plug-ins/Effects/Curves.plugin/Contents/MacOS/Curves"
```

Symbol-inspection output format or example; this is not executable code.

```text
[symbol type]; [symbol name]
```

6. [symbol type] is an one case-sensitive letter that indicates the type of the variable. You can find all the type information here: https://linux.die.net/man/1/nm

Symbol-inspection output format or example; this is not executable code.

```text
b; Deform::FindSilEdges()::new_kInfinite
```

- b shows this symbol is in the uninitialized data section, which indicates it might be a static variable.
- Deform::FindSilEdges()::new_kInfinite is the symbol name where Deform is name of the namespace that the variable is located at.
- FindSilEdges() is the function name the variable is in.
- new_kInfinite is the actual variable name. Namespace and function names might not be shown based on where the variable is.

8. Search for each symbol in your code, fix it (see here on how) and repeat for every binary file in your solution
