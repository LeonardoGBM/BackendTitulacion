export declare class BooksController {
    find(): string;
    findOne(id: number): number;
    create(payload: any): any;
    update(id: number, payload: any): {
        id: number;
        body: any;
    };
}
