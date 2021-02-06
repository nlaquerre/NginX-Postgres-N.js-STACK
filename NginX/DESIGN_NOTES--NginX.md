# DESIGN_NOTES--NginX

<b>1)</b> - Encrypted with EncryptNow certBot.

<b>2)</b> - Primary nginx.conf file fowards all incoming server requests to '/sites-available' directory.  Symlinks here (which can be easily disabled), like the operational sites to block configuration files in '/sites-enabled'.

<b>3)</b> - There are two templates for all block configuration files.  Static web content and API.  They both use ports 80/443 and are encrypted the exact same way. (<i>Although each blockfile uses a seperate SSL encryption certificate.</i>)

&nbsp;&nbsp;&nbsp;<b>a</b>-nlaquerregis.com: This root domain includes [www.] by supplement configuration to the /etc/hosts file.  As of now this forwards to my older portfolio.

&nbsp;&nbsp;&nbsp;<b>b</b>-coding.nlaquerregis.com: This acts as my primary development subdomain.

&nbsp;&nbsp;&nbsp;<b>c</b>-api-1.nlaquerregis.com: This is my primary development REST API subdomain.  It connects to a local ports, establishing it's purpose as a reverse proxy, encrypting all access in and out of my REST API.

</br>

## - To Do:

- 

