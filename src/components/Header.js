import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
       <header className="header">
           <h3>{title}</h3>
           <Button color={'black'}  text={'Add'} />
           <Button color={'black'}  text={'Add'} />
           <Button color={'black'}  text={'Add'} />
           <Button color={'black'}  text={'Add'} />
           <Button color={'black'}  text={'Add'} />
           <Button color={'black'}  text={'Add'} />
       </header>
    )
}

Header.defaultProps = {
    title: 'Ems App',
}

Header.propType = {
    title: PropTypes.string.isRequired,
}

export default Header
