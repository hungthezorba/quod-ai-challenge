import { Container } from '@chakra-ui/layout'
import { List, Button } from "@chakra-ui/react"
import React, { useEffect } from 'react'
import Issue from './Issue'
import { useSelector, useDispatch } from 'react-redux'
import { fetchIssue } from '../actions/IssueActions'

const IssueList = () => {

    const issues = useSelector(state => state.issues)
    const page = useSelector(state => state.page)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(fetchIssue(page))
    }, [])
 
    return (
        <Container>
            <List>
                {issues.map((i, id) => 
                    <Issue key={id} id={i.id} title={i.title} isHighlight={i.highlighted}/>
                )}
            </List>
            <Button onClick={() => dispatch(fetchIssue(page))} color="#68177b" marginTop="20px" borderColor="#68177b" variant="outline">
                Next
            </Button>
        </Container>
    )
}

export default IssueList;