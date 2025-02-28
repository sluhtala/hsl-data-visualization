import { GraphqlClient } from "./GraphqlClient";

export class ApiService {
  static client: GraphqlClient;

  constructor() {
    if (ApiService.client) {
      return;
    }
    ApiService.client = new GraphqlClient();
  }

  get client() {
    return ApiService.client;
  }
}
