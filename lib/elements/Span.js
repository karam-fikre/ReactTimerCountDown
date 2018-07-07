import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const Span = styled.span`
            padding: 15px;
            border-radius: 3px;
            background: #444444;
            display: inline-block;
            width: 75px;
            height: 65px;
            text-align: center;
`;

Span.propTypes={
  color:PropTypes.string,
  fontWeight: PropTypes.number,
  textTransform: PropTypes.string,
};

Span.defaultProps = {
  color: 'silver',
  fontWeight: 400,
  textTransform: 'uppercase',
};
export default Span;