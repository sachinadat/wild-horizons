# Wild Horizons

A simple Node.js project showcasing a dataset of the planet’s most interesting places. The project is built with native Node HTTP server logic and modular data storage.

## Project Structure

- `server.js` - Node HTTP server entry point.
- `package.json` - Project metadata and start script.

## Prerequisites

- Node.js 18 or later

## Install

No dependencies are required beyond Node.js.

```bash
npm install
```

## Run

```bash
npm start
```

The server listens on port `8000` by default.

## API

- `GET /api` - Intended to return the list of destinations as JSON.



## Notes

- The project uses ES module syntax (`type: "module"` in `package.json`).
- `database/db.js` exports `getDataFromDB()` for consuming destination data in other modules.

## Author

Sachin
