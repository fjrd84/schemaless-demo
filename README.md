# schemaless-demo

This project is a simple demo developed with NodeJS, ExpressJS and MongoDB in order to provide a schemaless REST API of a generic Note resource.

I've created it to provide a backend for [this other repository](https://github.com/fjrd84/notes-app), where I demonstrate inheritance of services and the observer pattern in AngularJS.

## Build & development

Run `npm install` for installing the nodeJS dependencies.

## MongoDB

You need MongoDB running on your system. If you don't have it yet, you can find the installation instructions [here](https://docs.mongodb.com/manual/administration/install-community/).

After the installation, if you don't have it running on your system yet, you can start it with this command:

`mongod --config /usr/local/etc/mongod.conf`

## Run the project

Simply run `npm start` in order to start it. 

If you are a developer, and you want the project to automatically restart whenever you've made any changes, you can install nodemon:

`npm install nodemon -g`

and then run `nodemon`.

## Testing

In development.
