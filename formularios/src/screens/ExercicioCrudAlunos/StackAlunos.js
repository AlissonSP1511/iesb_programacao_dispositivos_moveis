import { createStackNavigator } from '@react-navigation/stack'
import FormAluno from './FormAluno'
import ExercicioCrudAlunos from './ExercicioCrudAlunos'

const Stack = createStackNavigator()

export default function StackAlunos() {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='ExercicioCrudAlunos'
        >

            <Stack.Screen name='ExercicioCrudAlunos' component={ExercicioCrudAlunos} />

            <Stack.Screen name='FormAluno' component={FormAluno} />

        </Stack.Navigator>

    )
}
