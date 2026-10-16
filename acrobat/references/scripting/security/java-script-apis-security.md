# JavaScript APIs — security

As a static JavaScript object, security surfaces PDF security operations such as encryption and digital signatures. Those operations run through a SecurityHandler object, which the security object yields by way of its getHandler method.

Note

Use of the security object carries no restriction and extends to Adobe Reader as well. Apart from cases noted otherwise, its methods and properties run only during batch, console, or application-initialization events — Adobe Reader included. Refer as well to Privileged context. A treatment of JavaScript events lives in the event object.
