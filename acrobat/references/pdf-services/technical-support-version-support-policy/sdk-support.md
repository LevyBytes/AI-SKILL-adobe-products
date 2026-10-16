# SDK Support

Running the newest product version (Major.Minor.Patch) is what Adobe always suggests, since it brings the most capability and the strongest security. So that existing applications which need time to migrate aren't left behind, the SDK team holds to a support policy that keeps deployed versions running securely along these lines:

- Each Major/Minor Version stays supported for a year past the release of the next Major/Minor Version — put another way, a Major.Minor.X version hits end of life one year after the following Major/Minor Release. As an example, given releases of 1.2.0 (Minor), 1.3.0 (Minor), and 2.0.0 (Major) in that order:
  - 1.2.0 loses support a year after 1.3.0 ships.
  - 1.3.0 loses support a year after 2.0.0 ships.
- Security patches and critical bug fixes generally land on the final dot release of the supported major versions. For instance, with supported versions of 1.2.1, 1.3.1, and 2.0.0, only 1.3.1 and 2.0.0 would get a security update. The recommended practice is to move any deployment on a supported major release up to that release's last minor update.

After a version passes its end-of-life date, its features can be deprecated and may quit working.

![Every Major/Minor Version is supported for one year after the
release of a newer Major/Minor Version; that is a Major.Minor.X
version reaches its end of life 1 year after the next Major/Minor
Release](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/53d3c2030c0371e95a2edca19b888c4656140eb5/src/pages/overview/images/support1.png)
