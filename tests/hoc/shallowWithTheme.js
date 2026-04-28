import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import theme from '../../src/theme/crTheme/theme';

const renderWithTheme = component =>
  renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export default renderWithTheme;
