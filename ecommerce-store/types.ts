export interface  Billboard{
    id:string
    imageUrl:string
    name:string
}
export interface Category{
    id:string
    name:string
    billboard:Billboard
}
