import styled from 'styled-components'
import {colors} from 'themes/custom'
const Highlight = styled.span`
  display: inline-block;
  position: relative;
  color: ${({ textColor = "darkBlue"  }) => colors[textColor]};
  ::after{
    content: '';
    width: ${`calc(100% - 3px )`};
    height: 40%;
    top: 60%;
    left: 5px;
    right: 0;
    position: absolute;
    opacity: .3;
    background-color: ${({ color = "blue" }) => colors[color]}
  }
`;
export default Highlight