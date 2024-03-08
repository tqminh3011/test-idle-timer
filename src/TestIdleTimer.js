/* istanbul ignore file */
import React from 'react';
import {useIdleTimer} from "react-idle-timer";

// eslint-disable-next-line react/prop-types
const TestIdleTimer = () => {

  useIdleTimer({
    timeout: 4000,
    debounce: 500,
    onAction: () => {
      localStorage.setItem("abc", "abc");
    }
  });

  return <div></div>;
};

export default TestIdleTimer;
