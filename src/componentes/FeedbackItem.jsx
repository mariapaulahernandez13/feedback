import { useState } from "react"

const FeedbackItem = () =>{

    // Estados: Persiste informacuón a traves del ciclo de vida de un único componente
    // Estados iniciales

    const [ rating, setRating ] = useState(2)
    const [ text, setText ] = useState("Mejorar curso, mejores recursos")

    const cambiarNota = () => {
        // Cambiar estado a rating
        // Parámetro para el valor anterior
        setRating(10)
    }

    const addNota = () => {
        // Cambiar estado a rating
        // Parámetro para el valor anterior
        setRating((prev)=>{
            return prev + 1
        })
    }

    const restNota = () => {
        // Cambiar estado a rating
        // Parámetro para el valor anterior
        setRating((prev)=>{
            return prev - 1
        })
    }

    return (
        <div className="card">
            <div className="num-display">
                { rating } 
            </div>
            <div className="text-display">
                { text }
            </div>
            <button className="btn btn-cambiar" onClick={ cambiarNota }>
                Cambiar nota
            </button><br></br>
            <button className="btn btn-suma" onClick={ addNota }>
                Sumar nota
            </button><br></br>
            <button  className="btn btn-resta" onClick={ restNota }>
                Restar nota
            </button>
        </div>
    )
}

export default FeedbackItem