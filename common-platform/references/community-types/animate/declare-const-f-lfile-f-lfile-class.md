# declare const FLfile: FLfileClass

Community declaration reference: Animate/22.0.

The FLfile object supports Flash extensions that need to access, change, or delete local files and folders. Adobe exposes the FLfile API as an extension of the JavaScript API. That extension is a shared library stored in this folder:
â€¢Windows 7 and 8:
boot drive\Users\username\AppData\Local\Adobe\Flash CC\language\Configuration\External Libraries\FLfile.dll
â€¢Mac OS X:
Macintosh HD/Users/username/Library/Application Support/Adobe/Flash CC/language/Configuration/External Libraries/FLfile.dll
Note: Shared libraries that hold symbols for Flash documents are not the same as JavaScript API shared libraries.
FLfile methods operate on disk files and directories, so each call includes one or more parameters identifying a target file or folder location. That location is supplied as a string that resembles a website URL. The format is a file URI (Uniform Resource Identifier), written like this, including the quote marks:
"file:///drive|/folder 1/folder 2/.../filename"
As an example, to make a folder named config on the C drive under the Program Files
MyApp folder, use this command:
FLfile.createFolder("file:///C|/Program Files/MyApp/config");
Then, to put config.ini inside that folder, use this command:
FLfile.write("file:///C|/Program Files/MyApp/config/config.ini", "");
For a Macintosh folder, this command is valid:
FLfile.createFolder("file:///Macintosh/MyApp/config");

```typescript
declare const FLfile: FLfileClass
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
