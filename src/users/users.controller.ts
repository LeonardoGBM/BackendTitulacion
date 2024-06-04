import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    //constructor(private readonly usersService: UsersService){}

    @Get()
    findAll(){
        return 'hola';
    }
   /* @Get(':id')
    findOne(@Param('id') id: string) {
      return this.usersService.findOne(id);
    }*/
  

}
