# Corrupt pages in the InDesign document

Some pages can include damaged images, problematic fonts, or malformed graphics that stop the whole document from exporting. A binary isolation workflow finds the damaged content quickly without checking every page one by one.

Choose File > Export, then set Format to Adobe PDF (Print) or Adobe PDF (Interactive).

In the export dialog, choose Pages and enter a small range, for example pages 1-10 of a 20-page document.

Choose Export to test that range.

Test the remaining pages, such as 11-20, to see which range fails.

Keep splitting the failing range into smaller parts until the problem page is isolated.

After you find it, rebuild that page or replace the elements responsible for the failure.
