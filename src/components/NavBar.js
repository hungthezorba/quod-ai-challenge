import { Container, Text, Box } from '@chakra-ui/layout'
import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {

    return (
        <Container className={styles.navBarContainer}>
            <Box>
                <Text>
                    Quod AI Challenge
                </Text>
            </Box>
        </Container>
    )
}

export default NavBar