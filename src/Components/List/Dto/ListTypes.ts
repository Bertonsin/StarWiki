import { searchProps } from "../../../Hooks/useSearch/Dto/SearchTypes";

export interface ListProps {
  dataFetched: any;
  dataFiltered?: searchProps[];
  isLoading?: boolean;
  category: string;
}
