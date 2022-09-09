export interface MoviePriceTypes {
  children: number;
  adult: number;
  currency: string;
}

export const MOVIE_TICKET_PRICE: MoviePriceTypes = {
  adult: 12,
  children: 6,
  currency: "€",
};

export interface MoviesTypes {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  popularity: number;
  posterPath: string;
  voteAverageAndPopularity: string;
}
