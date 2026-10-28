# Plugin Users

Plugin end users can choose either workaround below:

1. Launch the host application, such as Premiere Pro, in administrator mode. Installing the plugin while the host runs with those privileges may let it keep working later without administrator mode.

2. [Set the Debug mode](https://github.com/Adobe-CEP/Getting-Started-guides/tree/master/Client-side%20Debugging#set-the-debug-mode)

**Windows:** Open regedit > `HKEY_CURRENT_USER`/Software/Adobe/CSXS.8, then create a PlayerDebugMode entry with type "string" and value "1". Regedit is located in (C:\Windows\regedit), and CMD can open it too.
[Figure: image](https://github.com/user-attachments/assets/25f9cde0-fc01-44dd-b49a-f3bf57820c48)

**On macOS:** In the Terminal, type: `defaults write com.adobe.CSXS.11 PlayerDebugMode 1`

Terminal is located in (Applications > Utilities > Terminal).
