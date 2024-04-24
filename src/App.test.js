import { render, screen } from '@testing-library/react';
import App from './App';
import FirstTest from './components/FirstTest';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('this is App component');
  expect(linkElement).toBeInTheDocument();
});

test('render first test component', () => {
  render(<FirstTest />);
  const linkElement = screen.getByText('this is first test');
  expect(linkElement).toBeInTheDocument();
})