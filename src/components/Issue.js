import React from 'react'
import { Container, Text, Box } from '@chakra-ui/layout'
import styles from './Issue.module.css'
import { useDispatch } from 'react-redux'
import { highlightIssue } from '../actions/IssueActions'

const Issue = ({id, title, isHighlight, inRecent}) => {

    const dispatch = useDispatch()

    function highlight() {
        dispatch(highlightIssue(id))
        console.log('highlight: ', isHighlight)
    }

    return (
        <div className={!isHighlight? styles.issueContainer : styles.issueContainerHighlight}>
            <Box>
                <Text>#{id}</Text>
            </Box>
            <Box>
                <Text>{title}</Text>
            </Box>
            <button onClick={() => highlight()}>highlight</button>
        </div>
    )
}

export default Issue;