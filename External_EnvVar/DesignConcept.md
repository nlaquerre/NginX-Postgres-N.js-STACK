#External Storage of Envirnonmental Variables -- Securing API-to-Database Access

This unique design concept eliminates the dynamic nature of .env documents inside the primary API(s).  This allows the API to hold less power, and become more versatile, as internal .env API files will only contain null values.  Permissions granted to users allowed to access/manage the API will not be able to easily read specific database login credentials--allowing them full API access, but without the assumed server-wide authorizations--particularly concerning database permisions.
