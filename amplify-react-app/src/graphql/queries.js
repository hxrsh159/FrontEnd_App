/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getServiceRequest = /* GraphQL */ `
  query GetServiceRequest($id: ID!) {
    getServiceRequest(id: $id) {
      id
      name
      description
      creationDate
      severity
      resolutionDate
      reporterName
      contactInfo
      location
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listServiceRequests = /* GraphQL */ `
  query ListServiceRequests(
    $filter: ModelServiceRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServiceRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        creationDate
        severity
        resolutionDate
        reporterName
        contactInfo
        location
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
