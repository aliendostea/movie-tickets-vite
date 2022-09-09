import { gql } from "@apollo/client";

export const ALL_MOVIES = gql`
  query {
    moviesCount
    allMovies {
      id
      title
      posterPath
      overview
    }
  }
`;

export const FIND_MOVIE_TIME_BY_ID = gql`
  query ($findMovieTimeId: Int!) {
    findMovieTime(id: $findMovieTimeId) {
      times {
        hour
      }
    }
  }
`;

export const ALL_SEATES = gql`
  query {
    allSeats {
      id
      name
      status
      checked
    }
  }
`;

export const ADD_NEW_TICKET = gql`
  mutation ($tickect: TickectSelected) {
    addNewMovieTicket(tickect: $tickect) {
      id
      hour
      finalNumberTickets
      numberAdultTickets
      numberChildrenTickets
    }
  }
`;

export const ADD_USER = gql`
  mutation ($id: ID!, $fullName: String!, $cardNumber: String!, $cvv: String!) {
    addUserData(
      id: $id
      fullName: $fullName
      cardNumber: $cardNumber
      cvv: $cvv
    ) {
      id
      fullName
      cardNumber
      cvv
    }
  }
`;

export const ADD_MOVIE_SELECTED = gql`
  mutation ($movie: MovieSelected) {
    addMovieSelected(movie: $movie) {
      id
      title
    }
  }
`;
