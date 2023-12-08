import {Toaster} from 'react-hot-toast'

export const ToasterProvider = ()=>{
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                duration: 5000,
                style: {
                    background: '#282c34',
                    color: '#fff'
                }
            }}
        />
    )
}