# V1 behavior

V1 exposed separate status URLs for each service. Photoshop jobs used `/pie/psdService/status/{jobId}`, while Lightroom jobs used `/lrService/status/{jobId}`. Response shapes depended on the service that created the job.
