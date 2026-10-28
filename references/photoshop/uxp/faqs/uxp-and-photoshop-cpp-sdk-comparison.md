# How is the UXP SDK different from the Photoshop C++ SDK (aka CSDK)?

These SDKs target separate jobs. The new UXP SDK allows generic C++ code to live beside JavaScript. The PS C++ SDK extends Photoshop in seven capability areas, including filters, file formats, and selections.

Before UXP hybrid plugins existed, some third-party developers paired a PS C++ plugin with a UXP plugin for UI. That pattern has drawbacks:

1. Those plug-ins need a custom installer to place two separate plugins on the user's machine: one for UXP and one for the C++ plug-in.
2. The two plugins can communicate only through strings.

A hybrid plugin built with the new UXP SDK lets you package C++ code and JavaScript inside one plugin package and gives more efficient communication paths between JavaScript and C++.
