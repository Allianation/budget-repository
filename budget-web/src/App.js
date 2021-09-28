import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';

const App = () => {
  return (
    <Container>

      <Header as='h1' style={{marginTop: '1.5em'}}>Budget</Header>

      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{texAlign: 'left'}}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>1,045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
            <Statistic size='tiny' color='red'>
                <Statistic.Label style={{texAlign: 'left'}}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>623.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>

      <Segment color='red'>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10.00</Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid> 
      </Segment>

      <Segment color='green'>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something else</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$100.00</Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid> 
      </Segment>

      <Segment color='red'>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$20.00</Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid> 
      </Segment>

      <Header as='h3'>Add new transaction</Header>

      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon='tags'
            width={12}
            label='Description'
            placeholder='New shinny thing'
          />
          <Form.Input
            icon='dollar'
            iconPosition='left'
            width={4}
            label='Value'
            placeholder='100.00'
          />
        </Form.Group>
        <Button.Group style={{marginTop: '20px'}}>
          <Button>Cancel</Button>
          <Button.Or>
            <Button primary>Ok</Button>
          </Button.Or>
        </Button.Group>
      </Form>

    </Container>
  );
};

export default App;
