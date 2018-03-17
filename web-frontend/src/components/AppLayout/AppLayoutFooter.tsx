import * as React from 'react';
import { Container, Segment } from 'semantic-ui-react';

interface Props {}
const compname: React.SFC<Props> = () => (
  <Segment
    inverted={true}
    vertical={true}
    style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
  >
    <Container textAlign="center">powered by Drupal</Container>
  </Segment>
);

export default compname;
