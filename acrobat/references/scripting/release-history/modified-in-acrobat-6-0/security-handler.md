# SecurityHandler

What follows debuted in Acrobat 5.0 as properties and methods on the PPKLite Signature Handler Object. As of Acrobat 6.0, they belong to the SecurityHandler object instead. Every one of them carries a new description, and a few gained extra parameters. - To sign with JavaScript methods, the digital signature profile must be a .pfx file rather than the .apf used by older Acrobat versions. Converting an .apf profile to the newer .pfx type is done through the UI: click Advanced > Manage Digital IDs > My Digital ID Files > Select My Digital ID File to bring the .apf profile in.

**Properties:**

- appearances
- isLoggedIn
- loginName
- loginPath
- name
- signInvisible
- signVisible
- uiName

**Methods:**

- login
- logout
- newUser
- setPasswordTimeout
