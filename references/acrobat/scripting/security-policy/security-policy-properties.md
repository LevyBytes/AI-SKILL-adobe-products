# SecurityPolicy properties

| Property | Type | Access | Description |
| --- | --- | --- | --- |
| policyID | String | R | A machine-built string that singles out the Security Policy uniquely. It is not meant for people to read.<br><br>On a freshly created SecurityPolicy object you may set this to a known policy ID, which forces any method using that policy to fetch the right security settings before the policy is applied. |
| name | String | R | The policy name shown in the UI. Localization is possible. |
| description | String | R | The policy description shown in the UI. Localization is possible. |
| handler | String | R | An enumerated value naming whichever security handler puts this Security Policy into effect. For the legal entries, consult the HandlerName object inside security constants. |
| target | String | R | An enumeration value pinpointing the target data that encryption will cover. For the legal entries, consult the EncryptTarget object inside security constants. |
