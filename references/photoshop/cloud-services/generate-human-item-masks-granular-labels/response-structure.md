# 5. Response Structure

This endpoint runs work asynchronously. The first response returns `202 Accepted` plus `jobId` and `statusUrl`. Keep polling the status endpoint until `status` becomes `succeeded`; after that, fetch the array of mask objects.
