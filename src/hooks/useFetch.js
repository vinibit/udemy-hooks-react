import { useState, useEffect } from 'react';

export const useFetch = (url, method = 'get') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true,
    })

    useEffect(
        function () {
            fetch(url, { method })
            .then(res => res.json())            
            .then(json => setResponse({
                    data: json,
                    loading: false,
                })
            )
        }, 
        [url, method])
    
    return response;
}