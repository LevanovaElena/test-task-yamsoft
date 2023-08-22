import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IParamsForProducts, ProductsList} from "../models/products";
import {BASE_URL} from "../configure";


export const productsApi = createApi({
    reducerPath: "services/api",
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        getProductsList: build.query<ProductsList, IParamsForProducts>({
            query: ({limit, sort}: IParamsForProducts) => ({
                url: `products`,
                params: {
                    limit: limit,
                    sort: sort || 'desc'
                }
            }),
            //transformResponse(response:ProductsList)=>response.items;//для изменения данных в итоге
        }),
        getProductsListByCategory: build.query<ProductsList, IParamsForProducts>({
            query: ({category, limit, sort}: IParamsForProducts) => ({
                url: `products/category/${category}`,
                params: {
                    limit: limit,
                    sort: sort || 'desc'
                }
            }),
        }),
    })
})
export const {useGetProductsListQuery, useGetProductsListByCategoryQuery} = productsApi