// Import React and React Native components
import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

// Import React Navigation components
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import the data from the API
import restaurantes from '../../services/api';

// Define a component for rendering each restaurant item
function RestaurantItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
            <Image source={{ uri: item.imagem }} style={{ width: 80, height: 80, borderRadius: 40 }} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.nome}</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>{item.tipo_cozinha}</Text>
            </View>
        </TouchableOpacity>
    );
}

// Define a component for rendering the restaurant list
const RestaurantList = ({navigation}) => {
  return (
    <FlatList
      data={restaurants}
      renderItem={({item}) => (
        <RestaurantItem
          item={item}
          onPress={() => navigation.navigate('Details', {restaurant: item})}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

// Define a component for rendering the restaurant details
const RestaurantDetails = ({route}) => {
  const {restaurant} = route.params;
  return (
    <View style={{flex: 1}}>
      <Image source={{uri: restaurant.imagem}} style={{width: '100%', height: 200}} />
      <View style={{padding: 10}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>{restaurant.nome}</Text>
        <Text style={{fontSize: 20, color: 'gray'}}>{restaurant.tipo_cozinha}</Text>
        <Text style={{fontSize: 18, marginTop: 10}}>{restaurant.descricao}</Text>
        <Text style={{fontSize: 18, marginTop: 10}}>Endereço: {restaurant.endereco}</Text>
        <Text style={{fontSize: 18, marginTop: 10}}>Horário de funcionamento: {restaurant.horario_funcionamento}</Text>
        <Text style={{fontSize: 18, marginTop: 10}}>Nota: {restaurant.nota}</Text>
        <Text style={{fontSize: 18, marginTop: 10}}>Valor da entrega: R$ {restaurant.valor_entrega.toFixed(2)}</Text>
        <Text style={{fontSize: 18, marginTop: 10}}>Formas de pagamento:</Text>
        {restaurant.formas_pagamento.map((forma) => {
          switch (forma) {
            case 1:
              return <Text key={forma}>- Dinheiro</Text>;
            case 2:
              return <Text key={forma}>- Cartão de crédito</Text>;
            case 3:
              return <Text key={forma}>- Cartão de débito</Text>;
            case 4:
              return <Text key={forma}>- PIX</Text>;
            case 5:
              return <Text key={forma}>- Vale-refeição</Text>;
          }
        })}
      </View>
    </View>
  );
};

// Define a stack navigator for navigation between screens
const Stack = createNativeStackNavigator();

// Define the main app component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={RestaurantList} options={{title: 'Restaurantes'}} />
        <Stack.Screen name="Details" component={RestaurantDetails} options={({route}) => ({title: route.params.restaurant.nome})} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
