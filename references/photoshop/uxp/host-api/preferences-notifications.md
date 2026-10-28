# PreferencesNotifications

Notification-related preferences for Quiet Mode and how notifications appear.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| quietMode | _boolean_ | R W | 26.11 | Turns Quiet Mode on or off; that mode reduces in-app messages and notifications. While it is on, some notification preferences are read-only and stay unavailable for editing until Quiet Mode is turned off. |
| showFeatureOnboarding | _boolean_ | R W | 26.11 | When true, feature-introduction notifications appear. Note: Quiet Mode locks this preference while enabled. |
| showToolTips | _boolean_ | R W | 26.11 | When true, mouseover can show pop-up definitions or descriptions. |
| showWhatsNew | _boolean_ | R W | 26.11 | When true, update notices for "What's New" appear. Note: Quiet Mode locks this preference while enabled. |
| typename | _string_ | R | 26.11 | Referenced object class name: _"PreferencesNotifications"_. |
| useRichToolTips | _boolean_ | R W | 26.11 | When true, richer tooltip displays appear. Note: Quiet Mode locks this preference while enabled. |
