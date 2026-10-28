# Send PDFs for review via internal servers

How to circulate PDFs for review through the internal servers your organization runs, using desktop Acrobat.

Spinning up a shared review off an internal server takes little effort. The approach pays off for groups that have to keep confidential files inside their firewall, and for teams that lean on one shared server to mark up PDFs day in and day out. For hosting, you can hand the job to Acrobat — letting it build and wire up a document library inside your SharePoint subsite — or point it at a subsite and library you already maintain.

Before you begin

The legacy file-sharing experience has to be switched on first. Open the Preferences dialog box, click Reviewing, clear the Share for review using Adobe's cloud storage option, and click OK.

Launch the PDF and pick All tools > Send for comments > Send for shared commenting.

When the dialog box appears, choose how you'd like comments gathered from the dropdown menu, then click Next.

Depending on your setup, pick one of these server options:

- Network folder
- SharePoint subsite
- Web server folder

Note

Confirm that every reviewer can reach the shared network folder, SharePoint workspace, or web server folder, and that read and write permissions are granted to them on it.

Into the Type the URL… field, key in the URL of the server site you chose and click Next.

Pick the network folder, SharePoint subsite, or web server folder that will host the shared review file. Access gets checked by Acrobat, which then builds a document library for the shared reviews.

Pick the network folder, SharePoint subsite, or web server folder that will host the shared review file. Access gets checked by Acrobat, which then builds a document library for the shared reviews. Note

To get the shared review going, Acrobat stands up a document library (AcrobatSharedReviews) inside your subsite. Prefer a library that already exists? Click Choose subsite.

When the dialog box asks whether to trust the location, click Yes.

Choose how the file gets distributed and how it should look on arrival, then click Next.

To hang on to this shared review profile down the road, give it a name and click Next.
