'use client'
import * as z from 'zod'
import { Modal } from "../ui/modal"
import axios from 'axios'
import { useStoreModal } from "@/hooks/use-store-modal"
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useState } from 'react'
import toast from 'react-hot-toast'
const formSchema = z.object({
    name:z.string().min(1)
})
export const StoreModal = ()=> {
    const [loading,setIsLoading] = useState(false)
    const storeModal = useStoreModal()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            name:''
        }
    })
    const onSubmit = async(values:z.infer<typeof formSchema>)=>{
        try {
            setIsLoading(true)
            const response = await axios.post('api/stores',values)
            console.log(response.data)
            toast.success("Store Created!")
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
        finally{
            setIsLoading(false)
        }
    }
    
    return (
    <Modal title="Create store"
    description="Create a new store"
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
    >
    <div className="">
    <div className="space-y-4 py-2 pb-4 ">
        <Form {...form} >
             <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control}
                 name='name'
                 render={({field}) =>(
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input disabled={loading} placeholder='E-commerce' {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                 )}
                />
                <div className="pt-6 space-x-2 flex items-center justify-end">
                    <Button disabled={loading} variant='outline' onClick={storeModal.onClose}>Cancel</Button>
                    <Button disabled={loading} type='submit'>
                        Continue
                    </Button>
                </div>
             </form>
        </Form>
    </div>
    </div>
    </Modal>
    )
}