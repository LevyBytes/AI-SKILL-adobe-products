# Scripts, Support

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Advanced topics; Global await; Concepts; Script lifespan; Building your first script; raw_githubusercontent_com_AdobeDocs_uxp_indesign_main_src_pages_scripts_index_md — UXP Scripts; Passing Arguments; Debugging a Script; UXP Scripts for InDesign Server; Tutorials; Setting Script Result; Tips and tricks for UXP scripts; Community.

## Advanced topics

Script development extends well beyond the material covered so far. For advanced topics, review the [resources section](uxp-plugins.md), where you can find material such as:

[Figure: Folder icon](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/advanced/file.jpg)

### File I/O

[Save data to and load data from the file system](uxp-recipes-2.md)

[Figure: Network icon](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/advanced/network.jpg)

### Network I/O

[Make network requests to fetch data from the internet](uxp-recipes-3.md)

[Figure: Application window icon](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/advanced/ui.jpg)

### User Interface

[Adding User Interfaces](uxp-resources.md)

[Figure: Ellipsis](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/advanced/more.jpg)

### And much more

[See all the resources available to you for script development](uxp-resources.md)

## Global await

Inside a UXP Script, Global await is the mechanism used for asynchronous operations.

Start with the behavior of asynchronous code. Async work is non-blocking, so execution continues while one or more operations are still running.

Texting or emailing a friend is a simple analogy. After sending the message, you can keep doing other work; waiting for the response is optional, but you will be informed or notified when the reply arrives.

Now review a short asynchronous example. Here, `foo` produces a value after a 2s delay. The delay shown here is simulated with `settimeout`; in a real script, the delay could come from many causes, such as a network call that fetches data.

```js
console.log("Start of execution.");

function delayedFoo(text) {
    setTimeout(() => {
      console.log("Greetings: Hello",
    }, 2000);
}
delayedFoo();

console.log("End of execution.");
```

The output might seem as if it should be:

```
Start of execution
Greetings: Hello
End of execution
```

In practice, output like this is what you would see:

```
Start of execution
End of execution
```

Why is the console.log inside `settimeout` missing? The script had already stopped running. UXP scripts expect synchronous code.

To make the example succeed, force the thread to _wait_ until the async task finishes before the following statement runs. Use `Promise` together with `await` for that pattern. Review [promise](https://javascript.info/promise-basics) first if the concept is unfamiliar.

```js
console.log("Start of execution.");

async function delayedFoo() {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Greetings: Hello");
      resolve();
    }, 2000);
  });
  return prom;
}
await delayedFoo();

console.log("End of execution.");
```

```
Start of execution
Greetings: Hello // after a delay of 2s
End of execution
```

The changes are:

- Placing await before `delayedFoo()` is global await. It keeps the UXP Script paused at global scope until an async task finishes.
- Any number of global awaits can be used, but each `await` stops execution until the awaited async task completes.
- When an async function returns a promise, the value can be resolved later.
- Calling `resolve` on the promise matters after the asynchronous task is complete; that lets the script move on to the next line.

## Concepts

Before developing InDesign scripts in UXP, learn the basic UXP script concepts first. This section introduces core ideas such as script lifespan and global await.

## Script lifespan

UXP scripts follow JavaScript's single-threaded, non-blocking execution model. A script remains active only through the final statement currently on the execution stack.

This small sample shows the lifecycle plainly.

### sample.idjs

```js
console.log("Start of execution.");

function foo() {
  console.log("Greetings: Hello");
}

foo();

console.log("End of execution.");
```

### Output

```
Start of execution
Greetings: Hello
End of execution
```

In this code, completion occurs after the last line runs. Once "End of execution" has executed, the script is no longer alive. That behavior is the normal JavaScript execution-stack pattern. If that model is unfamiliar, review the [execution stack](https://www.javascripttutorial.net/javascript-call-stack/).

**Pro tip**

During script debugging, place a breakpoint on the final statement when you need time to inspect the `console.logs` before script termination closes the debug window and clears them from view.

The script session also lines up with this same lifetime: each run creates its own separate session.

The same sample is entirely synchronous, so each operation runs one after another in order.

Asynchronous work changes that picture. An async operation normally completes later, and the current execution thread continues instead of waiting for it. For background on that distinction in JavaScript, see the [difference](https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/) article.

Because UXP scripts survive only until the final statement in the call stack is reached, they can end before later asynchronous work gets a chance to run. In practice, the runtime behaves as though the script should be synchronous unless you make it wait.

Real projects cannot always work that way. Network calls are asynchronous and can need several seconds before resolving, yet the script still has to pause for those operations somehow. The answer is `global await`, which lets asynchronous code be handled in a synchronous-looking flow. The next section covers that approach.

## Building your first script

This tutorial guides you through making an initial script. You will create the file and then execute it in InDesign.

### Prerequisites

Before beginning, confirm that these applications are already installed:

- **InDesign 2023 (v18.0)** or later. Install it from the _Creative Cloud Desktop_ app.
- **UXP Developer Tool v1.7**. Install it from the [_Creative Cloud Desktop_ app](https://creativecloud.adobe.com/apps/download/uxp-developer-tools).
- A **code editor** of your choice (for example, [Visual Studio Code](https://code.visualstudio.com/))

### Steps

### Step 1: Create a script

In your code editor, make a plain text file and place this JavaScript snippet inside it.

```js
let { app } = require("indesign");
let myDocument = app.documents.add();
let myTextFrame = myDocument.pages.item(0).textFrames.add();

// set the geometric bounds, the top, left, bottom, and right edges, of the text frame.
myTextFrame.geometricBounds = ["6p", "6p", "24p", "24p"];
myTextFrame.contents = "Hello World!";
```

**Remember** that an `idjs` file is simply JavaScript; its special extension tells InDesign to treat it as a UXP script.

### Step 2: Put the file where the Scripts panel can find it

Before execution, a script must be visible in the Scripts panel. You can add scripts to that panel in either of these ways:

1. Place scripts in the InDesign application scripts folder.
   macOS - `/Applications/Adobe InDesign 2023/Scripts`
   Windows -
   (Create the Scripts folder if it does not already exist but this may require admin access.)
2. As another option, store the script in the Scripts Panel folder inside your preferences folder. Your preferences folder is located at:
   macOS: `/Users/<username>/Library/Preferences/Adobe InDesign/Version 18.0/<locale>/Scripts`
   Windows: `C:\Users\<username>\AppData\Roaming\Adobe\InDesign\Version 18.0\<locale>\Scripts`
   In those paths, `<username>` means your user name, and `<locale>` identifies the location and language, such as en_US.

Save the script as a plain-text file using the `.idjs` file extension.

### Step 3: Run the script

After creating the script, run it from InDesign. To show the Scripts panel, select Window > Utilities > Scripts.

Locate the saved script and double-click its name. You can also right-click the script name and choose `run` from the drop-down menu.

[Figure: Running a script](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/getting-started/running-a-script.png)

[Figure: First script output](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/getting-started/hello-world.png)

### Step 4: Make a change

With the script now running in InDesign, make a small adjustment so you can see the result change.

For a script listed in the Scripts panel, select it and choose 'Edit Script' from the menu. The script should open in a text editor.

Add this code to change the text font and size:

```js
let myFont = app.fonts.item("Arial");
let myPage = myDocument.pages.item(0);

var myParagraph = myTextFrame.paragraphs.item(0);
myParagraph.appliedFont = myFont;
myParagraph.pointSize = 48;
```

To view the update, save the edits and run the script again by double-clicking it in the Scripts panel.

[Figure: Updated first script output](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/getting-started/hello-world-updated.png)

### Next steps

The first InDesign script is now complete. Next, the guide moves into several concepts that matter when developing scripts.

## raw_githubusercontent_com_AdobeDocs_uxp_indesign_main_src_pages_scripts_index_md — UXP Scripts

**InDesign v18.0** and later versions include support for UXP scripts.

For automation, scripts are typically the fastest and simplest route. Before continuing, use [Scripts & Plugins](uxp-for-adobe-indesign.md) as background for deciding whether scripts match your use case.

This section shows how to write an initial script and introduces the key concepts behind script behavior.

## Passing Arguments

Starting with InDesign v18.4, UXP scripts can receive arguments/parameters.

Use the `script.args` API when you need to read the arguments supplied to a script as an array.

### Usage

Use this pattern to retrieve the script arguments as an array:

```js
const script = require("uxp").script;
let argsArray = script.args;
```

InDesign itself cannot send arguments straight from the application interface. Direct argument passing to a script is available only through InDesign Server.

### Passing Arguments to InDesign Server

Use `sampleclient` to send arguments to InDesign Server.

Provide the required details, including port number, script name, and arguments. Supply arguments as strings where `=` separates each key from its value. The `script.args` API gives back an array of strings, with each array element containing one key/value pair from the script execution request. Example:

**Command to Pass Arguments to IDS Scripts**

```
../../../../mac/debug_cocoa64/sampleclient -host localhost:12345 testArgs.idjs "arg1=100" "arg2=200"
```

```js
const script = require("uxp").script;
let ar = script.args;
script.setResult(ar);
```

After this script runs on InDesign Server, the client side displays the returned result.

```
Script result (LIST, 2):
    (std__string): arg1=100
    (std__string): arg2=200
```

### Passing Arguments to InDesign Server/ InDesign App Via doScript()

The `doScript` API lets one UXP script pass arguments to another.

Pass an array variable as the third parameter in the doScript API call. For this case, unlike InDesign Server argument passing, `script.args` reads the values sent to the external script. Example:

```js
//caller.idjs
const myInDesign = require("indesign");
const app = myInDesign.app;
const argsArray = [100, 200];
app.doScript("PATH_TO_CALLED/called.idjs", myInDesign.ScriptLanguage.UXPSCRIPT, argsArray);
```

```js
//called.idjs
const script = require("uxp").script;
console.log(script.args);
```

```
[console] 100,200
```

## Debugging a Script

This page describes debugging approaches for common issues.

Quick tips for logs:

- Script `console.log` output and UXP logs go to these locations:
  For versions of InDesign earlier than 19.2 -

  - macOS: `/Users/<user name>/Library/Caches/UXPLogs/`
  - Windows: `C:\Users\<username>\AppData\Local\Temp\UXPLogs`

  Starting with InDesign 19.2, log locations changed to the following:

  - Adobe InDesign -
    macOS: `/Users/<user name>/Library/Logs/Adobe/Adobe InDesign <InDesign version year>/`
    Windows: `C:\Users\<username>\AppData\Roaming\Adobe\InDesign\Logs`
  - Adobe InDesign Server -
    macOS: `/Users/<user name>/Library/Logs/Adobe/Adobe InDesign Server <InDesign version year>/`
    Windows: `C:\Users\<username>\AppData\Roaming\Adobe\InDesign Server\Logs`

  When several files appear in the same location, choose the file with the newest timestamp.

- Every sample script includes a try/catch block. Exceptions raised by InDesign are caught and either written to the console or shown in the dialog box.
- Parser errors from the interpreter are written directly into the UXP logs.

### Debugging Script files using UDT

Scripts run in the same execution context used by UXP plugins. Step-by-step script debugging is available with [UXP Developer Tool](https://creativecloud.adobe.com/apps/download/uxp-developer-tools) (UDT) v1.7.0.

For script-file debugging in UDT, click "Connected Apps", select InDesign, and add the script from that view:

[Figure: step 1 of loading an InDesign script into UDT](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/tutorials/debug/step1.png)

[Figure: step 2 of loading an InDesign script into UDT](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/tutorials/debug/step2.png)

After loading the script, start debugging with a breakpoint enabled. From that point, add breakpoints or Step Into the script files.

## UXP Scripts for InDesign Server

InDesign Server also supports UXP Scripts beginning with InDesign v18.0.

To run UXP Scripts in InDesign Server, both InDesign and InDesign Server are required. Development is usually easier if you first write the script for InDesign, then adjust the object model for InDesign Server. Otherwise, viewing your InDesign Server script output requires saving the document and opening it in InDesign, or exporting the document and inspecting the exported file in another program, such as Acrobat (R) or Adobe Reader (R). Building InDesign Server scripts in InDesign can greatly shorten development time.

\*Note: These examples assume the script is entered and run on the same system where InDesign Server is installed. For Test Client or SOAP command execution, see Introduction to InDesign Server Development.

### Object Model

The [Resources](uxp-resources.md) section describes the InDesign Object Model. InDesign Server uses a slightly different object model, however.

When writing UXP scripts specifically for InDesign Server, keep these points in view.

### Active document

InDesign scripts commonly use the application object's active document property to reference the document at the front of the user interface. InDesign Server has no such property. Use a document index or document name instead.

### Active script

Scripts for InDesign often rely on the currently running script when locating companion script files or resources. InDesign Server does not provide this property. Put the needed assets in defined locations on the server or system, and reference those assets with complete file paths.

### Active windows and spreads

References to an active window, or to the active spread belonging to that active window, appear often in InDesign scripts. InDesign Server does not support these user-interface properties.

### Selection

InDesign Server, as expected, has no object representing the current user selection. When adapting scripts from InDesign, remove selection references and address objects through other attributes, such as object id, index, or label.

### Dialogs

Through the dialog object, InDesign can build modal dialog boxes and fill them with common user-interface controls, including checkboxes, text-entry fields, and radio buttons. InDesign Server supports neither the dialog object nor those user-interface controls.

### Copy and paste

Because InDesign Server provides no user interface, it also does not include InDesign copy and paste behavior. Use duplicate and move rather than copy and paste. Both methods can make object copies and move objects between documents.

## Tutorials

This section gathers tutorials intended to get you started with script development. Each tutorial walks through a common script-development task step by step.
You do not have to complete the tutorials sequentially. Choose whichever ones match your interests.
Beyond the tutorials, deeper guides and resources cover more advanced material. They are available in the [advanced topics section](uxp-advanced-topics.md).

## Setting Script Result

Beginning with InDesign v18.4, a UXP script can "set result".

Once execution finishes, a script may return a result for evaluating the run outcome. Set that value with the `script.setResult()` API as shown below.

### Setting the result

This line assigns the string `"Hello World!"` as the result for the UXP script that is running.

```js
// called.idjs
const script = require("uxp").script;
script.setResult("Hello World!");
```

### Reading the script result

The snippets below show how another script can read a script result.

```js
// caller.idjs
const myInDesign = require("indesign");
const app = myInDesign.app;
const resultOfCalledScript = app.doScript(
  "PATH_TO_CALLED.IDJS/called.idjs",
  myInDesign.ScriptLanguage.UXPSCRIPT,
);
console.log(resultOfCalledScript);
```

Scripts return values by assigning the needed value with the `setResult()` API. The caller that launched the script receives that result. If the script runs from InDesign's scripts panel, the result is ignored.
For scripts launched in InDesign Server, the result is sent back to the client that requested execution. When another script forks this script through the `app.doScript()` API, the value set by the 'called' script is returned to the 'caller' script, as shown above.

After this script runs on InDesign Server, the client side shows the returned result.

```
Script result (std__string): Hello World!
```

## Tips and tricks for UXP scripts

Extra tips and techniques to use while developing UXP Scripts.

### Scripts panel

For most InDesign scripts, the Scripts panel is the simplest and most direct execution path. If that panel is hidden, open it with Window > Utilities > Scripts.

### Editing scripts

For script editing from the Scripts panel, select the script, open the Scripts panel menu, and choose Edit Script. Another option is to hold Option (macOS) or Alt (Windows) and double-click the script's name. The script opens in the editor assigned to that script file type.

### Open folder

To open the folder that contains a script in the Scripts panel, select the script, then choose Reveal in Finder (macOS) or Reveal in Explorer (Windows). You can also hold Command (macOS) or Ctrl-Shift (Windows) and double-click the script's name. Finder (macOS) or Explorer (Windows) then opens the script folder.

### Keyboard shortcuts

To assign a keyboard shortcut to a script, open Edit > Keyboard Shortcuts, choose `[Default]` in Set, and then navigate to Product Area > Scripts. The scripts from your Scripts panel are listed. Select a script and assign a keyboard shortcut the same way you would for any other InDesign feature.

### Run script during application startup

If a script should launch automatically with InDesign, place it in "Startup Scripts" inside Scripts.

- macOS - `/Applications/Adobe InDesign 2023/Scripts/startup scripts`
- Windows - `%APPDATA%\Adobe\InDesign\Version 19.0\en_US\Scripts\startup scripts`

Match the InDesign version segment in the path to the installation on your machine. Create any missing folders before adding the script.

### Associate a Text-Editor for .idjs Files

Use the steps below to connect `.idjs` files with the editor you prefer:

### On Mac

1. Open the context menu for any `.idjs` file
2. Choose "Get Info"
3. In "Open With", pick your editor from the application list
4. If the editor is not shown, choose "Other", select an editor from the "Applications" folder, and click "Add"
5. Select "Change All" and then "Continue".

[Figure: Mac Text-Editor Association for .idjs Files](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/tutorials/tips-tricks/1.png)

[Figure: Mac Text-Editor Association for .idjs Files](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/tutorials/tips-tricks/2.png)

[Figure: Mac Text-Editor Association for .idjs Files](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/tutorials/tips-tricks/3.png)

### On Windows:

1. Open the context menu for any `.idjs` file
2. Choose "Open with"
3. Pick your editor from the application list
4. If the editor is not listed, choose "Choose another app", and if required, "More apps" → "Look for another app on this PC"
5. Browse to the folder that contains the editor, then select it
6. Turn on "Always use this app to open .idjs files".

[Figure: Windows Text-Editor Association for .idjs Files](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/tutorials/tips-tricks/4.png)

[Figure: Windows Text-Editor Association for .idjs Files](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/tutorials/tips-tricks/5.png)

## Community

Find the right places for questions, bug reports, feature ideas, and developer discussion.

### Developer forums

[Adobe Community Forums, InDesign Scripting](https://community.adobe.com/t5/indesign/ct-p/ct-indesign?page=1&sort=latest_replies&lang=all&tabid=all&topics=label-scripting)

Use this forum for public discussion and help from Adobe staff and experienced community members.

### InDesign Server Forum

[InDesign Server Developers](https://community.adobe.com/t5/indesign/ct-p/ct-indesign?page=1&sort=latest_replies&filter=all&lang=all&tabid=discussions&topics=label-serverdevelopers)

Talk with other developers working with InDesign Server.

### Product Bugs and Feedback

[InDesign on UserVoice](https://indesign.uservoice.com/)

Send InDesign bug reports and product suggestions through the UserVoice forum.

### InDesign Prerelease

[InDesign Prerelease](https://www.adobeprerelease.com/beta/C6DFA254-C40C-4EEB-8F6D-F4AEDA2E6171)

Joining requires a Non-Disclosure Agreement. After access is granted, prerelease conversations happen in [the prerelease forums](https://forums.adobeprerelease.com/indesign/categories).

### InDesign Developers Prerelease

[InDesign Developers Prerelease](https://www.adobeprerelease.com/beta/D1A76A97-F7DC-4552-DE3C-FF5F211C7492)

Joining requires a Non-Disclosure Agreement. Developers focused on InDesign's C++ SDK or InDesign Server should also join the InDesign Developers Prerelease program, alongside the InDesign Prerelease program. After access is granted, prerelease conversations happen in [the prerelease forums](https://forums.adobeprerelease.com/indesigndev/categories). If your application has been pending for more than a week, email wwds@adobe.com and ask for access.
