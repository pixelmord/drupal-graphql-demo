import * as React from 'react';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';

import drupallogo from './drupallogo.png';

interface Props {}
const MainMenu: React.SFC<Props> = () => (
  <Menu fixed="top" inverted={true}>
    <Container>
      <Menu.Item as="a" header={true}>
        <Image size="mini" src={drupallogo} style={{ marginRight: '1.5em' }} />
        Drupal Administration
      </Menu.Item>
      <Menu.Item as="a">Home</Menu.Item>

      <Dropdown item={true} simple={true} text="Dropdown">
        <Dropdown.Menu>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Header Item</Dropdown.Header>
          <Dropdown.Item>
            <i className="dropdown icon" />
            <span className="text">Submenu</span>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
);

export default MainMenu;
