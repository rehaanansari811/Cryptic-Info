import { Button, HStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'black'} >
      <Button variant={'unstyled'}  color={'white'} mx={[0,'5']}>
        <Link to={'/'}>Home</Link>
      </Button>
      <Button variant={'unstyled'}  color={'white'} mx={[0,'5']}>
        <Link to={'/exchanges'}>Exchanges</Link>
      </Button>
      <Button variant={'unstyled'}  color={'white'} mx={[0,'5']}>
        <Link to={'/coin'}>Coins</Link>
      </Button>
      <HStack position={'absolute'} right={'23px'}>
        <Text
        color={'#f3e015'}
        fontSize={'x-large'}
        fontWeight={"bold"}
        ><Link to={'/'}>Cryptic-Info</Link></Text>
      </HStack>
    </HStack>
  )
}

export default Header