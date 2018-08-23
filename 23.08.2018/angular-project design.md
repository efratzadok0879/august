# Angular:
When we are creating a project by the cmd, there are folders and files that we don't need to them. 
## We can delete this list:
* E2e- this is folder that belongs to the tests.
* Editor.config- definitions typist.
* Node modules- contains all the packages we install from npm (node packages manager- a library with a lot of folders). 
* Package-lock.json-this file is recreated after every "npm install…."  Command.
* Readme- description of the developer.
## What we have now is:
* Src folder
* Angular.json file
* Package.json file
* Tsconfig.json file
* Tslint.json file
### Angular.json
The node-server goes to angular json and takes the source to html,css,js and uploads the project in port 4200.
Idex.html, styles.css, main.ts
In the main.ts refers it to the appModule by bootstrapModule(bootstrap=איתחול,ראשון).
The appModule imports all the components,pipes, directives,modules, services…
### Package.json
The command "npm init –y" is initialize the link to npm library and create the package.json file.
The command: "npm I" install for me all the packages that are written in the package.json file in the dependencies property. All the installed packages are stored in node-modules folder.
### Tsconfig.json
#### How to convert ts to js:
We have to run those commands:
•	"npm install –g typescript" (it downloads tsc- ts compiler)
•	"tsc [ts-file-name]"
In order to convert some ts file in one command:
•	Create tsconfig.json file
•	Run the command: "ts –p config.json"
### Tslint.json
tslint gives us configuration definitions for ts writing (not just angular)
(there is also jslint which gives us configuration definitions for js writing)

(https is http secured (פרוטוקול מאובטח))

