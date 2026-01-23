---
sidebar_label: "OpCon Pre-release Notes"
---

# Pre-release Notes

## Winter 26

#### 26.0.0

**NOTE****: Verify/Upgrade these components if applicable**: 

* **Enterprise Manager** - 26.0 
* **ServiceNow** Connector – 21.4 or higher
* **WebServices** Connector – 21.2 or higher
* **Deploy** – 26.0.0 or higher
* **Relay** - 25.1.1 or higher

2025 December

#### Installation

:white_check_mark: **OC-####**: Coming Soon

#### Solution Manager

:eight_spoked_asterisk: **OC-5902**: Added a reference to SMACommon in order to align ReportingService logging with OpCon conventions.

:eight_spoked_asterisk: **OC-5867**: Added Encryption for Reporting DB to Rest API in Windows.

:eight_spoked_asterisk: **OC-5336**: Upgraded the OpCon core server to use .Net 10 runtime.

:eight_spoked_asterisk: **OC-5323**: Added an Audit Table to capture Report setting changes.

:eight_spoked_asterisk: **OC-5319**: Made Report logs visible in Solution Manager for on-prem users.

:eight_spoked_asterisk: **OC-5315**: Added date ranges and columns to various reports.

:eight_spoked_asterisk: **OC-5287**: New reporting tab added to the Server Options UI for reporting configuration.

:eight_spoked_asterisk: **OC-3212**: Added Comparative Job Execution Statistics report to reporting library. 

:eight_spoked_asterisk: **OC-2515**: In depth refactor of Solution Manager’s branding to align with the new Continuous company brand guidelines.

:white_check_mark: **OC-5689**: Fixed issue in Master Jobs Frequency where an "Invalid frequency FinishOkBehavior property found: RecurringInstanceOffsets" error was thrown.

:white_check_mark: **OC-5355**: Fixed an issue with $JOB:ADD events

:white_check_mark: **OC-5335**: Fixed an issue where master job cross-references were incorrect when a job's dependency had the same name as another job on the job's own schedule.

:white_check_mark: **OC-5295**: Fixed an issue where the Machine Groups' page crashes when refreshing with selected ID.

:white_check_mark: **OC-5159**: Fixed an issue where the download option in audit history and the schedule job history report only downloads the page you're on so that all subsequent and previous pages are also included in the download.

:white_check_mark: **OC-5086**: Fixed an issue with the notification triggers lookup dialog not closing correctly.

:white_check_mark: **OC-5063**: Resolved an issue where an SSO user is able to reset their password and log back in as a normal user.  We now have a check in place to confirm that credentials entered during the password recovery workflow are not tied to an SSO user account.

:white_check_mark: **OC-5043**: Fixed issue where the "or" operator is not respected when filtering.

:white_check_mark: **OC-4991**: Fixed UI issue where the column order is not retained in reports' grids when an action on the page is taken.

:white_check_mark: **OC-4756**: Fixed an issue in Solution Manager where positive and negative numbers should be considered valid MCP Arguments.

:white_check_mark: **OC-4673**: Fixed an issue where the getfrequency by name query wildcards caused problems in Solution Manager.

:white_check_mark: **OC-4542**: Fixed an issue in Studio when a user edits an existing job, the node coordinates for that job node resets back to 0,0.

:white_check_mark: **OC-4541**: Fixed validation Error in Studio when clicking and dragging lines in Studio to create dependencies.

:white_check_mark: **OC-4537**: CTRL+F now correctly triggers the Script Editor's internal find functionality regardless of Caps Lock status, allowing users to search within their scripts as expected.

:white_check_mark: **OC-4365**: Fixed the lag between selecting a new job and using the buttons, where during that lag the buttons still retrieve the previously selected job.

:white_check_mark: **OC-4140**: Fixed issue where jobs disappear in Studio but are visible in the mini-map.

#### Netcom/Relay
:eight_spoked_asterisk: **OC-5885**: 
* Corrected message deletion logic to use actual minimum and maximum message IDs instead of first/last from result sets
* Added message ID tracking for debugging
* Prevents deletion of messages that were never read or newly inserted during processing
* Enhanced socket resource cleanup exception
* Ensured reconnection attempts continue even if socket cleanup fails
* Properly schedules reconnection timers after send failures
* Automatically deletes stale TX2 messages on SMANetCom startup
* Deletes TX2 messages for specific agents when they reconnect
* Prevents processing of duplicate messages that accumulated during downtime
* Added Message Buildup Monitor, a wew monitoring system that automatically detects when messages are accumulating in the database or queues.
* Monitors message counts per agent in the MSGS_TO_NETCOM table
* Monitors in-memory queue sizes per agent
* Automatically triggers connection resets when buildup is detected
* Configuration: The monitor can be configured via INI file parameters.
* Enhanced Message Tracking and Debugging
* Added detailed logging of message IDs during read and delete operations
* Improved visibility into which messages are processed
* Easier troubleshooting of message loss scenarios

#### REST API

:white_check_mark: **OC-4593**: Addressed a Logs endpoint path traversal vulnerability.

#### Documentation

:open_file_folder: **OC-5089**: Updated the API documentation for the Job Histories endpoints.
