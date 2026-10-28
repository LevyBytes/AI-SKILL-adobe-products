# Required permissions for the Acrobat app

Delegated access is how the Acrobat app reaches your personal data or resources. These are the permissions it asks for:

- User.Read: lets the user sign in and pulls their profile together with basic details about the company.
- Files.Read.All: covers viewing and previewing whichever files the user picks.
- Files.ReadWrite.All: handles saving and writing files a user comments on, plus tasks such as organizing, compressing, and exporting.
- Team.ReadBasic.All: reads back the names of teams along with their descriptions.
- User.ReadBasic.All: opens up the basic profile properties belonging to other users so @mentioning works.

Note

Whenever a PDF is shared inside Microsoft Teams, it lives in your OneDrive or SharePoint accounts. The viewing, commenting, and searching all run right on your own machine, and any edits you make get written back to OneDrive or SharePoint. The one exception is creation, organizing, combining, or exporting: for those, the file travels briefly to Adobe cloud servers to be processed, stays encrypted the entire time, and is removed within 24 hours.
