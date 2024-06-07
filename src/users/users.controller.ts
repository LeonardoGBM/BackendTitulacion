import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from "./users.service";
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Bibliografia')
@Controller('users')
export class UsersController {
    //constructor(private readonly usersService: UsersService){}
    @ApiOperation({description:'Biblioteca 2', summary:'Metodo get'})
    @Get()
    findAll(){
        return 'Leonardo';
    }
    @Get(':id')
    findOne(@Param('id') id:number){
      return id;
    }

    @Post()
    create(@Body() payload:any){
      return payload;

    }

}
