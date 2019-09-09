import React from 'react';

const { Provider, Consumer } = React.createContext(null);

export const ThemeProvider = Provider;
export const ThemeConsumer = Consumer;