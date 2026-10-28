# Expected Response from the Client

Back from the client, the expected reply is this payload carried on an HTTP 200 (OK) status code:

```json
{
  "ack": "done"
}
```

Anything other than a 200 (OK) code, or a payload that does not match what was expected, counts as an error response. Should 50 such error responses pile up inside a 10-minute window, that client's webhook notification support gets suspended for the following 20 minutes.

**Note**: Only SDKs version 4.x.x and the REST APIs provide webhook notification support.
