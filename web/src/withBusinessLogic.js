import { withState, withHandlers, compose } from 'recompose';
import { gql, graphql } from 'react-apollo';

export const withCreatePlaceMutation = graphql(
  gql`
    mutation createPlace($input: CreatePlaceInput!) {
      createPlace(input: $input) {
        id
        name
        visited
        longitude
        latitude
      }
    }
  `,
  {
    name: 'createPlaceMutation',
    options: props => ({
      refetchQueries: ['getPlaces'],
    }),
  }
);

export const withStateEnhancer = withState('inputValue', 'setInputValue', '');

export const addPlace = ({ createPlaceMutation }) => async placeId => {
  await createPlaceMutation({
    variables: { input: { placeId } },
  });
};

export const editInput = ({ setInputValue }) => async event => {
  const { value } = event.target;

  setInputValue(value);
};

export const toggleVisited = props => id => {};

export const withPlacesData = graphql(
  gql`
    query getPlaces {
      places {
        id
        name
        visited
        latitude
        longitude
      }
    }
  `,
  {
    props: ({ data }) => ({
      placesLoading: data.loading,
      placesError: data.error,
      places: data.places || [],
    }),
  }
);

export const withSuggestionsData = graphql(
  gql`
    query runSearch($name: String) {
      suggestions(name: $name) {
        id
        name
      }
    }
  `,
  {
    options: props => ({
      variables: { name: props.inputValue },
    }),
    props: ({ data }) => ({
      suggestionsLoading: data.loading,
      suggestionsError: data.error,
      suggestions: data.suggestions,
    }),
  }
);

export default compose(
  withPlacesData,
  withCreatePlaceMutation,
  withStateEnhancer,
  withHandlers({
    addPlace,
    editInput,
    toggleVisited,
  }),
  withSuggestionsData
);
