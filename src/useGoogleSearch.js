import { useState, useEffect } from 'react'
import API_KEY from "./keys"

const CONTEXT_KEY = "61001f01679fd4f5f"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    

    // https://www.googleapis.com/customsearch/v1/?key${API_KEY}&cx=${CONTEXT_KEY}&q=${term}

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData()
    }, [term])

    return { data }

}

export default useGoogleSearch
