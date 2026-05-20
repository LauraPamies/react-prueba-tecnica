import { useState, useEffect, use } from "react";
import './App.css';
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export function App() {
    const [fact, setFact] = useState();
    const [imageURL, setImageURL] = useState();
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                const firstword = fact.split(' ')[0]

                fetch(`https://cataas.com/cat/says/${firstword}?json=true&width=500&height=500`)
                    .then(res => res.json())
                    .then(data => {
                        const { url } = data
                        setImageURL(url)
                    })
            })

    }, [])//Solo se hace la primera vez que se monta el componente

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageURL && <img src={imageURL} alt="cat"></img>}
        </main>
    )
}
