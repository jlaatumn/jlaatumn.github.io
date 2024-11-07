not all components in components/ui are going to be used, they just come with the package. The ones we dont use can be deleted later.

There is also alot of stuff left over from the next.js project setup which needs to be cleaned up.

Github pages only takes statically rendered pages so there is a setting for that somewhere in the config file that needs to be figured out which just exports the site in the format github pages needs. (pretty sure this exists otherwise I can rework the code)

The outputted static file generated in the /out folder will be pushed to a branch and that will be the website.

HOW TO RUN THE PAGE BEFORE IT IS DEPLOYED FOR CODING + VIEWING:
1. pull this branch

2. run: npm install

3. run: npm run dev
