import React from 'react'
import { Container, Text, Box } from '@chakra-ui/layout'
import styles from './Issue.module.css'
import { useDispatch } from 'react-redux'
import { highlightIssue } from '../actions/IssueActions'

const Issue = ({id, title, isHighlight, inRecent}) => {

    const dispatch = useDispatch()


    return (
        <div  className={styles.issueContainer}>
            {/* If the issue is in recent list, user cannot have a event listener */}
            <Box onClick={inRecent? null : () => dispatch(highlightIssue(id))} className={!isHighlight?'' : styles.highlight}>
                <Box>
                    <Text>#{id}</Text>
                </Box>
                <Box>
                    <Text>{title}</Text>
                </Box>
            </Box>
        </div>
    )
}

export default Issue;