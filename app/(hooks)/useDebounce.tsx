import { useEffect, useState } from "react"


export const useDebounce = ({value , delay} : {value:string , delay:number}) => {

    const [debounceValue, setDebouncedValue]  = useState<string>(value);

    useEffect(() => {

        const timer = setTimeout(() => {
            setDebouncedValue(value)

        } , delay)


        return () => {
            clearTimeout(timer)
        }

    } , [value, delay])

    return debounceValue;
    
}
