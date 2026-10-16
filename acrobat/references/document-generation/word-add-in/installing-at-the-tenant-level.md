# Installing at the Tenant level

Deploying at the tenant level lets the admin surface the add-in automatically, which spares users from doing the install themselves and guarantees trouble-free access for everyone.

For the entire user base, the procedure below switches the add-in on at the tenant level. [Check here if you would like more granular control over the deployment.](https://docs.microsoft.com/en-gb/microsoft-365/admin/manage/manage-deployment-of-add-ins?redirectSourcePath=%252fen-us%252farticle%252fdeploy-office-add-ins-in-the-office-365-admin-center-737e8c86-be63-44d7-bf02-492fa7cd9c3f&view=o365-worldwide)

[Determine if Centralized Deployment of add-ins works for your organization.](https://docs.microsoft.com/en-gb/microsoft-365/admin/manage/centralized-deployment-of-add-ins?view=o365-worldwide)

**The enablement is quick and easy, taking only about 5 minutes**:

- Sign in with the Tenant admin account and reach the admin center via the app launcher.
- Inside the admin center, head to the Settings > Add-ins page. Can't find the Add-in Page? Then go to Settings > Integrated apps instead.
- Near the top of the Integrated apps page, click the Add-ins link.

[Figure: Microsoft 365 Admin Center Add-In tab](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/admincenter-addin-tab.png)

- Choose Deploy Add-in at the top of the page, then click Next.
- Pick the option to add an add-in from the Office Store. Into the search box at the top left, type **Adobe Document Generation** and press the add button.

[Figure: Microsoft 365 Admin Center tenant search results for Adobe Document Generation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/tenant-search.png)

- Assign Users
  - Everyone - Rolls the deployment out to every user across the Tenant.
  - Specific users/groups - Limits the rollout to whichever users or groups you pick.
  - Just me - Confines the rollout to the admin alone who is setting things up

[Figure: Microsoft 365 Admin Center assigning Add-In to the user](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/admincenter-assign-user.png)

- Once users are assigned, click Deploy.

A relaunch of Office may be required before the add-in icon appears on the app ribbon.
