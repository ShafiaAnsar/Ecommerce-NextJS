import getBillboards from "@/actions/getBillboards"
import getProducts from "@/actions/getProducts"
import ProductList from "@/components/ProductList"
import Billboard from "@/components/ui/Billboard"
import Container from "@/components/ui/container"

export const revalidate = 0
const HomePage =  async() => {
  const products = await getProducts({isFeatured:true})
  const billboards = await getBillboards('9d7c169a-124e-429f-bab9-1be0b8bb80bd')
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data ={billboards}/> 
        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8c">
        <ProductList title='Featured Products' items={products}/>
      </div>
      </div>
      
    </Container>
  )
}

export default HomePage