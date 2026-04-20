# Pre-release Notes

## Spring 26

#### 26.1.0

**NOTE**: Verify/Upgrade these components if applicable:

* **Enterprise Manager** - 26.0
* **ServiceNow** Connector – 21.4 or higher
* **WebServices** Connector – 21.2 or higher
* **Deploy** – 26.0.0 or higher
* **Relay** - 26.1.0 or higher

# OpCon Release 26.1 – What's New

## Summary

Release 26.1 focuses on relay management and high availability, reporting reliability, security hardening, and a broad sweep of fixes across Solution Manager, job scheduling, and integrations — delivering a more stable, efficient, and easier-to-manage platform.

## Relay Management & High Availability

### What's New

:eight_spoked_asterisk: **OC- **OC-3856: Centralized Relay Administration** A new Relays/NetComs administration page in Solution Manager provides a single place to view and manage all relays and NetComs registered in your OpCon instance.

:eight_spoked_asterisk: **OC- **OC-3856: Manual Relay Failover** A new Relay Failover modal allows administrators to manually transition workload from a primary relay to a failover relay with minimal disruption. Relay 26.1.0 is required.

:eight_spoked_asterisk: **OC- **OC-3856: Remote Relay Control** Relays can now be remotely restarted and upgraded directly from Solution Manager, reducing the need for on-site intervention.

:eight_spoked_asterisk: **OC- **OC-3856: Remote Log Retrieval** Relay logs can now be requested and retrieved remotely for faster, easier troubleshooting.

:white_check_mark: **OC-6857: JORS Case-Insensitive Relay Matching** Fixed an issue where JORS requests would not be processed when the relay name case in the agent definition did not match the case used during relay installation. Relay name comparisons are now case-insensitive.

:white_check_mark: **OC-6388: SMAFT Job Startup Reliability** Fixed an issue where SMAFT jobs intermittently failed to start with a "Missing Machine IP address" error, requiring a Relay or pod restart to recover.

### Why This Matters

Managing relays no longer requires direct server access. Teams gain the visibility and controls needed to maintain high availability, respond to failures faster, and eliminate a recurring class of recovery operations that previously required restarts.

## Reporting & Diagnostics

### What's New

:white_check_mark: **OC-6340: Reporting Service — DST Stability Fix** Fixed an issue where the Reporting Service could crash on DST spring forward transition days for environments using a US (or similar) timezone with the default schedule time of 02:00.

:white_check_mark: **OC-6424: Reporting Service — Startup Timeout Fix** Fixed an issue that caused timeouts in the reporting service during startup.

:white_check_mark: **OC-6746: Reporting Service — ETL Performance Improvement** Improved the reporting service's performance significantly by managing data storage to keep it to a minimum, resulting in fixing the timeout issues during the ETL process.

:white_check_mark: **OC-6435: Reporting Service — Long Password Support** Fixed an issue where the reporting service failed to start with long database passwords.

:white_check_mark: **OC-5559: Improved Filtering in Schedule and Job History Reports** Fixed an issue in Schedule and Job History Report where filtering on "Is Archived = any" did not work.

:white_check_mark: **OC-6982: Datetime Formatting in Exported Reports** Fixed an issue with datetime formatting in exported reports.

:white_check_mark: **OC-6992: Exported Report Formatting Consistency** Fixed an issue where exported reports were formatted differently from what is shown on Solution Manager.

:white_check_mark: **OC-6040: Reporting Log Accuracy** Fixed an issue in the reporting service log where the total number of failures was not correct.

### Why This Matters

Reports are more reliable and consistent. Teams no longer face disruptions caused by DST transitions, startup failures, or discrepancies between what they see on screen and what they export.

## Security & Authentication

### What's New

:white_check_mark: **OC-5063: SSO Password Reset Restriction** Resolved an issue where an SSO user was able to reset their password and log back in as a normal user. A check is now in place to confirm that credentials entered during the password recovery workflow are not tied to an SSO user account.

:eight_spoked_asterisk: **OC- **OC-6053: New Standalone Encryption Tool** A new standalone encryption tool has been introduced to simplify and standardize password encryption. It supports password encryption equivalent to the existing EM Password Encryption Tool, provides clear command-line usage information via a comprehensive --help option, and is packaged and delivered through the OpCon Web Installer (OWI) for easier deployment.

:white_check_mark: **OC-6778: SAP Encryption — Longer Password Support** Fixed SAPQueryProcessor to use new encryption methods which allow passwords longer than 15 characters.

:white_check_mark: **OC-4639: ACS Agent Encryption Property Fix** Fixed an issue where the "Requires XML Escape Sequences" property was not set for ACS agents.

:white_check_mark: **OC-6037: ACS/RPA Batch User Password Updates** Fixed an issue where updating an ACS or RPA batch user password would fail with a 500 error due to null field codes in the batch user data.

### Why This Matters

These updates close known vulnerabilities, expand support for stronger passwords, and ensure encrypted credentials are handled correctly across agent types and workflows.

## Job Scheduling & Frequency

### What's New

:white_check_mark: **OC-4206: Estimated Start Time Accuracy** Fixed an issue where the estimated start time was incorrect when the job depended on another job from the previous day.

:white_check_mark: **OC-4605: Interval Frequency Build Fix** Fixed an issue where jobs with "On Interval" frequencies using interval days could not build.

:white_check_mark: **OC-5760: Schedule Instance Property Resolution Fix** Fixed an issue where [[SI.PROPERTY]] expressions resolved against the wrong schedule instance when multiple schedules shared the same name and date.

:white_check_mark: **OC-4540: Schedule-Level Frequency Changes Honored** Fixed an issue where schedule level frequency change was ignored at the job level.

:white_check_mark: **OC-6845: Multi-Instance Schedule — Machine Group Switch Fix** Fixed an issue where the user could not switch from a multi-instance schedule with a machine group to one with an empty list of properties.

:white_check_mark: **OC-6911: Multi-Instance Schedule — Instance Name Deletion Fix** Fixed an issue where instance names could not be deleted from a multi-instance schedule.

:white_check_mark: **OC-2700: "On Occurrence Last Friday of the Quarter" Frequency Fix** Fixed an issue where a job using "on occurrence last Friday of the quarter" frequency was excluded even though it was included in the forecast.

### Why This Matters

Scheduling is more reliable and predictable. Frequency configurations behave as expected, and complex schedule structures no longer produce unexpected build failures or incorrect timing.

## Solution Manager

### What's New

:eight_spoked_asterisk: **OC- **OC-3856: Relay/NetCom Administration Page** Added a new Relays/NetComs administration page in Solution Manager displaying all Relays and NetComs registered in the OpCon instance. From this page, OpCon admins can remotely restart, upgrade, and request logs for Relay instances, as well as manually transition workload from a Primary relay to a failover relay using the new Relay Failover modal. Relay 26.1.0 is required. (See Relay Management section above.)

:white_check_mark: **OC-4434: NetCom Name Now a Validated Dropdown** The NetCom Name on the Machine Definition page is now a validated dropdown instead of a free text field.

:white_check_mark: **OC-5466: Job History Access for All Users** Fixed an issue preventing users from viewing all job histories when multiple histories exist for a daily job.

:white_check_mark: **OC-6081: PERT Progressive Discovery — Cross-Schedule Dependencies** Fixed an issue where cross-schedule dependencies were not visible in the PERT progressive discovery view.

:white_check_mark: **OC-6125: Operations Column Layout Persistence** Fixed an issue in Operations where column layout changes were lost when refreshing the page or navigating away and back.

:white_check_mark: **OC-7131: Dates Pane Limit Removed** Fixed an issue where the Dates pane on the Processes page was limited to 50 items.

:white_check_mark: **OC-6727: Audit History Timezone Fix** Fixed an issue where Audit History displayed incorrect times for cloud (US Central) deployments — times were shown 5 hours ahead of the actual change time. Audit timestamps are now converted to UTC before being sent to the browser so times display correctly in the user's local timezone, and date filters continue to match correctly against the database's local time.

:white_check_mark: **OC-5429: Daily Job Definition — Agent Instance Properties** Fixed an issue where the Daily Job Definition panel was not showing agent-defined instance properties (such as JOBID and JNAME on z/OS jobs).

:white_check_mark: **OC-6113: Studio — Node Stacking Fix** Fixed an issue in Studio where newly added nodes stacked on top of each other.

:white_check_mark: **OC-4366: Studio — Sub-Schedule Display Fixes** Fixed some display issues related to sub-schedule in Studio Canvas.

:white_check_mark: **OC-5908: Studio — Browser Back Button Fix** Fixed an issue where the browser back button was not behaving correctly when navigating in Studio and tab-based pages.

:white_check_mark: **OC-5861: Script Version Deletion Fix** Fixed an issue that prevented script versions from being deleted.

:white_check_mark: **OC-6062: Script Version Copy Cancellation Fix** Fixed an issue where if a script version was copied and those changes were cancelled, the script would be deselected.

:white_check_mark: **OC-5959: RPA Script Deployment Fix** Fixed an issue where RPA Scripts failed to deploy.

:white_check_mark: **OC-5864: MFT Authentication Fix** Fixed an issue where MFT was unable to authenticate and process jobs.

:white_check_mark: **OC-6090: MFT Job — Endpoint Visibility Fix** Fixed an issue where the endpoint was hidden when viewing an MFT job in read-only mode.

:white_check_mark: **OC-6117: MFT Job — Locked Field Fix** Fixed an issue in OpConMFT jobs where some fields were editable in locked mode.

:white_check_mark: **OC-6118: MFT Job — Field Width Consistency** Corrected inconsistent field widths in MFT master job definition screens so all fields now use consistent, full-length input boxes.

:white_check_mark: **OC-54: SAP Job Query Fix** Fixed an issue where querying SAP jobs did not return any results.

:white_check_mark: **OC-2784: SAP Query Timeout Dialog** Added a pop-up message when querying SAP would take more than 30 seconds.

:white_check_mark: **OC-2787: SAP Job Creation Fix** Fixed an issue where creating a new SAP job from the Daily Job Definition page failed with a constraint violation. The OpCon schedule name and job name were missing from the JobCreate request, causing the SAP LSAM to return incomplete data that resulted in a null schedule ID on insert.

:white_check_mark: **OC-4988: NotifyHandler Stability** Fixed an issue in the Notify Handler that could cause logging to stop and delay notification delivery.

:white_check_mark: **OC-5920: Notification Trigger Category Filtering** Fixed an issue where categories could not be used to filter notification triggers.

:white_check_mark: **OC-4265: Escalation Acknowledgement for Users Without Email** Fixed an issue where users without an email did not get escalation acknowledgements.

:white_check_mark: **OC-6348: SNMP Trap Test Button Fix** Fixed an issue where the SNMP Trap test button was not triggering the test action in the SNMP Trap notification dialog.

:white_check_mark: **OC-6136: Self-Service Execution History Overflow Fix** Fixed an overflow issue on the self-service service request execution history page.

:white_check_mark: **OC-6694: Chatbot Upgrade** Upgraded chatbot functionality — improves security and increases model handler support.

:white_check_mark: **OC-3777: Tags Page Checkbox Fix** Fixed an issue in the Tags page where the state of the parent checkbox was not correct.

:white_check_mark: **OC-4355: Cross-Reference Viewing Fix** Fixed an issue where viewing cross references for certain resources was giving an error.

:white_check_mark: **OC-4452: Master Job — Primary Machine Removal Fix** Fixed an issue in Master Jobs where removing the primary machine would display a blank page.

:white_check_mark: **OC-5340: Frequency List Fix on Master Jobs Detail Page** Fixed an issue with frequency lists when adding and editing on the master jobs details page.

:white_check_mark: **OC-6204: Master Job Trigger Load Fix** Fixed an issue that caused the error "Unable to load the Trigger" when editing a master job.

:white_check_mark: **OC-6188: False Save Prompt Fix** Fixed an issue that would prompt the user to save or discard changes when no changes had been made.

:white_check_mark: **OC-6033: Schedule Build Button Style** Updated the schedule build button in the Schedule Build page to the correct style.

:white_check_mark: **OC-6064: Schedule Name Display Fix** Fixed an issue with the schedule name on the master jobs details page.

:white_check_mark: **OC-6232: Script Version Grid Sorting Fix** Fixed an issue with sorting on the scripts version grid for version number.

:white_check_mark: **OC-6634: Resource and Threshold Deletion Fix** Fixed an issue where resources and thresholds could not be deleted despite having no cross references.

:white_check_mark: **OC-4752: Otto Cloud User Message Fix** Fixed an issue where Otto displayed an incorrect message for cloud users on initial display.

:white_check_mark: **OC-4578: MCP Master Job Header Fix** Fixed a typo in the MCP Master Job "START" Job Summary header so it correctly displays "Job Summary Information."

:white_check_mark: **OC-6966: Operations Filters Error Message** Updated the error message when creating Operations Filters to be more descriptive.

:white_check_mark: **OC-6026: Processes Page Schedule and Date Grid Update** Fixed an issue with automatically updating schedules and date grids on the Processes page when deleting a standalone schedule for any given date.

:white_check_mark: **OC-2592: Manage Groups Back Navigation Fix** Fixed an issue with manage groups back navigation with dirty forms.

:white_check_mark: **OC-6010: Active Jobs View Fix** Fixed an issue where viewing active jobs on a particular agent would show active jobs on all agents.

:white_check_mark: **OC-6133: Embedded Script Job Action Fix** Fixed an issue where changing the job action of an embedded script job would clear the embedded script configuration.

### Why This Matters

Dozens of friction points across the daily Solution Manager experience have been resolved — from data integrity improvements to display fixes to permission gaps. The cumulative effect is a more consistent, trustworthy interface that requires less workaround and generates fewer support escalations.

## Core Engine & Infrastructure

### What's New

:white_check_mark: **OC-6184: SMANetCom Startup — Machine Connection Fix** Fixed an issue where LSAM machine connections could be permanently lost at SMANetCom startup when multiple machines connected simultaneously, requiring a service restart to recover.

:white_check_mark: **OC-5135: Request Router Logging Fix** Fixed a log file locking issue in the request router component of OpCon by moving to standard logging libraries used by other components of the system.

:white_check_mark: **OC-5055: SQL Log Truncation** Truncated SQL query in SAM and Critical logs to avoid overflow.

:white_check_mark: **OC-6266: Switch Mirror — Modern SQL Server Compatibility** Fixed a deprecated syntax issue to allow Switch Mirror operations to complete successfully on modern SQL Server versions.

:white_check_mark: **OC-6154: SMASchedMan Log Cleanup Job** Added a job, SMASchedMan Folder Log Cleanup, to the SMA Utility folder to remove old SMASchedMan log files from cloud instances.

:white_check_mark: **OC-6104: MaxPoolSize API Configuration** Added support for a MaxPoolSize configuration key in the API, allowing administrators to specify the maximum connection pool size via SMAODBCConfig.DAT.

:white_check_mark: **OC-6096: Master Job Save — Connection Pool Fix** Fixed connection pool exhaustion when saving master jobs. Saving a job was opening 10+ simultaneous SQL connections per request, causing pool exhaustion under load. Database queries are now executed sequentially and frequency, threshold, and resource updates are batched into single SQL statements instead of one per row.

:white_check_mark: **OC-6119: Master Job Load — Performance Fix** Fixed slow master job loading under concurrent load. Each database query was opening a new connection and triggering a sign-in event, so a single page load could generate ~12 sign-in events causing contention when multiple users loaded jobs simultaneously. The fix reuses a single database connection per HTTP request, reducing sign-in events to one per request.

:white_check_mark: **OC-47: CloudEvents API — Error Response Fix** Fixed an issue where posting a malformed or unreadable body to the CloudEvents API returned 500 (Internal Server Error) instead of 422 (Unprocessable Entity), causing MFT agents to retry the request indefinitely.

:white_check_mark: **OC-6103: Vision Remote Instance Fix** Fixed an issue where Vision remote instances were not displaying or persisting on cards. Adding or editing a remote instance now correctly refreshes the grid, and card-level remote instance data is properly retrieved and mapped.

:white_check_mark: **OC-2606: SNOW Connector Fix** Fixed an issue that caused intermittent server internal errors with the SNOW connector.

:white_check_mark: **OC-6050: IMPEX Export Fix** Fixed an issue that caused an error when exporting a schedule to an IMPEX.MDB file.

:white_check_mark: **OC-5988: User Deletion Event Fix** Fixed an issue where deleting a user could prevent jobs with associated events from loading.

### Why This Matters

Infrastructure improvements reduce operational overhead, improve cloud stability, and eliminate a class of performance and reliability issues that surfaced under concurrent load — making the platform more resilient as usage scales.
