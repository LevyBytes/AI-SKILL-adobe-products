# Incorrect Visual C++ runtime files cause applications to crash

Grab the Visual C++ Runtime repair tool ZIP and unpack it.

Download ZIP

Right-click FixVCRuntime.exe and select Run as administrator.

Hold on until the repair has finished.

Reboot the computer once everything wraps up.

What the tool does

- Confirms the machine is Windows running on ARM64 architecture.
- Looks through the Windows System32 directory for AMD64 builds of the Microsoft Visual C++ runtime libraries (version 14.44.35211.x).

  - Saves a local backup of the affected DLLs before touching anything​
  - Strips the wrong AMD64 files out of the system directory​
  - Lays down the proper ARM64 Visual C++ runtime package by way of Microsoft's official redistributable

- Double-checks the cleanup, then clears out on its own the temporary files used while repairing.
- Records every operation to a file dropped beside the executable (FixVCRuntime.log).

When to use this tool

Reach for this tool only when:

- Your machine is an ARM64-based Windows device, for instance the Surface Pro X or Lenovo ThinkPad X13s.
- Following an install or update, Acrobat or other applications flag the Visual C++ runtime as missing or invalid.
- Adobe Support or your IT administrators have told you to repair the Visual C++ runtimes.

Safety and validation

- Only the Microsoft Visual C++ runtime files confirmed to be wrong for the AMD64 architecture on ARM64 systems get touched by the tool.
- Every affected file is backed up by the tool ahead of removal.
- What ships inside is the unaltered, digitally signed Microsoft Visual C++ Redistributable package.
- Nothing else across your system or applications is altered.

Log file

The tool drops a log file into the same directory as the executable (for example, C:\Users&lt;User&gt;\Downloads\FixVCRuntime.log). Inside you'll find precise timestamps covering detected files, backup steps, and installer outcomes. Should support ask for it, you can hand over this log to confirm the repair went through.

Version information

| Component | Description |
| --- | --- |
| Tool name | FixVCRuntime.exe |
| Purpose | Repair Visual C++ runtime corruption on ARM64 systems |
| Requires | Administrator privileges |
| Supported OS | Windows 11 ARM64, Windows 10 ARM64 |
| Distributed by | Adobe Systems (Internal Support Tool) |

Note: Point this utility at a non-ARM64 or unsupported system and nothing happens. Use it only when Adobe Support or your IT administrators direct you to.
