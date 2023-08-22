export type ProductsList = IProduct[]

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating;
}

export interface IRating {
    rate: number;
    count: number;
}

export interface IParamsForProducts {
    category?:string;
    limit: string,
    sort: 'desc' | 'asc'
}

