import { createContext, useState } from "react";
import {
  CategoryContextProps,
  CategoryProviderProps,
} from "./Dto/CategoryContextTypes";

export const CategoryContext = createContext<CategoryContextProps>(
  {} as CategoryContextProps
);

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [category, setCategory] = useState("");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
