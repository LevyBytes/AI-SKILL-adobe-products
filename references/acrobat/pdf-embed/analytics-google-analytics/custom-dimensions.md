# Custom Dimensions

In the Google Analytics 4 property you will define several custom dimensions that correspond to the attributes carried in the event data PDF Embed API sends.

After signing in to Google Analytics, carry out these steps:

1.  From the top bar, select the Google Analytics 4 property which contains your **measurement ID**.
2.  Click **Custom definitions** under **Configure** (in the left navigation pane).
3.  Click **Create custom dimensions**.

[Figure: Configure in GA4](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/ga-create-dimension.png)

4.  Enter Dimension name.
5.  Set the scope as **Event**.
6.  Enter a description for this custom dimension.
7.  Enter the name of the event attribute sent from PDF Embed API. Custom dimensions need to be created for these event attributes: **filename**, **pageNum**, **searchTerm** and **zoomLevel**.
8.  Click Save.
    (Note: You will see a value of "Not set" for a custom dimension during the first 48 hours. )

9.  You need to set up four custom dimensions, as follows:

- File Name
- Page Number
- Search Term, and,
- Zoom Level

10. Map these custom dimensions with the correct event attributes sent from PDF Embed API, as shown in the table below:

| Dimension name | Scope | User property/parameter |
| --- | --- | --- |
| File name | Event | filename |
| Page number | Event | pageNum |
| Search term | Event | searchTerm |
| Zoom level | Event | zoomLevel |

[Figure: Configure in GA4](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/ga-custom-dimension.png)
