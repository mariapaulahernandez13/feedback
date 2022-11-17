import Header from "./componentes/Header";
import FeedbackItem from "./componentes/FeedbackItem";

function App(){
    // Objeto de estilos 
    const HeaderStyles = {
        backgroundColor: '#ed5bad',
        color: 'red'
    }

    return(
        <div className="container">
            {/* props: atributos de etiqueta de un componente react */}
            <Header
                bgcolor={HeaderStyles.backgroundColor}
                color={HeaderStyles.color}/>
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
        </div>
    )
}

export default App;