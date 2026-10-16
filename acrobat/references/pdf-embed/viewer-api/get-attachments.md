# getAttachments

This one yields the roster of attachments already sitting in the PDF. Every entry on that roster arrives as a JSON carrying the essentials — its name, its mime type, its description, plus the dates it was created and modified.

Attachment fields:

| Field | Type and meaning |
| --- | --- |
| `name` | String: attachment filename. |
| `description` | String: attachment description. |
| `mimeType` | String: attachment MIME type. |
| `created` | Date: creation time. |
| `modified` | Date: modification time. |

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with the list of attachments available in the PDF: `[ Attachment_1, Attachment_2,...]`
- Every attachment item in this list will contain information such as `name`, `description`, `mimeType`, `created` and `modified`.
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function readAttachments(previewFilePromise) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.getAttachmentAPIs().getAttachments();
    console.log(result);
    return result;
}
```
