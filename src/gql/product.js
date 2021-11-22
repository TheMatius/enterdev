import { gql } from "@apollo/client";

export const PRODUCT_LIST = gql`
  query GetProductList {
    viewer {
      productList {
        _id
        name
      }
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation newProduct($name: String!) {
    createProduct(
      record: { name: $name }
    ) {
      record {
        _id
        name
      }
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation editProduct($id: MongoID!, $name: String!) {
    updateProduct(
      _id: $id,
      record: { name: $name }
    ) {
      record {
        _id
        name
      }
    }
  }
`;

export const REMOVE_PRODUCT = gql`
  mutation deleteProduct($id: MongoID!) {
    removeProduct(
      filter: { _id: $id }
    ) {
      record {
        _id
        name
      }
    }
  }
`;