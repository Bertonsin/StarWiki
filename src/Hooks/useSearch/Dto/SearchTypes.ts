import { peopleResultsDataType } from "../../../Pages/People/Dto/peopleDataTypes";
import { planetsResultsDataType } from "../../../Pages/PlanetsPage/Dto/PlanetsDataTypes";

export interface searchProps {
  name?: string;
  title?: string;
  gender?: string;
  especies?: string;
}

export interface dataTypes {
  data: peopleResultsDataType[] | undefined;
}
