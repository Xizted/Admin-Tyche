import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Título </CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus aperiam deserunt nostrum, recusandae pariatur veniam
            dolore aliquid. Nostrum veniam sequi, eaque in atque facilis fuga
            qui aut officiis optio natus?
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
