import { Module } from "@nestjs/common";
import { BooksController } from "./book.controller";


@Module({
    imports:[BooksModule],
    controllers:[BooksController],
})

export class BooksModule{

}
