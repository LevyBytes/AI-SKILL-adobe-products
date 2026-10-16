# Canceling a job

The three endpoints described above are asynchronous. Each one returns **202 Accepted** with a `jobId`, a `statusUrl` used for polling, and a `cancelUrl` that can stop the job.

To cancel work that is still running, send a `PUT` request to the `cancelUrl` supplied in the first response. Successful cancellation usually returns **200** and no response body.
