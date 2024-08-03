import React from 'react'
import { useForm } from 'react-hook-form';

const useAuthentication = () => {
    const formHook = useForm();

    const { handleSubmit } = formHook;


    const onSubmit = (data) => {
        console.log(data)
    }
    return { formHook, onSubmit }
}


export default useAuthentication;