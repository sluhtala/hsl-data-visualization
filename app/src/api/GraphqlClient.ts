import { ApolloClient, InMemoryCache } from "@apollo/client/index.js";
import { API_KEY, API_URI } from "astro:env/server";

export class GraphqlClient extends ApolloClient<any> {
  constructor() {
    super({
      uri: API_URI,
      cache: new InMemoryCache(),
      headers: {
        "digitransit-subscription-key": API_KEY,
      },
    });
  }
}
