import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Doctor {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    image: String
    phone: String
    gender: String
    address: String
    affiliates: String
    acceptingPatients: Boolean
    field: String
  }

  input DoctorFilter {
    firstName: String
    lastName: String
    email: String
    image: String
    phone: String
    gender: String
    address: String
    affiliates: String
    acceptingPatients: Boolean
    field: String
  }

  type Field {
    _id: ID!
    name: String
  }

  type Query {
    doctors(filter: DoctorFilter): [Doctor]
    doctor(_id: ID!): Doctor
    searchDoctors(query: String): [Doctor]
    fields(name: String): [Field]
    field(_id: ID!): Field
    searchFields(name: String): [Field]
  }

  type Mutation {
    addDoctor(firstName: String, lastName: String, email: String, gender: String, phone: String, field: String, affiliates: String, address: String, acceptingPatients: Boolean, image: String): Doctor 
    addField(name: String!): Field
  }
`;
