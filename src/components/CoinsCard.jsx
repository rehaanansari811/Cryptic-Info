import React from 'react'
import { Link } from 'react-router-dom';
import { Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';


const CoinsCard = ({ id, name, img, rank, symbol, price, currencySymbol='₹' }) => (
    <Link to={`/coins/${id}`} target='blank'>
        <VStack
            w={'52'}
            shadow={'lg'}
            bgColor={'blackAlpha.100'}
            p={'8'}
            borderRadius={'lg'}
            transition={'all 0.3s'}
            m={'4'} css={{
                "&:hover": {
                    transform: "scale(1.1)",
                    cursor: 'pointer'
                }
            }}
        >
            <Image
                src={img}
                w={'10'}
                h={'10'}
                objectFit={'contain'}
                alt='Exchange'
            />
            <Heading size={'md'} noOfLines={1}>
                {symbol}
            </Heading>
            <Text noOfLines={1} textAlign={'center'}>{name}</Text>
            <Text noOfLines={1} textAlign={'center'}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
        </VStack>
    </Link>
);

export default CoinsCard