import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <>
            <h2>{title}</h2>
        </>
    )
}

Header.defaultProps = {
    title:'Hello World',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

// const = headingStyle {
//     color: "red",
// }

export default Header
