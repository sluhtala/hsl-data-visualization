import { GraphqlClient } from "./GraphqlClient";
import type { RoutesQuery, RoutesQueryVariables } from "../gql/graphql";
import { Mode } from "../gql/graphql";

import { gql } from "@apollo/client/core";
import { ApiService } from "./ApiService";
import { string } from "astro:schema";

const routingQuery = gql`
  query Routes($start: LocalDate!, $end: LocalDate!, $modes: [Mode!]!) {
    routes(transportModes: $modes, serviceDates: { start: $start, end: $end }) {
      shortName
      longName
      desc
      mode
      stops {
        name
      }
      patterns {
        stops {
          name
        }
      }
    }
  }
`;

export class RoutingService extends ApiService {
  startDate: string = "2025-02-28";
  endDate: string = "2025-03-30";
  transportationModes: Mode[] = [Mode.Bus];

  constructor() {
    super();
  }

  async getRoutesData() {
    try {
      const result = await this.client.query<RoutesQuery, RoutesQueryVariables>(
        {
          query: routingQuery,
          variables: {
            start: this.startDate,
            end: this.endDate,
            modes: this.transportationModes,
          },
        },
      );
      if (result.error) {
        throw result.error;
      }
      return result;
    } catch (e) {
      console.error(e);
    }
  }
}
