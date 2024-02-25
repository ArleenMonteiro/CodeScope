const pgrevucLangchainConfig = {
  postgresConnectionOptions: {
    type: 'postgresql',
    host: process.env.PG_revuc_HOST,
    port: process.env.PG_revuc_PORT,
    user: process.env.PG_revuc_USERNAME,
    password: process.env.PG_revuc_PASSWORD,
    database: process.env.PG_revuc_DATABASE_NAME
  },
  tableName: '"Information"',
  columns: {
    idColumnName: 'informationID',
    vectorColumnName: 'vector',
    contentColumnName: 'content',
    metadataColumnName: 'metadata'
  }
};

export default pgrevucLangchainConfig;
