# API Capability Naming Rules

In a custom script manifest, the `name` field is the script name. Registration and invocation use it to identify the capability. The rules below must be followed; names that violate them cannot be registered.

**Rules**

- **Length:** 3-255 characters.
- **Allowed characters** (characters outside this set are rejected):
  - **Alphanumeric:** a-z, A-Z, 0-9
  - **Hyphen (-), underscore (\_), period (.)**
  - **Forward slash (/):** Use it only between segments in hierarchical names (for example, `renditions/jpeg`). Names cannot start with a slash, end with a slash, or contain doubled slashes.

**Valid name examples**

| Example | Notes |
| --- | --- |
| `my-script` | Lowercase form with a hyphen and at least 3 characters. |
| `export_to_idml` | Uses permitted underscores. |
| `Rendition.v1` | Uses mixed case and a period. |
| `renditions/jpeg` | Uses a forward slash to separate hierarchy segments. |
| `com.acme.scripts/processor` | Uses both periods and a slash. |

**Names that are rejected**

| Example | Reason |
| --- | --- |
| `ab` | Fewer than 3 characters. |
| `my script` | Contains a space. |
| `script@work` | Contains an at sign (@). |
| `script#2` | Contains a hash (#). |
| `renditions//jpeg` | Contains consecutive slashes. |
| `/renditions/jpeg` | Begins with a slash. |
| `renditions/jpeg/` | Ends with a slash. |
| `café` or `naïve` | Contains accented characters. |
