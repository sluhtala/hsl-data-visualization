import { gql } from "@apollo/client";
import type { GraphqlClient } from "./GraphqlClient";
import { ApiService } from "./ApiService";

const query = gql`
  query myquery {
    feeds {
      feedId
    }
  }
`;

export class FeedService extends ApiService {
  constructor() {
    super();
  }
}
