# Environment Variables Setup

Create a `.env` file and put every required variable in it. The [.env.sample](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop-plugin-samples/main/unsplash-plugin-sample/server/.env.sample) file shows the expected values. Add the variables:

```sh
{
        echo 'PORT=8000'
        echo 'UNSPLASH_ACCESS_KEY='

} >> .env
```

`PORT` sets the port used by the local API server.

Generate `UNSPLASH_ACCESS_KEY` from the Unsplash Developers panel. Begin by creating an Unsplash developer account. In the navbar, choose `Your Apps`, then click `Create a new application`.
After the application is created, open its `Keys` section and copy the `ACCESS_KEY`.
