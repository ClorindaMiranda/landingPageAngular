export const productList:Product []= [
    {id:1, name: 'Ibuprofeno',price: 50 ,description:'Tableta 100mg' },
    {id:2, name: 'Leche Nido',price: 450 ,description:'Tarro 1600g'  },
    {id:3, name: 'Biotrim Crema',price: 189 ,description:'Tubo 10g' },
    {id:4, name: 'Acetaminofen',price: 254 ,description:'Tableta 100mg' },
    {id:5, name: 'Abrilar Jarabe',price: 159,description:'Jarabe 250ml'}
]
export interface Product {
    id:number | string;
    name:string;
    price:number;
    description:string;
}