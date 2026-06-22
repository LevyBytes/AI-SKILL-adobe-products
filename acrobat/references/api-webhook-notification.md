# Webhook Notification

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Webhook notifications are now part of Adobe PDF Service APIs. Their purpose is to deliver alerts the moment a job finishes. With this addition, callers no longer have to keep polling the [GET Status API](https://developer.adobe.com/document-services/docs/apis/#tag/Create-PDF/operation/pdfoperations.jobstatus) themselves to learn whether a job is done and to fetch its output. The status and result now arrive on their own as automatic notifications.

Putting webhooks to work means adding the **notifiers** key to the body of a **[Submit Job](https://developer.adobe.com/document-services/docs/apis/#tag/Create-PDF/operation/pdfoperations.createpdf)** API call. That **notifiers** key accepts an array of objects, where one object maps to one webhook. Two required fields make up every notifier object — **type** and **data** — described below alongside an example request:

1. **type**: Identifies which kind of notifier should fire. At present, [CALLBACK](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/webhook-notification.md#callback-webhook-usage) is the sole supported notifier type.
2. **data**: Holds whatever the webhook needs. Exactly what goes here changes according to which notifier type you picked.

Details about the **CALLBACK** notifier live in the [Callback Notifier](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/webhook-notification.md#callback-webhook-usage) section.

### Sample Request Body

```json
{
   "assetID": "<ASSET ID>",
   ....,
   ///REST API Operation related details
   ....

   "notifiers": [
      {
         "type": "<NOTIFIER_TYPE>",
         "data": {
            //<NOTIFICATION_DATA>
         }
      }
      }
   ]
}
```

## Callback Webhook Usage

With the callback webhook, a client gets told about job completion at an HTTPS URL it controls. Turning it on requires the client to stand up an HTTPS POST endpoint and pass that URL — together with any header details — inside the request. After a job wraps up successfully, we build a notification payload carrying the job status plus the particulars of the output assets, then deliver it to the client's URL through an HTTP POST request.

### Parameters for the Notifier Object

These are the parameters the notifier object must carry whenever the callback webhook is in play:

1. **type** _(Required)_: Keep this fixed at **_CALLBACK_**.
2. **data** _(Required)_: Inside the "data" field you will find these keys:
   - **_url_** _(Required)_: The HTTPS POST URL the user set up to catch the callback.
   - **_headers_** _(Optional)_: A map of key-value pairs carrying whatever header data the URL call depends on. Though you may leave it out, it gives you a spot to attach added context or to authenticate the callback request.

### Sample Notifier Object

```json
{
   "assetID": "<ASSET ID>",
   ....,
   ///REST API Operation related details
   ....

   "notifiers": [
      {
         "type": "CALLBACK",
         "data": {
            "url": "https://dummy.callback.org/",
            "headers": {
               "x-api-key": "dummykey",
               "access-token": "dummytoken"
            }
         }
      }
   ]
}
```

### Callback Payload on HTTPS URL

What lands at the CALLBACK URL mirrors the **GET STATUS** response, with the jobID added in.

### In case Job completes with Success

When a job finishes without error, the callback url receives this **callback payload**:

```json
{
  "jobID": "<JOB ID>",
  "statusResponse": {
    "status": "done",
    "asset": {
      "metadata": {
        "type": "application/pdf",
        "size": 318974
      },
      "downloadUri": "<DOWNLOAD URI",
      "assetID": "<ASSET ID>"
    }
  }
}
```

### In case Job completes with Failure

Should the job end in failure, this **callback payload** goes to the callback url instead:

```json
{
  "jobID": "<JOB ID>",
  "statusResponse": {
    "status": "failed",
    "error": {
      "code": "<ERROR CODE>",
      "message": "<ERROR MESSAGE>",
      "status": 400
    }
  }
}
```

## Expected Response from the Client

Back from the client, the expected reply is this payload carried on an HTTP 200 (OK) status code:

```json
{
  "ack": "done"
}
```

Anything other than a 200 (OK) code, or a payload that does not match what was expected, counts as an error response. Should 50 such error responses pile up inside a 10-minute window, that client's webhook notification support gets suspended for the following 20 minutes.

**Note**: Only SDKs version 4.x.x and the REST APIs provide webhook notification support.
