# Ionic Template

This is a template for an Ionic project. It is based on the [Ionic Framework](https://ionicframework.com/).

# Installation

```shell
pnpm i
```

# Before running

If this is the first run, you need to generate a table.

`/src/databases/connection.ts`

```typescript
const dataSourceConfig: DataSourceOptions = {
	name: 'cossConnection',
	type: 'capacitor',
	driver: sqliteParams.connection,
	database: dbName,
	mode: 'no-encryption',
	entities: entities,
	migrations: migrations,
	subscribers: [],
	logging: ['error', 'schema'],
	synchronize: true, // I don’t know if it is correct. If there is no table locally, you need to enable the following configuration
	migrationsRun: false
}
```

# Running

```shell
pnpm dev
```
