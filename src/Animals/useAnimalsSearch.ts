import {useEffect, useState} from "react";

export const useAnimalsSearch = () => {
    const [currentQuery, setQuery] = useState([]);

    const onChangeCallback = async (q: string) => {

        const request = await fetch('http://localhost:8080/getAnimal?' + new URLSearchParams({q}));

        if (request.ok) {
            const data = await request.json();
            setQuery(data.splice(0, 15));
        }

        localStorage.setItem('LastQuery', q);
    }

    useEffect(() => {
        const lastQuery = localStorage.getItem('LastQuery');
        void onChangeCallback(lastQuery as string);
    }, [])

    return { currentQuery, onChangeCallback }
}