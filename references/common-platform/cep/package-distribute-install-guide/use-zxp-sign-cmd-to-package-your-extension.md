# Use `ZXPSignCmd` to package your extension

When the input directory is ready, finish packaging by running this command:

Command syntax notation: replace angle-bracket arguments and omit unused optional brackets before execution.

```text
ZXPSignCmd -sign <inputDir> <outputZxp> <p12> <p12Password> [options]
```

| Parameters | Description |
| --- | --- |
| inputDir | The path to the folder containing the source files to package. |
| outputZxp | The path and file name for the ZXP package. |
| p12 | The path and file name for the signed certificate. |
| p12Password | The password for the certificate. |
| options(tsa) | `-tsa <timestampURL>` The timestamp server. Examples: http://time.certum.pl/ http://timestamp.comodoca.com/rfc3161 |

**Example**

```bash
./ZXPSignCmd -sign myExtProject myExtension.zxp MyCert.p12 abc123 -tsa http://time.certum.pl/
```
