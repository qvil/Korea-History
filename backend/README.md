# Korea History Backend

> ## Note
>
> You must need below format config file.

## backend/config/config.json

```json
{
  "database": {
    "id": "YOUR_ID",
    "password": "YOUR_PASSWORD",
    "DATABASE_NAME": "YOUR_DATABASE",
    "COLLECTION_NAME": "YOUR_COLLECTION"
  },
  "server": {
    "koa": {
      "port": "KOA_PORT"
    },
    "graphql": {
      "port": "GRAPHQL_PORT"
    }
  }
}
```

## Prerequisites

- Node.js >= 8.x (Recommended the latest version)

## Install

```
npm install
```

## Start

### Development

```
npm run dev
```

### Deploy

```
npm run start
```
