# Providing inputs programmatically (API)

- Invoking a published workflow through the API, rather than from the canvas, means the request payload carries the inputs and upload dialogs are not used. The workflow's published parameters receive the same logical inputs: binary assets and simple values.
- Binary inputs, including images, video, documents, and comparable file-backed assets, are commonly supplied as pre-signed URLs for objects your integration already saved in a supported location. During the run, the service fetches those assets from the URLs you send.
- Simple types, including plain text, flags, or scalar fields exposed by input or configuration nodes, are carried inline by the payload. Represent them as structured fields such as strings, numbers, or booleans, and include them next to any binary references.
- Parameter names, nesting, and required fields come from the way the workflow was authored and published; your integration has to pass values for every required input declared by that published workflow.
- The Workflow Builder API on Adobe Developer covers end-to-end examples for API integration and workflow scaling, along with authentication, request and response formats, batch execution, and error handling.
