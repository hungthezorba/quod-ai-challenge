import { Container } from '@chakra-ui/layout'
import { List, Button } from "@chakra-ui/react"
import React, { useEffect } from 'react'
import Issue from './Issue'
import { useSelector, useDispatch } from 'react-redux'
import { fetchIssue } from '../actions/IssueActions'

const RecentIssue = () => {

    const recentHighlightIssues = useSelector(state => state.recentHighlightIssues)
 
    return (
        <Container>
            <List>
                {recentHighlightIssues.map((i, id) => 
                    <Issue key={id} id={i.id} title={i.title} isHighlight={i.highlighted}/>
                )}
            </List>
        </Container>
    )
}

export default RecentIssue;