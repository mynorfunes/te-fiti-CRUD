import { Button, Card } from "react-bootstrap";

const Cards = () => {
  return (
    <Card style={{ color: "#000" }}>
      <Card.Img />
      <Card.Body>
        <Card.Title>Messege</Card.Title>
        <Card.Text>This is only Test</Card.Text>
        <Button variant="primary">Test</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
