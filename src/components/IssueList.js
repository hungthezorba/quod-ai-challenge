import { Container } from '@chakra-ui/layout'
import { List, ListItem, ListIcon, OrderedList, UnorderedList, Button } from "@chakra-ui/react"
import React from 'react'
import Issue from './Issue'
import { useSelector } from 'react-redux'

const IssueList = () => {

    const issues = useSelector(state => state.issues)

    return (
        <Container>
            <List>
                <Issue id="2rinr2i2" title="Hello worlds"/>
                <Issue id="35102" title="Hello worlds lenoinc q doid kqdo1"/>
                <Issue id="49189d981" title="doiqdsdniom c02ifn worlds"/>
                <Issue id="4819jd21" title="pofwpmvjgj2jgqm;fm;qm worlds"/>
                <Issue id="3-0ru9021" title="gpgg02-gk2[kwm] worlds"/>
            </List>
            <Button color="#68177b" marginTop="20px" borderColor="#68177b" variant="outline">
                Next
            </Button>
        </Container>
    )
}

export default IssueList;