# Forms handling

By default the PDF Embed API allows forms to be edited live. Your end users can type into and revise text fields and work with the rest of the form objects too — radio buttons, check boxes, lists, and drop downs (select lists). The moment a user enters anything in a form field, the top bar's Save button switches on so their input can be written back to the PDF. Forms come out rendered by the PDF Embed API to closely match how they look inside the full Acrobat app:

[Figure: Image for form-filling in full window embed mode](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/form1.png)

Editing forms is something only Full Window embed mode handles.

Govern whether forms can be edited just by switching `enableFormFilling`
on or off whenever you need. Form editing ships on by default, but you can shut it down by setting that option to _false_.

```html
<div id="adobe-dc-view"></div>
<script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
<script type="text/javascript">
  document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view" });
    adobeDCView.previewFile(
      {
        content: {
          location: {
            url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
          },
        },
        metaData: { fileName: "Bodea Brochure.pdf" },
      },
      { embedMode: "FULL_WINDOW", enableFormFilling: false },
    );
  });
</script>
```

Switching form editing off strips the highlight from form fields:

[Figure: Disabling form editing](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/form2.png)
