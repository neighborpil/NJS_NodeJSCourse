# NJS_NodeJSCourse
youtube examples


------------------------------------------------------
# how to setup express

npm install -g express

npm install -g express-generator

express myExpressApp --view ejs

cd myExpressApp
npm install

/*
1. set port 8889 in www file
2. change vscode launch.json() below

{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "program": "${workspaceFolder}/myExpressApp/bin/www"
        }
    ]
}
*/
node ./bin/www
