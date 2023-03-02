import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Anchor = styled(Link)`
  margin: 20px;
  display: block;
`;

const handleLinks = () => {
  let arr = [];
  for (let index = 1; index <= 83; index += 1) {
    arr.push(`/people/${index}`);
  }
  return arr;
};

const Home = () => {
  return (
    <div>
      {handleLinks().map((link) => (
        <Anchor to={link} key={link}>
          People {link.split('/people/')[1]}
        </Anchor>
      ))}
    </div>
  );
};

export default Home;
