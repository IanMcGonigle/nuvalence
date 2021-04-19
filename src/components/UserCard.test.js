import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

import homerSimpson from '../fixtures/testUserData';

describe('<UserCard/>', () => {
  it('renders user with all props correctly', () => {

    render(<UserCard {...homerSimpson} />);

    const img = screen.getByAltText("Homer's avatar");
    expect(img).toBeInTheDocument();

    const firstDt = screen.queryByText('First name:');
    expect(firstDt).toBeInTheDocument();

    const firstDd = screen.queryByText('Homer');
    expect(firstDd).toBeInTheDocument();

    const lastDt = screen.queryByText('Last name:');
    expect(lastDt).toBeInTheDocument();

    const lastDd = screen.queryByText('Simpson');
    expect(lastDd).toBeInTheDocument();

    const phoneDt = screen.queryByText('Phone number:');
    expect(phoneDt).toBeInTheDocument();

    const phoneDd = screen.queryByText('1 (999) 555-1234');
    expect(phoneDd).toBeInTheDocument();

    const cellDt = screen.queryByText('Mobile number:');
    expect(cellDt).toBeInTheDocument();

    const cellDd = screen.queryByText('1 (999) 555-5678');
    expect(cellDd).toBeInTheDocument();

    const ageDt = screen.queryByText('Age:');
    expect(ageDt).toBeInTheDocument();

    const ageDd = screen.queryByText('39');
    expect(ageDd).toBeInTheDocument();

    const emailDt = screen.queryByText('Email:');
    expect(emailDt).toBeInTheDocument();

    const emailDd = screen.queryByText('hj.simpson@example.com');
    expect(emailDd).toBeInTheDocument();

    const genderDt = screen.queryByText('Gender:');
    expect(genderDt).toBeInTheDocument();

    const genderDd = screen.queryByText('male');
    expect(genderDd).toBeInTheDocument();

    const locationDt = screen.queryByText('Location:');
    expect(locationDt).toBeInTheDocument();

    const locationDd = screen.queryByText('USA, Unknown, Springfield');
    expect(locationDd).toBeInTheDocument();

    const nationalityDt = screen.queryByText('Nationality:');
    expect(nationalityDt).toBeInTheDocument();

    const nationalityDd = screen.queryByText('US');
    expect(nationalityDd).toBeInTheDocument();
  });

  it('renders user with missing props correctly', () => {

    const { name, picture, phone } = homerSimpson;
    const props = { name, picture , phone };

    render(<UserCard {...props} />);

    const img = screen.getByAltText("Homer's avatar");
    expect(img).toBeInTheDocument();

    const firstDt = screen.queryByText('First name:');
    expect(firstDt).toBeInTheDocument();

    const firstDd = screen.queryByText('Homer');
    expect(firstDd).toBeInTheDocument();

    const lastDt = screen.queryByText('Last name:');
    expect(lastDt).toBeInTheDocument();

    const lastDd = screen.queryByText('Simpson');
    expect(lastDd).toBeInTheDocument();

    const phoneDt = screen.queryByText('Phone number:');
    expect(phoneDt).toBeInTheDocument();

    const phoneDd = screen.queryByText('1 (999) 555-1234');
    expect(phoneDd).toBeInTheDocument();

    const cellDt = screen.queryByText('Mobile number:');
    expect(cellDt).toBeNull();

    const cellDd = screen.queryByText('1 (999) 555-5678');
    expect(cellDd).toBeNull();

    const ageDt = screen.queryByText('Age:');
    expect(ageDt).toBeNull();

    const ageDd = screen.queryByText('39');
    expect(ageDd).toBeNull();

    const emailDt = screen.queryByText('Email:');
    expect(emailDt).toBeNull();

    const emailDd = screen.queryByText('hj.simpson@example.com');
    expect(emailDd).toBeNull();

    const genderDt = screen.queryByText('Gender:');
    expect(genderDt).toBeNull();

    const genderDd = screen.queryByText('male');
    expect(genderDd).toBeNull();

    const locationDt = screen.queryByText('Location:');
    expect(locationDt).toBeNull();

    const locationDd = screen.queryByText('USA, Unknown, Springfield');
    expect(locationDd).toBeNull();

    const nationalityDt = screen.queryByText('Nationality:');
    expect(nationalityDt).toBeNull();

    const nationalityDd = screen.queryByText('US');
    expect(nationalityDd).toBeNull();
  });
});
