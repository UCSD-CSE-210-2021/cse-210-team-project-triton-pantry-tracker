import React from 'react';
import { generateImage } from 'jsdom-screenshot';
import { render } from '@testing-library/react';
import App from './App';

it('has no visual regressions', async () => {
  render(<App />);

  const screenshot = await generateImage();
  expect(screenshot).toMatchInlineSnapshot({
    failureThreshold: 0.005,
    failureThresholdType: 'percent'
  });
});