import {render, screen} from '@testing-library/react'
import {expect, jest, test} from '@jest/globals';
import userEvent from '@testing-library/user-event'
import Button from '../Button';

test('renders the button with children', () => {
  render(<Button onClick={() => {}}>Click Me</Button>);
  screen.getByText('Click Me');
});

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  const buttonElement = screen.getByText('Click Me');
  userEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('does not call onClick handler when disabled', () => {
  const handleClick = jest.fn();
  render(
    <Button onClick={handleClick} disabled>
      Click Me
    </Button>
  );
  const buttonElement = screen.getByText('Click Me');
  userEvent.click(buttonElement);
  expect(handleClick).not.toHaveBeenCalled();
});