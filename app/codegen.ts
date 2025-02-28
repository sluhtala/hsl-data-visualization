import type { CodegenConfig } from "@graphql-codegen/cli";

const schemaUrl =
  "https://raw.githubusercontent.com/HSLdevcom/OpenTripPlanner/refs/heads/dev-2.x/application/src/main/resources/org/opentripplanner/apis/gtfs/schema.graphqls";

const config: CodegenConfig = {
  overwrite: true,
  verbose: true,

  schema: schemaUrl,
  generates: {
    "src/gql/schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
    "src/gql/": {
      documents: "src/**/*.{ts,tsx}",
      preset: "client",
      plugins: ["typescript"],
      config: {
        useTypeImports: true,
        includeDirectives: true,
      },
    },
  },
};

export default config;
