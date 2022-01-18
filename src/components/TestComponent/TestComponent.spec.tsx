import { render, screen } from '@testing-library/react';

import TestComponent from './TestComponent';

describe('<TestComponent />', () => {
  test('should render TestComponent inner text', () => {
    render(<TestComponent>Moscow</TestComponent>);
    expect(screen.getByText('Moscow')).toBeInTheDocument();
  });
});
