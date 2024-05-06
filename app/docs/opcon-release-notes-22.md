---
sidebar_label: "Release Notes 22"
---

# OpCon 22 Release Notes

## OpCon 22.10.0

**NOTE**: Verify/Upgrade these components if applicable: **ServiceNow** Connector – 21.4 or higher, **WebServices** Connector – 21.2 or higher, **Deploy** – 22.4 or higher

2023 November

#### Server

:white_check_mark: **OPCON-22276**: Removed verbose-level log messages that wrote the raw event text and had the potential to write sensitive data.

#### Solution Manager

:eight_spoked_asterisk: **OPCON-14710**: MCP: This feature delivers the MCP job type for both master and daily jobs in Solution Manager. Key features include Change, Copy, EAE/AB, Remove, Run, and Start job types for MCP. In addition users can tailor their workflows by defining pre-run and failure criteria for all the job types for MCP. Whether you need to create a new MCP job or modify an existing one, Solution Manager has you covered in its latest feature rollout.

:eight_spoked_asterisk: **OPCON-15115**: Reporting: This feature delivers the Audit History report, previously known as Audit Management, providing a view into the history of user updates in the OpCon database. This report has been redesigned to provide greater flexibility with improved filtering capabilities allowing the user to customize how they want to view the content.

:eight_spoked_asterisk: **OPCON-15373**: Reporting: This feature delivers the Schedule and Job History report, previously known as History Management, providing a view into schedule and job history information. This report has been redesigned to provide greater flexibility with improved filtering capabilities allowing the user to customize how they want to view the content.

:eight_spoked_asterisk: **OPCON-20245**: Users, Roles and Permissions: This feature delivers the modification of an existing role capability within Solution Manager. Administrators can now change permissions associated to a role in the general, activities, batch users, departments, resources, and users tabs improving the security and efficiency of your Solution Manager environment.

:eight_spoked_asterisk: **OPCON-20999**: ACS: This feature brings the user an enhanced Agent and Agent Details page tailored to the integration being defined. This feature is designed to streamline your workflow by providing a more intuitive view into the management of your associated integrations.

:eight_spoked_asterisk: **OPCON-21004**: ACS: This feature provides the view to the daily job screen for integrations created using ACS. Users will be able to make updates to daily jobs providing a consistent experience across the platform.

:eight_spoked_asterisk: **OPCON-21277**: Reporting: This feature delivers the exporting capability for the Schedule and Job History report, previously known as History Management. Users can export a customized view of their schedule and job history.

:eight_spoked_asterisk: **OPCON-21306**: ACS: This feature provides the view to the master job screen for integrations created using ACS. Users will be able to create, view, and update their master jobs providing a consistent experience across the platform.

:eight_spoked_asterisk: **OPCON-21462**: Reporting: This feature delivers the exporting capability for the Audit History report, previously known as Audit Management. Users can export a customized view of the history of user updates in the OpCon database.

:eight_spoked_asterisk: **OPCON-21757**: ACS: This feature delivers improved the tracking functionality of ACS integration jobs, ensuring that job tracking persists even in the face of service disruptions. This enhancement provides our users with increased reliability and resilience when managing ACS integration tasks.

#### REST API

:white_check_mark: **OPCON-21830**: Fixed a race condition which would result in occasional failures to save a Master Job configuration. This will provide a more consistent and less frustrating administration experience.

:white_check_mark: **OPCON-22321**: Fixed an API parsing error which prevented restoration of configured values for OpCon MFT. The detail screen now displays the accurate configuration values.

## OpCon 22.9.0

**NOTE**: Verify/Upgrade these components if applicable: **ServiceNow** Connector – 21.4 or higher, **WebServices** Connector – 21.2 or higher, **Deploy** – 22.4 or higher

2023 October

#### Server

:white_check_mark: **OPCON-21993**: Fixed an issue where Guidewire and OpConMFT Jobs would fail to report successful Job Kill execution.

#### Solution Manager

:eight_spoked_asterisk: **OPCON-20685**: Users, Roles and Permissions: This feature delivers the addition of a read-only Users tab within Access Management. Administrators will be able to view a users and user details allowing for better insight into role assignment and permissions.

:white_check_mark: **OPCON-21185**: Fixed an issue where users could not add environment variables to jobs if the value contained '='.

:white_check_mark: **OPCON-21215**: Updated Frequency name to allow special characters. Users will now be able to add and modify Frequency names that contain special characters.

:white_check_mark: **OPCON-21636**: Fixed an issue in Master Schedules page where clicking the Admin button would prompt the user to save the schedule even when there were no changes. This update will bring smoother user experience to the Master Schedules page.

:white_check_mark: **OPCON-21749**: Fixed an issue with reset function in Server Options. 'Reset all to default' and 'Reset current tab to default' will now be enabled when form changes.

:white_check_mark: **OPCON-21824**: Fixed an issue in Master Jobs page where Notification Triggers filter on Group Type did not work.

:white_check_mark: **OPCON-22288**: Added a fix to correct the behavior when an OpCon token expires and the user retries to log in via SSO.

#### REST API

:white_check_mark: **OPCON-21833**: Fixed issue which occurred when re-establishing an authenticated connection with an OpConMFT machine. This operation can now be performed successfully.

:white_check_mark: **OPCON-22292**: Fixed an issue in jobHistories endpoint that caused an error when multiple job status IDs were specified.

## OpCon 22.8.0

**NOTE**: Verify/Upgrade these components if applicable: **ServiceNow** Connector – 21.4 or higher, **WebServices** Connector – 21.2 or higher, **Deploy** – 22.4 or higher

2023 September

#### Installation

:white_check_mark: **OPCON-17338**: Modified SMA Utility SQL scripts to verify existence of script type and runner before inserting new record. This will avoid duplicate values in the database.

#### Server

:eight_spoked_asterisk: **OPCON-19946**: GuidewireCloud: This feature provides communication between OpCon and our new integration with Guidewire Cloud insurance suite. The delivery of this feature will allow GuidewireCloud users the capability to communicate using OpCon for the scheduling of batch processes within Guidewires BillingCenter, ClaimsCenter and PolicyCenter.

:eight_spoked_asterisk: **OPCON-20051**: GuidewireCloud Agent and MFT Agent: This feature delivers the capability to stop a job within a built schedule. This provides the user with more flexibility to make adaptations to their schedules and workflow allowing for jobs not to be run.

:white_check_mark: **OPCON-21521**: Fixed an issue where a missing predecessor job in the daily caused an error in SMAStartTimeCalculator.

#### Solution Manager

:eight_spoked_asterisk: **OPCON-19452**: Reporting: This feature will provide users with a link to the Reporting page from the Library. The initial offering will direct users to a new Reporting landing page providing a convenient way to access your reports. This will streamline your workflow by providing a quick route to where all your future reports will be housed.

:eight_spoked_asterisk: **OPCON-19940**: GuidewireCloud: This feature will deliver GuidewireCloud users the ability to setup and configure an agent in OpCon. Connections to Guidewires BatchCenter, BillingCenter, and PolicyCenter will be available for users to schedule and orchestrate the available batch processes.

:eight_spoked_asterisk: **OPCON-19942**: GuidewireCloud: This feature will provide the ability for Guidewire users to configure a master job to align with an existing schedule. This will allow users to create a robust schedule to orchestrate their batch processes within the Guidewires insurance cores.

:eight_spoked_asterisk: **OPCON-19944**: GuidewireCloud: This feature will provide the ability for Guidewire users to configure a daily job. This will allow users to view and modify their jobs at a more granular (daily) level.

:eight_spoked_asterisk: **OPCON-20683**: Users, Roles and Permissions: This feature delivers the addition of a read-only Resources and Batch Users tab that is aligned to a selected role within Access Management. This will provide administrators with better visibility into existing roles and their assigned batch users and resource components such as access codes, machines, machine groups, schedules and scripts.

:eight_spoked_asterisk: **OPCON-20965**: Server Options: This feature will provide administrators the option to force a global password reset when any changes are made to security settings. This enhancement is designed to bolster the security of your organization by ensuring that any changes to the security configurations can be immediately reflected in your users passwords.

:eight_spoked_asterisk: **OPCON-21505**: GuidewireCloud: This feature delivers integration of the OAUTH requirements to enhance security interactions with the Guidewire REST API. This ensures that only authorized users are able to access and interact with the API resources.

:eight_spoked_asterisk: **OPCON-21590**: GuidewireCloud: This feature will improve the user experience by supplying details and views tailored to GuidewireCloud users. Administrators will be supplied an agent-specific detail page aligned to GuidewireCloud configuration needs. GuidewireCloud users will receive a tailored experience when setting up jobs with insights on attribute details allowing users to find critical information more easily.

:white_check_mark: **OPCON-17189**: Modified Job Status component to show correct job status. This will allow the user to view the correct job status when selecting a job in PERT or in Processes.

:white_check_mark: **OPCON-19792**: Fixed an issue where changing a machine or machine group in an IBMi File Arrival FileWatcher.v3 daily job were not checked for FileWatcher.v3 support.

:white_check_mark: **OPCON-19818**: Fixed incorrect count displayed when modifying an Agent's Communication Status from the Agents page right sidebar.

:white_check_mark: **OPCON-20598**: Renamed a column header in Agent Details page from "Time Spent" to "Time Sent".

:white_check_mark: **OPCON-20654**: Updated the duration column on the Processes page to update every 30 seconds and displays seconds.

:white_check_mark: **OPCON-20721**: Fixed an issue where editing an IBMi File Arrival FileWatcher.v3 daily job did not display or update FileWatcher.v3 properties.

:white_check_mark: **OPCON-20904**: Fixed an issue in IBM i job details page where some fields were not providing pre-defined selections.

:white_check_mark: **OPCON-20910**: Fixed an issue in Event Configuration where the parameters "Reopen Schedule" and "Apply Exceptions" for $JOB:ADD event did not have Yes and No selections.

:white_check_mark: **OPCON-20959**: Fixed advanced filters not being honored after adding a new trigger in Notification Triggers page.

:white_check_mark: **OPCON-20961**: Fixed advanced filters not working correctly in Notification Triggers page.

:white_check_mark: **OPCON-20972**: Fixed an issue where special characters in logs were not displaying properly.

:white_check_mark: **OPCON-21232**: Fixed an issue in Self Service where error would happen after submitting the service request if user input type was Master Job.

:white_check_mark: **OPCON-21195**: Fixed an issue where "Requires XML Escape" for some Agents was always False.

:white_check_mark: **OPCON-21271**: Fixed an issue with different user sessions having stale server options data. Now users no longer need to log out and log in again to get updated server options data while logged into multiple sessions.

:white_check_mark: **OPCON-21565**: Fixed an issue where Multi-Forecasting schedule frequencies resulted in an error.

:white_check_mark: **OPCON-21826**: Removed 'Guidewire' from the Batch Users Target OS selection field. Batch users are no longer supported on this platform.

#### REST API

:white_check_mark: **OPCON-16320**: Vision Card using Remote Session now updates to show the correct card information.

:white_check_mark: **OPCON-21002**: Removed extraneous data from API responses on the 'machines' endpoint.

:white_check_mark: **OPCON-21640**: Fixed slow updates on requests sent to server options endpoint. This update fixed a problem with requests taking an average of 5 seconds to complete to less than 1 second in the server options page.

## OpCon 22.7.0

**NOTE**: Verify/Upgrade these components if applicable: **ServiceNow** Connector – 21.4 or higher, **WebServices** Connector – 21.2 or higher, **Deploy** – 22.4 or higher

2023 August

#### Server

:white_check_mark: **OPCON-16777**: Fixed an issue where estimated start times were not honoring predecessor job run times when Container jobs used instance properties.

:white_check_mark: **OPCON-21275**: Fixed an issue in schedule builds where a named instance schedule having job exceptions defined on it failed if the exception had a property expression with global properties referenced.

#### Solution Manager

:eight_spoked_asterisk: **OPCON-17792**: Server Options: This feature delivers a new time settings tab within server options. This capability gives administrators the ability to customize time settings for schedules and jobs so the workflow can be tailored to your preferences and requirements.

:eight_spoked_asterisk: **OPCON-17798**: Server Options: This feature delivers a new vision tab within Server Options. This capability allows the administrator to define preferences on historical and future data capture on their custom vision cards.

:eight_spoked_asterisk: **OPCON-18523**: Studio Canvas: This new feature will allow users to export a screenshot of a selected schedule's workflow. Now you can capture and save an image of a selected schedule directly from the Studio Canvas.

:eight_spoked_asterisk: **OPCON-20681**: Users, Roles and Permissions: This feature delivers the addition of a read-only Departments tab within Access Management. Administrators will be able to view assigned departments that are aligned to existing roles allowing for better visibility over assigned permissions.

:eight_spoked_asterisk: **OPCON-20986**: Server Options: This feature adds a new layer of precision to server option management. Administrators can now grant write access to users who possess specialized expertise in server options content. Now identified users will not require full administration capabilities to make a valuable contribution.

:eight_spoked_asterisk: **OPCON-21237**: Logging: Added SCHEDULE BUILD LOGS tab to hold schedule build log files. This feature will deliver authorized users the ability to view and download the contents of the logs directly within Solution Manager. This capability is aimed at improving log management efficiency and facilitating easier log analysis.

:eight_spoked_asterisk: **OPCON-21265**: Logging: Included SMALsamDataRetriever.log to base application logs and archives.

:white_check_mark: **OPCON-19806**: Fixed an issue in some pages where right click did not reveal standard browser context menu.

:white_check_mark: **OPCON-19851**: Fixed an issue in Frequencies and Master Jobs where navigating to the next page was not possible.

:white_check_mark: **OPCON-21144**: Fixed an issue in Self Service where comma was reported as invalid character when it was present in characters to strip.

:white_check_mark: **OPCON-21280**: Fixed an issue where Multi-Forecasting frequencies resulted in an error.

:white_check_mark: **OPCON-21333**: Fixed an issue in Self Service where characters to strip were not working as intended.

:white_check_mark: **OPCON-21391**: Fixed an issue where changing the sub-schedule of a Container job was not saved.

:white_check_mark: **OPCON-21472**: Fixed an issue in Server Options page where some empty SMTP settings were saved in the database.

:white_check_mark: **OPCON-21499**: Fixed an issue in Server Options page where numeric SMTP settings were not checked for validity.

:white_check_mark: **OPCON-21503**: Fixed an issue in Server Options where "Save as primary SMTP setting" and "Save as primary SMS setting" checkboxes were not saved.

#### REST API

:white_check_mark: **OPCON-20967**: Fixed an issue which prevented users from using Regular Expression escapes when defining a CloudEvents Trigger filter

:white_check_mark: **OPCON-21272**: Fixed a performance issue in the OpCon API where a container job timed out fetching details if there were a large number of schedules built in daily tables.

:white_check_mark: **OPCON-21282**: Fixed an issue in OpCon API where the 20.0 database migration failed if the database had 2100 user or more defined.

#### ImpEx2 Web Service

:white_check_mark: **OPCON-21194**: Duplicate jobs are created due to case sensitivity. The keys used during existing job matches changed to uppercase to ensure consistent checking avoiding case sensitivity problems. All calls to extract objects from the database have also been updated to ignore case sensitivity.

:white_check_mark: **OPCON-21515**: During schedule deployment when schedule exists, duplicate event records for schedules and jobs can be created. The correction checks for duplicate event records that could be created due to schedule transformation and adjusted the comparison key adding the frequency name to ensure duplicate events are not added to the JEVENTS table.

## OpCon 22.6.0

**NOTE**: Verify/Upgrade these components if applicable: **ServiceNow** Connector – 21.4 or higher, **WebServices** Connector – 21.2 or higher, **Deploy** – 22.4 or higher

2023 July

#### Solution Manager

:eight_spoked_asterisk: **OPCON-17793**: Server Options: This feature delivers the addition of the SMTP server settings configuration tab within Server Options. This new feature will allows administrators to easily setup and manage email notifications, enhancing communication to keep you up to date with system activities.

:eight_spoked_asterisk: **OPCON-17794**: Server Options: This feature delivers a new notification tab within Server Options. This function empowers the administrator to fine tune their preferences for receiving notifications.

:eight_spoked_asterisk: **OPCON-17796**: Server Options: This feature delivers a new security tab within Server Options. This function empowers the administrator to enhance the security of their users accounts with various options to enforce password rules.

:eight_spoked_asterisk: **OPCON-19759**: Studio Canvas: This feature enhancement optimizes the process of storing and retrieving node positions on the canvas, resulting in a smoother and more responsive user experience.

:eight_spoked_asterisk: **OPCON-19801**: Logging: This feature will deliver authorized users the ability to view the contents of the archived log files directly within Solution Manager. This capability is aimed at improving log management efficiency and facilitating easier log analysis.

:eight_spoked_asterisk: **OPCON-19844**: Logging: This feature will deliver authorized users the ability to download the contents of a archived log file directly from Solution Manager. This new capability will improve log management workflows and provide users with more control over their archived logs.

:eight_spoked_asterisk: **OPCON-20241**: Users, Roles and Permissions: This feature delivers the addition of a read-only General tab within Access Management. This new feature provides administrators the capability to view details related to existing roles and the privileges assigned to that role.

:eight_spoked_asterisk: **OPCON-20603**: Logging: Authorized users will have access to a list of archived log files with the ability to see additional details such as the file name, type of file, size and date/time of capture.

:eight_spoked_asterisk: **OPCON-20679**: Users, Roles and Permissions: This feature delivers the addition of a read-only Activities tab within Access Management. Administrators will be able to view the activities and functions assigned to existing roles allowing for better visibility over assigned permissions.

:eight_spoked_asterisk: **OPCON-20804**: Server Options: This feature provides administrators with a convenient way to revert the settings to the default system settings on a single tab or for all changes made on multiple tabs. We believe this addition will enhance usability and flexibility, allowing you to fine tune your setting with ease.

:white_check_mark: **OPCON-20590**: Fixed an issue where copying a job in Studio Canvas would display the message "Job is read only" on the right hand panel.

:white_check_mark: **OPCON-20720**: Fixed an issue in Master Jobs page where not all target schedules were displayed when moving a job from one schedule to another.

:white_check_mark: **OPCON-20722**: Fixed an issue where certain special characters in the new job name were being removed or replaced when copying a master job.

:white_check_mark: **OPCON-20909**: Fixed an issue in the Logs page where sorting log files by size was not working correctly.

#### ImpEx2 Web Service

:white_check_mark: **OPCON-20706**: A null pointer exception occurred during the Simulation process when checking the batch user associated with a File Transfer task definition and the source or destination machine is not defined in the target OpCon system. A message has been included indicating that the batch user could not be checked as the File Transfer machine was not defined.

#### Utilities

:eight_spoked_asterisk: **OPCON-20926**: Added SMA Check Identity Limit job to the SMAUtility schedule when creating a new database.

## OpCon 22.5.0

**NOTE**: Verify/Upgrade these components if applicable: **ServiceNow** Connector – 21.4 or higher, **WebServices** Connector – 21.2 or higher, **Deploy** – 22.4 or higher

2023 June

#### Server

:white_check_mark: **OPCON-16073**: License is now recognized and applied automatically in OpCon on Linux.

#### Solution Manager

:eight_spoked_asterisk: **OPCON-17784**: Users, Roles and Permissions: Users will be provided with a link from the Library providing access to the new Access Management page. This page will be the foundation for the management of users, roles and their permissions within Solution Manager. This first offering provides the user with the initial view into the management of roles.

:eight_spoked_asterisk: **OPCON-17790**: Server Options: This feature will launch a new landing page for Server Options. This initial release will introduce the user to the General Details tab, the first of many, providing the user access to configurations related to your Solution Manager setup.

:eight_spoked_asterisk: **OPCON-19799**: Logging: This feature will deliver authorized users the ability to download the contents of a base log file directly from Solution Manager. With this new capability, you can obtain log file data for in-depth analysis or archival purposes.

:eight_spoked_asterisk: **OPCON-19803**: Logging: This feature will deliver authorized users the ability to view the contents of the base log files directly within Solution Manager. With this new capability, you can gain valuable insights, track system behavior and troubleshoot issues effectively.

:eight_spoked_asterisk: **OPCON-20676**: Users, Roles and Permissions: This release will provide users with an improved and convenient way to manage roles within our application. With the initial view of a list of roles, you can now have a clear overview of existing roles and their descriptions.

:white_check_mark: **OPCON-20725**: [[$EXTERNAL]] properties are now populated in the Job Instance Property Suggestion tooltip.

:white_check_mark: **OPCON-20828**: Fixed error where under some circumstances a user is unable to save a CloudEvents Trigger Association.

:white_check_mark: **OPCON-20865**: Fixed an issue in Notification Triggers Manage Groups page where filtering by selected jobs sometimes gave a job not found error.

:white_check_mark: **OPCON-20873**: Fixed an issue in Notification Triggers Manage Groups page where scrolling through the pages and selecting jobs sometimes gave a job not found error.

:white_check_mark: **OPCON-20971**: Updated Job Type filter on Master Jobs page to include only supported job types.

## OpCon 22.4.0

2023 May

#### General

:eight_spoked_asterisk: **OPCON-18766**: Managed File Transfer (MFT) Server is now available and comes with the ability to run a secure file transfer server and trigger actions based on events that occur on the server. MFT Server is distributed with the existing OpConMFT installer.

:eight_spoked_asterisk: **OPCON-18814**: Added two new privileges to view and manage Cloud Event Trigger associations, "View CloudEvents Associations" and "Maintain CloudEvents Associations".

#### Installation

:white_check_mark: **OPCON-20073**: Fixed an issue in the installer that caused MFT agent system records to be removed from the database during upgrades that needed a SQL script to fix and re-add them.

#### Solution Manager

:eight_spoked_asterisk: **OPCON-17657**: Solution Manager now supports Single Sign-On with identity providers using the OpenID Connect (OIDC) protocol. Configuration options are provided for Okta and Azure AD, and an 'Other' option for all other implementers of OIDC. Learn more here: [Managing SSO](https://help.smatechnologies.com/opcon/core/Files/UI/Solution-Manager/Library/ServerOptions/Managing-SSO-Configurations).

:eight_spoked_asterisk: **OPCON-19555**: Master schedules, including their jobs and privileges, may now be copied to new schedules within Solution Manager.

:eight_spoked_asterisk: **OPCON-16963**: Added the ability to view, add, modify, delete, copy and move SAP BW master jobs within Solution Manager.

:eight_spoked_asterisk: **OPCON-16961**: Added the ability to view, add, modify, delete, copy and move OS2200 master jobs within Solution Manager.

:white_check_mark: **OPCON-19586**: Fix frequency and job dependency issues with master jobs copy.

:white_check_mark: **OPCON-19777**: Fixes issue where single machine selection was being ignored and schedule build was running for each machine in the machine group.

:white_check_mark: **OPCON-19783**: Fix issue where IBMi File Arrival jobs fail to copy.

#### REST API

:white_check_mark: **OPCON-19763**: Fixes issue with self service executions when using the 'Choice' type with dynamic schedule names not being able to be used with the API.

:white_check_mark: **OPCON-20048**: Fixed an issue with Schedule Copy Endpoint which was creating duplicates if new name has an underscore.

:white_check_mark: **OPCON-20664**: Fixed an issue with API where posted CloudEvents will not get deleted from History table when there are no filters defined causing a PRIMARY KEY VIOLATION in CloudEventsArchive table when same event gets reprocessed repeatedly.

:white_check_mark: **OPCON-20078**: Allow users with ocadm role or AllFunctionPrivileges to view or maintain CloudEvents associations.

#### Utilities

:white_check_mark: **OPCON-15703**: Fixed an issue in SMArt Email where look ahead and look behind tokens were not working.

## OpCon 22.3.1

2023 May

#### Server

:white_check_mark: **OPCON-19758**: Fixed an issue where multiple SMANetcom instances tried to write to the same API agent log file and was stopped by Servman as it kept getting locked out from writing to it.

:white_check_mark: **OPCON-12035**: Fixed an issue with wrong calculation of start time for daily jobs

#### Solution Manager

:eight_spoked_asterisk: **OPCON-18775**: Master Jobs: IMBi users are provided with additional field codes improving the usability of the IBMi Agent. These field codes allow for more efficient and accurate data entry by providing shortcuts for commonly used values in IBMi systems.

:eight_spoked_asterisk: **OPCON-19224**: Studio Canvas: Users are provided with the capability of copying an existing schedule. In addition, the user will have the option to include or exclude jobs that are associated with schedule chosen to copy.

:white_check_mark: **OPCON-16104**: Fixed "key not found" issue on Deployment Info section of Daily Schedule Definition page.

:white_check_mark: **OPCON-19126**: Fixes issue with slow performance when trying to load tag manager filter results.

:white_check_mark: **OPCON-19224**: Fixed an issue with daily schedule operations where no jobs would appear when trying to add jobs to sub-schedules.

:white_check_mark: **OPCON-19224**: Fixes issue with start time, end time, and job end time not saving correctly from Daily Job maintenance when days were set to '0' for all three fields.

#### ImpEx2 Web Service

:white_check_mark: **OPCON-19570**: Fixed an issue with schedule import where autoBuildTime was missing from the schedule definition if import a schedule with auto build time of 00:00.

## OpCon 22.2.0

2023 April

#### Server

:white_check_mark: **OPCON-12756**: After an error during the deletion of messages to SAM, netcom will check connection to database and reconnect if it has been lost.

:white_check_mark: **OPCON-16015**: Fixed an issue in SMA_REMAPSQLUSERSTOLOGINS.sql related to database mirroring

:white_check_mark: **OPCON-19202**: Return job initialization failure when OpCon MFT job start fails.

#### Solution Manager

:eight_spoked_asterisk: **OPCON-17771**: Master Jobs: Users are provided with the capability of resetting a Master Job type. Resetting a job type allows the user reset the job type while keeping the characteristics of the job such as dependencies, schedule, frequency etc..

:eight_spoked_asterisk: **OPCON-17781**: Master Jobs: Users are provided with the ability to view Job Execution History from the Master Jobs page.

:eight_spoked_asterisk: **OPCON-18528**: Studio Canvas: Users are provided an informational icon that provides a legend for referencing the dependency color lines and relationships.

:eight_spoked_asterisk: **OPCON-18819**: Adds the ability to active Server functionality on an OpConMFT Agent with a valid license. To enable Server functionality, the Agent must already be authenticated and the webhook must be registered with the Agent.

:eight_spoked_asterisk: **OPCON-19026**: Studio Canvas: Users are provided the option to isolate a jobs dependencies on the canvas. By right clicking a job node, the user can select to see previous dependencies, subsequent dependencies, see a jobs dependency chain and show a jobs shortest path.

:eight_spoked_asterisk: **OPCON-19250**: Studio Canvas: Users are provided the option to isolate the threshold dependencies on the canvas. By right clicking a threshold dependency, the user can select to see previous dependencies, subsequent dependencies, see a threshold dependency chain and show a thresholds shortest path.

:eight_spoked_asterisk: **OPCON-19272**: Studio Canvas: Users are provided the option to isolate the resource dependencies on the canvas. By right clicking a resource dependency, the user can select to see previous dependencies, subsequent dependencies, see resource dependency chain and show a resources shortest path.

:white_check_mark: **OPCON-18823**: Added performance improvements inside the processes page in Solution Manager to efficiently handle large databases.

:white_check_mark: **OPCON-18842**: Fixed an issue where Start Time and End Time were not properly displayed for IBMi File Arrival jobs.

:white_check_mark: **OPCON-18941**: Fixed empty schedule name with new grid.

:white_check_mark: **OPCON-18950**: Fixed nodes not showing after copying a job from another schedule.

:white_check_mark: **OPCON-19003**: Removed error message and added info message for empty schedule.

:white_check_mark: **OPCON-19125**: Fixed an error in Tag Manager filter when the database contains job types that are not yet supported.

:white_check_mark: **OPCON-19143**: Fixed an issue where File Transfer job type was not visible when adding a new master job.

:white_check_mark: **OPCON-19169**: Fixed a bug that prevented non ocadm users from retrieving master transfer jobs.

:white_check_mark: **OPCON-19426**: The Master Jobs Definition page now displays the Schedules list in alphabetical order.

#### REST API

:eight_spoked_asterisk: **OPCON-18820**: Add two new properties on the Machine model - opconMftServerEnabled and opconMftServerEventsWebhook

:eight_spoked_asterisk: **OPCON-18821**: Allows enabling MFT Server functionality on an OpConMFT Agent granted that there is a valid license.

:white_check_mark: **OPCON-19842**: Fixed potential issue with log rollovers when clock changes.

:white_check_mark: **OPCON-19135**: Fixed issue where adding a calendars with an id higher than the maximum small integer would error.

:white_check_mark: **OPCON-19558**: Fixed database migration error with ClouldEvents

#### ImpEx2 Web Service

:white_check_mark: **OPCON-19164**: Fixed an issue in Deploy simulation where role check failed to list missing roles.

## OpCon 22.1.0

2023 March

#### Solution Manager

:eight_spoked_asterisk: **OPCON-17687**: Added a mini-map on the canvas for a high level overview and quick navigation of the selected schedule.

:eight_spoked_asterisk: **OPCON-17688**: Animated lines between nodes have been replaced with static lines for easier viewing of the displayed items.

:eight_spoked_asterisk: **OPCON-18383**: Authorized users will be able to see Single Sign On (SSO) configuration page within Server Options.

#### REST API

:white_check_mark: **OPCON-15392**: Fixed an issue where the replicated OpCon database did not have all tables reseeded for unique ids and hence had a primary key violation error when building or adding jobs to the Daily.

## OpCon 22.0.0

2023 February

#### NOTE: Users with large workflows may experience these performance issues in Solution Manager:

#### In environments with 60,000 jobs or more, Master Job management screens may experience increased page loading times. With schedules containing more than 500 jobs, Studio canvas may experience slow loading times or loading errors.

#### If these delays occur, the instances themselves will still run normally on the OpCon server. We’re working to address both of these issues and anticipate a fix soon after this release. We appreciate your patience as we continue to develop these new Solution Manager capabilities to bring feature parity and scalability for large workflows.

#### Installation

:eight_spoked_asterisk: **OPCON-16236**: A new OpConMFT agent (an agent dedicated to file transfers) is now available as part of OpCon installation. Please refer to the documentation available for the agent on the OpCon help site. NOTE: If you intend to use this agent, you will need to request a new license with this agent included in it. Without the license, if you try to define a new machine for this agent in OpCon and mark it up, you will see a license violation in the Critical log and core services will stop.

#### Solution Manager

:eight_spoked_asterisk: **OPCON-15597**: Solution Manager now allows users to add, edit and delete master schedules from a link on the "Library" page.

:eight_spoked_asterisk: **OPCON-16567**: Solution Manager now allows users to view, add, edit and delete dependencies and threshold/resource updates on the "Studio" page. Users can search, filter, view sub-schedules, view cross schedule dependencies, add master jobs, copy master jobs, and add dependencies using drag and drop.

:eight_spoked_asterisk: **OPCON-17310**: Added Advanced Frequency Settings inside the Master Job Definition page. These settings can be used to adjust scheduling of a frequency on specific schedule dates or for periods of time.

:eight_spoked_asterisk: **OPCON-17646**: Added full frequency and multiple frequencies forecast.

:eight_spoked_asterisk: **OPCON-17682**: Solution Manager now allows users to edit daily OpCon MFT jobs.

:eight_spoked_asterisk: **OPCON-18123**: Solution Manager now allows users to add new frequencies to master schedules and master jobs.

:eight_spoked_asterisk: **OPCON-18432**: Solution Manager now allows users to view, add, edit, copy and delete IBM i master jobs. The supported job types are: Batch, Tracked, Queued, Operator Replay, Restricted Mode, FTP, and File Arrival.

:eight_spoked_asterisk: **OPCON-18744**: Performance improvements have been made to Notification Triggers, Groups, and Categories.

:eight_spoked_asterisk: **OPCON-18786**: Performance improvements have been made to the Calendars page.

:eight_spoked_asterisk: **OPCON-18788**: Performance improvements have been made to the Master Jobs page.

:white_check_mark: **OPCON-16801**: Fixed an issue with Forecast not being displayed in French language.

:white_check_mark: **OPCON-17126**: Fixed an issue in the Agents page where filters were not working.

:white_check_mark: **OPCON-17173**: Fixed error 'Invalid Id' when adding daily job dependency in schedule with named instances.

:white_check_mark: **OPCON-17659**: Modified batch user privileges to show only one alert dialog when saving all modified privileges for a batch user.

:white_check_mark: **OPCON-17685**: Fixed an issue in the Agents page that showed incorrect setting for "Use TLS for Scheduling Communications".

:white_check_mark: **OPCON-17752**: Fixed an issue when trying to save certain frequency settings under 'When Job Finishes Ok'.

:white_check_mark: **OPCON-17756**: Fixed case sensitive and wildcards filter issues in the Agents page.

:white_check_mark: **OPCON-17801**: Fixed an issue in Notification Triggers Manage Groups page where the "Show" drop down had "Selected" but displayed all jobs.

:white_check_mark: **OPCON-17803**: Fixed an issue in Tag Manager where some jobs were not displayed under certain filter conditions.

:white_check_mark: **OPCON-17830**: Modified notification triggers to hide "Windows Event Log", "Network Message", "SNMP Trap", "SPO Event Report", "Run Command" when OpCon is running on a platform different than Windows.

:white_check_mark: **OPCON-17941**: Fixed an issue in events $JOB:RESTART and $JOB:RESTARTHLD where optional parameters Force Restart and Restart Step were missing.

:white_check_mark: **OPCON-17942**: Fixed an issue of notifications not being processed when notification triggers had greater or less than sign.

:white_check_mark: **OPCON-18121**: Fixed some issues in job history notes where a single quote caused an error, the users could not edit the first note, and the order of the notes were reversed after an update.

:white_check_mark: **OPCON-18386**: Fixed an issue where machines were showing for users who did not have permissions inside Master Job Definition page.

:white_check_mark: **OPCON-18389**: Fixed an issue where users without correct machine permissions were able to edit jobs in Master Jobs page.

:white_check_mark: **OPCON-18413**: Fixed an issue where signals inside Master Job Definition page was showing "undefined" in read-only mode.

:white_check_mark: **OPCON-18417**: Fixed error "Event $JOB:MACHGRP is an unknown event".

:white_check_mark: **OPCON-18418**: Fixed an issue where certain job types were hidden from the Master Job Definition page dropdown.

:white_check_mark: **OPCON-18422**: Fixed an issue with the search function in Add Jobs to Schedule module not working properly.

:white_check_mark: **OPCON-18497**: Fixed an issue where Threshold/Resource could not be changed in a previously defined Threshold/Resource dependency.

:white_check_mark: **OPCON-18504**: Fixed an issue in Master Job Definition page where Access Code, Department, and Exit Code were not auto-populated with default values.

:white_check_mark: **OPCON-18530**: Fixed some display issues and how default values were stored in the database for master and daily SQL jobs.

:white_check_mark: **OPCON-18536**: Fixed an issue where unsupported job types were not visible in the Master Jobs page.

:white_check_mark: **OPCON-18590**: Fixed "Run In a Command Shell" switch to show correct active/inactive state.

:white_check_mark: **OPCON-18591**: Fixed Job Output Parsing in a Master Job to be able to modify the order of the priority.

:white_check_mark: **OPCON-18592**: Changed Estimated Run Time for a Master Job to be 1 minute by default.

:white_check_mark: **OPCON-18593**: Fixed an issue in Master Jobs where frequencies with a slash "/" could not be modified.

:white_check_mark: **OPCON-18594**: Modified PreRun option to be disabled by default in admin mode when creating a new master job.

:white_check_mark: **OPCON-18595**: Modified failure criteria to show "Not Equal To" by default in the operator value.

:white_check_mark: **OPCON-18596**: Windows Command line and Directory components have been modified to display the complete content of the field.

:white_check_mark: **OPCON-18598**: Fixed "Invalid frequency FinishedOkBehavior" error with "When Job Finishes Ok" in a master job when it was changed from "Recurring Instances" to "Restart Again".

:white_check_mark: **OPCON-18599**: When creating a dependency in a master job, the schedule field now has the current master job's schedule selected by default.

:white_check_mark: **OPCON-18600**: When a frequency in the inactive frequencies list is renamed, the frequency is now removed from the list.

:white_check_mark: **OPCON-18601**: Master jobs can now be saved when the frequency field in an event is left empty.

:white_check_mark: **OPCON-18648**: If a schedule is a multi-instance schedule, the "Instance Definition" panel now shows up on the "Master Schedule Definition" page when the page is in read-only mode. For Named and Machine multi-instance schedules, the "Instance Definition" panel now has the correct radio button selected and displays correct data.

:white_check_mark: **OPCON-18683**: Fixed multiple builds happening when an instance definition is removed and a build is happening.

:white_check_mark: **OPCON-18774**: Fixed an issue where deleting a master job with cross-references caused two alert dialogs to pop up. One dialog said the job was deleted successfully while the other dialog said it could not be deleted because it had cross references.

:white_check_mark: **OPCON-18831**: Fixed an issue where a large number of frequencies caused an error in the Frequency Manager and Master Jobs.

:white_check_mark: **OPCON-18837**: Fixed an issue in Master Jobs page where Job Type was being sorted by id instead of by displayed text. Added a drop-down next to the column to filter by job type.

:white_check_mark: **OPCON-19127**: Fixed an issue in Manage Groups page where all items selected across different pages were not saved.

#### Server

:white_check_mark: **OPCON-17038**: Updated SMArt Email to use MSAL Graph API for Outlook accounts deactivating basic authentication.

:white_check_mark: **OPCON-18405**: Modified NetCom to log error and shutdown when SMANetCom.log is not present or when there is no permission to the folder containing it.

:white_check_mark: **OPCON-18642**: Fixed an issue in SMANetCom where periodic job status messages to an OpCon MFT agent did not get processed and threw a null pointer exception.

:white_check_mark: **OPCON-18681**: Return a 'job not found' message to SMANetCom in response to a TX2 request when the associated OpCon MFT Agent job cannot be found.

#### REST API

:white_check_mark: **OPCON-18514**: Fixed an issue that caused slowness or errors when processing Self-Service.

:white_check_mark: **OPCON-18687**: Fixed an issue with job histories when using SQL Server 2012.

:white_check_mark: **OPCON-18938**: Fixed an issue in masterJobs endpoint where it did not return all accessible jobs for a non-admin user.

#### ImpEx2 Web Service

:white_check_mark: **OPCON-18382**: Fixed an issue in deploy simulation where the schedule comparison section would not show the actual results.

:white_check_mark: **OPCON-18546**: Corrected invalid check for Conflict dependency when retrieving job master key.

:white_check_mark: **OPCON-18846**: Fixed an issue in deploy simulation check where ocadm role displayed as missing.

