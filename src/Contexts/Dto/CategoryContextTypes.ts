export interface CategoryContextProps {
  category?: string;
  setCategory: (category: string) => void;
}

export interface CategoryProviderProps {
  children: React.ReactNode;
}
