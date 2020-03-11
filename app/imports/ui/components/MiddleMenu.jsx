import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Grid centered>
          <Grid.Row>
            <Menu borderless className="secondmenu">
              <Menu.Item>ART & ARTIST</Menu.Item>
              <Menu.Item>EXHIBITIONS & EVENTS</Menu.Item>
              <Menu.Item>PLAN YOUR VISIT</Menu.Item>
            </Menu>
          </Grid.Row>
        </Grid>
    )
  }
}
