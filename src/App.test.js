import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import TestIdleTimer from "./TestIdleTimer";
import React from 'react';


beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});

it('test idle timer', async () => {
  // mockAxios.post.mockResolvedValueOnce({
  //   data: { token: 'abc' }
  // });
  Storage.prototype.setItem = jest.fn();
  const rendered = render(<TestIdleTimer />);


  // fireEvent.mouseMove(screen.getByTestId('InactiveSessionTimeout'));
  fireEvent.mouseMove(rendered.container, { clientX: 1, clientY: 2 });
  jest.advanceTimersByTime(2000);
  expect(localStorage.setItem).toBeCalledTimes(1);
  // expect(mockAxios.post).toBeCalledTimes(0);
  // expect(queryByTestId('sessionTimeout')).not.toBeInTheDocument();

  // second mouse movement - should call API
  // await act(async() => {
  //   fireEvent.mouseMove(screen.getByTestId('InactiveSessionTimeout'));
  //   jest.advanceTimersByTime(3 * 1000);
  // });

  fireEvent.mouseMove(rendered.container, { clientX: 1, clientY: 2 });
  jest.advanceTimersByTime(1000);
  expect(localStorage.setItem).toBeCalledTimes(2);
  // await flushPromises();
  // expect(queryByTestId('sessionTimeout')).not.toBeInTheDocument();
});
