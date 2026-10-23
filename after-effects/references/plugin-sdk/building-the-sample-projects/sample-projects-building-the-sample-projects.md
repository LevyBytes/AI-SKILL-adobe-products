# Sample Projects - Building The Sample Projects

The sample projects have all been rolled up into one master project that sits in the SDK's Examples folder. On macOS that's Buildall.xcodeproj; on Windows it's BuildAll.sln.

Within your IDE, point your project's output folder at After Effects' plug-in folder.

When developing on macOS, the path we suggest is: ~/Library/Application Support/Adobe/Common/Plug-ins/[version]/MediaCore/

Across every CC version the version is fixed at 7.0; for releases before that it's CSx.

for example: ~/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore/

or: ~/Library/Application Support/Adobe/Common/Plug-ins/CS6/MediaCore/

and on Windows the path to use is: [Program Files]\Adobe\Common\Plug-ins\[version]\MediaCore\

for example: C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\

or: C:\Program Files\Adobe\Common\Plug-ins\CS6\MediaCore\

Keep in mind this Windows path is a development-only suggestion. For Windows installers, follow the rules given here: Where Installers Should Put Plug-ins.

Xcode lets you fix this path one time for your projects under Xcode File > Project Settings > Advanced. Beneath Build Location pick Custom: Absolute and enter the path.

For convenience in Visual Studio, we've set the output path of every sample project through the environment variable `AE_PLUGIN_BUILD_DIR`, which you'll need to define as a user environment variable on your machine. Under Windows 7, right-click My Computer > Properties > and from the left sidebar pick Advanced System Settings. When the new dialog opens, press the Environment Variables button. Within the User variables section, add a New variable called `AE_PLUGIN_BUILD_DIR` carrying the path described above. So the variable takes effect, log out of Windows and back in.

You can instead assign the output path per project inside Visual Studio: right-click a project in the Solution Explorer, pick Properties, then under Configuration Properties > Linker > General set the Output File.

If compiling the plug-ins turns up a link error along the lines of:

"Cannot open file "[MediaCore plug-ins path]plugin.prm", be sure you started Visual Studio with administrator rights. Locate devenv.exe in your Visual Studio install, right-click it, go to Properties > Compatibility > Privilege Level, and tick "Run this program as an administrator".
