import { IProductItem } from "../data/productData";


export const searchByTitle = (productList: IProductItem[], title: string) => {
    let result: IProductItem[] = []
    productList.filter(obj => {
        if(obj.title.toLowerCase() === title.toLowerCase()) result.push(obj)
    });

    return result
}

export const discountCalculate = (price: string, compareAtPrice: string) => {
    if (price == "0") return 0

    const percent = (Number(compareAtPrice) - Number(price)) / Number(compareAtPrice)
    return (percent * 100).toFixed(2)
}