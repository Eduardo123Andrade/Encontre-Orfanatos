import React from 'react'
import { useFonts } from 'expo-font'
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold_Italic,
  Nunito_800ExtraBold
} from '@expo-google-fonts/nunito'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Routes } from './src/router/router'
// import { Font, AppLoading } from 'expo'
// import { View } from 'react-native'

export default function App () {
  const [fontsUseLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold_Italic,
    Nunito_800ExtraBold
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {fontsUseLoaded && <Routes />}
    </SafeAreaView>
  )
}
