// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList } from 'react-native';
// import axios from 'axios';

// const Restaurantes = () => {
//   // Criar um estado para armazenar os dados dos restaurantes
//   const [restaurantes, setRestaurantes] = useState([]);

//   // Fazer a requisição HTTP para o endpoint /restaurantes usando o axios
//   useEffect(() => {
//     axios.get('https://my-json-server.typicode.com/gustavoclay/food/restaurantes')
//       .then(response => {
//         // Atualizar o estado com os dados recebidos
//         setRestaurantes(response.data);
//       })
//       .catch(error => {
//         // Tratar possíveis erros
//         console.error(error);
//       });
//   }, []); // Passar um array vazio como segundo argumento para executar o efeito apenas uma vez

//   // Renderizar um item da lista de restaurantes
//   const renderItem = ({ item }) => (
//     <View>
//       <Text>{item.nome}</Text>
//       <Text>{item.tipo}</Text>
//     </View>
//   );

//   // Retornar o componente com a lista de restaurantes
//   return (
//     <View>
//       <FlatList
//         data={restaurantes} // Passar os dados dos restaurantes como propriedade data
//         renderItem={renderItem} // Passar a função que renderiza um item como propriedade renderItem
//         keyExtractor={item => item.id} // Passar uma função que extrai uma chave única para cada item como propriedade keyExtractor
//       />
//     </View>
//   );
// };

// export default Restaurantes;


import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const Restaurantes = () => {
  // Criar um estado para armazenar os dados dos restaurantes
  const [restaurantes, setRestaurantes] = useState([]);

  // Fazer a requisição HTTP para o endereço da api usando o axios
  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/gustavoclay/food/restaurantes')
      .then(response => {
        // Atualizar o estado com os dados recebidos
        setRestaurantes(response.data);
      })
      .catch(error => {
        // Tratar possíveis erros
        console.error(error);
      });
  }, []); // Passar um array vazio como segundo argumento para executar o efeito apenas uma vez

  // Retornar o componente com os dados dos restaurantes
  return (
    <View>
      {restaurantes.map(restaurante => (
        <View key={restaurante.id}>
          <Text>{restaurante.nome}</Text>
          <Text>{restaurante.tipo_cozinha}</Text>
          <Text>{restaurante.descricao}</Text>
          <Text>{restaurante.nota}</Text>
        </View>
      ))}
    </View>
  );
};

export default Restaurantes;
