import styled from 'styled-components';
import * as colors from '../styles/colors';
const Years= styled.div`
  font-family: "Rockwell Extra Bold", "Rockwell Bold";
    padding: 10px;
    margin-right: 10px;
    border-radius: 3px;
    background: ${({ bgColor }) => colors[bgColor]};
    color: ${({ fontColor }) => colors[fontColor]};
    display: inline-block;
    width: 150px;
    height:150px;
`;
Years.defaultProps = {
  bgColor: 'blue',
  fontColor: 'white',
};
export default Years;
