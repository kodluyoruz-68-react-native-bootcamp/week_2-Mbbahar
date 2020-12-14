/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

it('Renders correctly', () => {
  renderer.create(<App />);
});

it('Todo should be able to add to list', () => {
  const wrapper = render(<App />);
  const input_element = wrapper.getByTestId('input');
  const button_element = wrapper.getByTestId('button');

  fireEvent.changeText(input_element, 'TEST TODO');
  fireEvent.press(button_element);

  const list = wrapper.getByTestId('list');
  expect(list.props.data.length).toBe(1);
});

it("Todo shouldn't be able to add to list if input is empty", () => {
  const wrapper = render(<App />);
  const button_element = wrapper.getByTestId('button');

  fireEvent.press(button_element);

  const list = wrapper.getByTestId('list');
  expect(list.props.data.length).toBe(0);
});

it('Todo should be toggle when pressed', () => {
  const wrapper = render(<App />);
  const input_element = wrapper.getByTestId('input');
  const button_element = wrapper.getByTestId('button');

  fireEvent.changeText(input_element, 'TEST TODO');
  fireEvent.press(button_element);

  const item = wrapper.getByText('TEST TODO');
  fireEvent.press(item);

  const list = wrapper.getByTestId('list');
  expect(list.props.data[0].isDone).toBeTruthy();

  fireEvent.press(item);
  expect(list.props.data[0].isDone).toBeFalsy();
});
