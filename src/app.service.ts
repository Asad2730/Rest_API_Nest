import { Injectable } from '@nestjs/common';
import { User,UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
   
  constructor( @InjectModel('user') private readonly userModel:Model<UserDocument>){}

  async createUser(user) : Promise<User>{
     const newUser =  new this.userModel(user)
     return newUser.save()
  } 
  
  async readUser(){
      return this.userModel.find()
  }

  async updateUser(id,data) :Promise<User> {
    return this.userModel.findByIdAndUpdate(id,data,{new:true})
  }
   
  async deleteUser(id){
    return this.userModel.findByIdAndRemove(id)
  }
}
