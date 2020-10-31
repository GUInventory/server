# GUInvetory

[![GitHub issues](https://img.shields.io/github/issues/GUInventory/server.svg)](https://github.com/GUInventory/server/issues)
[![GitHub forks](https://img.shields.io/github/forks/GUInventory/server.svg)](https://github.com/GUInventory/server/network)
[![GitHub stars](https://img.shields.io/github/stars/GUInventory/server.svg)](https://github.com/GUInventory/server/stargazers)


## How to use

### Install dependencies
```
yarn install
```

### Copy dotenv files and fill them with correct data!
```
cp prisma/.env.example prisma/.env
cp .env.example .env
```

### Run migrations
```
yarn migrate:up
```

### Start dev server
```
yarn dev
```

### Start studio (optional)
```
yarn prisma studio
```
