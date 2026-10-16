# Read & Write Files

This example writes text into a file, reads that same file back, and shows the result in an alert.

This is only one possible pattern. Some host apps can also require a user-specified permissions check before local file-system access is allowed.

The sample stores and retrieves the file in the user's appdata folder via Folder.userData.

```javascript
/**
 * Reads data from a given file in userdata folder
 *
 * @param {string} filename Filename, with extension
 * @return {string}         File contents, if file exists
 */
function readUserDataFromFile(filename) {
  var userDataFolder = Folder.userData;

  var filepath = userDataFolder.fullName + "/" + filename;
  var file = new File(filepath);

  // Default encoding
  file.encoding = "UTF-8";

  if (!file.exists) {
    throw "Could not find file '" + String(file.fsName);
  }

  file.open();
  var contents = file.read();
  file.close();

  return contents;
}

/**
 * Writes data to a given file in userdata folder
 *
 * @param {string} filename Filename, with extension
 * @param {string} data     Data to write
 */
function writeUserDataToFile(filename, data) {
  var userDataFolder = Folder.userData;

  var filepath = userDataFolder.fullName + "/" + filename;
  var file = new File(filepath);

  // Default encoding
  file.encoding = "UTF-8";

  // Write file contents
  file.open("w");
  var success = file.write(data);
  file.close();

  if (!success) {
    throw "Could not write to file '" + String(file.fsName);
  }
}

try {
  var filename = "myFile.txt";
  var contents = "Hello world!";

  writeUserDataToFile(filename, contents);

  var readData = readUserDataFromFile(filename);

  // "Hello world!"
  alert("File Contents: '" + String(readData) + "'");
} catch (e) {
  alert(e);
}
```
