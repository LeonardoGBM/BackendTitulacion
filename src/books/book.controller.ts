import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";


@ApiTags('Books')
@Controller('books')
export class BooksController{
    @ApiOperation({description:'Traer', summary:'Metodo get de traer'})
    @Get()
    find(){
        return 'Books';
    }

    @Get(':id')
    findOne(@Param('id') id:number){
    return id;
    }

    @Post()
    create(@Body() payload:any){
    return payload;
    }

    @Put(':id')
    update(@Param('id') id:number , @Body() payload:any){
    return {id, body: payload};
    }
}