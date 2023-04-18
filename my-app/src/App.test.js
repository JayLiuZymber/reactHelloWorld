import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // 不分大小寫
  const linkElement = screen.getByText(/goto react/i);
  expect(linkElement).toBeInTheDocument();
});
