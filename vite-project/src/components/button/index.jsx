import PropTypes from 'prop-types'
import { ButtonContainer } from './styles';

function Button ({children , ...rest}) {

    return (
         <ButtonContainer {...rest}>{children}</ButtonContainer>
    )
}


export default Button

Button.propTypes = {
    children: PropTypes.node.isRequired
  };
  