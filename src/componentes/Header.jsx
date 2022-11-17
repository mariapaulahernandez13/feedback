import propTypes from "prop-types";

const Header = ({ bgcolor, color }) => {
    return(
        <header style={{ backgroundColor: bgcolor, color: color }}>
            Encabezado
        </header>
    )
}

// Valores por defecto para las props suministradas
Header.defaultProps = {
    bgcolor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
}

// Validar las props con PropTypes
Header.propTypes = {
    bgcolor: propTypes.string.isRequired,
    color: propTypes.string
}

export default Header;