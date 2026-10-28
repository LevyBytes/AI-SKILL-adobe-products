# Throttling

So that system load stays manageable and usage stays fair, AI Assistant caps how many Requests a single user (keyed to user ID, IP, or agreement ID) can make per minute, per hour, and per day.

Cross those limits and the Requests that follow are turned away with an HTTP 429 error. Resource consumption drives the evaluation of each Request; depending on the parameters at play, some draw more than others.
