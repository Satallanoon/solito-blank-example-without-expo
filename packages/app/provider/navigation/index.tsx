import { NavigationContainer } from '@react-navigation/native'
import { Linking } from 'react-native';
import { useMemo } from 'react'

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: ['myapp://', 'https://myapp.com'],

          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'user-detail': 'user/:id',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
