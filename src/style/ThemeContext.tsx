import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme} from 'react-native';

interface ThemeContextProps {
  colorScheme: string;
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [colorScheme, setColorScheme] = useState<string>('light');
  const scheme = useColorScheme();

  useEffect(() => {
    const loadColorScheme = async () => {
      try {
        const savedColorScheme = await AsyncStorage.getItem('colorScheme');
        if (savedColorScheme) {
          setColorScheme(savedColorScheme);
        } else {
          setColorScheme(scheme || 'light');
        }
      } catch (error) {
        console.error('Error loading colorScheme from AsyncStorage:', error);
      }
    };

    loadColorScheme();
  }, []);

  const toggleColorScheme = () => {
    const newScheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newScheme);
    AsyncStorage.setItem('colorScheme', newScheme).catch(error => {
      console.error('Error saving colorScheme to AsyncStorage:', error);
    });
  };

  const theme: ThemeContextProps = {
    colorScheme,
    toggleColorScheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
