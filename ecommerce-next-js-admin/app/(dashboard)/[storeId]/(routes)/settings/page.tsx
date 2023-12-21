import prismadb from "@/lib/prismadb"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { SettingsForm } from "./components/SettingForm"

interface SettingPageProps{
   params:{
    storeId:string
   }
}

const SettingPage:React.FC<SettingPageProps> = async ({params}) => {
    const {userId} = auth()
    if(!userId){
        redirect('/sign-in')
    }
    const store = await prismadb.store.findFirst({
        where:{
            id:params.storeId,
            userId
        }
    })
    if(!store){
        redirect('/')
    }
  return (
    <div className="flex space-y-4 p-8 pt-4">
        <div className="flex-col">
            <SettingsForm initialData={store}/>
        </div>

    </div>
  )
}

export default SettingPage