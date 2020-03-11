import React from 'react';
import { Grid, List , Icon, Input } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="bottommenu">
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <List>
                  <h2>About Us</h2>
                  <List.Item>Our Collection</List.Item>
                  <List.Item>Terms and Conditions</List.Item>
                  <List.Item>Governance</List.Item>
                  <List.Item>Picture Library</List.Item>
                  <List.Item>ARTIST ROOM</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <List>
                  <h2>SUPPORT</h2>
                  <List.Item>Tate Collective</List.Item>
                  <List.Item>Members</List.Item>
                  <List.Item>Patrons</List.Item>
                  <List.Item>Donate</List.Item>
                  <List.Item>Corporate</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <h3>JOIN IN</h3>
                <h4>Sign Up For Our Newsletter</h4>
                <List.Item><Icon name='facebook f' size='large' /><Icon name='twitter' size='large' /><Icon name='pinterest' size='large' /><Icon name='instagram' size='large' /></List.Item>
                <br/>
                <Input
                    action={ { color: 'blue', content: 'Submit'} }
                    placeholder="Email Address"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}
