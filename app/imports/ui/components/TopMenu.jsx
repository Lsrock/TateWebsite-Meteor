import React from 'react';
import { Container, Menu, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu secondary className="topmenu">
          <Container>
            <div className="logo">
              <Menu.Item><Image src="https://storage.googleapis.com/tate-digital/ui/3.17.0.1-compressed/static/images/tate-logo.png" size='small' centered />
              </Menu.Item>
            </div>
            <Menu.Item fitted position="right">Search </Menu.Item>
            <Menu.Item fitted>Shop</Menu.Item>
          </Container>
        </Menu>

    )
  }
}
