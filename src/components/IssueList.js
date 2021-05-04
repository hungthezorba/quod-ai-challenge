import { Container } from '@chakra-ui/layout'
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import React from 'react'
import Issue from './Issue'

const IssueList = () => {

    return (
        <Container>
            <List>
                <Issue id="2rinr2i2" title="Hello worlds"/>
                <Issue id="35102" title="Hello worlds lenoinc q doid kqdo1"/>
                <Issue id="49189d981" title="doiqdsdniom c02ifn worlds"/>
                <Issue id="4819jd21" title="pofwpmvjgj2jgqm;fm;qm worlds"/>
                <Issue id="3-0ru9021" title="gpgg02-gk2[kwm] worlds"/>
            </List>
        </Container>
    )
}

export default IssueList;