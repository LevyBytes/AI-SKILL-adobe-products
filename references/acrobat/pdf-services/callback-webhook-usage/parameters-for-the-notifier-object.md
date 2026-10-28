# Parameters for the Notifier Object

These are the parameters the notifier object must carry whenever the callback webhook is in play:

1. **type** _(Required)_: Keep this fixed at **_CALLBACK_**.
2. **data** _(Required)_: Inside the "data" field you will find these keys:
   - **_url_** _(Required)_: The HTTPS POST URL the user set up to catch the callback.
   - **_headers_** _(Optional)_: A map of key-value pairs carrying whatever header data the URL call depends on. Though you may leave it out, it gives you a spot to attach added context or to authenticate the callback request.
