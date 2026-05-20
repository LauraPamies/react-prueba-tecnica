import { useState, useEffect, use } from "react";
import './App.css';
import { getRandomFact } from "./services/facts.js";
import { getRandomImage } from "./services/images.js";

export function App() {
    const [fact, setFact] = useState();
    const [imageURL, setImageURL] = useState();
    //Recuperar la cita al cargar la pagina
    useEffect(() => {
        getRandomFact().then(newFact => setFact(newFact))
    }, [])//Solo se hace la primera vez que se monta el componente

    //Recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if (!fact) return
        getRandomImage(fact).then(newImageURL => setImageURL(newImageURL))
    }, [fact])

    const handleClick = async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageURL && <img src={imageURL} alt="cat"></img>}
        </main>
    )
}
