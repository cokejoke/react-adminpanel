# react-adminpanel

## Getting started 🔧
To get the frontend running locally:

- Clone this repo
- `npm install` to install all dependencies
- `npm start` to start the local server (this project uses create-react-app)

## Deployment 🐳
Build
```bash
docker build . -t react-adminpanel
```
Run
```bash
docker run -p 8000:80 react-adminpanel
```
