/**
 * From ReactGA Community Wiki Page https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
 */

import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import { GA } from './Core/constants';

ReactGA.initialize(GA);

export default (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  const HOC = (props) => {
    useEffect(
      () => trackPage(props.location.pathname),
      [props.location.pathname]
    );

    return <WrappedComponent {...props} />;
  };

  return HOC;
};
