# DESIGN_NOTES--NginX

<b>1)</b> - Encrypted with EncryptNow certBot.

<b>2)</b> - Primary nginx.conf file fowards all incoming server requests to '/sites-available' directory.  Symlinks here (which can be easily disabled), like the operational sites to block configuration files in '/sites-enabled'.

<b>3)</b> - There are two templates for all block configuration files.  Static web content and API.  They both use ports 80/443 and are encrypted the exact same way. (<i>Although each blockfile uses a seperate SSL encryption certificate.</i>)

&nbsp;&nbsp;&nbsp;<b>a</b>-nlaquerregis.com: This root domain includes [www.] by supplement configuration to the /etc/hosts file.  As of now this forwards to my older portfolio.

&nbsp;&nbsp;&nbsp;<b>b</b>-coding.nlaquerregis.com: This acts as my primary development subdomain.  Note that this blockfile, due to its wide usage includes additional coding within it's "location/{}" sub-block.  The first line of this location sub-block includes an if statement which fixes the need for URL's to include [.html], while also eliminating the address bar from includeing the [.html] extension visually to the user while currently at that page.  This code, along with the 3rd line of the location sub-block defining potential indexes, effectively solves all problems regarding URL disparencies I encountered previously, when typing in these addresses manually.

&nbsp;&nbsp;&nbsp;<b>c</b>-api-1.nlaquerregis.com: This is my primary development REST API subdomain.  It connects to a local ports, establishing it's purpose as a reverse proxy, encrypting all access in and out of my REST API.

</br>

## - To Do:

- 

