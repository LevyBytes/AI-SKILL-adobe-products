# Specific Microsoft updates (Enterprise environments)

In enterprise deployments, administrators can use a Group Policy Known Issue Rollback (KIR) to roll back KB KB5073724 (Windows 10) or KB5074109 (Windows 11). Apply the KIR with these steps:

Open the Group Policy Management Console (GPMC).

Go to Computer Configuration > Administrative Templates > System > Group Policy.

In the policy list, select Configure rollback of problematic updates.

Set the rollback target to KB5073724 (Windows 10) or KB5074109 (Windows 11) update.

Apply and enforce the policy across the affected machines.

Save the document on the local drive first, then copy it to cloud-synced locations such as OneDrive, Dropbox, Google Drive, etc. Use these links to follow additional Adobe information about the issue:

- UserVoice
- Adobe Forum
