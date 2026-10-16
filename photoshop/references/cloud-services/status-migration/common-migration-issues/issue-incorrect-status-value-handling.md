# Issue: Incorrect status value handling

**Problem:** The code checks only for "success" and "failure"

**Solution:** Branch on every status value

Handle `status.status` according to the job state:

- `succeeded`: consume the returned result.
- `failed`: report the job error.
- `running` or `pending`: wait and poll again.

Keep polling bounded and handle every additional terminal status documented by the API version in use.
