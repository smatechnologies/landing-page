---
hide_title: true
---

# Relay (NetComApi)

The Relay (NetComApi) utility provides communication for our **OpCon Relay** and **OpCon Outcomes** cloud offerings.  

This is accomplished by relaying traffic from/to the Agents internal to a customer network with the customer's cloud instance(s).

### Diagram

![](../static/img/Relay_Diagram_2024-10-09.png)


### Download

You can download the latest version of the Relay install package using the OpCon Web Installer located at:

https://github.com/smatechnologies/opcon-web-installer/releases/latest 

or directly from our SFTP server at: 

https://files.smatechnologies.com/files/OpCon%20Releases/Relay.

### FAQs

**Q**: What versions of Windows OS are supported?

**A**: All versions of Windows Server currently supported by Microsoft.

**Q**: What specifications should the machine have that is running Relay?

**A**: We suggest 2-4 vcpu, 8-16GB of RAM, and at least 64GB of storage (OS & Logs).

**Q**: What ports need to be open?

**A**: Typically, none, but if you are blocking outbound traffic to the Internet then `TCP:9012` and `TCP:9013`.  If you choose to install Relay within a DMZ, then you will also need to open inbound traffic for all ports used by Agents (default: 3100-3111).

**Q**: How do I update the Relay software?

**A**: Currently you must manually stop the service, overwrite the executable with the new version, and restart the service.  In a future release, automatic updating will be implemented.

### Known Issues

* Currently will *only install and run on a Windows OS*
* Requires a Relay *per* OpCon instance.  For example, if you have a production and development instance of OpCon, then you would need to install two (2) relays.  Multiple relays **CAN NOT** exist on the same Windows OS.
* When configuring the Agent in OpCon to use Relay (NetComName) and the Relay and Agent are on the same Windows Server machine, you **SHOULD NOT** use `127.0.0.1` as the IP Address.  *Instead you should use the actual name of the server or the actual IP Address of the server*.

### Install

1. Download the install file **SMANetComRelay.exe**
2. Copy **"SMANetComRelay.exe"** from the download folder to `"C:\Program Files\OpConxps\Relay\SMANetComRelay.exe"`
3. Right-click the file **SMANetComRelay.exe** and choose to **Run as administrator**
4. You will be presented with a text menu, choose the first option labeled **Register & Install Netcom Relay Service**
5. Next, you will be prompted to **Enter Client Name**.  The default is the fully qualified domain name of the machine, we recommend taking the default.
6. Next, you will be prompted to **Enter Relay Name**.  The default is the name of the machine, we recommend the prefix of the URL to your OpCon instance.  For example, `company-prod`, where **company** would be your company identifier and **prod** would be the instance identifier.  These are usually found in the provided URI before `opcon.smatechnologies.com`.
7. Next, you will be prompted to **Enter your OpCon URI**.  This will be the URI provided by SMA that identifies your cloud instance.
8. Finally, you will be prompted to Enter External Event Token for a User with Super Admin privilege like ocadm.

You can generate this token by logging into Solution Manager as a user like ocadm and navigating to LIBRARY → ACCESS MANAGEMENT → USERS → “+” to add a new user

First Name: Relay

Last Name: Install

Username: relayInstall

Password: <remember for later>

Click on the button labeled “Save”

Click on the ROLES tab and check the box for Role_ocadm and click on the button labeled “Save”

Click on the SETTINGS tab and check the box for Enable external tokens and click on the button labeled “Save”

Logout of Solution Manager and log back in as relayInstall and navigate to RELAYINSTALL → EXTERNAL TOKEN. Here you will select the radio button labeled API Token and then click the button labeled Generate. Make sure to copy and paste the generated token to the install dialog that is currently open.
9. You will see the install dialogue confirm authentication to the URI entered in step 7 with the token entered in step 8 and then register to relay with the names given in Steps 5 & 6.
10.  You can now choose to **Exit** the install dialog or just close the window.
11.  Log into Solution Manager as `ocadm` or user with equivalent rights.
12.  Navigate to **Library -> Agents**
13.  For each Agent that will use the installed Relay:
     * Stop the agent
     * Modify the agent and add the name of the Relay from Step 6 to the **NetComName** field under **General Settings**
     * Save the changes
     * Start the agent
14. If all Agents show **Communicating**, then you have successfully installed and configured Relay.  If not, please open a case with support so our team can help you troubleshoot the issue.
15. Log back into Solution Manager as a user like ocadm and navigate to LIBRARY → ACCESS MANAGEMENT → USERS.  Select the user relayInstall, created in Step #8, by clicking on it.  Click on the vertical ellipsis to Delete the selected user.

### Uninstall

1. Open File Explorer in Windows and navigate to `"C:\Program Files\OpConxps\Relay"` or the path you installed to.
2. Right-click the file **SMANetComRelay.exe** and choose to **Run as administrator**
3. You will be presented with a text menu, choose the second option labeled **Uninstall Netcom Relay Service**
4. You will see the install dialogue confirm successful remove of the Relay services.
5. You can now choose to **Exit** the install dialog or just close the window.