export interface  Billboard{
    id:string
    imageUrl:string
    label:string
}
export interface Category{
    id:string
    name:string
    billboard:Billboard
}
