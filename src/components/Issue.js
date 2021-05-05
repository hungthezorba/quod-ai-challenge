import React from 'react'
import { Container, Text, Box } from '@chakra-ui/layout'
import styles from './Issue.module.css'

const Issue = ({id, title}) => {

    return (
        <div className={styles.issueContainer}>
            <Box>
                <Text>#{id}</Text>
            </Box>
            <Box>
                <Text>{title}</Text>
            </Box>
        </div>
    )
}

export default Issue;