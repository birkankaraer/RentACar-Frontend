import { CarDetail } from "./car-detail";
import { ResponseModel } from "./responseModel";

export interface CarDetailResponseModel extends ResponseModel{
  data : CarDetail[];
}
