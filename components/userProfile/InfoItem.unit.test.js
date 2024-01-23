import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InfoItem from './InfoItem'; 

describe('InfoItem Component Tests', () => {
  test('renders InfoItem with provided label and value', () => {
    const testLabel = 'Name';
    const testValue = 'John Doe';

    render(<InfoItem label={testLabel} value={testValue} />);

    const labelElement = screen.getByText(`${testLabel}:`);
    expect(labelElement).toBeInTheDocument();

    const valueElement = screen.getByText(testValue);
    expect(valueElement).toBeInTheDocument();
  });
});
