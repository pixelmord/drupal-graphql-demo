import * as React from 'react';
import {
  Container,
  Dropdown,
  Header,
  Image,
  Menu,
  Segment
} from 'semantic-ui-react';
import drupallogo from './drupallogo.png';
import 'semantic-ui-css/semantic.min.css';

const App: React.SFC = () => (
  <div>
    <Menu fixed="top" inverted={true}>
      <Container>
        <Menu.Item as="a" header={true}>
          <Image
            size="mini"
            src={drupallogo}
            style={{ marginRight: '1.5em' }}
          />
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

    <Container text={true} style={{ marginTop: '7em' }}>
      <Header as="h1">Semantic UI React Fixed Template</Header>
    </Container>

    <Segment
      inverted={true}
      vertical={true}
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign="center">powered by Drupal</Container>
    </Segment>
  </div>
);

export default App;
