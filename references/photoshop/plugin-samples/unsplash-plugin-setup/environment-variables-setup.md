# Environment Variables Setup

Create a `.env` file and put every required variable in it. The [.env.sample](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop-plugin-samples/main/unsplash-plugin-sample/plugin/.env.sample) file shows the expected values. Add the variables:

```sh
{
        echo 'API_BASE_URL=http://localhost:8000'

} >> .env
```

`API_BASE_URL` points to the URL for the hosted backend.
