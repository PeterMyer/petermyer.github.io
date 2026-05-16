import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
=======
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders projects navigation link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByRole('link', { name: /projects/i });
>>>>>>> 56c70a2e (Portfolio revamp: new design, routes, projects, and metadata)
  expect(linkElement).toBeInTheDocument();
});
