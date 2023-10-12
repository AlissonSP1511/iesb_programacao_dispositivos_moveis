// import React, { useEffect, useState } from 'react'
// import { StyleSheet, View } from 'react-native'
// import { Avatar, Card, IconButton, Text } from 'react-native-paper'

// import Api from '../../services/Api'

// export default function Usuario(props) {

//     const navigation = props.navigation
//     const [usuario, setUsuario] = useState()
//     const usuarioId = props.route.params.id

//     useEffect(() => {

//         Api.get('/users/' + usuarioId)
//             .then(response => {
//                 setUsuario(response.data)
//             })
//             .catch(error => {
//                 console.error("DEU ERRO AO BUSCAR USUARIOS", error)
//             })

//     }, [])

//     return (
//         <View>
//             <Card onPress={() => {
//                 navigation.navigate('Posts', usuario)
//              }}>
//                 <Card.Title
//                     title={usuario?.username}
//                     subtitle={usuario?.email}
//                     left={() => <Avatar.Image size={48} source={{ uri: usuario?.image }} />}
//                     right={() => <IconButton icon="chevron-right" />}
//                 />
//                 <Card.Cover source={{ uri: usuario?.image }} />
//                 <Card.Content>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//                         <Text variant="titleLarge">Name:</Text>
//                         <Text variant="titleLarge">{usuario?.firstName} {usuario?.lastName}</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//                         <Text variant="titleLarge">Email:</Text>
//                         <Text variant="titleLarge">{usuario?.email}/</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//                         <Text variant="titleLarge">Phone:</Text>
//                         <Text variant="titleLarge">{usuario?.phone}</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//                         <Text variant="titleLarge">Age:</Text>
//                         <Text variant="titleLarge">{usuario?.age}</Text>
//                     </View>
//                 </Card.Content>
//             </Card>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     // container: {
//     //     flex: 1,
//     //     justifyContent: 'center',
//     //     alignItems: 'center'
//     // }

// })

import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Avatar, Card, IconButton } from 'react-native-paper'

import Api from '../../services/Api'

export default function Usuarios(props) {
    console.log(props)

    const navigation = props.navigation
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {

        Api.get('/users')
            .then(response => {

                setUsuarios(response.data.users)

            })
            .catch(error => {
                console.error("DEU ERRO AO BUSCAR USUARIOS", error)
            })

    }, [])


    return (
        <View>

            <FlatList
                data={usuarios}
                renderItem={({ item }) => {
                    return (
                        <Card onPress={() => {
                            navigation.navigate('Posts', { id: item.id })
                        }}>
                            <Card.Title
                                title={item.username}
                                subtitle={item.email}
                                left={() => <Avatar.Image size={48} source={{ uri: item.image }} />}
                                right={() => <IconButton icon="chevron-right" />}
                            />
                        </Card>
                    )
                }}
            />

        </View >
    )
}

const styles = StyleSheet.create({})