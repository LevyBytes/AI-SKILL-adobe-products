# Step 4. Submit a Request to Perform Operation

a. Submit a Request to Platform Service - Once the input file is in place, the client sends the PDF service a request to carry out the wanted operation — create pdf, export pdf, and the like. That request carries whatever parameters or instructions the operation needs to run.

b. Received Job URI For Poll - With the request successfully submitted to Acrobat Services, the client gets back a job URL in the location response header. Since the Platform API works asynchronously, the client has to use that job URL to poll for the response until the result lands.
