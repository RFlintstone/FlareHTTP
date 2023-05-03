> **Note**
> API routes will soon be added to the wiki

# FlareHTTP

An open source MVC project 

## Features

- HTTP requests handles by ExpressJS
- Data stored in Cloud Firestore
- IBANs are the document id which makes requesting data easier
- Code uses a service account key instead of database secrets


## Prerequisites

![Node](https://badgen.net/badge/Node/v18.15.0/green?icon=npm)
![NPM](https://badgen.net/badge/Npm/v9.6.1/green?icon=npm)
![Docker](https://badgen.net/badge/Docker/v20.10.23/cyan?icon=docker)

> **Note**
> Although not tested, higher or lower versions may work.
## Authors

- [@rflintstone](https://www.github.com/rflintstone)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`EXPRESS_IP={ip}`,
`EXPRESS_PORT={port}`
`VIEW_ENABLED={true||false}`
`API_ENABLED={true||false}`

If you deploy the project make sure the `EXPRESS_PORT` matches the port of the container. The value of `EXPRESS_IP` is recommended to be set to `127.0.0.1` if you dont know the ip.
## Run Locally
> **Warning**
> Only follow these instructions if you plan to edit it. Please follow 'Deployment' when you want to use this in a production environment

Clone the project

```bash
  git clone https://github.com/RFlintstone/FlareHTTP.git FlareHTTP
```

Go to the project directory

```bash
  cd FlareHTTP
```

Install dependencies

```bash
  npm i
```

Start the development environment

```bash
  npm start
```


## Deployment

To deploy this project run.

```bash
docker run -d --name flarehttp -p 80:8080 -e NODE_ENV=production ghcr.io/rflintstone/flarehttp:main
```

If you don't already have the image on your machine it will pull the latest version from the repo.

## Roadmap

https://github.com/users/RFlintstone/projects/2/

## Used By

This project is used by:

- Group 14, Project 3/4 2023 - Rotterdam University of Applied Sciences 
