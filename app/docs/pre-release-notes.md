# Pre-release Notes

## Summer 26

## OpCon 26.2.0

> **NOTE:** Verify/Upgrade these components if applicable:
* **ACS AzureWebservices** - 25.0.2
* **ACS Ease** - 25.0.3
* **ACS WebServices** - 25.0.2
* **Deploy** – 26.0.3 or higher
* **Enterprise Manager** - 26.0.1 or higher
* **Relay** - 26.1.2 or higher
* **ServiceNow Connector** – 25.0 or higher
* **WebServices Connector** – 21.6 or higher

*2026 July*

---

## Installation & Infrastructure

### What's New

✅ **OC-7607: Installer SSL Validation Fixed** Resolved an issue where the OpCon installer bypassed the configured DSN and failed SSL validation when using ODBC Driver 18.

✅ **OC-4379: SMAConnectionConfig Special Character Password Support** Resolved an issue where SQL Server user passwords containing special characters (such as semicolons) caused failures when updating SMAConnectionConfig.exe.

### Why This Matters
These fixes improve installer reliability and environment setup, reducing friction during upgrades and new deployments.

---

## Platform Reliability (Server & API)

### What's New

✅ **OC-7724: Container Now Completed When All Jobs In The Subschedule Finish** Fixed an issue with container sub-schedule not closing when all jobs fail.

✅ **OC-7709: Automated Schedule Build More Reliable Now Under Heavy Load** Resolved a reliability issue in the NetCom, Request Router, SchedMan, and LSAM Data Retriever services that could cause them to fail under heavy system load. Logging and configuration handling in these services have been improved to prevent recurrence.

✅ **OC-7547: API SAM Time Zone Logging Reduced** Resolved an issue where the OpCon API was logging the SAM time zone every 5 minutes, creating unnecessary log noise.

✅ **OC-7529: Admin Role Privilege Fields Now Populated** Fixed an issue where the admin role returned empty arrays for `accessCodePrivileges`, `machinePrivileges`, `machineGroupPrivileges`, and `accessibleBatchUserIds`.

✅ **OC-7469: OpCon API Inconsistencies Corrected** Resolved a set of inconsistencies in OpCon API behavior that could cause unpredictable responses.

✳️ **OC-7407: Department Function Privilege API Endpoint Added** Added a new API endpoint that returns department function privilege details, improving integration and reporting capabilities.

✅ **OC-7372: API Date Handling No Longer Affected by Regional Settings** Resolved an issue where dates submitted via the API were incorrectly influenced by the server's environmental regional settings.

✅ **OC-7366: Schedule Date Off-by-One Error Fixed** Fixed an issue where selecting 11/01/2026 as the Schedule Date for Events in Solution Manager caused the date to be sent as 10/31/2026.

✅ **OC-7249: ACS JSON Escape Sequence Error Fixed** Resolved an issue where SAM inserted path information into JSON when resolving ACS properties, producing an invalid JSON escape sequence.

✅ **OC-5352: Threshold Cross References Schedule Names Corrected** Fixed an issue where Threshold Cross References in Solution Manager were not displaying the correct schedule names.

### Why This Matters
These updates improve API accuracy, reduce log noise, and ensure date and privilege data is handled correctly across integrations and automations.

---

## Solution Manager Improvements

### What's New

✅ **OC-7766: Number Of Runs Now Defaults To 2** Fixed Number of Runs defaulting to "false" on Restart Offset.

✅ **OC-7763: RPA Instance Property Name Casing Now Preserved** Resolved an issue with preserving instance property name casing for RPA/ACS jobs.

✅ **OC-7710: RestApi Memory Leak Resolved** Resolved a memory leak issue with recyclable memory stream manager.

✅ **OC-7661: Invalid Tag Deletion No Longer Closes Master Job Page** Fixed an issue where deleting an invalid tag unexpectedly closed the Master Job Definition page.

✅ **OC-7620: Column Layout and Filter Highlight Bugs Fixed** Resolved multiple bugs affecting column layout persistence and filter criteria text highlighting in Solution Manager.

✅ **OC-7619: Agent List View Sort, Filter, and Pagination Bugs Fixed** Resolved a set of bugs affecting sorting, filtering, and pagination behavior in the Agent list view.

✅ **OC-7604: Frequency JSON Deserialization Error on Restart Offset Resolved** Fixed an issue where disabling "Latest Run Time (Offset)" with "Run Again: Restart Offset" active threw a JSON deserialization error and blocked saving the Master Job.

✅ **OC-7594: Tag Fields with Special Characters Now Save Correctly** Resolved an issue where tag fields containing special characters silently failed to save without displaying an error.

✅ **OC-7561: Multi-Instance Schedule Properties Now Set Correctly in French** Fixed an issue where multi-instance schedules failed to set properties when the user's language was set to French.

✅ **OC-7560: Reporting Database Password Semicolon Error Clarified** Resolved a confusing error that appeared when the Reporting Database password contained a semicolon.

✅ **OC-7528: Self Service Button Label Overflow Fixed** Fixed a display issue where long single-token button label text overflowed its border in Self Service.

✅ **OC-7479: Schedule with Null Sub-Schedule No Longer Returns HTTP 500** Resolved an issue where a schedule containing a container job with a null sub-schedule reference caused an unhandled exception and HTTP 500 when loading the job list.

✅ **OC-7410: SSO Badge Now Populates for All Users** Fixed an issue where the SSO badge was not appearing for some users in Solution Manager.

✅ **OC-7397: Studio Canvas Edges No Longer Disappear on Scroll** Resolved an issue where dependency edges disappeared from the Studio Canvas when scrolling after making a dependency change.

✅ **OC-7380: Edit Locked Button Restored After Job Rename** Fixed an issue where the option to edit a locked button was no longer available after renaming a job.

✅ **OC-7353: Operations Dashboard Agent Status Filter Respects French Locale** Resolved an issue where the Operations dashboard agent status circle ignored the `states=` API filter when the user's language preference was set to French.

✅ **OC-7331: PERT View on Multi-Level Schedules Restored** Fixed an issue where users were unable to use the PERT view on multi-level schedules in OpCon 26.0.4.

✅ **OC-7326: Schedule and Job History Duration in Seconds Restored** Resolved an issue where the Schedule and Job History report did not display duration in seconds.

✅ **OC-7309: Service Request User Input Caption Now Saves Correctly** Fixed an issue preventing users from saving a user input caption in a service request.

✅ **OC-7304: Schedule Build Queue Error After Rename Fixed** Resolved an issue where renaming a schedule caused a schedule build queue error.

✅ **OC-7298: Duration Formatting in Schedule and Job History Corrected** Fixed an issue where duration was formatted incorrectly in the Schedule and Job History report.

✅ **OC-7280: Job History Notes Date Format Corrected** Resolved an issue where job history notes displayed dates in an incorrect format.

✅ **OC-7275: Self Service Display Issue Resolved** Fixed a Self Service display issue caused by missing HTML in the rendered output.

✅ **OC-7272: Job Execution History Default Filter Now Customizable** Fixed an issue where the default filter in Job Execution History was permanently locked and could not be customized.

✅ **OC-7263: Operations View Row Selection Checkbox No Longer Gets Stuck** Resolved an issue where the row-selection checkbox column became stuck after a drag-reorder operation in the Operations view.

✅ **OC-7261: Reporting Data Conversion Issue Fixed** Resolved a data conversion issue in the reporting database in OpCon 26.

✅ **OC-7248: Notification Groups No Longer Rename Each Other** Fixed an issue where renaming one Notification Group was incorrectly affecting the names of other groups.

✅ **OC-7220: Scrolling to Additional Sections Now Works Correctly** Resolved an issue where users could not scroll to view options in different sections of certain dialogs.

✅ **OC-7211: SQL Job 500 Error in Operations Resolved** Fixed an issue where SQL-type jobs threw a 500 error in Operations after passing the Started status.

✅ **OC-7188: Script Editor Tab Key Behavior Fixed** Resolved an issue in the Script Editor where pressing the Tab key removed focus from the editor.

✅ **OC-7187: French Translation Corrections Applied** Fixed missing or incorrect French translations in Solution Manager.

✅ **OC-7172: Job History Date Pickers Respect French Locale** Fixed an issue where Job History date pickers ignored the French locale, displaying MM/DD/YYYY instead of DD/MM/YYYY.

✅ **OC-6986: Audit History Date & Time Filter Fixed** Resolved a filtering issue on the Date & Time column in the Audit History Report.

✅ **OC-5849: Restart Offsets Now Consistent Between Master and Daily Jobs** Resolved an issue where Restart Offsets behaved differently in Master Jobs versus Daily Jobs.

✅ **OC-4619: New Schedule Creation in Solution Manager Restored** Fixed an issue that prevented users from creating new schedules in Solution Manager.

✅ **OC-2806: PERT Job Context Menu No Longer Shows Stale Data** Fixed an issue where the Job Context menu in the PERT view cached and displayed outdated information.

### Why This Matters
This release delivers a broad set of stability, usability, and localization improvements across Solution Manager — addressing long-standing pain points in scheduling, job management, Studio, Self Service, reporting, and internationalization support.
