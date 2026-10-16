# Sequence of Calls

Each workflow follows the same general sequence:

- Send a request with the required and optional arguments.
- Firefly returns a job ID and URL. Use them to check request status or cancel the job.
- Poll the job for a reasonable interval, such as once per second, until a success or failure response arrives.
- When the job succeeds, Firefly returns a result that contains URLs.
- Retrieve the generated assets from those URLs.
