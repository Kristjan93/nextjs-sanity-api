import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  schemaPath: './schemas/schema.js',
  outputPath: '../web/schema.ts',
};

export default config;