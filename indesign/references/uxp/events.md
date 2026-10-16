# Events

InDesign sends standard application and document events for actions such as opening a file, making a new file, printing, and importing text or graphics from disk. Attach scripts to those events with the `eventListener` scripting object. For instance, to run a function right when a selected event happens, create an `eventListener` object and pass both the event name and the target function as parameters. Event-based scripts resemble other scripts, except that after the listener is attached, the script should be held open by a promise while it waits in the background until the listener is removed. The promise can then resolve so the script exits. After Events Scripts with listeners are started, the matching event triggers them automatically instead of requiring a user launch from the Scripts palette.

**The sample scripts move from simple examples toward more involved workflows.**

_For script creation, installation, and execution, see [Adobe InDesign UXP Scripting Tutorial](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/guides/getting-started/index.md)._
