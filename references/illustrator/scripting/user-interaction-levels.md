# User-interaction levels

Applications usually show a dialog when they need input or other feedback from the user; that behavior is user interaction. During direct use of an application, this is normal and useful. During scripted automation, however, a dialog pauses script execution until someone dismisses it. In unattended automation, where no person is available to respond to dialogs, that pause can become a major failure point.

The application object includes a user interaction level property for setting how much interaction may occur while scripts run. Automation scripts can disable interaction, while workflows that expect a person nearby can permit limited interaction.
