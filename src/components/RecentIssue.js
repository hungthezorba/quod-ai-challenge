import { Container } from '@chakra-ui/layout'
import { List, Text } from "@chakra-ui/react"
import React from 'react'
import Issue from './Issue'
import { useSelector } from 'react-redux'

const RecentIssue = () => {

    const recentHighlightIssues = useSelector(state => state.recentHighlightIssues)
 
    return (
        <Container>
        <Text fontSize="20px">Recent highlighted issues</Text>
            <List>
                {recentHighlightIssues.map((i, id) => 
                    <Issue key={id} id={i.id} title={i.title} isHighlight={false} inRecent={true}/>
                )}
            </List>
        </Container>
    )
}

export default RecentIssue;