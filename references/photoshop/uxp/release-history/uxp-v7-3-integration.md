# UXP v7.3 Integration

> #### New
>
> - [GUID](../user-info/user-id.md) is available as a unique identifier for a Creative Cloud User.
> - [fetch](../network-and-data/window/fetch.md) now has multipart `FormData` support through [Request](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/Request.md) and [Response](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/Response.md).
> - [FormData](../network-and-data/form-data/reference-index.md) now supports the following APIs
>   - delete()
>   - get()
>   - getAll()
>   - has()
>   - keys()
>   - set()
>   - values()
>
> #### Updated
>
> - `Blob` is now accepted as an additional parameter by [FormData's append](../network-and-data/form-data/append.md).
> - All 30 components now provide `Spectrum Web Components` support in `React` context.
>   - Reference [UXP-SWC React sample plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-react-starter).
>
> #### Fixed
>
> - Tab Navigation now works for several SWC Components.
> - SWC Button component now responds to Spacebar after focus reaches it through TAB navigation.
>
> ### UDT v2.0
>
> #### New
>
> - UXP Playground is available for experimenting with APIs. Click on the 'Playground' tab next to 'Developer Workspace' to choose an app and begin.
>
> #### Updated
>
> - Plugin actions are shown based on the 'Status' of your plugin in the Developer Workspace.
