import { Controller, Get,Post,Put,Delete,Body,Param } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDto : User):Promise<User>{
     return  this.appService.createUser(userDto)
  }

  @Get()
   async readUser(){
    return this.appService.readUser()
  }

  @Put(':id')
 async updateUser(@Param('id') id : string ,@Body() userDto:User):Promise<User>{

  return this.appService.updateUser(id,userDto)
}


@Delete(':id')
async deleteUser(@Param('id') id:string){
    return this.appService.deleteUser(id)
}

}
