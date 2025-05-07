---
sidebar_label: "OpCon Pre-release Notes"
---

# Pre-release Notes

## OpCon 25.1.0

## Spring 25

**NOTE**: Verify/Upgrade these components if applicable: 

* **Enterprise Manager** - 25.0 
* **ServiceNow** Connector – 21.4 or higher
* **WebServices** Connector – 21.2 or higher
* **Deploy** – 25.1.0 or higher
* **Relay** - 24.3.2 or higher

2025 May

#### Solution Manager
:white_check_mark: **OPCON-2186**: Added support for OAuth to be used for SMTP, replacing Basic SMTP (Exchange), which will be deprecated by Microsoft as of September, to Supported Auth in Notifications

:white_check_mark: **OPCON-161**: Fixed issue where French translations were not applied on the Execution History view for Daily Jobs.

:white_check_mark: **OPCON-165**: Fixed an issue where the User Input Caption value was cleared when changing the User Input Type while configuring User Inputs for a Service Request.

:white_check_mark: **OPCON-1167**: Performance enhancements via implementation of the CQRS pattern within the Notification Categories API.

:white_check_mark: **OPCON-59**: Fixed issue where renaming a group in Notification Triggers was experiencing the cursor jumping to end of name after typing one character.

:white_check_mark: **OPCON-353**: Fixed issue in Notification Triggers where typing a "/" in the job name field breaks functionality.

:white_check_mark: **OPCON-393**: Accessibility support has been added to the main navigation, and the following Solution Manager pages: Job Execution History, Self-Service, Schedule Build, Daily Jobs, Batch Users, Notification Triggers, Master Jobs,  to support WCAG accessibility standards.

:white_check_mark: **OPCON-15**: Performance enhancements and error resolutions in Pert view.

:white_check_mark: **OPCON-8**: Fixed an issue where stopping SMA OpCon Service Manager service from services console, times out and says service did not respond to the start or control request in a timely fashion.

:white_check_mark: **OPCON-3**: Fixed an issue where if comms are stopped they will not come back up to the cert name being the common name of the cert without updating the name back to the server name and restart the Windows service mannually.

:white_check_mark: **OPCON-354**: Fixed an issue in Solution Manager where the ability to translate an event from Enterprise Manager was not working.










