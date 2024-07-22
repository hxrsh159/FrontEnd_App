/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createServiceRequest = /* GraphQL */ `
  mutation CreateServiceRequest(
    $input: CreateServiceRequestInput!
    $condition: ModelServiceRequestConditionInput
  ) {
    createServiceRequest(input: $input, condition: $condition) {
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
export const updateServiceRequest = /* GraphQL */ `
  mutation UpdateServiceRequest(
    $input: UpdateServiceRequestInput!
    $condition: ModelServiceRequestConditionInput
  ) {
    updateServiceRequest(input: $input, condition: $condition) {
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
export const deleteServiceRequest = /* GraphQL */ `
  mutation DeleteServiceRequest(
    $input: DeleteServiceRequestInput!
    $condition: ModelServiceRequestConditionInput
  ) {
    deleteServiceRequest(input: $input, condition: $condition) {
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
