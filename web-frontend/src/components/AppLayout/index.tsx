import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';

import MainMenu from './MainMenu';
import AppLayoutFooter from './AppLayoutFooter';

interface Props {
  pageHeader?: string | React.SFC<any> | React.Component<any, any>;
}
const AppLayout: React.SFC<Props> = ({ children, pageHeader }) => (
  <div>
    <MainMenu />
    <Container text={true} style={{ marginTop: '7em' }}>
      {typeof pageHeader !== 'undefined' && (
        <Header as="h1">{pageHeader}</Header>
      )}
      {children}
    </Container>
    <AppLayoutFooter />
  </div>
);

export default AppLayout;
