export interface IProduct{
    productId: number;
   productName: string;
    productDescription: string;
    //ManufactureCode: number;
    //SubCategoryId: number;
    //CodStatus: number;
    //Price: number;
    //Image: string;
}
export enum Category{
    General= "general",
    Etico ="Etico",
    Niño= "Niño",
    Adulto = "Adulto",
    Genéricos= "Genérico",
}
export interface rating{
    rate: number;
    count: number;
}