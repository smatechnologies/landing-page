---
sidebar_label: "Release Notes 20"
---

# OpCon 20 Release Notes

## Version 20.7.0

#### 2021 September

##### Documentation

:white_check_mark:	OPCON-15505: Removed OpCon.UserDefindFunctions.pdf from the distributed Database Scripts.

##### Enterprise Manager

:white_check_mark:	OPCON-15530: Fixed an issue in Enterprise Manager, where Episys sub type jobs had parsing issues, when going to a None sub type and back to the Episys sub type without saving.

:white_check_mark:	OPCON-15467: Fixed an issue in Enterprise Manager where adding or updating certain MCP job arguments gave an invalid characters in argument error.

:white_check_mark:	OPCON-15465: Fixed a global property extract issue in schedule extract that threw an index out of bounds error, when using it.

:white_check_mark:	OPCON-14706: Fix display error where command line showing up in "Other Options" instead of "Files To Delete".

##### General

:white_check_mark:	OPCON-15525: Fixed an issue where job output requests would error with a code of 36235 in EM and a general error in Solution Manager.

##### REST API

:white_check_mark:	OPCON-15475: Add support for SQL job types in Daily Jobs GET and PUT endpoints.

:eight_spoked_asterisk:	OPCON-15464: Added validation for daily job events through the PUT endpoint.

:eight_spoked_asterisk:	OPCON-15363: Added a searchable endpoint for the UI to consume. api/metadata/eventTriggers

##### Server

:white_check_mark:	OPCON-15463: Fixed a bug where single quotes in a job add event cause SAM to loop an 'Incorrect syntax' error.

##### Solution Manager

:eight_spoked_asterisk:	OPCON-14707: Task Details for SQL daily jobs can now be consulted / changed from the Daily Job Definition screen.

:white_check_mark:	OPCON-15573: Fixed an issue where Excludes Job Dependencies displayed an option to change Offset

:white_check_mark:	OPCON-15532: Fixed an issue in Solution Manager self service, where a user input of type choice submitted the name of the choice instead of its value.

:white_check_mark:	OPCON-15500: Fixed an issue where advanced failure criteria was not displayed for Windows and Unix daily jobs

:white_check_mark:	OPCON-15226: Fixed a bug that wiped the entire screen when a filter profile was shared with a role that had the id of 0.
Utilities

:white_check_mark:	OPCON-15504: Small fix in invalid data for SMAUtility schedule.

##### ImpEx2 Web Service

:white_check_mark:	OPCON-15461: Fixed an issue where ImpEx2 did not start up if the database was configured to force encrypted connections.

:white_check_mark:	OPCON-15450: Fixed an issue in ImpEx2 where deploying a schedule with a frequency having the same name but different case in the name deployed the schedule to target with some missing properties and missing job level frequencies.

:white_check_mark:	OPCON-15067: Fixed an issue in Deploy where updating frequency priorities for an existing schedule on the target system, caused a loss of some scheduling options on the frequencies of the newly deployed schedule.
 
## Version 20.6.0

#### 2021 August

##### REST API

:eight_spoked_asterisk:	OPCON-15310: Added the functionality to retrieve LSAM Feedback and complex expression events by using the following endpoint: api/dailyjobs/{dailyJobId}/events

:eight_spoked_asterisk:	OPCON-15309: Added the functionality to create complex expression events by using the following endpoint: api/dailyjobs/{dailyJobId}/events

:eight_spoked_asterisk:	OPCON-15308: Added the functionality to create exit description events by using the following endpoint: api/dailyjobs/{dailyJobId}/events

:eight_spoked_asterisk:	OPCON-15307: Added the functionality to create LSAM Feedback events by using the following endpoint: api/dailyjobs/{dailyJobId}/events

:eight_spoked_asterisk:	OPCON-15306: Added the functionality to retrieve job status and exit code events by using the following endpoint: api/dailyjobs/{dailyJobId}/events

:eight_spoked_asterisk:	OPCON-15297: Added the functionality POST/PUT/DELETE daily job events through the PUT endpoint for daily jobs.

:eight_spoked_asterisk:	OPCON-15296: Added the functionality to retrieve daily job events in the GET endpoint for daily jobs.

:eight_spoked_asterisk:	OPCON-15295: Added the PUT and DELETE endpoints for jobs jobStatus in daily job events.

:eight_spoked_asterisk:	OPCON-15294: Added the Post endpoint for jobs jobStatus in daily job events: api/dailyJobs/{dailyJobId}/events

:eight_spoked_asterisk:	OPCON-14521: Add support for OS2200 job types in Daily Jobs GET and PUT endpoints

:white_check_mark:	OPCON-15437: Fixed an issue where dates submitted through self-service across time zones were being incorrectly parsed as the preceding day.

:white_check_mark:	OPCON-15399: Fixed an issue in Solution Manager / API, where navigating to the schedule build page to build a multi-instance schedule on machine groups resulted in an error.

##### Server

:white_check_mark:	OPCON-15400: Fixed an issue where the subject used in "SendEmail" application was incorrectly sent.

:white_check_mark:	OPCON-12267: Fixed issue with Unknown audit records caused by Notify Handler when a connection is lost.

##### Solution Manager

:eight_spoked_asterisk:	OPCON-15378: Task Details for OS2200 daily jobs can now be consulted / changed from the Daily Job Definition screen.

##### ImpEx2 Web Service

:white_check_mark:	OPCON-15436: Fixed an error with deployment when calendars associated with the schedule or package to be deployed does not exist in target server.

:white_check_mark:	OPCON-15401: Fixed an issue where multiple embedded script versions referenced from jobs in the deployed schedule resulted in null pointer exceptions, as only one of those script versions was getting imported into Deploy.

:white_check_mark:	OPCON-15394: Fixed an issue where global properties in environment variables for a job were not getting extracted into the deploy repository.

:white_check_mark:	OPCON-15385: Fixed an issue in ImpEx2 where the target system's roles/access codes were overwritten with privileges from the source system in Deploy, if a role/access code with the same name existed on the target system.
 
## Version 20.5.0

#### 2021 June

##### Enterprise Manager

:white_check_mark:	OPCON-15278: Fixed an issue where jobs using the Corelation sub-type would display a "String index out of range" error.

##### REST API

:eight_spoked_asterisk:	OPCON-15293: Added a new endpoint, GET api/dailyJobs/{id}/eventTriggers, to retrieve Event Triggers defined for a Daily Job.

:white_check_mark:	OPCON-15300: Removed additional error codes that were coming back with unsuccessful PUT requests to api/dailyJobs.

:white_check_mark:	OPCON-15280: Regular expression pattern in Self Service Requests will no longer be evaluated for empty values.

:white_check_mark:	OPCON-15270: Fixed an issue where Regex was not working with double quotes inside of self-service text variable.

:white_check_mark:	OPCON-15249: Fixed an issue where when updating an Embedded Script job to run on a machine group instead of single machine, an error would be returned.

:white_check_mark:	OPCON-14666: /api/roles offset and limit query string parameters have been fixed.

##### Server

:eight_spoked_asterisk:	OPCON-15016: OpCon now supports Azure SQL Database to host the OpCon database to leverage cloud based infrastructure and benefit from Azure scalability, backup plans and out-of-the-box fault-tolerance. NOTE: Managed Azure SQL instances are currently not supported (Differences: https://docs.microsoft.com/en-us/azure/azure-sql/database/features-comparison). Also for consistency, all new OpCon installations (both, on-prem SQL and Azure SQL) will use the "contained database" setting, which means OpCon users will be defined in the database, and not at the SQL Server level.

##### Solution Manager

:eight_spoked_asterisk:	OPCON-14920: Job Dependencies can now be consulted / changed from the DailyJob Definition screen.

:eight_spoked_asterisk:	OPCON-15112: File Transfer jobs with a source or destination machine of IBMi, z/OS, MCP, and OS2200 can now be consulted / changed from the DailyJob Definition screen.

:white_check_mark:	OPCON-13063: Requesting output for an invalid job in Solution Manager no longer displays an error. The option is now correctly disabled when the job has no output.

##### Utilities

:eight_spoked_asterisk:	OPCON-15335: OpCon now includes a utility that publishes usage data (daily task counts) to the cloud and/or local file. The utility job is set to 'do not schedule' and needs to be updated with suitable arguments and set to build 'released' (it is installed with default arguments). Details of the utility are here: https://github.com/smatechnologies/usage-data

:white_check_mark:	OPCON-15337: Fixed the transaction log backup file in the backup utility scripts to be initialized so it does not keep appending to it and grow forever.

:white_check_mark:	OPCON-12473: Fixed an issue with History.exe to purge/archive the correct amount of records according to the documentation.
ImpEx2 Web Service

:white_check_mark:	OPCON-15339: Added startup check to make sure Impex is using a correct DB schema version. Added new CLI option "--skipVersionValidation" to skip this and continue without the check.

:white_check_mark:	OPCON-15268: Fixed an issue in ImpEx2 where a change in a job's threshold/resource update on 'job status' and 'value' did not get deployed to the target system correctly.

:white_check_mark:	OPCON-15080: Fixed an issue where only one of multiple external dependencies to the same schedule and job were imported into Deploy.

:white_check_mark:	OPCON-15069: Fixed an issue where a multi-instance schedule converted to single instance before deployment to a target system, did not get converted correctly on the target.

:white_check_mark:	OPCON-14985: Fixed an issue in batch deploy where the job sometimes ended in a concurrent modification exception.
 
## Version 20.4.0

#### 2021 May

##### Enterprise Manager

:white_check_mark:	OPCON-15079: Fixed an issue where the "Number of Days to Keep a Service Request Execution" Server Option was unable to be changed.

##### REST API

:eight_spoked_asterisk:	OPCON-14790: Added a new endpoint for adding a job dependency to a daily job, POST api/dailyjobs/{dailyJobId}/dependencies.

:eight_spoked_asterisk:	OPCON-14788: Added a new endpoint for deleting a job dependency on a daily job, DELETE api/dailyjobs/{dailyJobId}/dependencies/{id}.

:eight_spoked_asterisk:	OPCON-14784: The API now supports adding, updating and deleting daily job dependencies alone on a daily job.

##### ImpEx2 Web Service

:white_check_mark:	OPCON-15146: Fixed issue where partial-match transformation rules only applied to the first occurrence in a string

:white_check_mark:	OPCON-15136: Fixed an issue where SAM reused an id for a job instance due to a race condition with Deploy

:white_check_mark:	OPCON-15089: Fixed an issue where wildcard named job and schedule transformation rules that have the same "current value" caused incorrect transformation rules to be applied to them. Also, added suffix wildcard. "`*job`" will match if job/schedule ends with "job". "`j*ob" and "job*`" will continue behaving as normal and will match if the job/schedule starts with "job"

:white_check_mark:	OPCON-15036: Fixed an issue where Thresholds/Resources/Global Properties could sometimes get duplicate entries in the target environment when transformation rules converted source names of those entities to the same target names.
 
## Version 20.3.0

#### 2021 April

##### Enterprise Manager

:white_check_mark:	OPCON-15008: Fixed an issue that prevented creating or opening a job using the Corelation sub-type when using Global Properties.

##### REST API

:eight_spoked_asterisk:	OPCON-14789: Added the ability to modify job dependencies as part of the daily jobs endpoint. Added an endpoint to update an individual job dependencies.

:white_check_mark:	OPCON-15011: Fixed an issue where Self Service would display a "Cannot load Service Request Executions" error for several days after upgrading to OpCon 20 or higher.

:white_check_mark:	OPCON-14843: Fixed an issue where the user's role was removed and the password was changed after attempting to retrieve a token.

##### Server

:white_check_mark:	OPCON-14929: Fixed an issue in Netcom where under heavy communication load with agents, if a message acknowledgement is lost or delayed, Netcom created a bad 'resend' message, which caused issues on the agent side in the tracking file.

##### ImpEx2 Web Service

:white_check_mark:	OPCON-15049: Fixed an issue in ImpEx2 where blank batch users were "missing" in simulations.

:white_check_mark:	OPCON-15030: Fixed an issue in ImpEx2 where obsolete job dependencies in an existing schedule on target system were not getting removed.

:white_check_mark:	OPCON-15023: Fixed an issue that allows Deploy to correctly prefix a schedule with the environment code in events.

:white_check_mark:	OPCON-15010: Fixed an issue where scheduling options of the frequencies were not updated correctly if there was changes to them in the schedule that was deployed.

:white_check_mark:	OPCON-15001: Fixed an issue where deploying a schedule with no documentation would not remove any existing documentation.

:white_check_mark:	OPCON-15000: Fixed an issue in ImpEx2 service where checking available machine features sometimes resulted in a null pointer exception.

:white_check_mark:	OPCON-14839: Fixed an issue in ImpEx2 to prevent unexpected data loss when job threshold/resource dependencies or events were modified in the schedule that was deployed.
 
## Version 20.2.0

#### 2021 February

##### Documentation

:eight_spoked_asterisk:	OPCON-14481: Added Overview chapter to the OpCon Installation section of documentation. The new chapter contains updates to the installation and update process and highlights any breaking changes requiring action as part of upgrading.

##### Enterprise Manager

:white_check_mark:	OPCON-14816: Fixed an issue where a SQL job using the SQL DTExec job action did not display the batch user that the job ran as.

:white_check_mark:	OPCON-14777: Fixed an issue where the machine options "Use Schedule Instance Machine" and "Run on Least Tasked Machine" were not save-able on Windows and UNIX jobs.

##### General

:white_check_mark:	OPCON-14583: Updated the SMA Customer Community link in the user interfaces.

##### Installation

:white_check_mark:	OPCON-14847: Added validation during the REST API startup routine to ensure the database has been properly updated.

:eight_spoked_asterisk:	OPCON-14889: OpCon is now self-contained with .Net Core dependencies, so the system does not require .Net Core installed on it to install and run OpCon Core services.

:eight_spoked_asterisk:	OPCON-14824: OpCon Deploy's ImpEx2 server component now has its own installer and will be available with the OpCon package with the same release cadence. This makes it easy to upgrade ImpEx2 only when needed without having to upgrade OpCon or Deploy client. It also makes it easy to upgrade Deploy client without upgrading ImpEx2 or OpCon.

:white_check_mark:	OPCON-14120: Fixed an issue in job dependencies for the automatically installed SMA Utility schedule if jobs were converted to multi-instance jobs.

##### REST API

:eight_spoked_asterisk:	OPCON-14785: Added a new endpoint for retrieving daily job dependencies.

:white_check_mark:	OPCON-14886: Fixed an issue in self signed certificate generation where hostname did not match with the name on the certificate and it gave NET::ERR_CERT_COMMON_NAME_INVALID error when trying to browse Solution Manager.

:white_check_mark:	OPCON-14871: Fixed NullReference exception with 20.0 migration when Service Requests were missing information.

:white_check_mark:	OPCON-14808: Fixed an issue where acknowledging a collection of escalating notifications with multiple notifications already acknowledged gave a 500 response code.

:white_check_mark:	OPCON-14800: Fixed an issue in OpCon API where a user could not add instance properties on a file transfer job and any existing ones were removed.

##### Solution Manager

:eight_spoked_asterisk:	OPCON-14906: Added a Property Selector Dialog for easily searching and selecting a property.

:eight_spoked_asterisk:	OPCON-14851: Add Button to navigate in context on the Processes Page to quickly consult the Active Jobs associated to an Agent.

:eight_spoked_asterisk:	OPCON-14818: Buttons like Save and Cancel are now always visible. Avoid to force the user to scroll down to perform an action.

:eight_spoked_asterisk:	OPCON-14774: DailyJob Definition Page section menu redesigned. It was moved on the left, is always visible and can be reduced

:eight_spoked_asterisk:	OPCON-14770: Added the number of pending and exhausted notifications to the escalation indicator. Escalated notifications may now be acknowledged even if any of the selected notifications were already acknowledged.

:eight_spoked_asterisk:	OPCON-14752: Updated the Property Selector to show all properties, Global, Job Instance, Schedule Instance, and Machine Instance. An icon was added to differentiate the type. Properties may also be filtered by value in addition to name.

:eight_spoked_asterisk:	OPCON-14605: Added Filter Profiles to the Operation Summary page for viewing statistics directly in the dashboard. Added the ability to navigate to the processes page with the selected Filter Profile already applied.

:eight_spoked_asterisk:	OPCON-12005: Added Resource Update and Threshold Update sections to the Daily Job Definition page.

:white_check_mark:	OPCON-14949: Fixed an issue where a Schedule Build request could be submitted for the incorrect day if opening the date picker but selecting no values.

:white_check_mark:	OPCON-14903: Fixed an issue in Agents page where right panel actions weren't enabled after a page refresh.

:white_check_mark:	OPCON-14875: Fixed an issue where environment variable should not contain "=" character.

:white_check_mark:	OPCON-14864: Fixed an issue in Resource Dependency read only mode where condition was displayed in red instead of green when total resource number was equal to required resource.

:white_check_mark:	OPCON-14860: Fixed an issue in Schedule/ Resource right panel in PERT, where dependent / update job list was not filtered by the selected Schedule / Resource.

:white_check_mark:	OPCON-14791: Fixed an issue where clicking on a Vision Card with an offset redirects on the wrong Date in the Operation Processes Page.

##### ImpEx2 Web Service

:eight_spoked_asterisk:	OPCON-14859: Updated ImpEx2 service (used by Deploy) to include SQL agent job enhancements - using Win Auth for package execution (DTExec) and running Integration Services Server packages - as part of the deployment to OpCon environments.

:white_check_mark:	OPCON-14898: Fixed an issue in ImpEx2 where deploying a schedule with a department that has no role assigned threw an exception.

:white_check_mark:	OPCON-14830: Improved error message content returned to Deploy when the OpCon API is unreachable.
 
## Version 20.1.0

#### 2021 January

##### Enterprise Manager

:white_check_mark:	OPCON-14658: Fixed an issue where the Self Service navigation item would not display for some users.

##### Installation

:eight_spoked_asterisk:	OPCON-14761: Added a verification step to the SMA OpCon Install that validates SMA OpCon Database Scripts, SMA OpCon Documentation, SMA OpCon SAM, and SMA OpCon Solution Manager have been uninstalled before proceeding.

:white_check_mark:	OPCON-14750: The OpCon installer now checks to see if .Net Core 3.1 is installed on the system, required by the core services, and if not, installs it.

:white_check_mark:	OPCON-14732: Fixed an issue where the database connection information was not editable when doing a Repair/Modify.
:white_check_mark:	OPCON-14684: Fixed an issue where database scripting variables would be reset to default values when performing an upgrade.

:white_check_mark:	OPCON-14657: Updated the database connection screen to re-use the database server and database name entered in the database set-up screen during new installations.

:white_check_mark:	OPCON-14600: Fixed an issue where the SMA OpCon install would not remember SQL authentication selections when an attempt to modify the installation was made.

:white_check_mark:	OPCON-14576: Fixed an issue where the SMA OpCon install would use an incorrect directory for data files when installing on a non-system drive.

##### REST API

:eight_spoked_asterisk:	OPCON-14680: Added the ability for the OpCon API to filter machines by file transfer role. The criterial "fileTransferRole"accepts values of "both", "none", "source", "destination", and "any".

:eight_spoked_asterisk:	OPCON-14670: The OpCon API can now create new incident tickets in the Daily Job Definitions.

:eight_spoked_asterisk:	OPCON-14655: The OpCon API now provides functionality to edit file transfer job details for a daily job having Windows/UNIX machines.

:eight_spoked_asterisk:	OPCON-14557: The OpCon API now provides functionality to view file transfer job details for a daily job.

:white_check_mark:	OPCON-14713: Fixed an issue where Service Request event definitions would be incorrect when using a system variable more than once in the definition.

:white_check_mark:	OPCON-14663: Fixed an issue where changing daily job statuses as a user with no defined external token would throw a System.NullReferenceException error.

:white_check_mark:	OPCON-14649: Fixed an issue where a user without user management privileges would receive a "The user specified in the request does not exist." error when executing a service request defined with the Submit events as ocadm option enabled.

:white_check_mark:	OPCON-14611: Fixed an issue where retrieving job summary information for a job with a machine group would fail with a "'TRIM' is not a recognized built-in function name" error on SQL Server versions lower than SQL Server 2017.

:white_check_mark:	OPCON-14587: Fixed an issue where retrieving Job Output for a previous run of a job would generate an error when the job was recurring and currently in a waiting status.

:white_check_mark:	OPCON-14238: Removed the name of a role when it is displayed in Vision Cards or Service Requests when the user does not have permission to that role.

##### Server

:white_check_mark:	OPCON-14516: Fixed a performance issue with schedule builds that contain large amounts of sub-schedules.

:white_check_mark:	OPCON-14464: Fixed an issue where an embedded script with a line ending in backslash gave syntax errors when running it on agent.

##### Solution Manager

:eight_spoked_asterisk:	OPCON-14654: The Operations Processes and Agents grids can be modified to only display the desired columns for Schedules, Jobs, or Machines. This selection is automatically saved in the user's profile.

:eight_spoked_asterisk:	OPCON-14575: Escalated notifications can now be acknowledged from Solution Manager or through the OpCon API. A pop-up notification will appear within Solution Manager when new notifications enter escalation. An indicator was added to the bar at the bottom of the screen by the Agent Status icon when there are escalating notifications which need to be acknowledge. Finally a dialog was added allowing users to acknowledge the escalated notifications.

:eight_spoked_asterisk:	OPCON-14574: File Transfer Jobs can now be consulted / changed from the DailyJob Definition screen.

:eight_spoked_asterisk:	OPCON-12004: Expression Dependencies can now be consulted / changed from the DailyJob Definition screen.

:eight_spoked_asterisk:	OPCON-12003: Threshold and Resource Dependencies can now be consulted / changed from the DailyJob Definition screen.

:eight_spoked_asterisk:	OPCON-11031: UNIX Jobs can now be consulted / changed from the DailyJob Definition screen.

:white_check_mark:	OPCON-14674: Fixed a cosmetic issue where NumberField doesn't appear correcty in some situations

:white_check_mark:	OPCON-14597: Fixed an issue in Schedule Build where the schedules would not build "On Hold" even when the option was selected.

:white_check_mark:	OPCON-14584: Fixed an issue where validation was not case-insensitive and allowed the same name to be used for Vision actions, frequencies, and remote instances.

:white_check_mark:	OPCON-14567: Fixed an issue in Schedule Build where the pre-defined properties on a Named Instance schedule were not able to be updated.
 
## Version 20.00.00

#### 2020 November

##### Docker

:eight_spoked_asterisk:	OPCON-14366: The SMASynchSAP utility is now available in the "opcon-server" image.

:eight_spoked_asterisk:	OPCON-14189: The SMAHoliday utility is now available in the "opcon-server" image.

:eight_spoked_asterisk:	OPCON-14186: The Chronoman utility is now available in the "opcon-server" image.

:eight_spoked_asterisk:	OPCON-13578: The "opcon-server" image supports four new environmental variables for changing regional settings. You can find out more in the Configuration section at https://hub.docker.com/r/smatechnologies/opcon-server. The new variables are:

LANG_CULTURE

NUMERIC_CULTURE

MONETARY_CULTURE

DATEFORMAT_CULTURE

:eight_spoked_asterisk:	OPCON-12671: The Windows Event Log, Network Message, SNMP Trap, SPO Event Report, and Run Command notification types are now correctly disabled when running in Docker. Existing notifications of these types will be disabled if upgrading from Windows to Docker.

:white_check_mark:	OPCON-14485: The following environment variables have been deprecated for the "opcon-server" image:

API_USES_TLS

SM_WEB_SSL

SM_WEB_PORT

SM_DOC_DIR_PATH

SM_SYSTEM_DEBUG

SM_SYSTEM_DEBUG_API

SM_THEME

SM_ENVIRONMENT_NAME

SM_SYSTEM_LOG_MAXHISTORY

SM_SETUP

:white_check_mark:	OPCON-13307: The "opcon-server" image was updated to Ubuntu 18.04.
Enterprise Manager

:eight_spoked_asterisk:	OPCON-13597: Updated the SAP Login dialog for SAP jobs to be resizable.

:eight_spoked_asterisk:	OPCON-13576: Added "Terms of Use" link to the Login Window.

:eight_spoked_asterisk:	OPCON-13032: Added the ability to open Solution Manager pages from Enterprise Manager. A new General Server Option, Solution Manager URL, enables this functionality.

:eight_spoked_asterisk:	OPCON-12679: SQL Agent jobs using the MS SQL DTExec job action can now run SSIS packages on the Integration Services Server (ISSERVER).

:eight_spoked_asterisk:	OPCON-12678: SQL Agent jobs can now run SSIS packages with MS SQL DTExec job action using Windows Authentication.

:white_check_mark:	OPCON-14227: Fixed an issue where an exception would be thrown if users attempted to log out after their session timed out.

:white_check_mark:	OPCON-14013: Fixed an issue where added properties would incorrectly duplicate when defining instance properties on a named instance schedule.

:white_check_mark:	OPCON-13607: Fixed an issue where a java.sql.SQLException could be thrown after a user session was logged out or timed out.

:white_check_mark:	OPCON-13150: Added a warning to the SAP Query dialog informing users that when Search Criteria only contains a wildcard (`*`), additional text should be used (e.g., `XBP*`) in order to limit results.

:white_check_mark:	OPCON-13054: Fixed an issue where values were not being updated and saved correctly on MCP Run Job definitions when using System Properties.

:white_check_mark:	OPCON-13051: Fixed an issue with the UNIX Job Sub-Type Episys: Find Report from RSJ Output where using an ' (apostrophe/single quote) in the Report Name would cause a job failure.

:white_check_mark:	OPCON-12779: Fixed an issue where forecasting Even Weeks or Odd Weeks frequencies in the Enterprise Manager would incorrectly show the wrong day as the start of the week.

:white_check_mark:	OPCON-12766: Fixed an issue with Escalation Acknowledgement where sometimes the wrong year was displayed.

:white_check_mark:	OPCON-12674: The Arguments field in MCP Job Details now allows multiple commas.

:white_check_mark:	OPCON-12050: Fixed an issue where the View JCL function on z/OS jobs was using the incorrect port.

:white_check_mark:	OPCON-11625: Fixed an issue in Workflow Designer where adding a dependency to a job with "Use Schedule Instance Machine" as the machine selection incorrectly required the Role_ocadm role.

:white_check_mark:	OPCON-11608: Fixed an issue when extracting Audit data to a csv file where the Name, Old Value, and New Value fields were not properly escaping quotes.

:white_check_mark:	OPCON-11256: Updated the path to the correct location for the embedded Java Runtime Environment with Schedule Extract.

:white_check_mark:	OPCON-10815: Fixed an issue where the Escalation Add/Edit Rule dialog would not display all fields properly.

:white_check_mark:	OPCON-10280: Fixed an issue where renaming a UNIX Batch User would incorrectly update all jobs that used the old group to the new group value.

:white_check_mark:	OPCON-10275: Fixed an issue where resetting the password of a user with XML characters in it would cause exceptions in SMANotifyHandler.

:white_check_mark:	OPCON-10049: Fixed an issue where OS 2200 jobs could not be saved without providing an Element Name, even when ECL was stored in a file.

:white_check_mark:	OPCON-9699: Fixed an issue where Schedule Extract could not extract the following event types: 

$CALENDAR:ADD, 

$CALENDAR:DEL, 

$JOBMASTER:TAGDEL, 

$JOBMASTER:TAGADD,

$JOBMASTER:BUILDSTATE

:white_check_mark:	OPCON-9163: Fixed an issue where the "SAP Machine" menu option in the Machines editor would not display correctly or would be disabled for SAP machine types.

:white_check_mark:	OPCON-9122: Fixed an issue where a Conflict message was logged when right-clicking a schedule in an Operations view.

:white_check_mark:	OPCON-8429: Fixed an issue where Windows Command: File Copy and Command: File Delete jobs would not save the Other Options value correctly.

:white_check_mark:	OPCON-8428: Fixed an issue where changing a job sub-type would retain hidden settings from a prior job definition.

:white_check_mark:	OPCON-6194: Fixed an issue where the "Delete Source File" option was incorrectly made available for File Transfer jobs running on machines that did not support that functionality.

:white_check_mark:	OPCON-6118: Fixed an issue where the "Modify Jobs in Daily Schedules" Departmental Function Privilege did not allow users to Edit Daily Schedules as described in the documentation.
General

:eight_spoked_asterisk:	OPCON-14315: OpCon server components are now able to run on a FIPS enabled server.

:eight_spoked_asterisk:	OPCON-13472: Added three new Password Requirements Server Options:

Minimum number of lower-case characters required

Minimum number of upper-case characters required

Minimum number of days between password changes

:eight_spoked_asterisk:	OPCON-13445: Updated the Unique Task Counts report to include job counts regardless of whether or not a task-based license is in place.

:eight_spoked_asterisk:	OPCON-12954: Added a new General Server Option, Number of Days to Keep a Service Request Execution, which defines the number of days to retain service request execution history. SMA Request Router was updated to handle deleting Service Request Executions based on the new Server Option and delete any OPCONRSP records that do not have a matching associated Service Request Execution.

:eight_spoked_asterisk:	OPCON-11028: The default password policy for new installations has been modified to be more secure. The following default values were changed:

Number of passwords to retain in history. 0 to 10.

Requires numeric characters. False to True.

Requires alpha characters. False to True.

Requires special characters. False to True.

Number of days a password is valid. 0 to 365.

Number of failed logon attempts before account lockout. 0 to 5.

:eight_spoked_asterisk:	OPCON-13165: External Event Passwords have been rebranded to External Tokens. Additionally, several large updates have been made:

External Token values will now be salted and hashed for storage in the database.

The ability to use External Tokens may now be disabled. By default, this will be disabled for all new users.

External Tokens are now system-generated values. Pre-existing users will not have their existing token values updated, but if the value needs to be changed or for any new user this will no longer be a user provided value.

The new system-generated External Tokens will be unique identifiers. When this option is selected, the External Token may be used as a token for the SMA OpCon RestAPI and no longer require authentication with an interactive username and password.

The ability to generate a fixed-length password has been provided for backwards compatibility on Agents that do not support unique identifiers as a value. The value will still be system-generated.

:white_check_mark:	OPCON-14490: Fixed an issue where Start Time Calculator would incorrectly produce audit records when updating estimated start times. Database upgrades will no longer attempt to remove these invalid records.

:white_check_mark:	OPCON-12030: Fixed an issue where dependencies could point to an incorrect instance when converting between a regular schedule and a multi-instance schedule.

##### Installation

:eight_spoked_asterisk:	OPCON-14245: There is a new installer, SMA OpCon. This installer takes the place of SMA OpCon Database Scripts, SMA OpCon SAM, and SMA OpCon Solution Manager. These three components should be uninstalled during an upgrade prior to installing SMA OpCon. The SMA OpCon Documentation install has also been decommissioned and should be uninstalled during upgrade.

:eight_spoked_asterisk:	OPCON-13924: Updated the default Maximum SQL Transaction Log file size from 1 GB to 10 GB.

:eight_spoked_asterisk:	OPCON-12981: The SMAUtility Schedule is now installed during new OpCon database installations. Pre-existing databases will not contain any modifications. Updates include:
Embedded the SMAUtility scripts in the database

Moved the user name and password for SMAUtility SQL scripts from the scripts to job arguments

Moved the SQL script output to the job output file

Added the following global properties: DB_SERVER_NAME, SqlMaintUser, SqlMaintPassword, DatabaseName, PathToFullBackupFile, and PathToTranLogBackupFile. The value of these global properties must be updated prior to running the schedule.

The Report File Cleanup job has been updated to have a Job Build Status of Do Not Schedule
SMA DBCC Index Defrag job frequency has been updated to run every Sunday

:white_check_mark:	OPCON-14033: Fixed an issue caused in the database upgrade due to a rare duplicate dependency of a multi-instance schedule or sub-schedule.
Operations

:eight_spoked_asterisk:	OPCON-14542: The database scripts for SMAUtility maintenance jobs will no longer be distributed beginning with the OpCon 21.00.00 (LTS) release. The scripts will be added as embedded scripts on new installations and will be available at https://github.com/smatechnologies/smautility-sql-scripts for upgrades.

:eight_spoked_asterisk:	OPCON-14541: Documentation is now available on our online site https://help.smatechnologies.com. Solution Manager and Enterprise Manager have been updated to point to their version of the OpCon documentation. Web documentation will no longer be distributed as part of a release distribution. PDFs will continue to be available as part of the release distribution.

:eight_spoked_asterisk:	OPCON-14195: zVSE Agent is now officially decommissioned and is no longer distributed.

##### REST API

:eight_spoked_asterisk:	OPCON-14389: Added session log file rotation based on size and date.

:eight_spoked_asterisk:	OPCON-14240: The OpCon API now exposes a new end point to fetch, update and delete incident ticket information on a daily job.

:eight_spoked_asterisk:	OPCON-14164: Updated the SMA OpCon RestAPI configuration file to accept log levels 0 - 4 and removed superfluous logging messages from Vision.

:eight_spoked_asterisk:	OPCON-14147: The SMA OpCon RestAPI only accepts HTTPS connections. The default port for new installations is now 443.
:eight_spoked_asterisk:	OPCON-14127: Added a new endpoint, GET api/dailyjobs/{id}/status, that returns the status of the specified job.

:eight_spoked_asterisk:	OPCON-14059: Return a new property, uid, when doing a GET api/scheduleactions/{id} for jobs successfuly added when doing a POST api/scheduleactions and where {id} is the id returned in the POST.

:eight_spoked_asterisk:	OPCON-13894: Added a new endpoint, POST api/serviceRequestExecutions, for submitting service requests.

:eight_spoked_asterisk:	OPCON-13529: Added the version number to the SMA OpCon RestAPI log at startup.

:eight_spoked_asterisk:	OPCON-13331: A license is no longer required to use the REST API.

:eight_spoked_asterisk:	OPCON-14135: Added new internal endpoints for session logs with GET/POST methods used to create log files, get a list of log files, and get log file content.

:eight_spoked_asterisk:	OPCON-13585: Added new endpoint for vision cards with PUT/POST/DELETE methods

:white_check_mark:	OPCON-14415: Users with no roles are allowed to PUT on their own user object with an empty roles collection.

:white_check_mark:	OPCON-14368: SMA OpCon RestAPI setcertificate command now works correctly with using a custom certificate.

:white_check_mark:	OPCON-14243: Modified the GET api/remoteInstances endpoint to hide the database connection password in the response.

:white_check_mark:	OPCON-14132: Fixed an issue with the SMA OpCon RestAPI where it would throw an exception when pulling a high volume of jobs with a specified status for a specified date.

:white_check_mark:	OPCON-13882: Fixed an issue with the REST SMA OpCon RestAPI Vision service where gathering daily job statistics would cause performance issues.

:white_check_mark:	OPCON-13594: Fixed an issue where a user with Role_ocadm could not update another user with Role_ocadm privileges.

:white_check_mark:	OPCON-13393: TLS 1.0 will no longer be supported with the SMA OpCon RestAPI.

:white_check_mark:	OPCON-13317: Fixed an issue where unknown user records appeared in audit when an expired account has been used to log in to the API. Expired users are now prevented from performing any other action but GET/PUT on their respective user.

:white_check_mark:	OPCON-12965: Fixed an issue in the SMA OpCon RestAPI where updating embedded script jobs with certain users caused the incorrect error message of "Job with Id {id} is not an embedded script job".

:white_check_mark:	OPCON-12925: Fixed an issue in the SMA OpCon RestAPI when requesting job output on a job that had run multiple times and was currently in a waiting status caused an error message of "Job not yet running".

:white_check_mark:	OPCON-12904: Fixed the ordering of jobHistories queries when using offset parameter.

:white_check_mark:	OPCON-12737: Fixed an issue in the SMA OpCon RestAPI where updating the advanced failure criteria of a daily job would not show the correct error when the "EQ" operator is preceded by a value other than "OR".

:white_check_mark:	OPCON-12709: Fixed an issue in the SMA OpCon RestAPI where updating a daily job would incorrectly allow no machine to be provided for the job.

:white_check_mark:	OPCON-12653: Fixed an issue where Embedded Script Jobs could be updated to run on a Machine Group containing Machines without Embedded Script Privileges.

##### Server

:eight_spoked_asterisk:	OPCON-14204: Updated prioritization of unprocessed work for SMA Request Router. Job output requests and manual schedule builds will now take priority over automated tasks such as scheduled builds.

:eight_spoked_asterisk:	OPCON-14063: Added more clarity to the error message if SMALDAPMon is unable to access user account information.

:eight_spoked_asterisk:	OPCON-13927: Added the UniqueId property of daily jobs to the records stored in history after jobs complete.

:eight_spoked_asterisk:	OPCON-12983: The Maintain UNIX Ouptut Files job has been removed from the SMAUtility Schedule.

:eight_spoked_asterisk:	OPCON-12982: The Schedule Log Cleanup job has been removed from the SMAUtility Schedule. The removal of schedule build logs is now controlled by a new Logging Server Option: Maximum number of days Schedule Build logs should be kept.

:eight_spoked_asterisk:	OPCON-12245: Updated the maximum machines allowed per SMANetCom instance to 2048 and no longer allow this value to be exceeded.

:eight_spoked_asterisk:	OPCON-12001: Updated SMADDI to add two new job status events, $JOB:FIXED and $JOB:REVIEW.

:eight_spoked_asterisk:	OPCON-12685: SQL Server 2019 is now supported for the OpCon database.

:white_check_mark:	OPCON-14341: Fixed an issue where schedule permission validation for schedule builds and deletes could cause slowness or database errors.

:white_check_mark:	OPCON-14163: Fixed an issue where the SMTP setting's user was being impersonated to attach local file attachments to the notification email instead of only impersonating for UNC files.

:white_check_mark:	OPCON-14097: Fixed an issue in SMADDI where the validation of the predecessor job name when a job dependency was added included the "Job Name Like" option.

:white_check_mark:	OPCON-14038: Fixed an issue in SMANetCom where log file locks sometimes are never acquired in an agent communication thread and no further messages are processed for that agent.

:white_check_mark:	OPCON-14003: Fixed an issue in SAM where incorrect syntax in schedule/job instance properties in a property add event prevented SAM from checking user privileges, instead creating a global property.

:white_check_mark:	OPCON-14001: Fixed an issue with SMALDAPMon where it would produce concurrency errors when updating users.

:white_check_mark:	OPCON-13993: Fixed a bug where the Exclude Id parameter in $NOTIFY events was being treated as "N" when the value sent was "Y" with one or more trailing spaces.

:white_check_mark:	OPCON-13943: Fixed an issue with SAM where OS 2200 job start messages were sent with incorrect non-XML job information.

:white_check_mark:	OPCON-13906: Fixed an issue with SMASchedMan where logging was causing significant performance issues.

:white_check_mark:	OPCON-13658: Fixed an issue in Start Time Calculator, where if an error happened when adding multiple predecessors with the same name, all other jobs had invalid estimated start times.

:white_check_mark:	OPCON-13621: Fixed an issue with SMASchedMan where named instance schedules were built once for each property defined.

:white_check_mark:	OPCON-13466: Fixed an issue in SMANetCom where sometimes data sent by an agent failed to be received by SMANetCom in a timely manner and caused delays in job status updates.

:white_check_mark:	OPCON-13379: Fixed an issue where Remote Instance properties would resolve property values from the local instance of OpCon.

:white_check_mark:	OPCON-13200: Fixed an issue in SMALDAPMon where the configuration option 'EnableSsl' would not work correctly.

:white_check_mark:	OPCON-13163: Fixed an issue with SMALDAPMon where the Domain setting would return an "Invalid Credentials" error.

:white_check_mark:	OPCON-13139: Fixed an issue in SMALDAPMon where users with commas in their display name and other un-escaped characters would cause errors during synchronization.

:white_check_mark:	OPCON-13130: Fixed an issue where SMA Notify Hander would shut down if a database error happened at startup.

:white_check_mark:	OPCON-13081: Fixed an issue where SMALDAPMon could not find groups that contained escape characters. Additionally enhanced log messaging to remove duplicate messages when adding new users and always writing a shutdown requested message.

:white_check_mark:	OPCON-13042: Fixed an issue in SMA Notify Handler where Short Text Message notifications were generating an encoding error.

:white_check_mark:	OPCON-12998: Fixed an issue in SMA Notify Handler where the user's profile was not loaded correctly after impersonation to run command.

:white_check_mark:	OPCON-12952: Fixed an issue with SAM where the displayed number of restarts on a job was incorrect.

:white_check_mark:	OPCON-12920: Fixed an issue where an unclear error message was thrown by BIRTPROCESSOR when passing a value other than 0 when a parameter was used with ">".

:white_check_mark:	OPCON-12900: Fixed an issue where frequency priority was incorrectly set during a job copy or job move to a schedule with frequencies.

:white_check_mark:	OPCON-12899: Fixed an issue where agent-specific fields were incorrectly copied during a Machine copy.

:white_check_mark:	OPCON-12898: Fixed an issue in SMASchedMan where $SCHEDULE:BUILD events with a `[[$NOW]]` schedule date parameter would sometimes build on an incorrect date.

:white_check_mark:	OPCON-12763: Fixed an issue in SMALSAMDataRetriever where it sometimes kept running in memory after completing work.

:white_check_mark:	OPCON-12668: Fixed an issue where a multi-instance schedule would not get built if it contained special characters in the named instance definition.

:white_check_mark:	OPCON-12573: Fixed an issue where user credentials were logged when an event was submitted with XML characters in a field.

:white_check_mark:	OPCON-12388: Fixed an issue with SMA Notify Handler notifications where "\r", "\n", and "\t" were treated as additional text instead of formatting.

:white_check_mark:	OPCON-11337: Fixed an issue with SMA Dynamic Data Input where schedules could not be created after a SKDID of 32770 had been reached.

:white_check_mark:	OPCON-9246: Fixed an issue with the Property Expressions API Syntax where the Replace function could not replace a backslash (`\`) unless another character was specified with the backslash. A new property expression function, ReplaceBackslashes, has been created with two arguments, the string to search and the replacement character.

##### Solution Manager

:eight_spoked_asterisk:	OPCON-14286: The Vision Settings page and all of its functionality has been replaced with "Admin Mode" in Vision Live. The ability to edit an individual card and its children is now available rather than having to update the entire Vision Workspace with each change.

:eight_spoked_asterisk:	OPCON-14141: Added a new Server Option, Enable Windows Authentication, that controls if the ability to log in with windows authentication to Solution Manager is available. This setting needs to be updated to true to continue using after upgrading to 20.00.

:eight_spoked_asterisk:	OPCON-14036: Solution Manager will now be installed as part of the SMA OpCon RestAPI. The SMA OpCon RestAPI web server will also act as the web server for Solution Manager. The two components will share a port and TLS settings, meaning that either the address for either Solution Manager or the RestAPI must change and be updated where it is in use. Solution Manager will be available at https://{hostname}:{port} and the RestAPI at https://{hostname}:{port}/api where port is what was selected as part of the installation.

:eight_spoked_asterisk:	OPCON-13577: Added "Terms of Use" link to the Login Screen.

:eight_spoked_asterisk:	OPCON-13371: A migration page was added for first login after an upgrade. Custom date patterns for service request inputs, RegEx patterns for service request inputs, or an Operation filter profile that cannot be parsed may all require migration. The migration action must be performed by the ocadm user.

:eight_spoked_asterisk:	OPCON-13251: Revamped the Named Instances form on the Instance Definition step of Schedule Build.

:eight_spoked_asterisk:	OPCON-13249: Job Configuration has been renamed to Daily Job definition. The following updates were made to Daily Job definition:
On Windows, the Execute Program: Prerun input is hidden when not defined.
Added additional form validation.

:eight_spoked_asterisk:	OPCON-13247: Job Output Viewer is now a dialog.

:eight_spoked_asterisk:	OPCON-13242: Documentation is no longer provided internally. It is now directly accessible from the internet as online help.

:eight_spoked_asterisk:	OPCON-13241: A new button is available to select Windows Authentication on the login page when it is enabled.

:eight_spoked_asterisk:	OPCON-13237: The setup page has been removed due to the combining Solution Manager with the SMA OpCon RestAPI. The remaining setup and configuration options are now handled in the Application Settings area by a user with Role_ocadm privileges.

:eight_spoked_asterisk:	OPCON-13224: Users now have the ability to edit Vision cards that do not contain a role they possess. The Role_ocadm role has been removed from the role selection because it is automatically included on all Vision cards.

:eight_spoked_asterisk:	OPCON-13223: Vision Health has an updated layout on smaller displays. A breadcrumb was added to the bottom-left of the page to show selected cards. Vision Health Diagnostic page is now visible for users with the "View Vision Workspace" functional privilege.

:eight_spoked_asterisk:	OPCON-13221: Cross instance navigation using Vision cards requires each OpCon environment to be running OpCon 20 or higher.

:eight_spoked_asterisk:	OPCON-13208: The Service Request OpCon Event Editor and Input Variable editors are now dialogs instead of dedicated pages. The dialog appears with the rest of the button's content in the background. This is helpful when updating these fields and is quicker as you navigate between events or inputs. SelfServiceRequest Date Input Variable: Date Output Formatting changed from Java Date Pattern to Javascript Moment Date Pattern. SelfServiceRequest Text/TextCollection Input Variable: Validation Regex changed from Java Regex Pattern to Javascript Regex Pattern.

:eight_spoked_asterisk:	OPCON-13205: The URL has changed for Service Request Executions. A Service Request may be executed by directly accessing this URL.

:eight_spoked_asterisk:	OPCON-13002: The URL for Operation Processes has been changed. All selections are represented in the address and providing an address with selections will automatically apply them when the page loads. The syntax for providing filter profiles has changed but operates in the same way as other selections.

:eight_spoked_asterisk:	OPCON-12837: Self Service added a few features simplifying the creation of button:

A preview button was added to the edit screen which displays the Custom HTML entered. This preview button dynamically updates as the HTML string is modified. This allows you to verify the button appearance before saving the changes.

A date pattern checker was added to the user input field's date type. This helps validate the date format entered resolves to the expected value.

A regex pattern checker was added the input fields where regex is allowed. This helps validate the regex entered resolves to the expected value.

The ocadm role is hidden from the granted/revoked screen and is granted by default.
:eight_spoked_asterisk:	OPCON-12836: Right-clicking a row in an Operations Process grid will select the row and open or close the side panel. The ability to hide and show columns in the grid has been removed.

:eight_spoked_asterisk:	OPCON-12834: The Profile screen has been expanded to contain application and user settings making these settings more accessible. A few of the parameters which are now configurable within these screes are: language, date/time formats, refresh intervals, debug settings, environment name, theme, windows authentication, and Vision's warning settings.

:eight_spoked_asterisk:	OPCON-12833: When the User Account's session expires, a login dialog is displayed which allows the user to log back in. The behavior in previous releases was to exit the current screen moving back to the login screen.
:eight_spoked_asterisk:	OPCON-12649: As a part of the Solution Manager rewrite, we made several general updates:

Visual components such as Forms, EditLists and Switches have been redesigned.

The Solution Manager URL is now updated as you select certain items in the screen (filters in Operation or expanding specific fields in the Daily Job Definition). This allows users to share the URL with others showing the exact screen they are viewing. 

It also allows users to bookmark the screen to save a common view.

The Notification Center has been removed due to lack of use.

Internet Explorer 11 is no longer supported.


### Version 20.0.27

#### 2023 October

##### Server

:white_check_mark:	OPCON-22276: Removed verbose-level log messages that wrote the raw event text and had the potential to write sensitive data.

:white_check_mark:	OPCON-22394: Fixed an issue in OpCon services where a new license file dropped in, was not getting picked up and OpCon kept using the old license file. This does not affect the working of the system in any way; only the application of a new license. NOTE: This only applies if you are on an LTS release and on versions 22.0.5 and greater, or 21.0.17 and greater, or 20.0.22 and greater.
 
### Version 20.0.26

#### 2023 October

##### Solution Manager

:white_check_mark:	OPCON-21755: Changed authentication error message to: "We’re having trouble logging you in, please contact your administrator if the problem persists."
 
### Version 20.0.25

#### 2023 September

##### Installation

:white_check_mark:	OPCON-17338: Modified SMA Utility SQL scripts to verify existence of script type and runner before inserting new record. This will avoid duplicate values in the database.

##### Solution Manager

:white_check_mark:	OPCON-17189: Modified Job Status component to show correct job status. This will allow the users to view correct job status when selecting a job in PERT or in Processes.

:white_check_mark:	OPCON-20654: Updated the Duration column on the Processes page to update every 30 seconds and display seconds.

##### REST API

:white_check_mark:	OPCON-16320: Vision Card using Remote Session now updates to show correct card information.

##### ImpEx2 Web Service

:white_check_mark:	OPCON-21194: Duplicate jobs are created due to case sensitivity. The keys used during existing job matches changed to uppercase to ensure consistent checking avoiding case sensitivity problems. All calls to extract objects from the database have also been updated to ignore case sensitivity.

:white_check_mark:	OPCON-21515: During schedule deployment when schedule exists, duplicate event records for schedules and jobs can be created. The correction checks for duplicate event records that could be created due to schedule transformation and adjusted the comparison key adding the frequency name to ensure duplicate events are not added to the JEVENTS table.
 
### Version 20.0.24

#### 2023 August

##### Server

:white_check_mark:	OPCON-15037: Fixed an issue with the estimated start time of jobs that depend on multi-instance jobs with instance properties.

:white_check_mark:	OPCON-18405: Modified Netcom to log error and shutdown when SMANetcom.log is not present or when there is no permission to the folder containing it.

##### Solution Manager

:white_check_mark:	OPCON-21144: Fixed an issue in Self Service where comma was reported as invalid character when it was present in characters to strip.

:white_check_mark:	OPCON-21232: Fixed an issue in Self Service where error would happen after submitting the service request if user input type was Master Job.

:white_check_mark:	OPCON-21333: Fixed an issue in Self Service where characters to strip were not working as intended.

##### REST API

:white_check_mark:	OPCON-21489: Fixed a performance issue in the OpCon API where a container job timed out fetching details if there were a large number of schedules built in daily tables.
 
### Version 20.0.23

#### 2023 July

##### ImpEx2 Web Service

:white_check_mark:	OPCON-20706: A null pointer exception occurred during the Simulation process when checking the batch user associated with a File Transfer task definition and the source or destination machine is not defined in the target OpCon system. A message has been included indicating that the batch user could not be checked as the File Transfer machine was not defined.
 
### Version 20.0.22

#### 2023 July

##### Installation

:white_check_mark:	OPCON-20073: Fixed an issue in the installer that caused MFT agent system records to be removed from the database during upgrades that needed a SQL script to fix and re-add them.

##### Server

:white_check_mark:	OPCON-16073: License is now recognized and applied automatically in OpCon on Linux.
 
### Version 20.0.21

#### 2023 May

##### Server

:white_check_mark:	OPCON-14393: Fixed an issue when using DDI to create new jobs, the DependentScheduleInstance column was being affected due to the day offset.

##### Solution Manager

:white_check_mark:	OPCON-15403: Fixed an HTTP 414 error when loading PERT with a large number of jobs.

##### REST API

:white_check_mark:	OPCON-16731: Fixed an issue where migration was timing out due to large AUDITRECSVIEW table.

##### ImpEx2 Web Service

:white_check_mark:	OPCON-19570: Fixed an issue with schedule import where autoBuildTime was missing from the schedule definition if import a schedule with auto build time of 00:00.
 
### Version 20.0.20

#### 2023 April

##### Solution Manager

:white_check_mark:	OPCON-18823: Added performance improvements inside the Processes page in Solution Manager to efficiently handle large databases.

##### REST API

:white_check_mark:	OPCON-18942: Fixed a potential issue with log rollovers when clock changes.
ImpEx2 Web Service

:eight_spoked_asterisk:	OPCON-19514: For OpCon Deploy new import feature, separate auto delete days reset from auto build days reset. This feature requires OpCon Deploy 22.2.

:white_check_mark:	OPCON-19164: Fixed an issue in Deploy simulation where role check failed to list missing roles.
 
### Version 20.0.19

#### 2023 March

##### REST API

:white_check_mark:	OPCON-15392: Fixed an issue where the replicated OpCon database did not have all tables reseeded for unique ids and hence had a primary key violation error when building or adding jobs to daily.
 
### Version 20.0.18

#### 2023 February

##### ImpEx2 Web Service

:white_check_mark:	OPCON-18382: Fixed an issue in deploy simulation where the schedule comparison section would not show the actual results.

:white_check_mark:	OPCON-18546: Corrected invalid check for Conflict dependency when retrieving job master key.
 
### Version 20.0.17

#### 2022 December

##### ImpEx2 Web Service

:eight_spoked_asterisk:	OPCON-18274: Added Windows Authentication to Impex2 Server.

##### REST API

:white_check_mark:	OPCON-18286: Fixed the OpCon API that used to deadlock with SAM or SMASchedman during periods of high activity especially during schedule builds, while the API fetched data.
 
### Version 20.0.16

#### 2022 October

##### Solution Manager

:white_check_mark:	OPCON-16312: Fixed issues with self service where migration would fail and service requests would not execute for some input types (Date, Choice, etc.) if user-defined variable name contains dot.

:white_check_mark:	OPCON-16337: Added the options to disable builds for schedule named instances without parameters.

##### ImpEx2 Web Service

:white_check_mark:	OPCON-17766: Fixed an issue where schedule import failed to extract the thresholds/resources used in the complex expressions for Job Expression Events.
 
### Version 20.0.15

#### 2022 September

##### Server

:white_check_mark:	OPCON-17395: Fixed an issue in Notify Handler with SSL and TLS based Email and text message notifications.

:white_check_mark:	OPCON-17627: Fixed an issue in the notification system where a SMTP server that does not require authentication could not send notification emails as Notify Handler was forcing authentication.
 
### Version 20.0.14

#### 2022 August

##### REST API

:white_check_mark:	OPCON-17048: Fixed performance issue in dailyJobs endpoint when includeDetails=true and there are a lot of container jobs.

:white_check_mark:	OPCON-17369: Fixed an issue in the OpCon API that caused login dialog pop ups to appear when the token is expired.

:white_check_mark:	OPCON-16185: Fixed an issue in OpCon API where new machines were shown as created by Unknown user in Audit Management.
 
### Version 20.0.13

#### 2022 June

##### Server

:white_check_mark:	OPCON-16723: Fixed an issue in expression evaluator, where Windows file arrival paths were incorrectly resolved when running OpCon on Docker.

:white_check_mark:	OPCON-17070: Fixed an issue where Netcom tracking files were getting populated with machine up/down messages that would never get cleared.
ImpEx2 Web Service

:white_check_mark:	OPCON-16345: Fixed ImpEx2 to fail the deploy if batch user for SQL jobs does not exist in the target system.

:white_check_mark:	OPCON-16749: Fixed an issue in ImpEx2 service where an SAP job import and deploy caused problem with certain header types in the XML request to the SAP system. The XML headers are now cleared before the request is made.
 
### Version 20.0.12

#### 2022 May

##### Installation

:white_check_mark:	OPCON-16513: Fixed an issue with the database migration during a minor upgrade where if the Windows Domain user running the upgrade did not have the correct permissions to the database, the migration failed. The installer should have used the SQL user from the database config file (DAT file) for the migration, instead.

##### Solution Manager

:white_check_mark:	OPCON-16012: Fixed a performance issue in Solution Manager PERT view of the Operations page, where the request timed out in some instances resulting in the PERT view not being displayed.

##### REST API

:white_check_mark:	OPCON-16687: Fixed an issue in OpCon API where concurrent access to its authentication end point sometimes caused issues with the token management and the API stopped running.

##### Enterprise Manager

:white_check_mark:	OPCON-16476: Corrected Enterprise Manager environment switching problem by removing database connection pool from Enterprise Manager connections and only using database connection pool for ImpEx2 connections.

##### ImpEx2 Web Service

:white_check_mark:	OPCON-16321: Fixed an issue in ImpEx2 where external job dependencies between named instance schedules and a normal schedule was not extracted correctly and subsequently not deployed correctly. The named instance schedule id of the normal schedule was incorrectly set to 0 when it should have been set to 1.

:white_check_mark:	OPCON-16074: Fixed an issue in ImpEx2 service where a new import exception message is now added if a duplicate script type name is detected because script type name must be unique.

:white_check_mark:	OPCON-16336: Fixed an issue in ImpEx2 service where validation was not done for missing batch users for Windows, Unix, IBM i, and MCP file transfer jobs before deploying them to the target environment.

:white_check_mark:	OPCON-16498: Fixed an issue in ImpEx2 service where it did not support LSAM feedback and Job Status Description for events.
 
### Version 20.0.11

#### 2022 March

##### Installation

:white_check_mark:	OPCON-16206: Ampersand is now allowed as a characters in DB user passwords when running the OpCon installer.

##### Server

:white_check_mark:	OPCON-15619: Added fix in ENS to prevent error when saving records in the EscalaitonRecipientHistory table.

##### ImpEx2 Web Service

:eight_spoked_asterisk:	OPCON-16167: Include Role checking during deployment simulation

:white_check_mark:	OPCON-16313: Fixed an issue in ImpEx2 with SQL jobs where the User ID did not get deployed or updated for Windows authentication.
 
### Version 20.0.10

#### 2022 February

##### ImpEx2 Web Service

:white_check_mark:	OPCON-16123: When adding a new role to a schedule, the role must be defined in the target OpCon system. If the role is not defined, the deployment will fail with an error message, Role not defined in destination opCon system.

:white_check_mark:	OPCON-16111: Fixed an issue in ImpEx2 where connections to the database were not getting disposed and eventually all TCP dynamic ports were getting used up.

:white_check_mark:	OPCON-15995: Implemented removal of roles for ImpEx2, that are no longer required during deployment of existing schedule/package
 
### Version 20.0.9

#### 2022 January

##### Installation

:white_check_mark:	OPCON-15601: Fixed issue where silent install did not use the IS_SQLSERVER_UPGRADE variable defined on the command line.

:white_check_mark:	OPCON-15679: Add custom actions for migrate command that support SQL and Windows authentication.

##### Enterprise Manager

:white_check_mark:	OPCON-15579: Fixed an issue in ImpEx2 where the schedule id was smallint instead of int causing numeric overflow when schedule id is greater than 32xxx during schedule import.

:white_check_mark:	OPCON-15949: Fixed a bug that occurred while using export Daily Job Audit Management.

##### REST API

:white_check_mark:	OPCON-15737: Fixed memory issue where expired tokens were not removed from cache.

:white_check_mark:	OPCON-15423: Fixed an issue where a job on a machine group lost its machine definition after the job ran and users were unable to view the job output for that run.

:white_check_mark:	OPCON-15607: Fixed an issue where a global property value exceeded the maximum length when encrypted.

:white_check_mark:	OPCON-15648: Fixed issue where a request to return unencrypted Global Properties fails to return all of them. Standardized default false values in the database for TOKEN.TKNENCRYPTED to be 'False'.

:white_check_mark:	OPCON-15809: Fixed issue with Vision processing occurring when no cards were defined in the database and further performance improvement on Vision statistics queries.

:white_check_mark:	OPCON-16031: Fixed an issue in the API where a port specified in the INI file was not checked for a valid TLS certificate.

##### Solution Manager

:white_check_mark:	OPCON-15598: Fixed an issue where in some cases, the status change reason of one job was duplicated to another job.

:white_check_mark:	OPCON-15628: Fixed an issue with event validation to verify at least one exists in Self Service.

##### ImpEx2 Web Service

:white_check_mark:	OPCON-15836: Corrected a problem when changing a Null Job to a Windows Job during deployment.

:white_check_mark:	OPCON-15448: Fixed an issue in ImpEx2 service where a pipe character in a schedule instance property caused build errors when schedule was deployed to target and set to build.

:white_check_mark:	OPCON-15723: Changed script mapping during deployment process to use names instead of numeric id values. The script-name, type-name and runner-name is a unique combination.
 
### Version 20.0.8

#### 2021 September

##### Documentation

:white_check_mark:	OPCON-15505: Removed OpCon.UserDefindFunctions.pdf from the distributed Database Scripts.

###### Enterprise Manager

:white_check_mark:	OPCON-15530: Fixed an issue in Enterprise Manager, where Episys sub type jobs had parsing issues, when going to a None sub type, saving it and going back to the Episys sub type.

:white_check_mark:	OPCON-15465: Fixed a global property extract issue in schedule extract that threw an index out of bounds error, when using it.

:white_check_mark:	OPCON-14706: Fix display error where command line showing up in "Other Options" instead of "Files To Delete".

##### REST API

:white_check_mark:	OPCON-15607: Fixed an issue where a global property value exceeded the maximum length when encrypted.

##### Solution Manager

:white_check_mark:	OPCON-15226: Fixed a bug that wiped the entire screen when a filter profile was shared with a role that had the id of 0.

##### ImpEx2 Web Service

:white_check_mark:	OPCON-15461: Fixed an issue where ImpEx2 did not start up if the database was configured to force encrypted connections.
 
### Version 20.0.7

#### 2021 August

##### REST API

:white_check_mark:	OPCON-15437: Fixed an issue where dates submitted through self-service across time zones were being incorrectly parsed as the preceding day.
Server

:white_check_mark:	OPCON-15400: Fixed an issue where the subject used in "SendEmail" application was incorrectly sent.

:white_check_mark:	OPCON-12267: Fixed issue with Unknown audit records caused by Notify Handler when a connection is lost.
Utilities

:white_check_mark:	OPCON-15426: Fixed an issue with History.exe to purge/archive the correct amount of records according to the documentation.

##### ImpEx2 Web Service

:white_check_mark:	OPCON-15436: Fixed an error with deployment when calendars associated with the schedule or package to be deployed does not exist in target server.

:white_check_mark:	OPCON-15401: Fixed an issue where multiple embedded script versions referenced from jobs in the deployed schedule resulted in null pointer exceptions, as only one of those script versions was getting imported into Deploy.

:white_check_mark:	OPCON-15394: Fixed an issue where global properties in environment variables for a job were not getting extracted into the deploy repository.

:white_check_mark:	OPCON-15385: Fixed an issue in ImpEx2 where the target system's roles/access codes were overwritten with privileges from the source system in Deploy, if a role/access code with the same name existed on the target system.
 
### Version 20.0.6

#### 2021 July

##### Enterprise Manager

:white_check_mark:	OPCON-15278: Fixed an issue where jobs using the Corelation sub-type would display a "String index out of range" error.

##### REST API

:white_check_mark:	OPCON-15280: Regular expression pattern in Self Service Requests will no longer be evaluated for empty values.

:white_check_mark:	OPCON-15270: Fixed an issue where Regex was not working with double quotes inside of self-service text variable.

##### ImpEx2 Web Service

:white_check_mark:	OPCON-15339: Added startup check to make sure Impex is using a correct DB schema version. Added new CLI option "--skipVersionValidation" to skip this and continue without the check.

:white_check_mark:	OPCON-15268: Fixed an issue in ImpEx2 where a change in a job's threshold/resource update on 'job status' and 'value' did not get deployed to the target system correctly.

:white_check_mark:	OPCON-15080: Fixed an issue where only one of multiple external dependencies to the same schedule and job were imported into Deploy.

:white_check_mark:	OPCON-15069: Fixed an issue where a multi-instance schedule converted to single instance before deployment to a target system, did not get converted correctly on the target.

:white_check_mark:	OPCON-14985: Fixed an issue in batch deploy where the job sometimes ended in a concurrent modification exception.
 
### Version 20.0.5

#### 2021 May

##### Enterprise Manager

:white_check_mark:	OPCON-15079: Fixed an issue where the "Number of Days to Keep a Service Request Execution" Server Option was unable to be changed.

##### ImpEx2 Web Service

:white_check_mark:	OPCON-15136: Fixed an issue where SAM reused an id for a job instance due to a race condition with Deploy

:white_check_mark:	OPCON-15036: Fixed an issue where Thresholds/Resources/Global Properties could sometimes get duplicate entries in the target environment when transformation rules converted source names of those entities to the same target names.
 
### Version 20.0.4

#### 2021 April

##### Enterprise Manager

:white_check_mark:	OPCON-15008: Fixed an issue that prevented creating or opening a job using the Corelation sub-type when using Global Properties.

##### REST API

:white_check_mark:	OPCON-15011: Fixed an issue where Self Service would display a "Cannot load Service Request Executions" error for several days after upgrading to OpCon 20 or higher.

:white_check_mark:	OPCON-14843: Fixed an issue where the user's role was removed and the password was changed after attempting to retrieve a token.

##### Server

:white_check_mark:	OPCON-14929: Fixed an issue in Netcom where under heavy communication load with agents, if a message acknowledgement is lost or delayed, Netcom created a bad 'resend' message, which caused issues on the agent side in the tracking file.

##### ImpEx2 Web Service

:eight_spoked_asterisk:	OPCON-14859: Updated ImpEx2 service (used by Deploy) to include SQL agent job enhancements - using Win Auth for package execution (DTExec) and running Integration Services Server packages - as part of the deployment to OpCon environments.

:white_check_mark:	OPCON-15049: Fixed an issue in ImpEx2 where blank batch users were "missing" in simulations.

:white_check_mark:	OPCON-15030: Fixed an issue in ImpEx2 where obsolete job dependencies in an existing schedule on target system were not getting removed.

:white_check_mark:	OPCON-15010: Fixed an issue where scheduling options of the frequencies were not updated correctly if there was changes to them in the schedule that was deployed.

:white_check_mark:	OPCON-15001: Fixed an issue where deploying a schedule with no documentation would not remove any existing documentation.

:white_check_mark:	OPCON-14839: Fixed an issue in ImpEx2 to prevent unexpected data loss when job threshold/resource dependencies or events were modified in the schedule that was deployed.
 
### Version 20.0.3

#### 2021 March

##### Installation

:eight_spoked_asterisk:	OPCON-14891: OpCon Deploy's ImpEx2 server component now has its own installer and will be available with the OpCon package with the same release cadence. This makes it easy to upgrade ImpEx2 only when needed without having to upgrade OpCon or Deploy client. It also makes it easy to upgrade Deploy client without upgrading ImpEx2 or OpCon.

##### Solution Manager

:white_check_mark:	OPCON-14949: Fixed an issue where a Schedule Build request could be submitted for the incorrect day if opening the date picker but selecting no values.

:white_check_mark:	OPCON-14919: Fixed an issue where the Save button in the unsaved changes warning dialog was not functioning properly when leaving the Job Instance Property editor.
 
### Version 20.0.2

#### 2021 February

##### Enterprise Manager

:white_check_mark:	OPCON-14816: Fixed an issue where a SQL job using the SQL DTExec job action did not display the batch user that the job ran as.

:white_check_mark:	OPCON-14777: Fixed an issue where the machine options "Use Schedule Instance Machine" and "Run on Least Tasked Machine" were not save-able on Windows and UNIX jobs.

##### Installation

:white_check_mark:	OPCON-14847: Added validation during the REST API startup routine to ensure the database has been properly updated.

:eight_spoked_asterisk:	OPCON-14761: Added a verification step to the SMA OpCon Install that validates SMA OpCon Database Scripts, SMA OpCon Documentation, SMA OpCon SAM, and SMA OpCon Solution Manager have been uninstalled before proceeding.

:white_check_mark:	OPCON-14869: Fixed NullReference exception with 20.0 migration when Service Requests were missing some information regarding the Date formatting of User Input.

:white_check_mark:	OPCON-14732: Fixed an issue where the database connection information was not editable when doing a Repair/Modify.

:white_check_mark:	OPCON-14684: Fixed an issue where database scripting variables would be reset to default values when performing an upgrade.

:white_check_mark:	OPCON-14657: Updated the database connection screen to re-use the database server and database name entered in the database set-up screen during new installations.

:white_check_mark:	OPCON-14120: Fixed an issue in job dependencies for the automatically installed SMA Utility schedule if jobs were converted to multi-instance jobs.

##### REST API

:white_check_mark:	OPCON-14886: Fixed an issue in self signed certificate generation where hostname did not match with the name on the certificate and it gave NET::ERR_CERT_COMMON_NAME_INVALID error when trying to browse Solution Manager.

:white_check_mark:	OPCON-14846: Fixed an issue where a "Cannot load Service Request Executions" API error was displayed when using Self Service where the API server is on non US regional settings.

:white_check_mark:	OPCON-14713: Fixed an issue where Service Request event definitions would be incorrect when using a system variable more than once in the definition.

:white_check_mark:	OPCON-14663: Fixed an issue where changing daily job statuses as a user with no defined external token would throw a System.NullReferenceException error.

###### Server

:white_check_mark:	OPCON-14794: Fixed an issue where an embedded script with a line ending in backslash gave syntax errors when running it on agent.

:white_check_mark:	OPCON-14757: Fixed a performance issue with schedule builds that contain large amounts of sub-schedules.

##### Solution Manager

:white_check_mark:	OPCON-14903: Fixed an issue in Agents page where right panel actions weren't enabled after a page refresh.

:white_check_mark:	OPCON-14875: Fixed issue where environment variable should not contains "=" character

:white_check_mark:	OPCON-14860: Fixed an issue in Schedule/ Resource right panel in PERT, where dependent / update job list was not filtered by the selected Schedule / Resource.

:white_check_mark:	OPCON-14791: Fixed an issue where clicking on a Vision Card with an offset redirects on the wrong Date in the Operation Processes Page

:white_check_mark:	OPCON-14686: Fixed an issue where editing a Windows Job using an embedded script offered all script runners as an option rather than Windows-supported runners only.

:white_check_mark:	OPCON-14674: Fixed a cosmetic issue where NumberField does not appear correctly in some situations
 
### Version 20.00.01

#### 2020 December

##### Installation

:white_check_mark:	OPCON-14600: Fixed an issue where the SMA OpCon install would not remember SQL authentication selections when an attempt to modify the installation was made.

:white_check_mark:	OPCON-14576: Fixed an issue where the SMA OpCon install would use an incorrect directory for data files when installing on a non-system drive.

##### REST API

:white_check_mark:	OPCON-14649: Fixed an issue where a user without user management privileges would receive a "The user specified in the request does not exist." error when executing a service request defined with the Submit events as ocadm option enabled.

:white_check_mark:	OPCON-14611: Fixed an issue where retrieving job summary information for a job with a machine group would fail with a "'TRIM' is not a recognized built-in function name" error on SQL Server versions lower than SQL Server 2017.

##### Solution Manager

:white_check_mark:	OPCON-14597: Fixed an issue in Schedule Build where the schedules would not build "On Hold" even when the option was selected.

:white_check_mark:	OPCON-14584: Fixed an issue where validation was not case-insensitive and allowed the same name to be used for Vision actions, frequencies, and remote instances.

:white_check_mark:	OPCON-14567: Fixed an issue in Schedule Build where the pre-defined properties on a Named Instance schedule were not able to be updated.
 
### Version 20.00.00

#### 2020 November

##### Docker

:eight_spoked_asterisk:	OPCON-14366: The SMASynchSAP utility is now available in the "opcon-server" image.

:eight_spoked_asterisk:	OPCON-14189: The SMAHoliday utility is now available in the "opcon-server" image.

:eight_spoked_asterisk:	OPCON-14186: The Chronoman utility is now available in the "opcon-server" image.

:eight_spoked_asterisk:	OPCON-13578: The "opcon-server" image supports four new environmental variables for changing regional settings. You can find out more in the Configuration section at https://hub.docker.com/r/smatechnologies/opcon-server. The new variables are:

LANG_CULTURE

NUMERIC_CULTURE

MONETARY_CULTURE

DATEFORMAT_CULTURE

:eight_spoked_asterisk:	OPCON-12671: The Windows Event Log, Network Message, SNMP Trap, SPO Event Report, and Run Command notification types are now correctly disabled when running in Docker. Existing notifications of these types will be disabled if upgrading from Windows to Docker.

:white_check_mark:	OPCON-14485: The following environment variables have been deprecated for the "opcon-server" image:

API_USES_TLS

SM_WEB_SSL

SM_WEB_PORT

SM_DOC_DIR_PATH

SM_SYSTEM_DEBUG

SM_SYSTEM_DEBUG_API

SM_THEME

SM_ENVIRONMENT_NAME

SM_SYSTEM_LOG_MAXHISTORY

SM_SETUP

:white_check_mark:	OPCON-13307: The "opcon-server" image was updated to Ubuntu 18.04.

##### Enterprise Manager

:eight_spoked_asterisk:	OPCON-13597: Updated the SAP Login dialog for SAP jobs to be resizable.

:eight_spoked_asterisk:	OPCON-13576: Added "Terms of Use" link to the Login Window.

:eight_spoked_asterisk:	OPCON-13032: Added the ability to open Solution Manager pages from Enterprise Manager. A new General Server Option, Solution Manager URL, enables this functionality.

:eight_spoked_asterisk:	OPCON-12679: SQL Agent jobs using the MS SQL DTExec job action can now run SSIS packages on the Integration Services Server (ISSERVER).

:eight_spoked_asterisk:	OPCON-12678: SQL Agent jobs can now run SSIS packages with MS SQL DTExec job action using Windows Authentication.

:white_check_mark:	OPCON-14227: Fixed an issue where an exception would be thrown if users attempted to log out after their session timed out.

:white_check_mark:	OPCON-14013: Fixed an issue where added properties would incorrectly duplicate when defining instance properties on a named instance schedule.

:white_check_mark:	OPCON-13607: Fixed an issue where a java.sql.SQLException could be thrown after a user session was logged out or timed out.

:white_check_mark:	OPCON-13150: Added a warning to the SAP Query dialog informing users that when Search Criteria only contains a wildcard (`*`), additional text should be used (e.g., XBP*) in order to limit results.

:white_check_mark:	OPCON-13054: Fixed an issue where values were not being updated and saved correctly on MCP Run Job definitions when using System Properties.

:white_check_mark:	OPCON-13051: Fixed an issue with the UNIX Job Sub-Type Episys: Find Report from RSJ Output where using an ' (apostrophe/single quote) in the Report Name would cause a job failure.

:white_check_mark:	OPCON-12779: Fixed an issue where forecasting Even Weeks or Odd Weeks frequencies in the Enterprise Manager would incorrectly show the wrong day as the start of the week.

:white_check_mark:	OPCON-12766: Fixed an issue with Escalation Acknowledgement where sometimes the wrong year was displayed.

:white_check_mark:	OPCON-12674: The Arguments field in MCP Job Details now allows multiple commas.

:white_check_mark:	OPCON-12050: Fixed an issue where the View JCL function on z/OS jobs was using the incorrect port.

:white_check_mark:	OPCON-11625: Fixed an issue in Workflow Designer where adding a dependency to a job with "Use Schedule Instance Machine" as the machine selection incorrectly required the Role_ocadm role.

:white_check_mark:	OPCON-11608: Fixed an issue when extracting Audit data to a csv file where the Name, Old Value, and New Value fields were not properly escaping quotes.

:white_check_mark:	OPCON-11256: Updated the path to the correct location for the embedded Java Runtime Environment with Schedule Extract.

:white_check_mark:	OPCON-10815: Fixed an issue where the Escalation Add/Edit Rule dialog would not display all fields properly.

:white_check_mark:	OPCON-10280: Fixed an issue where renaming a UNIX Batch User would incorrectly update all jobs that used the old group to the new group value.

:white_check_mark:	OPCON-10275: Fixed an issue where resetting the password of a user with XML characters in it would cause exceptions in SMANotifyHandler.

:white_check_mark:	OPCON-10049: Fixed an issue where OS 2200 jobs could not be saved without providing an Element Name, even when ECL was stored in a file.

:white_check_mark:	OPCON-9699: Fixed an issue where Schedule Extract could not extract the following event types: $CALENDAR:ADD, $CALENDAR:DEL, $JOBMASTER:TAGDEL, $JOBMASTER:TAGADD, and $JOBMASTER:BUILDSTATE.

:white_check_mark:	OPCON-9163: Fixed an issue where the "SAP Machine" menu option in the Machines editor would not display correctly or would be disabled for SAP machine types.

:white_check_mark:	OPCON-9122: Fixed an issue where a Conflict message was logged when right-clicking a schedule in an Operations view.

:white_check_mark:	OPCON-8429: Fixed an issue where Windows Command: File Copy and Command: File Delete jobs would not save the Other Options value correctly.

:white_check_mark:	OPCON-8428: Fixed an issue where changing a job sub-type would retain hidden settings from a prior job definition.

:white_check_mark:	OPCON-6194: Fixed an issue where the "Delete Source File" option was incorrectly made available for File Transfer jobs running on machines that did not support that functionality.

:white_check_mark:	OPCON-6118: Fixed an issue where the "Modify Jobs in Daily Schedules" Departmental Function Privilege did not allow users to Edit Daily Schedules as described in the documentation.

##### General

:eight_spoked_asterisk:	OPCON-14315: OpCon server components are now able to run on a FIPS enabled server.

:eight_spoked_asterisk:	OPCON-13472: Added three new Password Requirements Server Options:

Minimum number of lower-case characters required

Minimum number of upper-case characters required

Minimum number of days between password changes

:eight_spoked_asterisk:	OPCON-13445: Updated the Unique Task Counts report to include job counts regardless of whether or not a task-based license is in place.
:eight_spoked_asterisk:	OPCON-12954: Added a new General Server Option, Number of Days to Keep a Service Request Execution, which defines the number of days to retain service request execution history. SMA Request Router was updated to handle deleting Service Request Executions based on the new Server Option and delete any OPCONRSP records that do not have a matching associated Service Request Execution.

:eight_spoked_asterisk:	OPCON-11028: The default password policy for new installations has been modified to be more secure. The following default values were changed:

Number of passwords to retain in history. 0 to 10.

Requires numeric characters. False to True.

Requires alpha characters. False to True.

Requires special characters. False to True.

Number of days a password is valid. 0 to 365.

Number of failed logon attempts before account lockout. 0 to 5.

:eight_spoked_asterisk:	OPCON-13165: External Event Passwords have been rebranded to External Tokens. Additionally, several large updates have been made:
External Token values will now be salted and hashed for storage in the database.
The ability to use External Tokens may now be disabled. By default, this will be disabled for all new users.

External Tokens are now system-generated values. Pre-existing users will not have their existing token values updated, but if the value needs to be changed or for any new user this will no longer be a user provided value.

The new system-generated External Tokens will be unique identifiers. When this option is selected, the External Token may be used as a token for the SMA OpCon RestAPI and no longer require authentication with an interactive username and password.

The ability to generate a fixed-length password has been provided for backwards compatibility on Agents that do not support unique identifiers as a value. The value will still be system-generated.

:white_check_mark:	OPCON-14490: Fixed an issue where Start Time Calculator would incorrectly produce audit records when updating estimated start times. Database upgrades will no longer attempt to remove these invalid records.

:white_check_mark:	OPCON-12030: Fixed an issue where dependencies could point to an incorrect instance when converting between a regular schedule and a multi-instance schedule.

##### Installation

:eight_spoked_asterisk:	OPCON-14245: There is a new installer, SMA OpCon. This installer takes the place of SMA OpCon Database Scripts, SMA OpCon SAM, and SMA OpCon Solution Manager. These three components should be uninstalled during an upgrade prior to installing SMA OpCon. The SMA OpCon Documentation install has also been decommissioned and should be uninstalled during upgrade.

:eight_spoked_asterisk:	OPCON-13924: Updated the default Maximum SQL Transaction Log file size from 1 GB to 10 GB.

:eight_spoked_asterisk:	OPCON-12981: The SMAUtility Schedule is now installed during new OpCon database installations. Pre-existing databases will not contain any modifications. Updates include:

Embedded the SMAUtility scripts in the database

Moved the user name and password for SMAUtility SQL scripts from the scripts to job arguments

Moved the SQL script output to the job output file

Added the following global properties: DB_SERVER_NAME, SqlMaintUser, SqlMaintPassword, DatabaseName, PathToFullBackupFile, and PathToTranLogBackupFile. The value of these global properties must be updated prior to running the schedule.

The Report File Cleanup job has been updated to have a Job Build Status of Do Not Schedule

SMA DBCC Index Defrag job frequency has been updated to run every Sunday

:white_check_mark:	OPCON-14033: Fixed an issue caused in the database upgrade due to a rare duplicate dependency of a multi-instance schedule or sub-schedule.

##### Operations

:eight_spoked_asterisk:	OPCON-14542: The database scripts for SMAUtility maintenance jobs will no longer be distributed beginning with the OpCon 21.00.00 (LTS) release. The scripts will be added as embedded scripts on new installations and will be available at https://github.com/smatechnologies/smautility-sql-scripts for upgrades.

:eight_spoked_asterisk:	OPCON-14541: Documentation is now available on our online site https://help.smatechnologies.com. Solution Manager and Enterprise Manager have been updated to point to their version of the OpCon documentation. Web documentation will no longer be distributed as part of a release distribution. PDFs will continue to be available as part of the release distribution.

:eight_spoked_asterisk:	OPCON-14195: zVSE Agent is now officially decommissioned and is no longer distributed.

##### REST API

:eight_spoked_asterisk:	OPCON-14389: Added session log file rotation based on size and date.

:eight_spoked_asterisk:	OPCON-14240: The OpCon API now exposes a new end point to fetch, update and delete incident ticket information on a daily job.

:eight_spoked_asterisk:	OPCON-14164: Updated the SMA OpCon RestAPI configuration file to accept log levels 0 - 4 and removed superfluous logging messages from Vision.

:eight_spoked_asterisk:	OPCON-14147: The SMA OpCon RestAPI only accepts HTTPS connections. The default port for new installations is now 443.

:eight_spoked_asterisk:	OPCON-14127: Added a new endpoint, GET api/dailyjobs/{id}/status, that returns the status of the specified job.

:eight_spoked_asterisk:	OPCON-14059: Return a new property, uid, when doing a GET api/scheduleactions/{id} for jobs successfuly added when doing a POST api/scheduleactions and where {id} is the id returned in the POST.

:eight_spoked_asterisk:	OPCON-13894: Added a new endpoint, POST api/serviceRequestExecutions, for submitting service requests.

:eight_spoked_asterisk:	OPCON-13529: Added the version number to the SMA OpCon RestAPI log at startup.

:eight_spoked_asterisk:	OPCON-13331: A license is no longer required to use the REST API.

:eight_spoked_asterisk:	OPCON-14135: Added new internal endpoints for session logs with GET/POST methods used to create log files, get a list of log files, and get log file content.

:eight_spoked_asterisk:	OPCON-13585: Added new endpoint for vision cards with PUT/POST/DELETE methods

:white_check_mark:	OPCON-14415: Users with no roles are allowed to PUT on their own user object with an empty roles collection.

:white_check_mark:	OPCON-14368: SMA OpCon RestAPI setcertificate command now works correctly with using a custom certificate.

:white_check_mark:	OPCON-14243: Modified the GET api/remoteInstances endpoint to hide the database connection password in the response.

:white_check_mark:	OPCON-14132: Fixed an issue with the SMA OpCon RestAPI where it would throw an exception when pulling a high volume of jobs with a specified status for a specified date.

:white_check_mark:	OPCON-13882: Fixed an issue with the REST SMA OpCon RestAPI Vision service where gathering daily job statistics would cause performance issues.

:white_check_mark:	OPCON-13594: Fixed an issue where a user with Role_ocadm could not update another user with Role_ocadm privileges.

:white_check_mark:	OPCON-13393: TLS 1.0 will no longer be supported with the SMA OpCon RestAPI.

:white_check_mark:	OPCON-13317: Fixed an issue where unknown user records appeared in audit when an expired account has been used to log in to the API. Expired users are now prevented from performing any other action but GET/PUT on their respective user.

:white_check_mark:	OPCON-12965: Fixed an issue in the SMA OpCon RestAPI where updating embedded script jobs with certain users caused the incorrect error message of "Job with Id {id} is not an embedded script job".

:white_check_mark:	OPCON-12925: Fixed an issue in the SMA OpCon RestAPI when requesting job output on a job that had run multiple times and was currently in a waiting status caused an error message of "Job not yet running".

:white_check_mark:	OPCON-12904: Fixed the ordering of jobHistories queries when using offset parameter.

:white_check_mark:	OPCON-12737: Fixed an issue in the SMA OpCon RestAPI where updating the advanced failure criteria of a daily job would not show the correct error when the "EQ" operator is preceded by a value other than "OR".

:white_check_mark:	OPCON-12709: Fixed an issue in the SMA OpCon RestAPI where updating a daily job would incorrectly allow no machine to be provided for the job.

:white_check_mark:	OPCON-12653: Fixed an issue where Embedded Script Jobs could be updated to run on a Machine Group containing Machines without Embedded Script Privileges.

##### Server

:eight_spoked_asterisk:	OPCON-14204: Updated prioritization of unprocessed work for SMA Request Router. Job output requests and manual schedule builds will now take priority over automated tasks such as scheduled builds.

:eight_spoked_asterisk:	OPCON-14063: Added more clarity to the error message if SMALDAPMon is unable to access user account information.

:eight_spoked_asterisk:	OPCON-13927: Added the UniqueId property of daily jobs to the records stored in history after jobs complete.

:eight_spoked_asterisk:	OPCON-12983: The Maintain UNIX Ouptut Files job has been removed from the SMAUtility Schedule.

:eight_spoked_asterisk:	OPCON-12982: The Schedule Log Cleanup job has been removed from the SMAUtility Schedule. The removal of schedule build logs is now controlled by a new Logging Server Option: Maximum number of days Schedule Build logs should be kept.

:eight_spoked_asterisk:	OPCON-12245: Updated the maximum machines allowed per SMANetCom instance to 2048 and no longer allow this value to be exceeded.

:eight_spoked_asterisk:	OPCON-12001: Updated SMADDI to add two new job status events, $JOB:FIXED and $JOB:REVIEW.

:eight_spoked_asterisk:	OPCON-12685: SQL Server 2019 is now supported for the OpCon database.

:white_check_mark:	OPCON-14341: Fixed an issue where schedule permission validation for schedule builds and deletes could cause slowness or database errors.

:white_check_mark:	OPCON-14163: Fixed an issue where the SMTP setting's user was being impersonated to attach local file attachments to the notification email instead of only impersonating for UNC files.

:white_check_mark:	OPCON-14097: Fixed an issue in SMADDI where the validation of the predecessor job name when a job dependency was added included the "Job Name Like" option.

:white_check_mark:	OPCON-14038: Fixed an issue in SMANetCom where log file locks sometimes are never acquired in an agent communication thread and no further messages are processed for that agent.

:white_check_mark:	OPCON-14003: Fixed an issue in SAM where incorrect syntax in schedule/job instance properties in a property add event prevented SAM from checking user privileges, instead creating a global property.

:white_check_mark:	OPCON-14001: Fixed an issue with SMALDAPMon where it would produce concurrency errors when updating users.

:white_check_mark:	OPCON-13993: Fixed a bug where the Exclude Id parameter in $NOTIFY events was being treated as "N" when the value sent was "Y" with one or more trailing spaces.

:white_check_mark:	OPCON-13943: Fixed an issue with SAM where OS 2200 job start messages were sent with incorrect non-XML job information.

:white_check_mark:	OPCON-13906: Fixed an issue with SMASchedMan where logging was causing significant performance issues.

:white_check_mark:	OPCON-13658: Fixed an issue in Start Time Calculator, where if an error happened when adding multiple predecessors with the same name, all other jobs had invalid estimated start times.

:white_check_mark:	OPCON-13621: Fixed an issue with SMASchedMan where named instance schedules were built once for each property defined.

:white_check_mark:	OPCON-13466: Fixed an issue in SMANetCom where sometimes data sent by an agent failed to be received by SMANetCom in a timely manner and caused delays in job status updates.

:white_check_mark:	OPCON-13379: Fixed an issue where Remote Instance properties would resolve property values from the local instance of OpCon.

:white_check_mark:	OPCON-13200: Fixed an issue in SMALDAPMon where the configuration option 'EnableSsl' would not work correctly.

:white_check_mark:	OPCON-13163: Fixed an issue with SMALDAPMon where the Domain setting would return an "Invalid Credentials" error.

:white_check_mark:	OPCON-13139: Fixed an issue in SMALDAPMon where users with commas in their display name and other un-escaped characters would cause errors during synchronization.

:white_check_mark:	OPCON-13130: Fixed an issue where SMA Notify Hander would shut down if a database error happened at startup.

:white_check_mark:	OPCON-13081: Fixed an issue where SMALDAPMon could not find groups that contained escape characters. Additionally enhanced log messaging to remove duplicate messages when adding new users and always writing a shutdown requested message.

:white_check_mark:	OPCON-13042: Fixed an issue in SMA Notify Handler where Short Text Message notifications were generating an encoding error.

:white_check_mark:	OPCON-12998: Fixed an issue in SMA Notify Handler where the user's profile was not loaded correctly after impersonation to run command.

:white_check_mark:	OPCON-12952: Fixed an issue with SAM where the displayed number of restarts on a job was incorrect.

:white_check_mark:	OPCON-12920: Fixed an issue where an unclear error message was thrown by BIRTPROCESSOR when passing a value other than 0 when a parameter was used with ">".

:white_check_mark:	OPCON-12900: Fixed an issue where frequency priority was incorrectly set during a job copy or job move to a schedule with frequencies.

:white_check_mark:	OPCON-12899: Fixed an issue where agent-specific fields were incorrectly copied during a Machine copy.

:white_check_mark:	OPCON-12898: Fixed an issue in SMASchedMan where $SCHEDULE:BUILD events with a [[$NOW]] schedule date parameter would sometimes build on an incorrect date.

:white_check_mark:	OPCON-12763: Fixed an issue in SMALSAMDataRetriever where it sometimes kept running in memory after completing work.

:white_check_mark:	OPCON-12668: Fixed an issue where a multi-instance schedule would not get built if it contained special characters in the named instance definition.

:white_check_mark:	OPCON-12573: Fixed an issue where user credentials were logged when an event was submitted with XML characters in a field.

:white_check_mark:	OPCON-12388: Fixed an issue with SMA Notify Handler notifications where "\r", "\n", and "\t" were treated as additional text instead of formatting.

:white_check_mark:	OPCON-11337: Fixed an issue with SMA Dynamic Data Input where schedules could not be created after a SKDID of 32770 had been reached.

:white_check_mark:	OPCON-9246: Fixed an issue with the Property Expressions API Syntax where the Replace function could not replace a backslash (\) unless another character was specified with the backslash. A new property expression function, ReplaceBackslashes, has been created with two arguments, the string to search and the replacement character.

##### Solution Manager

:eight_spoked_asterisk:	OPCON-14286: The Vision Settings page and all of its functionality has been replaced with "Admin Mode" in Vision Live. The ability to edit an individual card and its children is now available rather than having to update the entire Vision Workspace with each change.

:eight_spoked_asterisk:	OPCON-14141: Added a new Server Option, Enable Windows Authentication, that controls if the ability to log in with windows authentication to Solution Manager is available. This setting needs to be updated to true to continue using after upgrading to 20.00.

:eight_spoked_asterisk:	OPCON-14036: Solution Manager will now be installed as part of the SMA OpCon RestAPI. The SMA OpCon RestAPI web server will also act as the web server for Solution Manager. The two components will share a port and TLS settings, meaning that either the address for either Solution Manager or the RestAPI must change and be updated where it is in use. Solution Manager will be available at https://{hostname}:{port} and the RestAPI at https://{hostname}:{port}/api where port is what was selected as part of the installation.

:eight_spoked_asterisk:	OPCON-13577: Added "Terms of Use" link to the Login Screen.

:eight_spoked_asterisk:	OPCON-13371: A migration page was added for first login after an upgrade. Custom date patterns for service request inputs, RegEx patterns for service request inputs, or an Operation filter profile that cannot be parsed may all require migration. The migration action must be performed by the ocadm user.

:eight_spoked_asterisk:	OPCON-13251: Revamped the Named Instances form on the Instance Definition step of Schedule Build.

:eight_spoked_asterisk:	OPCON-13249: Job Configuration has been renamed to Daily Job definition. The following updates were made to Daily Job definition:
On Windows, the Execute Program: Prerun input is hidden when not defined.

Added additional form validation.

:eight_spoked_asterisk:	OPCON-13247: Job Output Viewer is now a dialog.

:eight_spoked_asterisk:	OPCON-13242: Documentation is no longer provided internally. It is now directly accessible from the internet as online help.

:eight_spoked_asterisk:	OPCON-13241: A new button is available to select Windows Authentication on the login page when it is enabled.

:eight_spoked_asterisk:	OPCON-13237: The setup page has been removed due to the combining Solution Manager with the SMA OpCon RestAPI. The remaining setup and configuration options are now handled in the Application Settings area by a user with Role_ocadm privileges.

:eight_spoked_asterisk:	OPCON-13224: Users now have the ability to edit Vision cards that do not contain a role they possess. The Role_ocadm role has been removed from the role selection because it is automatically included on all Vision cards.

:eight_spoked_asterisk:	OPCON-13223: Vision Health has an updated layout on smaller displays. A breadcrumb was added to the bottom-left of the page to show selected cards. Vision Health Diagnostic page is now visible for users with the "View Vision Workspace" functional privilege.

:eight_spoked_asterisk:	OPCON-13221: Cross instance navigation using Vision cards requires each OpCon environment to be running OpCon 20 or higher.

:eight_spoked_asterisk:	OPCON-13208: The Service Request OpCon Event Editor and Input Variable editors are now dialogs instead of dedicated pages. The dialog appears with the rest of the button's content in the background. This is helpful when updating these fields and is quicker as you navigate between events or inputs. SelfServiceRequest Date Input Variable: Date Output Formatting changed from Java Date Pattern to Javascript Moment Date Pattern. SelfServiceRequest Text/TextCollection Input Variable: Validation Regex changed from Java Regex Pattern to Javascript Regex Pattern.

:eight_spoked_asterisk:	OPCON-13205: The URL has changed for Service Request Executions. A Service Request may be executed by directly accessing this URL.

:eight_spoked_asterisk:	OPCON-13002: The URL for Operation Processes has been changed. All selections are represented in the address and providing an address with selections will automatically apply them when the page loads. The syntax for providing filter profiles has changed but operates in the same way as other selections.

:eight_spoked_asterisk:	OPCON-12837: Self Service added a few features simplifying the creation of button:

A preview button was added to the edit screen which displays the Custom HTML entered. This preview button dynamically updates as the HTML string is modified. This allows you to verify the button appearance before saving the changes.

A date pattern checker was added to the user input field's date type. This helps validate the date format entered resolves to the expected value.

A regex pattern checker was added the input fields where regex is allowed. This helps validate the regex entered resolves to the expected value.

The ocadm role is hidden from the granted/revoked screen and is granted by default.

:eight_spoked_asterisk:	OPCON-12836: Right-clicking a row in an Operations Process grid will select the row and open or close the side panel. The ability to hide and show columns in the grid has been removed.

:eight_spoked_asterisk:	OPCON-12834: The Profile screen has been expanded to contain application and user settings making these settings more accessible. A few of the parameters which are now configurable within these screes are: language, date/time formats, refresh intervals, debug settings, environment name, theme, windows authentication, and Vision's warning settings.

:eight_spoked_asterisk:	OPCON-12833: When the User Account's session expires, a login dialog is displayed which allows the user to log back in. The behavior in previous releases was to exit the current screen moving back to the login screen.

:eight_spoked_asterisk:	OPCON-12649: As a part of the Solution Manager rewrite, we made several general updates:

Visual components such as Forms, EditLists and Switches have been redesigned.

The Solution Manager URL is now updated as you select certain items in the screen (filters in Operation or expanding specific fields in the Daily Job Definition). This allows users to share the URL with others showing the exact screen they are viewing. 

It also allows users to bookmark the screen to save a common view.

The Notification Center has been removed due to lack of use.

Internet Explorer 11 is no longer supported.