import React from 'react';
import { Grid, Header, Icon, Button } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    const gridStyle = { height: "500px" };
    return (
        <div className="tate-back">
          <Grid container verticalAlign="center" style={gridStyle}>
            <Grid.Column>
              <Header size='huge' inverted>
                AUBREY BEARDSLEY
              </Header>
              <Button color='orange'>BOOK NOW<Icon name='arrow right' size='large' /></Button>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}
