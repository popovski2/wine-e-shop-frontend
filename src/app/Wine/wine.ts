import {Category} from "../Category/category";
import {Manufacturer} from "../Manufacturer/manufacturer";
import {Type} from "../Type/type";
import {User} from "../User/user";

export interface Wine{

  //this is the kind of data that we will receive from the api
  //mirroring what employee looks like
  id:number;
  name:string;
  price:number,
  quantity:number,
  imageUrl:string,
  type:Type,
  category:Category,
  manufacturer:Manufacturer,
  creator:User


}
