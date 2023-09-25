import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, Heading, Image, Text, VStack, Button } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './ErrorComponent';


function Exchanges() {
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
   

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                setExchanges(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchExchanges();
    }, []);

    if (error) return <Error message={'Error while fetching exchanges'} />

    return (
        <Container maxW={'container.xl'} >
            {loading ? <Loader /> : <>
                <HStack wrap={'wrap'} mt={'10'} justifyContent={'space-evenly'}>
                    {
                        exchanges.map((i) => (
                            <ExchangeCard
                                key={i.id}
                                name={i.name}
                                img={i.image}
                                rank={i.trust_score_rank}
                                url={i.url}
                            />
                        ))
                    }
                </HStack>

                
            </>}
        </Container>
    )
};

const ExchangeCard = ({ name, img, rank, url }) => (
    <a href={url} target='_blank' >
        <VStack w={'52'} shadow={'lg'} bgColor={'blackAlpha.100'} p={'8'} borderRadius={'lg'} transition={'all 0.3s'}
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
                {rank}
            </Heading>
            <Text noOfLines={1} textAlign={'center'}>
                {name}
            </Text>
        </VStack>
    </a>
);

export default Exchanges;