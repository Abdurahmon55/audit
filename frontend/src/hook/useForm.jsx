import { useState } from "react";

function useForm(){
    const [ value, setValue]=useState()

    const getValue=(e)=>{
        setValue({...value,
        [e.target.name]:e.target.value
        })
    }
    return [value, getValue]
}

export default useForm