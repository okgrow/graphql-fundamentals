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

export const withUpdatePlaceMutation = graphql(
  gql`
    mutation updatePlace($input: UpdatePlaceInput!) {
      updatePlace(input: $input) {
        id
        name
        visited
        longitude
        latitude
      }
    }
  `,
  {
    name: 'updatePlaceMutation',
  }
);

export const toggleVisited = ({ updatePlaceMutation, places }) => async id => {
  const placeToVisit = places.find(place => place.id === id);

  await updatePlaceMutation({
    variables: { input: { id, visited: !placeToVisit.visited } },
  });
};

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
  withUpdatePlaceMutation,
  withStateEnhancer,
  withHandlers({
    addPlace,
    editInput,
    toggleVisited,
  }),
  withSuggestionsData
);
