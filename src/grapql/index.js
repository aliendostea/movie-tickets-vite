import { gql, ApolloServer } from "apollo-server";

const TICKETS_MOVIE_SELECTED = [];

const USERS = [];
const MOVIES_SELECTED = [];

const MOVIES = [
  {
    adult: false,
    backdrop_path: "/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg",
    genre_ids: [28, 878, 27],
    id: 766507,
    original_language: "en",
    original_title: "Prey",
    overview:
      "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
    popularity: 14930.029,
    poster_path: "/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
    release_date: "2022-08-02",
    title: "Prey",
    video: false,
    vote_average: 8.1,
    vote_count: 2417,
  },
  {
    adult: false,
    backdrop_path: "/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
    genre_ids: [28, 12, 14],
    id: 616037,
    original_language: "en",
    original_title: "Thor: Love and Thunder",
    overview:
      "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    popularity: 8634.911,
    poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    release_date: "2022-07-06",
    title: "Thor: Love and Thunder",
    video: false,
    vote_average: 6.8,
    vote_count: 1862,
  },
  {
    adult: false,
    backdrop_path: "/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg",
    genre_ids: [12, 28, 878],
    id: 507086,
    original_language: "en",
    original_title: "Jurassic World Dominion",
    overview:
      "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
    popularity: 5736.316,
    poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    release_date: "2022-06-01",
    title: "Jurassic World Dominion",
    video: false,
    vote_average: 7.1,
    vote_count: 2782,
  },
  {
    adult: false,
    backdrop_path: "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
    genre_ids: [10751, 16, 12, 35, 14],
    id: 438148,
    original_language: "en",
    original_title: "Minions: The Rise of Gru",
    overview:
      "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
    popularity: 7863.696,
    poster_path: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    release_date: "2022-06-29",
    title: "Minions: The Rise of Gru",
    video: false,
    vote_average: 7.8,
    vote_count: 1359,
  },
  {
    adult: false,
    backdrop_path: "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    genre_ids: [28, 18],
    id: 361743,
    original_language: "en",
    original_title: "Top Gun: Maverick",
    overview:
      "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
    popularity: 4895.285,
    poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    release_date: "2022-05-24",
    title: "Top Gun: Maverick",
    video: false,
    vote_average: 8.3,
    vote_count: 1904,
  },
  {
    adult: false,
    backdrop_path: "/3p3amyz5nXK9AW4VARqkPaMAG5J.jpg",
    genre_ids: [16, 12, 35, 14],
    id: 585511,
    original_language: "en",
    original_title: "Luck",
    overview:
      "Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around.",
    popularity: 3860.922,
    poster_path: "/1HOYvwGFioUFL58UVvDRG6beEDm.jpg",
    release_date: "2022-08-05",
    title: "Luck",
    video: false,
    vote_average: 8.2,
    vote_count: 370,
  },
  {
    adult: false,
    backdrop_path: "/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg",
    genre_ids: [27, 53],
    id: 756999,
    original_language: "en",
    original_title: "The Black Phone",
    overview:
      "Finney Shaw, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
    popularity: 3359.348,
    poster_path: "/p9ZUzCyy9wRTDuuQexkQ78R2BgF.jpg",
    release_date: "2022-06-22",
    title: "The Black Phone",
    video: false,
    vote_average: 8,
    vote_count: 1843,
  },
  {
    adult: false,
    backdrop_path: "/nW5fUbldp1DYf2uQ3zJTUdachOu.jpg",
    genre_ids: [16, 878, 12, 28, 10751],
    id: 718789,
    original_language: "en",
    original_title: "Lightyear",
    overview:
      "Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.",
    popularity: 2535.14,
    poster_path: "/ox4goZd956BxqJH6iLwhWPL9ct4.jpg",
    release_date: "2022-06-15",
    title: "Lightyear",
    video: false,
    vote_average: 7.3,
    vote_count: 1654,
  },
  {
    adult: false,
    backdrop_path: "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
    genre_ids: [14, 28, 12],
    id: 453395,
    original_language: "en",
    original_title: "Doctor Strange in the Multiverse of Madness",
    overview:
      "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    popularity: 2419.569,
    poster_path: "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    release_date: "2022-05-04",
    title: "Doctor Strange in the Multiverse of Madness",
    video: false,
    vote_average: 7.5,
    vote_count: 5266,
  },
  {
    adult: false,
    backdrop_path: "/27Mj3rFYP3xqFy7lnz17vEd8Ms.jpg",
    genre_ids: [28, 53],
    id: 725201,
    original_language: "en",
    original_title: "The Gray Man",
    overview:
      "When a shadowy CIA agent uncovers damning agency secrets, he's hunted across the globe by a sociopathic rogue operative who's put a bounty on his head.",
    popularity: 2154.547,
    poster_path: "/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
    release_date: "2022-07-13",
    title: "The Gray Man",
    video: false,
    vote_average: 7,
    vote_count: 1561,
  },
  {
    adult: false,
    backdrop_path: "/l99dylTOAMkwKSr54X5ytiEtnLA.jpg",
    genre_ids: [14, 12, 28],
    id: 919355,
    original_language: "en",
    original_title: "Dragon Knight",
    overview:
      "Many years after the war has been lost, and all the dragons slain, a lone knight travels the lands of Agonos seeking to raise an army against the demon lord Abaddon. When a healer's vision reveals that one dragon still lives, and together with an eager young squire, the knight sets off in search of the fabled creature. As the armies of Abaddon descend on the human kingdoms, the dragon is their last hope of fending off the horde, before it lays waste to the lands of men. But does the creature even exist? And if it does, will it fight for them once more?",
    popularity: 1913.939,
    poster_path: "/zkGFADykBtfPfTv7YJooxTH52ph.jpg",
    release_date: "2022-03-21",
    title: "Dragon Knight",
    video: false,
    vote_average: 7.1,
    vote_count: 22,
  },
  {
    adult: false,
    backdrop_path: "/ocUp7DJBIc8VJgLEw1prcyK1dYv.jpg",
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    overview:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    popularity: 1826.631,
    poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    release_date: "2021-12-15",
    title: "Spider-Man: No Way Home",
    video: false,
    vote_average: 8,
    vote_count: 14660,
  },
  {
    adult: false,
    backdrop_path: "/rLo9T9jEg67UZPq3midjLnTUYYi.jpg",
    genre_ids: [10402, 18, 36],
    id: 614934,
    original_language: "en",
    original_title: "Elvis",
    overview:
      "The life story of Elvis Presley as seen through the complicated relationship with his enigmatic manager, Colonel Tom Parker.",
    popularity: 1587.217,
    poster_path: "/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg",
    release_date: "2022-06-22",
    title: "Elvis",
    video: false,
    vote_average: 7.9,
    vote_count: 994,
  },
  {
    adult: false,
    backdrop_path: "/ftGzl2GCyko61Qp161bQElN2Uzd.jpg",
    genre_ids: [28, 53],
    id: 961484,
    original_language: "en",
    original_title: "Last Seen Alive",
    overview:
      "After Will Spann's wife suddenly vanishes at a gas station, his desperate search to find her leads him down a dark path that forces him to run from authorities and take the law into his own hands.",
    popularity: 1783.891,
    poster_path: "/qvqyDj34Uivokf4qIvK4bH0m0qF.jpg",
    release_date: "2022-05-19",
    title: "Last Seen Alive",
    video: false,
    vote_average: 6.6,
    vote_count: 229,
  },
  {
    adult: false,
    backdrop_path: "/jazlkwXfw4KdF6fVTRsolOvRCmu.jpg",
    genre_ids: [53],
    id: 924482,
    original_language: "en",
    original_title: "The Ledge",
    overview:
      "A rock climbing adventure between two friends turns into a terrifying nightmare. After Kelly captures the murder of her best friend on camera, she becomes the next target of a tight-knit group of friends who will stop at nothing to destroy the evidence and anyone in their way. Desperate for her safety, she begins a treacherous climb up a mountain cliff and her survival instincts are put to the test when she becomes trapped with the killers just 20 feet away.",
    popularity: 1690.294,
    poster_path: "/dHKfsdNcEPw7YIWFPIhqiuWrSAb.jpg",
    release_date: "2022-02-18",
    title: "The Ledge",
    video: false,
    vote_average: 6.3,
    vote_count: 79,
  },
  {
    adult: false,
    backdrop_path: "/5PnypKiSj2efSPqThNjTXz8jwOg.jpg",
    genre_ids: [14, 28],
    id: 759175,
    original_language: "en",
    original_title: "The Princess",
    overview:
      "A beautiful, strong-willed young royal refuses to wed the cruel sociopath to whom she is betrothed and is kidnapped and locked in a remote tower of her father’s castle. With her scorned, vindictive suitor intent on taking her father’s throne, the princess must protect her family and save the kingdom.",
    popularity: 1634.608,
    poster_path: "/9pCoqX24a6rE981fY1O3PmhiwrB.jpg",
    release_date: "2022-06-16",
    title: "The Princess",
    video: false,
    vote_average: 7,
    vote_count: 437,
  },
  {
    adult: false,
    backdrop_path: "/8wwXPG22aNMpPGuXnfm3galoxbI.jpg",
    genre_ids: [28, 12, 10751, 35],
    id: 675353,
    original_language: "en",
    original_title: "Sonic the Hedgehog 2",
    overview:
      "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
    popularity: 1705.424,
    poster_path: "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    release_date: "2022-03-30",
    title: "Sonic the Hedgehog 2",
    video: false,
    vote_average: 7.7,
    vote_count: 2783,
  },
  {
    adult: false,
    backdrop_path: "/4dNv1W1KMSLdYGz0tCEaynF0E4Q.jpg",
    genre_ids: [28, 53, 80],
    id: 854467,
    original_language: "en",
    original_title: "Indemnity",
    overview:
      "An ex-fireman with PTSD goes on the run when accused of a crime he doesn't even remember committing, leading him down a rabbit hole of conspiracy to the highest degree.",
    popularity: 1580.001,
    poster_path: "/tVbO8EAbegVtVkrl8wNhzoxS84N.jpg",
    release_date: "2022-02-11",
    title: "Indemnity",
    video: false,
    vote_average: 6.9,
    vote_count: 51,
  },
  {
    adult: false,
    backdrop_path: "/uR0FopHrAjDlG5q6PZB07a1JOva.jpg",
    genre_ids: [16, 878, 28],
    id: 610150,
    original_language: "ja",
    original_title: "ドラゴンボール超：スーパーヒーロー",
    overview:
      "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
    popularity: 1657.231,
    poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
    release_date: "2022-06-11",
    title: "Dragon Ball Super: Super Hero",
    video: false,
    vote_average: 7.5,
    vote_count: 101,
  },
  {
    adult: false,
    backdrop_path: "/obTdaJ22RNFi3fmzUVT5eWOFsOe.jpg",
    genre_ids: [53, 80],
    id: 728366,
    original_language: "en",
    original_title: "Borrego",
    overview:
      "A young botanist relocates to a small desert town to study an invasive plant species. While out on research, she comes to the aid of a downed plane only to find herself taken captive by an inexperienced drug mule who forces her to lead a trek across the sweltering desert to his drop. A local sheriff is drawn into the hunt as his rebellious daughter sets out to find the missing botanist, all the while being pursued by a local drug receiver.",
    popularity: 1522.508,
    poster_path: "/kPzQtr5LTheO0mBodIeAXHgthYX.jpg",
    release_date: "2022-01-14",
    title: "Borrego",
    video: false,
    vote_average: 6,
    vote_count: 36,
  },
];

const SEATS_AVAILABILITY = [
  { status: "available", checked: false },
  { status: "taken", checked: true },
  { status: "taken", checked: true },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "taken", checked: true },
  { status: "taken", checked: true },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "taken", checked: true },
  { status: "taken", checked: true },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "taken", checked: true },
  { status: "taken", checked: true },
  { status: "taken", checked: true },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "taken", checked: true },
  { status: "taken", checked: true },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "taken", checked: true },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "available", checked: false },
  { status: "taken", checked: true },
];

const MOVIES_START_TIME = [
  {
    id: 123,
    currency: "€",
    times: [
      { id: 1, hour: "12:30" },
      { id: 2, hour: "03:30" },
      { id: 3, hour: "06:30" },
      { id: 4, hour: "09:30" },
    ],
  },
  {
    id: 333,
    currency: "€",
    times: [
      { id: 6, hour: "12:00" },
      { id: 7, hour: "01:30" },
      { id: 8, hour: "08:30" },
      { id: 9, hour: "11:30" },
    ],
  },
];

function createSeatsAvailability() {
  const arrayObj = Array.from({ length: SEATS_AVAILABILITY.length }, (v, i) => {
    return { id: `100-S${i}`, name: `S${i}` };
  });

  return Array.from(arrayObj).map((element, index) => ({
    ...element,
    status: SEATS_AVAILABILITY[index].status,
    checked: SEATS_AVAILABILITY[index].checked,
  }));
}

const SetSeats = createSeatsAvailability();

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    overview: String!
    vote_average: Int!
    popularity: Float!
    posterPath: String!
    voteAverageAndPopularity: String!
  }

  type Seats {
    id: ID!
    name: String!
    status: String!
    checked: Boolean!
  }

  type Tickect {
    id: ID!
    hour: String!
    dayNight: String!
    numberAdultTickets: Int!
    numberChildrenTickets: Int!
    finalNumberTickets: Int!
    finalAccount: Int!
    currency: String!
    seatsSelected: [Seats]!
  }

  type User {
    id: ID!
    fullName: String!
    cardNumber: String!
    cvv: String!
  }

  input TickectSelected {
    id: ID!
    hour: String!
    numberAdultTickets: Int!
    numberChildrenTickets: Int!
    finalNumberTickets: Int!
    finalAccount: Int!
  }

  input MovieSelected {
    id: ID!
    title: String!
    posterPath: String!
  }

  input UserData {
    id: ID!
    fullName: String!
    cardNumber: Int!
    cvv: Int!
  }

  type TicketMovie {
    id: ID!
    fullName: String!
    cardNumber: Int!
    cvv: Int!
  }

  type MovieStartTime {
    hour: String!
  }

  type MoviesStartTime {
    id: Int!
    currency: String!
    times: [MovieStartTime]!
  }

  type Query {
    moviesCount: Int!
    allMovies: [Movie]!
    allSeats: [Seats]!
    moviesStartTime: [MoviesStartTime]!
    findMovieTime(id: Int!): MoviesStartTime
  }

  type Mutation {
    addNewMovieTicket(tickect: TickectSelected): Tickect
    addMovieSelected(movie: MovieSelected): Movie
    addUserData(
      id: ID!
      fullName: String!
      cardNumber: String!
      cvv: String!
    ): User
  }
`;

const resolvers = {
  Query: {
    moviesCount: () => MOVIES.length,
    allMovies: () => MOVIES,
    allSeats: () => SetSeats,
    moviesStartTime: () => MOVIES_START_TIME,
    findMovieTime: (root, args) => {
      const { id } = args;
      return MOVIES_START_TIME.find((hour) => hour.id === id);
    },
  },
  Mutation: {
    addNewMovieTicket: (root, { tickect }) => {
      const newItem = { ...tickect };
      TICKETS_MOVIE_SELECTED.push(newItem);
      return newItem;
    },
    addMovieSelected: (root, { movie }) => {
      const newItem = { ...movie };
      MOVIES_SELECTED.push(newItem);
      return newItem;
    },
    addUserData: (root, args) => {
      const newItem = { ...args };
      USERS.push(newItem);
      return newItem;
    },
  },
  Movie: {
    posterPath: (root) => root.poster_path,
    voteAverageAndPopularity: (root) =>
      `${root.vote_average} ${root.popularity}`,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
