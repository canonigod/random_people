import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InfoSection from './InfoSection';

describe('InfoSection Component Tests', () => {
  test('renders InfoSection with the provided title and children', () => {
    const testTitle = 'Test Section';
    const testChild = <p>Test Content</p>;

    render(
      <InfoSection title={testTitle}>
        {testChild}
      </InfoSection>
    );

    const titleElement = screen.getByRole('heading', { name: testTitle.toUpperCase() });
    expect(titleElement).toBeInTheDocument();

    const childElement = screen.getByText('Test Content');
    expect(childElement).toBeInTheDocument();
  });
});
