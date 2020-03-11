const appconfig = {
    PORT: process.env.PORT || 3000,
    PSqlServerName: process.env.PSqlServerName || 'localhost',
    PSqlServerPort: process.env.PSqlServerPort || 5433,
    PSQLUserName: process.env.PSQLUserName || 'postgres',
    PSQLUserPassword: process.env.PSQLPassword || 'postgres',
}
export default appconfig;