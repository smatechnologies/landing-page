---
sidebar_label: "OpCon Pre-release Notes"
---

# Pre-release Notes

## Fall 24

**NOTE**: Verify/Upgrade these components if applicable: **ServiceNow** Connector – 21.4 or higher, **WebServices** Connector – 21.2 or higher, **Deploy** – 22.4 or higher, **Relay** - 24.1 or higher

2024 October

#### Server

:eight_spoked_asterisk: **OPCON-23985**: The following capabilities were added to Relay:
1) Support for MFT Job Scheduling and JORS
2) Interactive MFT machine and Job definition through SM
3) Interactive SAP Job import and definition through SM
4) Interactive zOS JCL View/Save through SM
5) Improved performance by using WebSocket for communication between Relay and OpCon-Cloud
6) Communication between Relay and OpCon-Cloud restricted to TLS 1.2 and up
7) Allow multi instance relay installation on a machine

:eight_spoked_asterisk: **OPCON-24433**: Added support for ACS plugins in Relay. Users can now define their on-prem ACS Agent machines in OpCon-Cloud and run jobs on those without requiring a VPN.

:white_check_mark: **OPCON-24483**: Modified NetcommApi to handle database disconnects. It now keeps retrying connection to database. As soon as database becomes available again, processing will automatically resume.

:white_check_mark: **OPCON-24987**: Fixed an issue in RequestRouter which was causing the request processing to get stuck. Any bad requests in the table will now be marked as processed and cleaned up if RequestRouter is not able to process them, it will then move on to process the next request instead of getting stuck at the bad entry.

:white_check_mark: **OPCON-25076**: Added active ping mechanism in Relay to periodically check validity of its WebSocket connection with OpCon-Cloud. This will eliminate issues encountered because of lost socket connections that did not raise events to notify Relay that the connection has been closed.

:white_check_mark: **OPCON-25117**: OpCon wasn't resolving references to embedded scripts or batch users in the ACS integration agent config at agent start time.

:white_check_mark: **OPCON-25774**: RequestRouter is coded to cleanup only expired processed requests. If a request was bad and RequestRouter could not process it, it would be left in the table as unprocessed. A fix in OPCON-24987 modifies this logic to mark the bad requests as processed and clean them up.

#### Solution Manager

:eight_spoked_asterisk: **OPCON-23662**: Accessibility support has been added to the main navigation, and the following Solution Manager pages: Home, Library, Calendars, Global Properties, License & Support, Logs, Frequencies, Access Codes, Departments, Site Navigation, Login, Resources, Machine Groups, Reporting, Scripts, Server Options, Thresholds, Profile, Escalation Manager, and Access Management to support WCAG accessibility standards.

:eight_spoked_asterisk: **OPCON-24004**: Added an information icon for Otto that explains skills and capabilities.

:eight_spoked_asterisk: **OPCON-24677**: Formatted Otto's responses for better readability.

:eight_spoked_asterisk: **OPCON-24678**: Added the ability to report on user behavior within Solution Manager. This addition will help SMA determine which features are most valuable to our current customers.

:white_check_mark: **OPCON-22258**: The Job Execution History now displays the correct duration for skipped jobs.

:white_check_mark: **OPCON-23590**: Fixed an issue where the Latest Run Time Offset field in the Frequency section was still visible when it was turned off.

:white_check_mark: **OPCON-23592**: Fixed an issue where the resulting date time for Recurring Instance Time(s) in Job Definition Frequency panel only showed the time.

:white_check_mark: **OPCON-23704**: Fixed an issue where Job Output Parsing settings in Job Definition Task Details were not saved.

:white_check_mark: **OPCON-23997**: Fixed an issue where a selectedIds query parameter did not select the rows.

:white_check_mark: **OPCON-23999**: Fixed an issue that caused an error in the console when selecting dates in a calendar date picker.

:white_check_mark: **OPCON-24338**: Fixed an issue so that WS_FTPPro job sub-types now have advanced failure criteria.

:white_check_mark: **OPCON-24369**: Updated Studio Canvas to show the first and last 10 characters of long schedule and job names.

:white_check_mark: **OPCON-24391**: Fixed an issue where updating a daily job on a multi-instance schedule incorrectly updated its job dependencies if they were on the same sub-schedule.

:white_check_mark: **OPCON-24431**: Fixed error message displayed on Instance Property field with a leading or trailing space.

:white_check_mark: **OPCON-24462**: Updated Arguments field for embedded script jobs to allow up to 2000 characters.

:white_check_mark: **OPCON-24489**: Fixed an issue where the advanced failure criteria of a master job was not properly set or displayed in Solution Manager.

:white_check_mark: **OPCON-24490**: Fixed a duplicate key error when viewing the workflow of a schedule that has cross schedule job dependency with same job name.

:white_check_mark: **OPCON-24499**: Fixed an issue where duplicate frequencies were displayed in inactive frequency list in Master Job Definition page.

:white_check_mark: **OPCON-24500**: Fixed broken link for Help menu that resulted in Page Not Found.

:white_check_mark: **OPCON-24521**: Fixed an issue where using the back button does not bring the user back to the pert diagram on the operations graph page.

:white_check_mark: **OPCON-24542**: Fixed an issue in the popup message where the machine group name was not properly displayed when the machine group is added successfully.

:white_check_mark: **OPCON-24571**: Fixed an issue where users were unable to update their password when recovery email is required from server options.

:white_check_mark: **OPCON-24601**: Fixed an issue where a user's full name was not properly set.

:white_check_mark: **OPCON-24607**: Fixed a validation error in Studio page when creating dependency lines using drag & drop method that involves a renamed or copied job.

:white_check_mark: **OPCON-24632**: Fixed an issue where 'Use Exit Code From Script Result' was not properly updated in MS SQL Script jobs.

:white_check_mark: **OPCON-24660**: Fixed an issue where the Time between Notifications was not properly displayed or updated in Escalation Manager Rules.

:white_check_mark: **OPCON-24710**: Fixed an issue where the Edit Sub-Schedule Jobs option for container jobs did not open the associated sub-schedule.

:white_check_mark: **OPCON-24713**: Fixed an issue where duplicate frequencies were displayed in inactive frequency list in Master Schedule Definition page.

:white_check_mark: **OPCON-24960**: Improved performance when viewing and updating a Master Job.

:white_check_mark: **OPCON-24998**: Fixed issue where the default Job Build Status for a Master Job Frequency was not 'Released'.

:white_check_mark: **OPCON-25042**: Fixed Episys Answer Prompts jobs to accept parentheses in the Prompt and Response fields.

:white_check_mark: **OPCON-25054**: Fixed issue where the 'In Use' column on the Frequencies page sometimes displayed an incorrect value.

:white_check_mark: **OPCON-25070**: Fixed an issue that prevented creating Unix Job Output Parsing jobs and saving/displaying a value for Application Log Path.

#### REST API

:eight_spoked_asterisk: **OPCON-25012**: The OpCon API now returns HSTS headers (strict-transport-security) for HTTPS responses, which makes it impossible for your browser to attempt an HTTP connection with the API (forces HTTPS connections), and hence prevents an HSTS vulnerability.

:white_check_mark: **OPCON-23105**: Resolved an issue where updating the documentation for the SMAUtility schedule resulted in a key violation.

:white_check_mark: **OPCON-23460**: Fixed an issue where schedule builds failed when frequency On Intervals with every number of days was used.

:white_check_mark: **OPCON-24402**: Fixed an issue where the API returned incorrect user id for application logs.

:white_check_mark: **OPCON-24583**: Fixed an issue where passing a null type in the PUT and POST machines endpoints requests caused an unhandled exception.

:white_check_mark: **OPCON-24665**: Fixed an issue in the API that caused an error in Solution Manager Access Management page when there were a large number of users.

#### ImpEx2 Web Service

:white_check_mark: **OPCON-24669**: Fixed a problem when deploying schedules and reset AutoBuild and AutoDelete options selected by Deploy.
1) In package deployments added reset options to schedules when versions match and schedule contents not updated.
2) Changed reset to either set new selected values or remove options if values set to 0.
