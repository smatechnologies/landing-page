---
sidebar_label: "OpCon Pre-release Notes"
---

# Pre-release Notes

## Summer 25

## 25.2.0

**NOTE**: Verify/Upgrade these components if applicable: 

* **Enterprise Manager** - 25.0 
* **ServiceNow** Connector – 21.4 or higher
* **WebServices** Connector – 21.2 or higher
* **Deploy** – 25.0.0 or higher
* **Relay** - 25.1.1 or higher

2025 July

#### Relay
:white_check_mark: **OC-3600**: Fixed an issue where Machines may be placed offline by NetCom/Relay after an interruption to communication.

#### Solution Manager
:white_check_mark: **OC-52**: Fixed an issue where the time 12:00 PM is displayed as 0:00 PM in Solution Manager Studio when editing frequency values on a job.

:white_check_mark: **OC-30**: Fixed an issue where users were unable to add frequency to a multi-instance schedule.

:white_check_mark:  **OC-12**: Fixed an issue where user could not view log page unless they have both View App logs and View Schedule Build log permission.

:white_check_mark: **OC-351**: Fixed an issue where Frequencies cross references were not working when the name contains "/".

:white_check_mark: **OC-2795**: Fixed an issue where jobs with dependencies and a start offset time displayed incorrect start times.

:white_check_mark: **OC-1826**: Resolved an issue where filtering agents by type returned no results for ACS and RPA agents.

:white_check_mark: **OC-2168**: Fixed an issue where long response time was causing a timeout when loading history.

:white_check_mark: **OC-2837**: Fixed an issue where a user could not update Jobs in admin mode immediately after creating one without refreshing the application.

:white_check_mark: **OC-2881**: Fixed an issue causing insufficient space to fill in recurring instance data in the 'When Jobs Finishes OK' section of a daily job's frequency. Additionally, fixed an issue where the 'Resulting Date/Time' was made a required Date/Time picker field in the 'When Job Finishes OK' section for 'Run Again' with 'Recurring Instances'.

:white_check_mark: **OC-2891**: Resolved an issue where the frequency list for a master job was not populated when adding a dependency to a master job in Studio.

:white_check_mark: **OC-3016**: Removed Maintain Frequencies Checkbox as it was not being used by any function privileges.

:white_check_mark: **OC-3022**: Fixed an issue in Studio where the View button was incorrectly enabled when it should have been disabled.

:white_check_mark: **OC-3152**: Fixed an issue where it was not possible to update an encrypted Global Property in the Solution Manager if you don't know the original value of the Global Property.

:white_check_mark: **OC-3253**: Fixed an issue where used trigger names become unavailable across all groups.

:white_check_mark: **OC-3268**: Fixed an issue where SQL Job Types created in Solution Manager did not store batch user information correctly, causing jobs to fail to start.

:white_check_mark: **OC-3284**: Improved error messaging in the Batch Users API for cases where the platform or platform ID is null in POST and PUT requests.

:white_check_mark: **OC-3366**: Fixed an issue where SQL database scripts included an extra character on the GO line, which could cause execution errors during deployment.

:white_check_mark: **OC-3620**: Fixed an issue in Schedule Build, where a schedule is selected after selecting the date and other build options, the selections shown in the UI are ignored and it attempts to build the schedule for the current date.
