import React from 'react'
import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native'
import { IPage } from '../App'

const items = [
    { id: '0', text: 'View' },
    { id: '1', text: 'Text' },
    { id: '2', text: 'Image' },
    { id: '3', text: 'ScrollView' },
    { id: '4', text: 'ListView' },
]

export default function Page2({ setPageI }: IPage) {

    return (
        <>
    <FlatList
      style={styles.container}
      data={items}
      renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
      keyExtractor={(item) => item.id}
    />
    <TouchableOpacity onPress={() => {
        setPageI (1)
    }}>
      <Text>Pagina1</Text>
     </TouchableOpacity>
      </> 
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
     button: {
    backgroundColor: '#FF69B4',
    borderRadius: 5,
    width: 100,
  }
})
