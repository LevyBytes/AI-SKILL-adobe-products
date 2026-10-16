# Webhook Notification

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Webhook notifications are now part of Adobe PDF Service APIs. Their purpose is to deliver alerts the moment a job finishes. With this addition, callers no longer have to keep polling the [GET Status API](https://developer.adobe.com/document-services/docs/apis/#tag/Create-PDF/operation/pdfoperations.jobstatus) themselves to learn whether a job is done and to fetch its output. The status and result now arrive on their own as automatic notifications.

Putting webhooks to work means adding the **notifiers** key to the body of a **[Submit Job](https://developer.adobe.com/document-services/docs/apis/#tag/Create-PDF/operation/pdfoperations.createpdf)** API call. That **notifiers** key accepts an array of objects, where one object maps to one webhook. Two required fields make up every notifier object — **type** and **data** — described below alongside an example request:

1. **type**: Identifies which kind of notifier should fire. At present, [CALLBACK](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/webhook-notification.md#callback-webhook-usage) is the sole supported notifier type.
2. **data**: Holds whatever the webhook needs. Exactly what goes here changes according to which notifier type you picked.

Details about the **CALLBACK** notifier live in the [Callback Notifier](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/webhook-notification.md#callback-webhook-usage) section.
