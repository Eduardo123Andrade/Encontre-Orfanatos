import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { OrphanagesMap } from '../view/OrphanagesMap'
import { OrphanageDetail } from '../view/OrphanageDatail'
import { SelectMapPosition } from '../view/createOrphanages/SelectMapPosition'
import { OrphanageData } from '../view/createOrphanages/OrphanageData'
import { Header } from '../components/Header'

const { Navigator, Screen } = createStackNavigator()

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' }
        }}
        initialRouteName='OrphanagesMap'
      >
        <Screen name='OrphanagesMap' component={OrphanagesMap} />
        <Screen
          name='OrphanageDetail'
          component={OrphanageDetail}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title='Orfanato' />
          }}
        />
        <Screen
          name='SelectMapPosition'
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title='Selecione no mapa' />
          }}
        />
        <Screen
          name='OrphanageData'
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title='Informe os dados' />
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
