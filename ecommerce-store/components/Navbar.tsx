import Link from "next/link"
import Container from "./ui/container"
import MainNav from "./MainNav"
import getCategories from "@/actions/getCategories"
import NavbarActions from "./NavbarActions"
export const revalidate = 0
const Navbar =  async() => {
  const categories = await getCategories()
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6  lg:px-8 h-16 items-center flex ">
        <Link href='/' className="ml-4 flex lg:ml-0 gap-x-2">
        <p className="font-bold text-xl ">
          STORE
        </p>
        </Link>
        <MainNav data={categories}/>
        <NavbarActions/>
        </div>
      </Container>
    </div>
  )
}

export default Navbar