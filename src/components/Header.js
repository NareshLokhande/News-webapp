import { Alert, Container } from "react-bootstrap";

export function Header(props) {
  return (
    <Container>
      <Alert variant="primary">
        <h5>{props.title}</h5>
      </Alert>
      <p>This is real time news and weather app</p>
    </Container>
  );
}
