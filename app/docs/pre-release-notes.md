---
sidebar_label: "OpCon Pre-release Notes"
---

# Pre-release Notes

## Fall 25 - Fix

#### 25.3.1

**NOTE****: Verify/Upgrade these components if applicable**: 

* **Enterprise Manager** - 25.0 
* **ServiceNow** Connector – 21.4 or higher
* **WebServices** Connector – 21.2 or higher
* **Deploy** – 25.3.0 or higher
* **Relay** - 25.1.1 or higher

2025 December

#### Server

:white_check_mark: **OC-5355**: Fixed an issue with $JOB:ADD events.

## Fall 25

#### 25.3.0

**NOTE****: Verify/Upgrade these components if applicable**: 

* **Enterprise Manager** - 25.0 
* **ServiceNow** Connector – 21.4 or higher
* **WebServices** Connector – 21.2 or higher
* **Deploy** – 25.3.0 or higher
* **Relay** - 25.1.1 or higher

2025 November

#### Installation

:white_check_mark: **OC-4388**: Fixed an issue where generated BIRT reports were blank due to a missing jtds-1.2.8.jar.

#### Server

:white_check_mark: **OC-3549**: Fixed an issue where SAM allowed empty instance properties when an external event had extraneous semi-colons in the instance property parameter.

:white_check_mark: **OC-4607**: Request Router now handles database connection loss during initialization or request cleanup without halting request processing or flooding logs with repeated errors.

#### Solution Manager

:eight_spoked_asterisk: **OC-2081**: OpCon now employs standard password salting and hashing techniques to ensure the secure storage of user passwords. This enhancement allows users to create passwords that exceed the previous 12-character limit, offering greater flexibility and security. However, please note that for backward compatibility, the ImpEx user must continue to use passwords that are 12 characters or fewer to ensure proper functionality.

:eight_spoked_asterisk: **OC-2628**: An Annual Plan By Calendar Dates Report is now available in the Reporting Library. This report shows all defined dates on user-defined calendars.

:eight_spoked_asterisk: **OC-2629**: A Cross Reference Schedules and Jobs Report is now available in the Reporting Library. This report shows all jobs and their associated schedules.

:eight_spoked_asterisk: **OC-2630**: A Current Global Properties Report is now available in the Reporting Library. This report shows current values of global properties.

:eight_spoked_asterisk: **OC-2631**: A Current Threshold Values Report is now available in the Reporting Library. This report shows current threshold values and descriptions.

:eight_spoked_asterisk: **OC-2632**: A Current Resource Values Report is now available in the Reporting Library. This report shows current resource values and descriptions.

:eight_spoked_asterisk: **OC-2638**: A Frequencies and Associated Jobs Report is now available in the Reporting Library. This report shows all frequencies and their associated jobs.

:eight_spoked_asterisk: **OC-3715**: The Job Execution History page has been significantly optimized for faster load times and improved responsiveness.

:white_check_mark: **OC-3020**: Fixed an issue where certain filters did not work when language was set to French.

:white_check_mark: **OC-3610**: Fixed an issue where updating a batch user removed them from the daily job.

:white_check_mark: **OC-3611**: Fixed an issue where instance properties were removed from the master schedule when the schedule was changed to multi-instance.

:white_check_mark: **OC-3639**: Fixed an issue where the URL to fetch daily jobs was longer than allowable by the browser.

:white_check_mark: **OC-3666**: Fixed an issue where migration item value in Service Requests did not display correctly for regex.

:white_check_mark: **OC-3745**: Fixed an issue where secondary settings for Client Secret (Email and SMS) under Server Options were not cleared when the associated primary setting was deleted.

:white_check_mark: **OC-3779**: Fixed an issue where cross-references were not detected when the job name contained an underscore.

:white_check_mark: **OC-3793**: Fixed an issue where fetching reports timed out and returned an error.

:white_check_mark: **OC-3962**: Fixed an issue where machine cross-references was empty.

:white_check_mark: **OC-3981**: Fixed an issue where the agent's properties were not visible when the agent was communicating.

:white_check_mark: **OC-4145**: Fixed an issue where the schedule name was not filled in when adding a job from the Studio page.

:white_check_mark: **OC-4625**: Fixed an issue on the Master Jobs page where a "Job not found" error appeared after a job was renamed and the user navigated back using the browser’s back button.

:white_check_mark: **OC-4653**: Fetching job execution history from the Master Jobs page now returns the correct job history.

:white_check_mark: **OC-4812**: Fixed an issue where OpCon roles were missing in SSO group mappings.

:white_check_mark: **OC-4998**: Added proper error handling for cases where a job cannot be found and introduced a loading state while job details are being fetched.

:white_check_mark: **OC-5000**: Resolved an issue in the Vision Health dashboard where graphs failed to display on initial load.

#### REST API

:white_check_mark: **OC-45**: Fixed an issue where &lt;reqparams&gt; values were missing in the API request which caused "Output not found" in Solution Manager when viewing SAP BW or SQL job output.

:white_check_mark: **OC-2883**: The api/jobHistories endpoint now returns only the matching jobs when both "scheduleId" and "jobName" are specified.

:white_check_mark: **OC-4261**: Resolved an issue where heavy REST API usage could exhaust the SQL connection pool, causing Solution Manager to become unresponsive. 

#### ImpEx2 Web Service

:white_check_mark: **OC-1906**:
* Fixed a problem during Schedule Import using Deploy when schedule instance properties are merged if Deploy rule 'Update Schedule Instance Properties Allowed' is not selected.
* Implemented additional Deploy rule 'Merge Schedule Instance properties'. By default, no changes are made to Schedule Instance properties.
* If Deploy rule 'Update Schedule Instance Properties Allowed' is not selected and Deploy rule 'Merge Schedule Instance properties' is selected the schedule instance properties will be merged.

:white_check_mark: **OC-3092**: Fixed a problem when performing script runner match. Removed CommandFormat match as runner name and platform id provide the required information.

:white_check_mark: **OC-3683**: Fixed a problem when retrieving batch user definition from the database and the batch user name contains a special character ([,.).

#### Documentation

:white_check_mark: **OC-3902**: Corrected API Swagger documentation for api/propertyExpression.