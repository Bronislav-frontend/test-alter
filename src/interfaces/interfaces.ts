export interface NewsStateItem {
  title: string;
  link: string;
  keywords: null | string[];
  creator: null | string[];
  video_url: null | string;
  description: string;
  content: null | string;
  pubDate: string;
  image_url: null | string;
  source_id: string;
  country: [] | string[];
  category: [] | string[];
  language: string;
}

export interface NewsState {
  status: string;
  isLoading: boolean;
  totalResults: number;
  results: [] | NewsStateItem[];
  nextPage: string;
}

export interface AuthState {
  userName: string;
  isLoggedIn: boolean;
}
