const { gql } = require('apollo-server-express');
const db = require('./database/dbConfig');

const typeDefs = gql`
  type Location {
    location_id: ID!
    location_name: String!
    province_id: Int!
  }

  input LocationInput {
    location_name: String!
    province_id: Int!
  }

  type Query {
    _empty: String
  }

  type Mutation {
    createLocation(input: LocationInput!): Location
  }
`;

const resolvers = {
  Query: {
    _empty: () => ''
  },
  Mutation: {
    createLocation: async (_, { input }) => {
      try {
        const { location_name, province_id } = input;
        
        // Verify that the required fields are present
        if (!location_name || !province_id) {
          throw new Error('Missing required fields');
        }

        // Verify that province_id is a valid number
        if (!Number.isInteger(province_id) || province_id <= 0) {
          throw new Error('Invalid province_id');
        }

        const [result] = await db.query(
          'INSERT INTO locations (location_name, province_id) VALUES (?, ?)',
          [location_name, province_id]
        );

        if (!result.insertId) {
          throw new Error('Failed to create location');
        }

        return {
          location_id: result.insertId,
          location_name: input.location_name,
          province_id: input.province_id
        };
      } catch (error) {
        console.error('Error creating location:', error);
        throw new Error(error.message || 'Failed to create location');
      }
    }
  }
};

module.exports = { typeDefs, resolvers };