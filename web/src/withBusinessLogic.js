import { withState, withHandlers, compose } from 'recompose';
import { gql, graphql } from 'react-apollo';

const createPlaceGraphQLDocument = gql`
  mutation createPlace($input: CreatePlaceInput!) {
    createPlace(input: $input) {
      id
      name
      visited
      longitude
      latitude
    }
  }
`;

export const withCreatePlaceMutation = graphql(createPlaceGraphQLDocument, {
  name: 'createPlaceMutation',
  options: props => ({
    refetchQueries: ['getPlaces'],
  }),
});

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

const updatePlaceGraphQLDocument = gql`
  mutation updatePlace($input: UpdatePlaceInput!) {
    updatePlace(input: $input) {
      id
      name
      visited
      longitude
      latitude
    }
  }
`;

export const toggleVisited = props => id => {};

const getPlacesGraphQLDocument = gql`
  query getPlaces {
    places {
      id
      name
      visited
      latitude
      longitude
    }
  }
`;

export const withPlacesData = graphql(getPlacesGraphQLDocument, {
  props: ({ data }) => ({
    placesLoading: data.loading,
    placesError: data.error,
    places: data.places || [],
  }),
});

const runSearchGraphQLDocument = gql`
  query runSearch($name: String) {
    suggestions(name: $name) {
      id
      name
    }
  }
`;

export const withSuggestionsData = graphql(runSearchGraphQLDocument, {
  options: props => ({
    variables: { name: props.inputValue },
  }),
  props: ({ data }) => ({
    suggestionsLoading: data.loading,
    suggestionsError: data.error,
    suggestions: data.suggestions,
  }),
});

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
