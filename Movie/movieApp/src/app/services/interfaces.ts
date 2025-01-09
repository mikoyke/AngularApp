export interface moiveRes {
  page: number;
  results: movieEntity[];
  total_pages: number;
  total_results: number;
}
export interface movieEntity {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface moviePoster {
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}
