// src/contexts/StyleContext.tsx
import React, { createContext, FC, ReactNode, useContext } from 'react';

interface StyleContextProps {
  styles: React.CSSProperties;
}

const StyleContext = createContext<StyleContextProps | undefined>(undefined);

interface StyleProviderProps {
  styles: React.CSSProperties;
  children: ReactNode;
}

export const StyleProvider: FC<StyleProviderProps> = ({ styles, children }) => {
  return (
    <StyleContext.Provider value={{ styles }}>{children}</StyleContext.Provider>
  );
};

export const useStyle = (): StyleContextProps => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
};
