
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import Home from '../screens/Home'
import ListaCarros from '../screens/ListaCarros/ListaCarros'
import ListaCarrosAsyncStorage from '../screens/ListaCarrosAsyncStorage/ListaCarros'
import StackPessoas from '../screens/Pessoas/StackPessoas'
import StackPessoasAsyncStorage from '../screens/PessoasAsyncStorage/StackPessoasAsyncStorage'
import StackPessoasFormularioAltoNivel from '../screens/PessoasFormularioAltoNivel/StackPessoasFormularioAltoNivel'
import Cadastro from '../screens/Cadastro/Cadastro'
import StackAlunos from '../screens/ExercicioCrudAlunos/StackAlunos'
import ExercicioListaTarefasAsyncStorage from '../screens/ExercicioListaTarefasAsyncStorage/ExercicioListaTarefasAsyncStorage'
import StackAlunosAsyncStorage from '../screens/ExercicioCrudAlunosAsyncStorage/StackAlunosAsyncStorage'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Cadastro'>

            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Carros" component={ListaCarros} />
            <Drawer.Screen name="Carros AsyncStorage" component={ListaCarrosAsyncStorage} />
            <Drawer.Screen name="Pessoas" component={StackPessoas} />
            <Drawer.Screen name="Pessoas AsyncStorage" component={StackPessoasAsyncStorage} />
            <Drawer.Screen name="Formulario Alto Nivel" component={StackPessoasFormularioAltoNivel} />
            <Drawer.Screen name="Cadastro" component={Cadastro} />
            <Drawer.Screen name="Exercicio Crud Alunos" component={StackAlunos} />
            <Drawer.Screen name="Exercicio Lista Tarefas AsyncStorage" component={ExercicioListaTarefasAsyncStorage} />
            <Drawer.Screen name="ExercicioCrudAlunosAsyncStorage" component={StackAlunosAsyncStorage} />

        </Drawer.Navigator>

    )
}