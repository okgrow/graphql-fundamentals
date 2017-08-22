import { gql } from 'react-apollo';
export default gql`
  query runSearch($name: String) {
    suggestions(name: $name) {
      id
      name
    }
  }
`;
