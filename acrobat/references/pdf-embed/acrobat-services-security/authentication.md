# Authentication

Built on client-side JavaScript and WASM, the PDF Embed API library reaches out to cloud-based services in only three cases:

- Checking, at load time, the client ID set in the JavaScript code;
- Recording anonymous usage data in Adobe Analytics that Adobe uses internally to improve products and gather feedback.
- Recording event data for out-of-the-box analytics and a pre-built analytics dashboard, which is strictly opt-in and happens only when the developer configures it explicitly. It kicks in when the PDF Embed API integrator supplies an Adobe Analytics report suite ID.
