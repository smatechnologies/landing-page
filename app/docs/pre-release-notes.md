# Pre-release Notes

## Summer 26

**NOTE**: Verify/Upgrade these components if applicable:

* **ACS AzureWebservices** - 25.0.2
* **ACS Ease** - 25.0.3
* **ACS WebServices** - 25.0.2
* **Deploy** – 26.0.2 or higher
* **Enterprise Manager** - 26.0.1 or higher
* **Relay** - 26.1.2 or higher
* **ServiceNow Connector** – 25.0 or higher
* **WebServices Connector** – 21.6 or higher

### 26.1.3

#### SERVER

:white_check_mark: **OC-7588**: Fixed an issue where RequestRouter would stall the OPCONREQ queue during temporary SQL Server connection recovery events. When SQL Server auto-recovers a dropped connection, the rowcount metadata from the initial query can be temporarily unavailable. RequestRouter now treats this as a recoverable transient condition and retries immediately, allowing schedule requests to resume without queue backup. This resolves intermittent queue stalls observed across cloud deployments during network or infrastructure events.

#### SOLUTION MANAGER

:white_check_mark: **OC-7278**: Fixed an issue with build date selection.

#### IMPEX2 WEB SERVICE

:eight_spoked_asterisk: **CON-1485**: A new feature to Reset Script versions has been implemented with this Release This implements a new capability to reset the script versions of a script in the Deploy database from a selected OpCon system. The reset versions can then be deployed to other target OpCon systems synchronizing the script versions across OpCon systems. Requires matching Deploy versions. Read the Deploy Release notes for more information.