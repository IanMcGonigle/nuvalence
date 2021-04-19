import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserLink from './UserLink';

import homerSimpson from '../fixtures/testUserData';

describe('<UserLink/>', () => {
  it('renders link with all props correctly', () => {
    render(
      <Router>
        <UserLink {...homerSimpson} />
      </Router>
    );
    const img = screen.queryByAltText('Mr Homer Simpson');
    expect(img).toBeInTheDocument();

    const link = screen.queryByText('Mr Homer Simpson');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href','/user/1234');
  });
  it('renders link with missing image correctly', () => {
    const { name, login } = homerSimpson;
    const props = { name, login };

    render(
      <Router>
        <UserLink {...props} />
      </Router>
    );

    const img = screen.queryByAltText('Mr Homer Simpson');
    expect(img).toBeNull();

    const link = screen.queryByText('Mr Homer Simpson');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href','/user/1234');
  });
  it('does not render when uuid is missing', () => {
    const { name, picture } = homerSimpson;
    const props = { name, picture };

    render(
      <Router>
        <UserLink {...props} />
      </Router>
    );

    const img = screen.queryByAltText('Mr Homer Simpson');
    expect(img).toBeNull();

    const link = screen.queryByText('Mr Homer Simpson');
    expect(link).toBeNull();
  });
});
