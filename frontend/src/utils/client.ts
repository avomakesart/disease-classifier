import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
  PaginatedBloodPressure,
  PaginatedKidneyMeasure,
} from '../generated/graphql';

export const client = () =>
  new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            bloodPressures: {
              keyArgs: [],
              merge(
                existing: PaginatedBloodPressure | undefined,
                incoming: PaginatedBloodPressure
              ): PaginatedBloodPressure {
                return {
                  ...incoming,
                  bloodPressure: [
                    ...(existing?.bloodPressure || []),
                    ...incoming.bloodPressure,
                  ],
                };
              },
            },
            kidneyMeasures: {
              keyArgs: [],
              merge(
                existing: PaginatedKidneyMeasure | undefined,
                incoming: PaginatedKidneyMeasure
              ): PaginatedKidneyMeasure {
                return {
                  ...incoming,
                  kidneyMeasure: [
                    ...(existing?.kidneyMeasure || []),
                    ...incoming.kidneyMeasure,
                  ],
                };
              },
            },
          },
        },
      },
    }),
  });
