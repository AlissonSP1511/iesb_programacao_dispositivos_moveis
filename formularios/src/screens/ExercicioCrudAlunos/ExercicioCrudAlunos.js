import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, Dialog, FAB, MD3Colors, Portal, Text } from 'react-native-paper'
import Toast from 'react-native-toast-message'


export default function ExercicioCrudAlunos({ navigation, route }) {

  const [alunos, setAlunos] = useState([
    {
      nome: 'João Paulo', /*nome*/
      matricula: '255156', /*idade*/
      turno: 'Noturno',/*altura*/
      curso: 'ADS'/*peso*/
    },
    {
      nome: 'Jorge Luiz',
      matricula: '201515',
      turno: 'Matutino',
      curso: 'Direito'
    }
  ])
  const [showModalExcluirUsuario, setShowModalExcluirUsuario] = useState(false)
  const [alunoASerExcluida, setAlunoASerExcluida] = useState(null)

  const showModal = () => setShowModalExcluirUsuario(true);

  const hideModal = () => setShowModalExcluirUsuario(false);


  function adicionarAluno(aluno) {
    let novaListaAlunos = alunos
    novaListaAlunos.push(aluno)
    setAlunos(novaListaAlunos)
  }

  function editarAluno(alunoAntiga, novosDados) {
    console.log('ALUNO ANTIGA -> ', alunoAntiga)
    console.log('DADOS NOVOS -> ', novosDados)

    const novaListaAlunos = alunos.map(aluno => {
      if (aluno == alunoAntiga) {
        return novosDados
      } else {
        return aluno
      }
    })

    setAlunos(novaListaAlunos)

  }

  function excluirAluno(aluno) {
    const novaListaAluno = alunos.filter(p => p !== aluno)
    setAlunos(novaListaAluno)
    Toast.show({
      type: 'success',
      text1: 'Aluno excluido com sucesso!'
    })
  }

  function handleExluirAluno() {
    excluirAluno(alunoASerExcluida)
    setAlunoASerExcluida(null)
    hideModal()
  }

  // function getImc(aluno) {
  //   const curso = parseFloat(aluno.curso)
  //   const turno = parseFloat(aluno.turno)
  //   const imc = curso / ((turno / 100) * (turno / 100))
  //   return imc.toFixed(2)
  // }


  return (
    <View style={styles.container}>

      <Text variant='titleLarge' style={styles.title} >Lista de Alunos</Text>

      <FlatList
        style={styles.list}
        data={alunos}
        renderItem={({ item }) => (
          <Card
            mode='outlined'
            style={styles.card}
          >
            <Card.Content
              style={styles.cardContent}
            >
              <View style={{ flex: 1 }}>
                <Text variant='titleMedium'>{item?.nome}</Text>
                <Text variant='bodyLarge'>Matrícula: {item?.matricula}</Text>
                <Text variant='bodyLarge'>Turno: {item?.turno}</Text>
                <Text variant='bodyLarge'>Curso: {item.curso}</Text>
              </View>
              {/* <View style={{ flex: 1 }}>
                <Text variant='titleMedium'>IMC</Text>
                <Text variant='bodyLarge'>{getImc(item)}</Text>
              </View> */}


            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.push('FormAluno', { acao: editarAluno, aluno: item })}>
                Editar
              </Button>
              <Button onPress={() => {
                setAlunoASerExcluida(item)
                showModal()
              }}>
                Excluir
              </Button>
            </Card.Actions>
          </Card>
        )}
      />

      {/* Botão Flutuante */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.push('FormAluno', { acao: adicionarAluno })}
      />


      {/* Modal Excluir Usuário */}
      <Portal>
        <Dialog visible={showModalExcluirUsuario} onDismiss={hideModal}>
          <Dialog.Title>Atenção!</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Tem certeza que deseja excluir este usuário?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideModal}>Voltar</Button>
            <Button onPress={handleExluirAluno}>Tenho Certeza</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    margin: 10
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  list: {
    width: '90%',
  },
  card: {
    marginTop: 15
  },
  cardContent: {
    flexDirection: 'row',
    backgroundColor: MD3Colors.primary80,
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 15
  }
})