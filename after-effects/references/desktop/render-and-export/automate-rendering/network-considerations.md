# Network considerations

As you run several render engines spread over several computers, hold these pointers in mind:

Wherever you can, name folders with absolute file paths so every render engine reads them the same way. Doing that may call for mapping network drives to one consistent drive letter on every machine (H:\renders\watch\, for example). Steer clear of relative paths (such as \\renders\watch).

No two Macintosh computers watching the watch folder may share a name. Since machines so often ship with the same default name, rename yours away from that default.

See to it that every server and client — that is, each computer watching the watch folder — has hard drives whose names are unique.

Never let one computer both host a watch folder and run After Effects in Watch Folder mode. Hand the watch folder to a dedicated server that all the render engines can reach.

Keep rendering and Watch Folder mode off the root of any volume, and off any shared folder that shows up as the root when another computer looks at it. Point them at a subfolder instead. Likewise, keep high-ASCII or other extended characters, along with slashes, out of your filenames. For rendering across several machines, After Effects bundles the Multi-Machine sample template you can build from.

Note

When you render across a network spanning volumes on different network or operating systems — Windows, macOS, Novell, and UNIX among them — be sure to name output files with a convention every rendering or destination volume can handle.
