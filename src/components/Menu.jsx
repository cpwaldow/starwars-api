import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Anchor = styled(Link)`
  margin: 20px;
`;

const Menu = () => {
  return (
    <nav>
      <Anchor to='/'>HOME</Anchor>
      <Anchor to='/people/1'>People</Anchor>
    </nav>
  );
};

export default Menu;
