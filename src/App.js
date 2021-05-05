import logo from './logo.svg';
import './App.css';
import {
  Container,
  ChakraProvider,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import IssueList from './components/IssueList';

function App() {
  return (
    <div>
      <NavBar/>
        <Container
        maxW="container.xl"
        padding={50}
        >
          <Grid templateRows="repeat(1,1fr)" templateColumns="repeat(2, 1fr)">
            <GridItem colSpan={1}>
              <Text fontSize="20px">
                Github issues
              </Text>
              <IssueList/>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize="20px">
                Recent highlighted issues
              </Text>
              <IssueList/>
            </GridItem>
          </Grid>

        </Container>       
    </div>

  );
}

export default App;
