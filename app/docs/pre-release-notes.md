# OpCon Pre-release Notes

This page lists changes for each OpCon release, organized by release season and version. Each entry is prefixed with one of the following indicators:

- :eight_spoked_asterisk: — New feature or enhancement
- :white_check_mark: — Bug fix

Compatibility notes at the start of each version identify companion components that require updating before or alongside that OpCon release.

## Fall 26

### OpCon 26.3.0

**NOTE:** Verify/Upgrade these components if applicable:
* **ACS AzureWebservices** - 25.0.4
* **ACS Ease** - 25.0.3
* **ACS WebServices** - 25.0.2
* **Deploy** – 26.0.3 or higher
* **Enterprise Manager** - 26.0.1 or higher
* **Relay** - 26.1.2 or higher
* **ServiceNow Connector** – 25.0 or higher
* **WebServices Connector** – 21.6 or higher

*2026 October*

---

## INSTALLATION

### WHAT'S NEW

:eight_spoked_asterisk: **OC-8238: Run the Relay on Linux or in Docker** Added support for running the Relay on Linux, either as a native systemd service or inside a Docker container, in addition to its existing Windows Service deployment.

:white_check_mark: **OC-7650: INI file settings are preserved during upgrades** Fixed an issue where customized settings in OpCon INI files, such as SMAServMan.ini, SMANetCom.ini, and SMASchedMan.ini, were removed during an upgrade.

### WHY THIS MATTERS

These updates make OpCon easier to deploy and maintain, with the Relay now available on Linux and in Docker and upgrades that keep your existing INI configuration intact.

---

## CORE ENGINE & INFRASTRUCTURE

### WHAT'S NEW

:eight_spoked_asterisk: **OC-8343: Fewer unnecessary job status checks** Improved the default value for the Number of Minutes Between Checking Running Jobs setting from 5 to 30 minutes, reducing unnecessary status-check traffic between SAM and Agents during temporary network slowness or high job volume without losing timely status updates for running jobs.

:eight_spoked_asterisk: **OC-7782: Page, sort, and filter department function privilege results** Added support for optional query parameters (limit, offset, sort, id, ids) to the department function privilege API endpoint.

:white_check_mark: **OC-8639: Jobs complete after a brief Relay connection drop** Fixed an issue where an OpCon Cloud instance stopped receiving job completions after a brief connection drop between the Relay and the cloud instance, leaving jobs in Running and dependent jobs Blocked until the instance was restarted.

:white_check_mark: **OC-8617: Job IDs in REST API requests are protected against SQL injection** Fixed a security issue where the job name in a daily job id sent to the REST API (dailyGraphEdges jobIds, dailyJobs ids, and the threshold/resource dependency routes) was placed directly into SQL. Job ids are now bound as query parameters; a request whose job name contains an apostrophe returns an empty result or 404 instead of an error.

:white_check_mark: **OC-8616: Sub-schedule builds are no longer delayed behind daily builds** Fixed an issue where sub-schedule build requests (BUILDSUB) were dispatched in strict request order behind the daily auto-build backlog, delaying container jobs by up to an hour; SMARequestRouter now dispatches sub-schedule builds and user-initiated builds and deletes ahead of bulk schedule builds, as it did before 25.1.0.

:white_check_mark: **OC-8610: Notifications keep processing when job names are long** Fixed an issue where SMANotifyHandler stopped processing all notifications when an internal schedule build, check or delete event produced a job name longer than 150 characters. Such names are now shortened to fit, and a notification that still cannot be written is set aside and logged instead of being retried on every poll.

:white_check_mark: **OC-8524: REST API queries are protected against SQL injection** Fixed SQL injection vulnerabilities in several REST API queries, including those used for tags, notification categories, notification groups, daily schedules, machines, remote database identifiers, and ImpEx named-instance creation, by binding caller-supplied values as query parameters.

:white_check_mark: **OC-8427: Schedules with Offset Interval jobs build successfully** Fixed Offset Interval jobs causing schedule builds to fail.

:white_check_mark: **OC-8368: TX2 messages are no longer orphaned under the Default group** Fixed TX2 rows being orphaned under `<Default>` (SAM NetCom stamping).

:white_check_mark: **OC-8361: SSO settings are protected against SQL injection** Fixed a SQL injection vulnerability by parameterizing the SSO settings save.

:white_check_mark: **OC-8349: Open schedules in Solution Manager Studio after upgrading** Fixed an issue where Solution Manager Studio returned an HTTP 500 error and reported that schedules did not contain a Job Master after an upgrade, when the WorkflowCoordinates table existed in a database schema other than dbo.

:white_check_mark: **OC-8195: Out-of-range log file requests are rejected efficiently** Fixed an issue where GET /api/logs/{filePath} allocated the whole requested range before rejecting a 'to' value beyond the end of the file.

:white_check_mark: **OC-8194: Vision statistics no longer block the scheduler** Fixed an issue with the Vision master-statistics query blocking the scheduler.

:white_check_mark: **OC-8178: SAM no longer waits indefinitely on undispatched schedule builds** Fixed an issue where SAM waited indefinitely on a schedule build request that SMARequestRouter never dispatched.

:white_check_mark: **OC-8161: Schedule and job actions are no longer lost when SAM stops** Schedule actions (Hold, Release, Start, Close) and job Add/Delete requests from the REST API or Solution Manager could be silently lost if SAM stopped before applying them. SAM now keeps each request on record until the action is applied and recovers any request still in flight on restart.

:white_check_mark: **OC-8160: Job scheduling recovers after a brief network interruption** Fixed an issue where, after a brief network interruption, the OpCon Cloud instance repeatedly closed the Relay's reconnection attempts, halting job scheduling until the cloud instance was restarted. Stale connections are now cleared within 15 seconds so the Relay can reconnect.

:white_check_mark: **OC-8154: The REST API service restarts promptly** Fixed an issue where the SMAOpConRestApi service could hang for an extended period during shutdown when it was restarted.

:white_check_mark: **OC-8143: REST API memory usage stays stable** Fixed an issue where the OpCon REST API service's memory usage could grow rapidly, exhausting server memory and making the API unresponsive.

:white_check_mark: **OC-8130: Sub-schedule builds are dispatched reliably** Fixed an issue where BUILDSUB requests issued by SAM were never dispatched by SMARequestRouter, causing container jobs to stall indefinitely.

:white_check_mark: **OC-8088: Renaming a batch user no longer clears file transfer jobs** Fixed an issue where renaming a batch user cleared the user on file transfer jobs of another platform.

:white_check_mark: **OC-8073: See an accurate description for the SAPQueryProcessor log** Fixed an issue where the Log File Details page in Solution Manager displayed the file name "SAPQueryProcessor.log" as the log's description instead of a description of its contents.

:white_check_mark: **OC-8072: Add new machines to machine notification groups** Added a fix for unblocking notification group saves after a machine is deleted.

:white_check_mark: **OC-8064: Report filters are protected against SQL injection** Fixed a SQL injection vulnerability where report filters on numeric columns embedded unvalidated filter values in the generated query. Numeric filter values are now validated and rejected with a validation error if they are not numeric.

:white_check_mark: **OC-8053: Schedule builds recover from brief database interruptions** Fixed an issue where a database connection interruption at the end of a schedule build could make the build fail or block the schedule from being rebuilt for up to 10 minutes. SchedMan now retries releasing its build lock instead of failing on the first interruption.

:white_check_mark: **OC-8028: View job output from Job History for multi-instance jobs** Fixed an issue where the Daily Job and Master Job History views in Solution Manager displayed "No output available for this Job" for multi-instance jobs, even though the output was available in the Processes and PERT views.

:white_check_mark: **OC-8013: Report exports are better protected** Added validation to the reporting export path and guarded against unknown report types.

:white_check_mark: **OC-7968: Incomplete schedule builds are no longer reported as successful** Fixed an issue where SMASchedMan reported a schedule build as successful after a transient Azure SQL connection reset interrupted the build, leaving sub-schedules unbuilt without any error or notification.

:white_check_mark: **OC-7947: See all frequencies when editing Master Jobs** Fixed an issue where the frequency picker on the Master Job screen displayed only part of the list of frequencies defined in Library > Frequencies.

:white_check_mark: **OC-7918: Reporting filters are validated and use the SAM time zone** Added a fix for validating reporting filter comparers and resolving date filters in the SAM time zone.

:white_check_mark: **OC-7904: OpCon Cloud recovers from brief database connection resets** Fixed an issue where a brief Azure SQL connection reset during startup could put the OpCon Cloud pod into a crash loop, halting job processing until the pod was manually restarted.

:white_check_mark: **OC-7895: Reuse report datetime values as filters** Fixed an issue where datetime filters on the Job Dependencies and Documentation report were read as UTC while the report returned server local times, so a value shown in the report could not be used as a filter value. Bare filter values are now read as server local time, and the greater than and less than comparers no longer return every row.

:white_check_mark: **OC-7832: Resources with an All dependency no longer stay Locked** Fixed an issue where a resource used with an "All" resource dependency could remain flagged as Locked, while showing 0 in use, after its owning job finished.

:white_check_mark: **OC-7771: Reporting data loads complete without conversion errors** Fixed an nvarchar-to-numeric conversion error in the ReportingService ETL.

:white_check_mark: **OC-7677: Filter reports on column names that contain spaces** Fixed an issue where the Reporting API returned a SQL error when a filter used a field name containing a space, such as "Schedule Date".

:white_check_mark: **OC-7359: The Notification Handler recovers from database lock contention** Improved Notification Handler resilience when the OpCon database experiences temporary lock contention. The Notification Handler now recovers automatically from short-lived database blocking instead of being terminated by Servman after extended waits. When a lock wait times out, the Notification Handler also logs the session that held the lock. This diagnostic requires the VIEW SERVER STATE permission, which the OpCon database logins receive from the installer; if it has been revoked, the diagnostic is skipped with a log message and notification processing is not affected.

:white_check_mark: **OC-7245: See the correct description for the SMANetComTrace log** Fixed an issue where the Log File Details page in Solution Manager displayed the SMANetCom log description for the SMANetComTrace log.

:white_check_mark: **OC-2920: Log archive retention honors the selected number of days** Fixed an issue with archive retention capping at a much smaller value than was selected by the customer. Logs now prune only their own archives and retention is now measured in days from the date in the folder name (not filesystem creation time).

:white_check_mark: **OC-2704: Instance property values are trimmed of whitespace** Fixed an issue where Master Job instance property values were not trimmed of trailing whitespace when saved, which could prevent the built schedule from being viewed or edited.

:white_check_mark: **OC-160: Only one index defragmentation job runs** Disabled the legacy SMA DBCC Index Defrag job in SMAUtility schedule so only the newer SMA Index Defragmentation job is built to prevent a deadlock error if both jobs run at the same time.

### WHY THIS MATTERS

These fixes harden the REST API and reporting against SQL injection and make schedule builds, job processing, notifications, and OpCon Cloud connectivity more resilient, so your automation keeps running through brief network and database interruptions.

---

## SOLUTION MANAGER

### WHAT'S NEW

:eight_spoked_asterisk: **OC-8367: See when a login fails because an account is disabled** When a user enters the correct login name and password for a disabled account, Solution Manager now shows a message stating that the account has been disabled. The user detail screen under Library > Access Management > Users also displays an Enabled or Disabled status next to the Enable user checkbox, and the user list shows a Disabled badge.

:eight_spoked_asterisk: **OC-8345: Sign in with Google Workspace SSO** Added Google Workspace as a selectable SSO provider. Administrators can select Google in the SSO settings and specify the permitted Workspace domain, and users' Google Workspace group memberships are used to assign OpCon roles.

:eight_spoked_asterisk: **OC-8249: Upgrade Agents and Relays from Solution Manager with less disruption** Improved Agent and Relay upgrades initiated from Solution Manager.

  * Agents, Relays, and Integrations can now be selected in bulk and upgraded together, with a warning if any selected item has active jobs running.
  * Scheduled Agent upgrades now wait for active jobs to finish before proceeding, and automatically restrict new job dispatch during the upgrade window.
  * Agents and Relays now reconnect to Solution Manager more quickly after an upgrade restart, and Agents reconnect more quickly after switching to a new TLS certificate.

:eight_spoked_asterisk: **OC-8244: View and apply Integration upgrades from Solution Manager** Added the ability to view and apply Integration upgrades directly from Solution Manager.

  * A new Integrations page shows which Integrations have upgrades available, with a one click action to apply them and a confirmation message when the upgrade completes.
  * Most Integration upgrades are applied live, without restarting the Relay or NetCom process.
  * Connectors are now called Integrations throughout Solution Manager.

:eight_spoked_asterisk: **OC-8236: Review past notifications in Notification History** Added a Notification History page under Library that keeps a persistent, filterable record of Solution Manager notifications, so events are no longer lost once the on screen alert disappears. A summary tile is also shown on the Solution Manager home page.

  * Agent, Relay, and Integration upgrade completion notifications are now recorded even if no one was viewing Solution Manager when the upgrade finished.
  * Agent and Relay upgrade notifications now include the machine or relay name and version.

:eight_spoked_asterisk: **OC-7258: Agent TLS certificates renew automatically** Added automated TLS certificate lifecycle management for agents. OpCon can now provision and renew agent certificates from its own certificate authority, with certificate settings and an optional manual enrollment secret configurable per machine in Solution Manager.

:white_check_mark: **OC-8588: See all dependencies in the Daily Schedule diagram** Fixed an issue where the Daily Schedule dependency diagram silently omitted dependencies on jobs the user does not have permission to view, such as predecessors in another schedule. These dependencies are now indicated on the job with a "Dependency(s) Not Shown" icon, and users with only the View Jobs in Daily Schedules privilege now see dependency links in the diagram.

:white_check_mark: **OC-8441: Security updates** Updated third-party components to resolve publicly disclosed vulnerabilities:

  * .NET runtime: addresses CVE-2026-32203 (denial of service).
  * MailKit (email notifications): addresses a STARTTLS response injection issue that could allow an attacker to downgrade the authentication mechanism.
  * Solution Manager web components: React Router (two open redirect issues, including a bypass of CVE-2025-68470), Immutable.js (two denial of service issues), fast-uri (server-side request forgery), Browserslist (crash on untrusted input), and @ai-sdk/provider-utils (uncontrolled resource consumption).

:white_check_mark: **OC-8405: The Manage Groups Save button reflects actual changes** Fixed an issue in Solution Manager under Library > Notification Triggers > Manage Groups where the Save button was enabled as soon as you selected a notification group. It now stays disabled until you change something.

:white_check_mark: **OC-8394: Show all columns in grids reliably** Fixed an issue where selecting "Show all" in the column visibility panel collapsed the grid to a single column on the Operations Agents, Daily Jobs, and Daily Schedules grids.

:white_check_mark: **OC-8380: View the Schedule and Job History report with the Maintain Job History privilege** Fixed an issue where users with the Maintain Job History privilege could not view the Schedule and Job History report.

:white_check_mark: **OC-8369: Select dates and daily schedules in Operation View** Fixed an issue where, after upgrading to OpCon 26.0.5, selecting a date or daily schedule in Operation View could show "Unable to retrieve the schedule verification result".

:white_check_mark: **OC-8189: Save notification groups that contain deleted schedules or jobs** Fixed an issue where Schedule and Job notification groups containing a deleted schedule or job could not be saved.

:white_check_mark: **OC-8184: Machine notification groups keep their own settings** Switching between Machine notification groups in Solution Manager could show the previous group's selection, and saving would write it to the new group. Each group now shows and saves only its own settings, including the Included/Excluded option.

:white_check_mark: **OC-8136: Reopen the Columns panel right after hiding a column** Fixed an issue on the Operations → Processes Schedule and Job grids where, after you hid a column, the Columns button could stop responding for up to about 30 seconds.

:white_check_mark: **OC-8128: SSO users keep the Role_ocadm role** Fixed an issue where users signing in through SSO who were mapped to Role_ocadm did not retain the role.

:white_check_mark: **OC-8123: View execution history for multi-instance jobs** Fixed an error that would occur when viewing a multi-instance job's execution history.

:white_check_mark: **OC-8102: Schedule builds process without an instance restart** Fixed an issue with SKDBLD requests handled by SMARequestRouter.

:white_check_mark: **OC-8070: Solution Manager no longer sends user data to Gainsight** Removed Gainsight tracking from Solution Manager so that user data is no longer sent to an external tracking service when users log in.

:white_check_mark: **OC-8020: Save Embedded Script jobs in Solution Manager** Fixed an issue where saving an Embedded Script job in Solution Manager was rejected with a validation error stating that the CommandLine field is required, even though no CommandLine field is available for that job type.

:white_check_mark: **OC-8008: Filter the Job Executions History page reliably** Fixed a filtering issue and other minor defects on the Job Executions History page.

:white_check_mark: **OC-8002: New Vision cards no longer default to every role** Fixed an error where a new Vision card defaulted to every role.

:white_check_mark: **OC-7929: Select roles for Self Service buttons in Firefox** Fixed an issue where roles did not appear when creating or editing a Self Service button in Mozilla Firefox, preventing access to the button from being modified.

:white_check_mark: **OC-7908: Job Execution History loads without timing out** Fixed an issue with the Job Execution History page timing out from unbounded requests.

:white_check_mark: **OC-7903: Change the User Input Type on self-service buttons** Fixed an issue with the UI crashing to a white screen when changing the "User Input Type" on a self-service button.

:white_check_mark: **OC-7883: Save Master Jobs after turning off Finish OK frequency settings** Fixed an issue where turning off the "Latest Run Time (Offset)" or "Number of Runs" setting in the "When Job Finishes OK" section of a job's frequency produced an error and prevented the Master Job from being saved.

:white_check_mark: **OC-7877: Select roles in Self Service button settings** Fixed an issue with roles not appearing in Self Service button settings.

:white_check_mark: **OC-7766: Number of Runs defaults correctly when enabling Restart Offset** Fixed Number of Runs defaulting to "false" when Restart Offset is enabled on a daily job frequency.

:white_check_mark: **OC-7765: Copy script versions without a false unsaved-changes prompt** Fixed a false unsaved-changes prompt on Copy Version for scripts with CRLF line endings.

:white_check_mark: **OC-7751: Users stay assigned to escalation groups after a rename** Fixed an issue where a user was unassigned from an escalation group after a rename.

:white_check_mark: **OC-7746: Select notification triggers after a user is renamed** Fixed an issue by resetting notification trigger event credentials when a user is renamed.

:white_check_mark: **OC-7655: Sub-schedule jobs run with their dependencies in place** Fixed an issue where a sub-schedule built by a BUILDSUB event could begin processing before the build was acknowledged, causing jobs to be submitted without their dependencies.

:white_check_mark: **OC-4866: Filter and arrange report columns reliably** Fixed issues in reports where a rearranged column order was reset after sorting or filtering, and where "equals", OR, and date filters returned incorrect results.

:white_check_mark: **OC-4543: ACS data migration actions handle empty values** Fixed a problem that prevented certain data migration actions in the ACS framework.

:white_check_mark: **OC-2839: Advanced frequency dates apply at build time** Fixed an issue with applying advanced frequency include/exclude dates at build time.

### WHY THIS MATTERS

This release adds Google Workspace SSO, a Notification History page, and centralized Agent, Relay, and Integration upgrades, while fixing a wide range of issues in notification groups, Self Service, job history, reports, and frequencies so day-to-day work in Solution Manager is smoother and more reliable.
