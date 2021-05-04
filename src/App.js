import logo from './logo.svg';
import './App.css';
import {
  Container
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import IssueList from './components/IssueList';

function App() {
  return (
    <Container>
        <NavBar/>
        <Container
        padding={50}
        >
          <Text fontSize="20px">
            Github issues
          </Text>
          <IssueList/>
        </Container>
    </Container>

  );
}

export default App;
