# VBScript

VBScript can create an Illustrator instance in several ways:

CreateObject starts Illustrator as an invisible application when Illustrator is not already running. If Illustrator starts invisibly, activate it manually so it becomes visible:

```vbscript
Set appRef = CreateObject("Illustrator.Application")
```

When multiple Illustrator versions are installed on one machine and CreateObject is used for the application reference, "Illustrator.Application" resolves to the newest Illustrator version. To point at an older version, append the version identifier to the string:

| Version | Identifier |
| --- | --- |
| Illustrator 10 | "Illustrator.Application.1" |
| Illustrator CS | "Illustrator.Application.2" |
| Illustrator CS2 | "Illustrator.Application.3" |
| Illustrator CS3 | "Illustrator.Application.4" |
| Illustrator CS4 | "Illustrator.Application.CS4" |
| Illustrator CS5 | "Illustrator.Application.CS5" |
| Illustrator CS6 | "Illustrator.Application.CS6" |
| Illustrator CC | "Illustrator.Application.CC" |
| Illustrator CC 2014 | "Illustrator.Application.CC2014" |
| Illustrator CC 2015 | "Illustrator.Application.CC2015" |
| Illustrator CC 2017 | "Illustrator.Application.CC2017" |

If the project includes a reference to the Illustrator type library, use the New operator. The following line creates a new Application object reference:

```vbscript
Set appRef = New Illustrator.Application
```
