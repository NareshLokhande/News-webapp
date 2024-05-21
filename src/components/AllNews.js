import { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from './Header'
import { fetchAllNews } from '../services/NewsServices';
import { NewsArticles } from './NewsArticles';

export function AllNews() {

    const [newsArticles,setNewsArticles] = useState([]);
    const [topicValue,setTopicValue] = useState('')

    const getAllNews = async(topic) => {
        const response = await fetchAllNews(topic);
        setNewsArticles(response.data.articles);
    }

    useEffect(()=>{
        getAllNews('Lok Sabha election')
    })

    const handleTopicChange = (e)=>{
        setTopicValue(e.target.value);
    }

    const handleFetchNewsClick = ()=>{
        getAllNews(topicValue);
    }

  return (
    <Container className='mt-3'>
        <Header title='Welcome to All News'/>
        <Container className='mt-3'>
            <Row>
                <Col lg={4}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Mention a topic</Form.Label>
                        <Form.Control type="text" placeholder='Enter a topic' name='topic' onChange={handleTopicChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <Button variant='success' onClick={handleFetchNewsClick}></Button>
                </Col>
            </Row>
        </Container>
        <Container className='mt-3'>
        <NewsArticles articles={newsArticles}/>
        </Container>
    </Container>
  )
}
