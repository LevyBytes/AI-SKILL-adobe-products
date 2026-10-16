# Custom expression function libraries - JSX

Back in After Effects 15.0, you could import a JSON file holding custom JavaScript functions and treat it as a library of custom expression functions. That changed with After Effects 15.1, where JavaScript objects no longer count as valid JSON syntax. The stricter JSON parser introduced in 15.1 refuses to import any JSON file whose syntax breaks the rules.

Attempt to import such a JSON file — one with a JavaScript function defined inside — in After Effects 15.1, or open a project already containing one, and After Effects throws an error.

The workaround is to import a JavaScript syntax extension file (.jsx) into After Effects 15.1 instead. That .jsx file can hold exactly the same content as the JSON file you imported into After Effects 15.0; all you change is the extension to .jsx. For an existing project where the JSON file has stopped working, use File > Replace Footage to swap the JSON file out for the JSX file. Doing so redirects every expression reference from the JSON file to the JSX file.
