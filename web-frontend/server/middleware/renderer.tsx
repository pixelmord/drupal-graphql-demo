import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';

// import our main App component
import App from '../../src/App';
import { Response, Request, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      // tslint:disable-next-line
      console.error('err', err);
      return res.status(404 as any).end();
    }
    // render the app as a string

    const html = ReactDOMServer.renderToString(<App />);
    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
};
