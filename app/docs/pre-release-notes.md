---
sidebar_label: "OpCon Pre-release Notes"
---

# Pre-release Notes

## OpCon 25.0.1

**NOTE**: Verify/Upgrade these components if applicable: 

* **Enterprise Manager** - 25.0 
* **ServiceNow** Connector – 21.4 or higher
* **WebServices** Connector – 21.2 or higher
* **Deploy** – 25.0.0 or higher

2025 March

#### Server

:white_check_mark: **OC-2499**: Fixed database re-connection logic to prevent NotifyHandler from hanging during database disruptions.

:white_check_mark: **OC-2502**: Providing a delayed start and checking for certificate file in NetcomApi to prevent errors encountered during initialization of service.

#### REST API

:white_check_mark: **OC-22**: Modified OS2200 daily jobs details to exclude completion statuses with empty or null condition words.



## Winter 25

**NOTE**: Verify/Upgrade these components if applicable: 

* **Enterprise Manager** - 25.0 
* **ServiceNow** Connector – 21.4 or higher
* **WebServices** Connector – 21.2 or higher
* **Deploy** – 25.0.0 or higher
* **Relay** - 24.3.2 or higher

2024 December

#### Solution Manager

:white_check_mark: **OPCON-25924**: Resolved an issue where selecting a date from a new year would remove all previously selected dates from other years. Calendar selections are now persistent across multiple years. 

:white_check_mark: **OPCON-1937**: Fixed an issue where a machine's capabilities were not validated when it was added to a machine group.

:white_check_mark: **OPCON-21285**: Fixed and issue where in the start time of the job in the subschedule should be the same as the end of time of the container job in the parent schedule.

:white_check_mark: **OPCON-23096**: Added OpCon RPA script runner & script type capabilities for Script Repo use.

:white_check_mark: **OPCON-23094**: Added support for logs that aren't text and inclusive of video logs through the job output screen.

:white_check_mark: **OPCON-23095**: Licensing logic using the (new) LSAM ID being used for OpCon RPA is enforced.

:white_check_mark: **OPCON-23224**: Fixed issue where the user can't add jobs to daily multi instance schedule.

:white_check_mark: **OPCON-23373**: Otto has learned a new skill!  Users should now be able to ask Otto to retrieve a single log file by name.

:white_check_mark: **OPCON-23582**: Fixed an issue where the estimated start time of a job was incorrect when it depended on a job in a different schedule.

:white_check_mark: **OPCON-24389**: Fixed several issues related to the machine groups panel on the agents page.
- Fixed an issue where all machine groups start on the left even if agent has machine groups assigned.
- Fixed an issue where agents page groups column is not updated after an update in the machine groups panel.
- Fixed an issue where left and right arrows were enabled without any selected items.

:white_check_mark: **OPCON-24390**: Fixed an issue where the filtered agent status was not reflected properly in the url query parameter.

:white_check_mark: **OPCON-24394**: Fixed an issue where clearing the machine group filter on the Agents Page did not restore those agents not in a group.

:white_check_mark: **OPCON-24405**: Fixed an issue where the Logs API does not remove/archive application log files correctly.

:white_check_mark: **OPCON-24595**: Fixed issue where SMANotifyHandler has its log locked, causing it to become unresponsive.

:white_check_mark: **OPCON-24492**: Fixed issue in Solution Manager when creating an MFT agent the default values need to be the same. Updated default values for new OpCon MFT agents.

:white_check_mark: **OPCON-24512**: Fixed an issue where retry on failure values were removed after updating a daily job.

:white_check_mark: **OPCON-24552**: Otto improvements from UAT including: improved formatting, improved date range options, a clear conversation action, and case insensitivity on requests.

:white_check_mark: **OPCON-24563**: Fixed an issue with 'View Service Requests' privilege that let the user see jobs that they did not permissions for.

:white_check_mark: **OPCON-24637**: Episys: Answer Prompts jobs correctly display double quotes in the Prompt value.

:white_check_mark: **OPCON-24683**: Usage information, page count tracking and click behavior tracking is captured.

:white_check_mark: **OPCON-24689**: Otto has learned a new skill!  Users should now be able to ask Otto to summarize build results for a schedule on a specified date and return a link to the log details page directing users to the correct information if Otto is unable to create a summary.

:white_check_mark: **OPCON-25103**: Fixed issue "Cannot Load Daily Jobs" when right clicking certain jobs in Operations page.

:white_check_mark: **OPCON-24949**: Fixed an issue causing agents page to timeout after selecting an agent.

:white_check_mark: **OPCON-24956**: Fixes NetCom deadlock which would prevent some Agent types from being marked down after failing heartbeats.

:white_check_mark: **OPCON-25111**: Fixed an issue where a role could not be updated if a machine group to which it has access is deleted.

:white_check_mark: **OPCON-25144**: Fixed a problem when importing schedule definitions that contain multiple roles and the role names have been transformed to the same name causing a duplicate key violation. Fix ensures that duplicate roles and no longer inserted.

:white_check_mark: **OPCON-25150**: Fixed an issue where filtering by column resets on every visit on the agents page.

:white_check_mark: **OPCON-25158**: Fixed an issue where *Daily Job: Frequency* offset values cleared on second save via turning admin off.

:white_check_mark: **OPCON-25151**: Resolved an issue where assigning *Can Update* access to a resource for a role did not work as expected.

:white_check_mark: **OPCON-25159**: Fixed a permissions issue with master jobs where users with any privilege in `<All Departments>` were incorrectly able to modify master jobs.

:white_check_mark: **OPCON-25736**: Fixed issue which prevented users from selecting an ACS Integration as a Script Runner OS Type if the user had multiple ACS integrations installed

:white_check_mark: **OPCON-25738**: Added additional validation for job name and schedule name.

:white_check_mark: **OPCON-25740**: Fixed issue where “Update schedule status request sent.” was returned even when exceptions were encountered.

:white_check_mark: **OPCON-25744**: Added null reference check in request.Date.

:white_check_mark: **OPCON-25757**: Fixed the error message "Trigger name is required” when clicking the Test button while creating a new notification trigger.

:white_check_mark: **OPCON-25786**: Fixed issue where the user can save a Daily Job while ACS is still loading the schema.

:white_check_mark: **OPCON-25790**: Fixed an issue where the Otto chatbot lost chat history when the navigation button was used while already on the destination page. Now, the navigation button is hidden in this scenario to prevent unnecessary page reloads and ensure chat continuity.

:white_check_mark: **OPCON-25799**: Fixed Notification triggers machine groups dropdown pagination. The dropdown should now load extra notification groups when scrolling down.

:white_check_mark: **OPCON-25798**: Fixed an issue on notification triggers page where delete button is enabled when adding a new notification trigger.

:white_check_mark: **OPCON-25832**: Fixed issues with validation on machine/machine groups when on the Master Jobs and Daily Jobs definition pages. 

:white_check_mark: **OPCON-25833**: Fixed a problem during the script extract process to include a list of roles associated with the script. 
Fixed a problem during the script deployment process to assign the roles associated with the script.
Requires Deploy version 25.0.0.

:white_check_mark: **OPCON-25846**:  Fixed memory leak issue on the scripts runners page when interacting with large databases

:white_check_mark: **OPCON-25842**: Updated API documentation for jobTags endpoint.

:white_check_mark: **OPCON-25843**: Fixed API documentation for posting a new script runner.

:white_check_mark: **OPCON-25845**: Fixed issue causing nodes to stack on top of one another due to incorrect node positions on the workflow page.

:white_check_mark: **OPCON-25849**: Adjusted various UI elements for accessibility and 508 compliance.

:white_check_mark: **OPCON-25851**: Fixed label on the `To` input field within the deploy dialog.

:white_check_mark: **OPCON-25853**: Upgraded `.net` version to `.net 9`.

:white_check_mark: **OPCON-25856**: Fixed an issue where `<All Departments>` was inadvertently available in the master job department select.

:white_check_mark: **OPCON-25864**: Fixes issue which could cause Solution Manager to crash after switching between certain ACS task types.

:white_check_mark: **OPCON-25865**: Fixes issue which prevented ACS jobs from being fully cleaned up after deletion.

:white_check_mark: **OPCON-25896**: Fixed an issue where JCL Data was not displayed for daily and master jobs.

:white_check_mark: **OPCON-25878**: Fixed an issue where departments to which the user did not have access were available when adding or modifying a Master Job.

:white_check_mark: **OPCON-25905**: Improved performance when editing a Batch User.

:white_check_mark: **OPCON-25906**: Resolved an issue where the add named instance button was enabled on the Master Schedule Definition page in read-only mode.

:white_check_mark: **OPCON-25907**: Fixed an issue where 'Use Exit Code From Script Result' was not properly updated in MS SQL Script jobs for daily jobs.

:white_check_mark: **OPCON-25913**: Fixed an issue in Studio when canceling copying job, the schedule is not longer able to load.

:white_check_mark: **OPCON-25914**: Increased query timeout value while running migrations for OpCon version 24.1.

:white_check_mark: **OPCON-25917**: Fixed an issue in Studio where canceling actions gives an error.

:white_check_mark: **OPCON-25939**: Fixed an issue where job execution history was empty for multi-instance jobs.

:white_check_mark: **OPCON-25930**: Fixes a NetCom issue which caused some ACS jobs to fail on restart due to invalid references

:white_check_mark: **OPCON-25954**: Web Services jobs, although not fully supported, no longer cause an error when updating some details of the job.

:white_check_mark: **OPCON-25933**: Made enhancements to Windows and Unix job import to support splitting Deploy script and schedule / package deployments. Import routines need to check local OpCon database for script information (script, scripttype, runner ids) as the script information is no longer part of the OpConExtract object.   

:white_check_mark: **OPCON-25940**: ADded a new user option for a confirmation step before updating the status of one or more daily jobs or schedules from the processes page to ensure I do not make a mistake that could potentially have a large impact on a large number of jobs or schedules.

:white_check_mark: **OPCON-25955**: Character limit on database fields adjusted from a 4000 char limit to nvchar(max).

:white_check_mark: **OPCON-25961**: Added the ability to archive the output of an MFT Job.

:white_check_mark: **OPCON-25969**: Fixes issue which could cause ACS integrations to lose variable tokens used in job configurations after completion of a job run

:white_check_mark: **OPCON-25979**: Fixed an issue where users could not see some jobs associated with tags in tag manager.

:white_check_mark: **OPCON-25982**: Fixes issue in NetCom where ACS job starts would sometimes request job status information even when the job had previously reported completion.

:white_check_mark: **OPCON-26026**: Fixed an issue on in the Notification Triggers manager Group page where the checkboxes on pages `2+` do not populate with the correct value.

:white_check_mark: **OPCON-26016**: Adjusted the save button on the Daily Jobs page.

:white_check_mark: **OPCON-26050**: Fixed issue in ACS where setNestedFieldValues logic fails to handle key removal.

:white_check_mark: **OPCON-26072**: Fixed a permissions issue where users were incorrectly prevented from seeing the Agents page.

:white_check_mark: **OPCON-26075**: Fixed issue on the ACS Agent Details Page where a new Agent doesn't reload RJSF when switching between multiple applications.

:white_check_mark: **OPCON-26093**: Fixed an issue that prevented creating new SQL Other Db master jobs.

:white_check_mark: **OPCON-26097**: Fixed a problem during schedule deployment when the schedule definition included BIS jobs and the schedule exists on the target OpCon system. The BIS RunId field was incorrectly reset. 

:white_check_mark: **OPCON-26103**: Fixed issue in Relay wehre the `GET /api/acs/rjsf` endpoint doesn't respect machine NetComName field.

:white_check_mark: **OPCON-26144**: Fixed issue where the user would receive the error "Adding the specified count to the semaphore would cause it to exceed its maximum count".

:white_check_mark: **OPCON-26137**: Fixed a problem during deployment when schedule privileges are lost. When role does not include inherit all schedules and a deployment is performed and the role names are the same but characters have different case then the schedule privilege is incorrectly removed.   

:white_check_mark: **INTPLT-32**: Fixed issue where the customer was receiving an invalid URI and internal server error when authenticating machines.

:white_check_mark: **OPCON-26153**: Fixed an issue where OpconMFT agent was not communicating after install/upgrade.











