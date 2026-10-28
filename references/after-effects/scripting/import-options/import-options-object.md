# ImportOptions object

new ImportOptions();

new ImportOptions(file);

### Description

Whatever options govern importing a file through the Project.importFile() methods are bundled together by the ImportOptions object.

Its constructor accepts one optional argument: an Extendscript File object standing for the file.

Leave that out and you have to assign the file attribute yourself before handing the object to the importFile method. As an example:

```javascript
new ImportOptions().file = new File("myfile.psd");
```
