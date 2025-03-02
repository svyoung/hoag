import { gql } from "@apollo/client";

export const GET_DOCTORS = gql`
  query GetDoctors {
    doctors {
      _id
      firstName
      lastName
      email
      image
      field
      gender
      address
      phone
      affiliates
      acceptingPatients
    }
  }
`;

export const SEARCH_DOCTORS = gql`
  query SearchDoctors($query: String) {
    searchDoctors(query: $query) {
      _id
      firstName
      lastName
      email
      image
      field
      gender
      address
      phone
      affiliates
      acceptingPatients
    }
  } 
`;

export const FILTER_DOCTORS = gql`
  query FilterDoctors($filter: DoctorFilter) {
    doctors(filter: $filter) {
      _id
      firstName
      lastName
      email
      image
      field
      gender
      address
      phone
      affiliates
      acceptingPatients
    }
  }
`;


export const ADD_DOCTOR = gql`
  mutation AddDoctor($firstName: String, $lastName: String, $email: String, $gender: String, $phone: String, $affiliates: String, $address: String, $acceptingPatients: Boolean, $image: String) {
    addDoctor(firstName: $firstName, lastName: $lastName, email: $email, gender: $gender, phone: $phone, affiliates: $affiliates, address: $address, acceptingPatients: $acceptingPatients, image: $image) {
      _id
      firstName
      lastName
    }
  }
`;

export const GET_FIELDS = gql`
  query GetFields {
    fields {
        _id
        name
    }
  }
`;

export const SEARCH_FIELDS = gql`
  query SearchFields($name: String) {
    searchFields(name: $name) {
      _id
      name
    }
  }
`;


