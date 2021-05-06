import { IconButton } from '@chakra-ui/button'
import { Text, Box } from '@chakra-ui/layout'
import React from 'react'
import { AiFillBell } from 'react-icons/ai'
import styles from './NavBar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNoti } from '../actions/IssueActions'

const NavBar = () => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div className={styles.navBarContainer}>
            <Box>
                <Text fontWeight="bold">
                    Quod AI Challenge: ReactJS
                </Text>
            </Box>
            <Box style={{marginRight: '10vw', position: 'relative'}}>
                <IconButton
                variant="outline"
                isRound={true}
                icon={<AiFillBell/>}
                onClick={() => dispatch(toggleNoti())}
                colorScheme="pink"
                _focus={{background: '#fff'}}
                />
                {counter > 0?
                <Box style={{position: 'absolute', top: -10, right: -15 }}>
                    <Text style={{fontWeight: 900, fontSize: '14px',backgroundColor:"red", borderRadius:'50%',paddingLeft: '6px', paddingRight: '6px'}}>{counter}</Text>
                </Box>
                    :
                <>
                </>
                }
            </Box>
        </div>
    )
}

export default NavBar