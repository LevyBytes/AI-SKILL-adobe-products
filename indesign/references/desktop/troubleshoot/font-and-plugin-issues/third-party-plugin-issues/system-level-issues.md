# System-level issues

Security tools or low-level system services can disrupt plugin authentication, or they can block plugins from reaching resources they need. Check the disk first with Disk Utility on macOS or CHKDSK on Windows, then run an up-to-date antivirus scan so disk damage and malware are ruled out.

Windows:

Open Settings > System > Recovery. In Advanced Startup, choose Restart now.

After the restart, open Troubleshoot > Advanced options > Startup Settings and press F4 during startup.

Start InDesign and check whether the plugin works.

When plugins work in Safe Boot, start Windows normally, then look for startup items that conflict.

Press Ctrl + Shift + Esc to open Task Manager.

Open the Startup tab.

Turn off startup programs that are not required.

Restart Windows, then test InDesign plugin functionality again.

macOS:

Enter Safe Boot mode by holding Shift while the system starts.

Start InDesign and check whether the plugin works.

When plugins work in Safe Boot, restart normally, then review startup items for conflicts.

Open Apple menu > System Settings.

Choose the General tab.

Choose Login Items & Extensions.

Remove startup items that are not needed.

Restart macOS, then test InDesign plugin functionality again.

If these steps do not resolve the issue after you have confirmed that the plugin is current and compatible, contact the plugin developer's technical support. Provide the InDesign version, operating system, steps to reproduce the issue, and the exact error message or behavior.

For documents blocked by missing plugins, try opening them after temporarily installing the required plugin. Another option is to ask the document creator to remove the plugin dependency before sending the file.
