# Viewing your data in Google Analytics 4

After PDF analytics begin flowing into Google Analytics 4, build your reporting the usual way and review the dimensions and metrics in your workspace.

**Creating a sample exploration to track page views**

Reports can be assembled across whichever dimensions and metrics you choose so you can inspect the data. The walkthrough below builds a sample exploration that follows page views inside the PDF.

1.  Select **Explore** from the left navigation pane and click the plus sign to create a new blank report.
2.  Select a custom timeline.
3.  Select **Line Chart** from the Visualisation.
4.  Drag and drop **Event Name** from Dimensions in Breakdowns.
5.  Remove Active Count from Values.
6.  Drag and drop **Event Count** from Metrics in Values.
7.  Go to Filters and select **Event Name**.
8.  Select match type 'contains' and enter 'Page View' in expression.
9.  Click Apply.

[Figure: View sample exploration in GA4](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/ga-page-view-2.png)

When a site is signed up for both Adobe Analytics and Google Analytics, the data goes solely to Adobe Analytics, and Google Analytics receives no PDF analytics at all.
