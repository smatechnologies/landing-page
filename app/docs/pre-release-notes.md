---
sidebar_label: "OpCon Pre-release Notes"
---

# Pre-release Notes

## Spring 25

## 25.1.3

**NOTE**: Verify/Upgrade these components if applicable: 

* **Enterprise Manager** - 25.0 
* **ServiceNow** Connector – 21.4 or higher
* **WebServices** Connector – 21.2 or higher
* **Deploy** – 25.0.0 or higher
* **Relay** - 25.1.1 or higher

2025 June

#### Relay
:eight_spoked_asterisk: **OC-3600**: Fixed issue where Machines may be placed offline by NetCom/Relay after an interruption to communication.

## OpCon 25.1.1

**NOTE**: Verify/Upgrade these components if applicable: 

* **Enterprise Manager** - 25.0 
* **ServiceNow** Connector – 21.4 or higher
* **WebServices** Connector – 21.2 or higher
* **Deploy** – 25.1.0 or higher
* **Relay** - 24.3.2 or higher

2025 June
#### Solution Manager
:white_check_mark: **OC-2843**: Added more resilience to scheduling message logic for guaranteed delivery. Also added some extra debug messages at Trace Level 1 to provide us more information in the logs in case the problem recurs in spite of improved logic.

#### Deploy
:white_check_mark: **OC-3092**: Fixed a problem when performing script runner match. Removed CommandFormat match, as runner name and platform ID provide the required information.

## OpCon 25.1.0

2025 May

#### Solution Manager

:white_check_mark: **OC-2186**: Added support for OAuth to be used for SMTP, replacing Basic SMTP (Exchange), which will be depricated by Microsoft as of September, to Supported Auth in Notifications

:white_check_mark: **OC-161**: Fixed issue where French translations were not applied on the Execution History view for Daily Jobs.

:white_check_mark: **OC-165**: Fixed an issue where the User Input Caption value was cleared when changing the User Input Type when configuring User Inputs for a Service Request.

:white_check_mark: **OC-1167**: Performance enhancements via implementation of the CQRS pattern within the Notification Categories API.

:white_check_mark: **OC-59**: Fixed issue where renaming a group in Notification Triggers was experiencing the cursor jumping to end of name after typing one character.

:white_check_mark: **OC-353**: Fixed issue in Notification Triggers where typing a "/" in the job name field breaks functionality.

:white_check_mark: **OC-393**: Accessibility support has been added to the main navigation, and the following Solution Manager pages: Job Execution History, Self-Service, Schedule Build, Daily Jobs, Batch Users, Notification Triggers, Master Jobs,  to support WCAG accessibility standards.

:white_check_mark: **OC-15**: Performance enhancements and error resolutions in Pert view where blank page or a timeout error occurred.

:white_check_mark: **OC-8**: Fixed an issue where stopping SMA OpCon Service Manager service from services console, times out and says service did not respond to the start or control request in a timely fashion.

:white_check_mark: **OC-3**: Fixed an issue where if comms are stopped they will not come back up to the cert name being the common name of the cert without updating the name back to the server name and restart the Windows service mannually.

:white_check_mark: **OC-354**: Fixed an issue in Solution Manager where the ability to translate an event from Enterprise Manager was not working.

:white_check_mark: **OC-6**: Fixed an issue where clicking the [x] in the bottom bar on the Vision Health page does not de-select the selected cards.

:white_check_mark: **OC-350**: Resolved an issue in Daily Jobs where the start Machine for File Transfer Jobs was not updated when the source machine changed.

:white_check_mark: **OC-1894**: Fixed issue where Jobs submitted were not the correct ones.

:white_check_mark: **OC-347**: Fixed an issue where the user was unable to update a Job Group after renaming a selected Job.

:white_check_mark: **OC-325**: Updated Deploy and ImpEx2 to include the capability to move RPA tasks between systems

:white_check_mark: **OC-1837**: When sending password resets, additional logging in the notify handler has been added when the api requests the password reset endpoint.

:white_check_mark: **OC-2082**: A global property for Admins has been added to set the checkbox retention policy on the Operations screen.

:white_check_mark: **OC-2084**: Users now have the ability to create longer passwords, as the maximum of 12 has been removed.

:white_check_mark: **OC-2086**: Fixed an issue where clicking cancel in the Configure Jobs Dialog in daily job processes page will cause page to crash.

:white_check_mark: **OC-2115**: Fixed an issue where editing the Daily Job through Solution Manager was reseting all restart data.

:white_check_mark: **OC-2117**: When opening the daily job right panel, if a current step is defined, it now pre-populates the “Choose a step” field and enables the “Restart on step” button by default.

:white_check_mark: **OC-2119**: Fixed an issue with default values in the JCL Access dialog for z/Os jobs.

:white_check_mark: **OC-2127**: Updated value for SMACDBUILD_VER for 25.1.0.

:white_check_mark: **OC-2137**: Fixed an issue where nodes in Studio were remaining stacked on top of eachother.

:white_check_mark: **OC-2181**: Refined some of the navigation issues to limit the amount of clicks users need to take to navigate through the application.

:white_check_mark: **OC-2183**: Back button removed from various pages to encourage users to use the standard browser back and forward capibilities.

:white_check_mark: **OC-2467**: Added a new global setting in Server Options that completely turns Otto functionality off.

:white_check_mark: **OC-2474**: Additional fields added to the SMTP Server Options configuration for the chosen auth implementation.

:white_check_mark: **OC-2623**: Fixed an issue where the OpCon version was not updated properly in the database.

:white_check_mark: **OC-2665**: Fixed an issue in the PUT and POST machines API when providing machine group(s)

:white_check_mark: **OC-2898**: Fixed issue where clicking on the processes filter loads a blank page.

#### ImpEx2
:white_check_mark: **OC-2889**: Included Deploy 'Frequency_Use_Existing_Definitions' transformation rule capabilities that uses an existing frequency definition when the target job exists.

:white_check_mark: **OC-2578**: Fixed a problem in ImpEx2 during workflow deployment when a resource or threshold name contains a period (.) causing deployment failure.

:white_check_mark: **OC-137**: Update ImpEx2 to support RPA agent 

:white_check_mark: **OC-325**: Updated Deploy and ImpEx2 to include the capability to move RPA tasks between systems.

#### RequestRouter
:white_check_mark: **OC-2760**: Fixed RequestRouter to process schedule build and other requests targeted for it without getting stuck on unprocessed requests targeted for relay agents

#### Netcom/Relay/ACS
:white_check_mark: **OC-3042**: Fixes a rendering issue which could sometimes prevent selection of agents for Master Jobs that run on ACS Integrations.

:white_check_mark: **OC-3038**: Fixes issue where some RPA jobs could not be displayed due to unexpected Instance Properties values.

:white_check_mark: **OC-3045**: Enables job data cleanup on job deletion for jobs which ran on an Agent configured via Relay.

:white_check_mark: **OC-346**: Fixed an issue where ACS daily jobs did not display the machine or machine group name. 

:white_check_mark: **OC-348**: Fixed an issue where Requires XML Escape was not available for ACS master jobs.

:white_check_mark: **OC-3040**: Allows integrations built on ACS to utilize Instance Properties when constructing log file paths.

















