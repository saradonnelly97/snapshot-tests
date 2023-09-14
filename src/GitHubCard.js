import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/126124554?v=4" />
      <Card.Body>
        <Card.Title>GitHub Profile: saradonnelly97</Card.Title>
        <Card.Text>
          "I'm an illustrator becoming a full stack web developer!" -- This profile features four pinned projects:
          -Browser-Game-MilestoneProject
          -Starface-Copycat-CSSHTMLExercise
          -project-REST-rant
          -react-a-mole
        </Card.Text>
        <Button variant="primary">Go Visit!</Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;