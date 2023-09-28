import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

// ROTAS
import Restaurantes from '../screens/restaurantes/Restaurantes'
// import RestauranteDetalhes from '../screens/restaurantes/RestauranteDetalhes'

const Stack = createStackNavigator()

export default function Router() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName='Restaurantes'>

                <Stack.Screen name ="Restaurantes" component={Restaurantes}/>
                {/* <Stack.Screen name ="RestauranteDetalhes" component={RestauranteDetalhes}/> */}
              
            </Stack.Navigator>
        </NavigationContainer>

    )
}