# Callback Webhook Usage

With the callback webhook, a client gets told about job completion at an HTTPS URL it controls. Turning it on requires the client to stand up an HTTPS POST endpoint and pass that URL — together with any header details — inside the request. After a job wraps up successfully, we build a notification payload carrying the job status plus the particulars of the output assets, then deliver it to the client's URL through an HTTP POST request.
