# Enable enhanced security

This topic shows how to switch on enhanced security in Adobe Acrobat to guard your system against potentially harmful PDF actions.

PDFs have grown from static pages into dynamic documents carrying interactive forms, multimedia, and scripts. Those additions boost usability, yet they can also raise the odds of malicious behavior coming from untrusted sources. By blocking restricted actions in untrusted files while letting trusted content run as usual, enhanced security cuts down that risk.

Select Menu (Windows) or File (macOS), and then select Preferences.

Select Security (Enhanced) from the Categories list.

Select Enable Enhanced Security in the Enhanced Security section.

(Optional—Windows only) Select Cross Domain Log File. Cross‑domain access attempts are then logged by Acrobat to aid troubleshooting.

Select OK to apply the changes.

With it switched on, enhanced security holds PDFs back from external content, file system operations, and cross-domain communication until you specifically trust particular files, folders, or host domains.

Note

Enhanced security stops PDFs from talking across different host domains unless a server-based policy file expressly allows the connection. Whenever a PDF reaches for cross-domain access, Acrobat tries on its own to fetch a policy file from the target domain.

For restricted actions originating in untrusted sources, Acrobat shows security warnings so you can decide whether to allow or block them.

Find out more about handling cross-domain access and policy files in the Acrobat Application Security Guide.
