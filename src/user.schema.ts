import { Prop,Schema } from "@nestjs/mongoose";


@Schema()
export class User{
   @Prop()
   username:string;

   @Prop()
   description:string;

   
   date_added:Date;
}