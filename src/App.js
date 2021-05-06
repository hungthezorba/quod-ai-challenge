import logo from "./logo.svg";
import React from 'react'
import "./App.css";
import { Container, ChakraProvider, Grid, GridItem, Box } from "@chakra-ui/react";
import { Text, useOutsideClick } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import IssueList from "./components/IssueList";
import { useSelector } from 'react-redux'
import RecentIssue from "./components/RecentIssue";
import { closeNoti } from './actions/IssueActions'
import { useDispatch } from 'react-redux'

function App() {

  const ref = React.useRef()
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()
  useOutsideClick({
    ref: ref,
    handler: () => dispatch(closeNoti())
  })

  return (
    <div>
      <NavBar />
      <Container maxW="container.xl" padding={50}>
      <Box>
            </Box>
        <Grid templateRows="repeat(1,1fr)" templateColumns="repeat(2, 1fr)">
          <GridItem colSpan={1}>
            <Text fontSize="20px">Github issues</Text>
            <IssueList />
          </GridItem>
          <GridItem colSpan={1}>
            {notification?
            <div ref={ref}>
                <RecentIssue/>
            </div>
              :
              <>
              </>
            }
            
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
