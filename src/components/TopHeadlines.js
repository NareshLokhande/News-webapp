import { Container } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../services/NewsServices";
import { NewsArticles } from "./NewsArticles";

export function TopHeadlines() {
  const [newsArticles, setNewsArticles] = useState([]);

  const getTopHeadlines = async () => {
    const response = await fetchTopHeadlines();
    console.log(response.data.articles);
    setNewsArticles(response.data.articles);
  };

  useEffect(() => {
    getTopHeadlines();
  }, []);

  return (
    <Container className="mt-3">
      <Header title="Welcome to Top Headlines" />
      <Container className="mt-3">
        <NewsArticles articles={newsArticles} />
      </Container>
    </Container>
  );
}
