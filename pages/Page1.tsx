import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import {IPage} from '../App'
import logo from "../assets/logo2.png"
import Toggle from '../components/Toggle'

export default function Page1({ setPageI }: IPage) {
  const [flexDirection, setFlexDirection] = useState('row')
  const [justifyContent, setJustifyContent] = useState('center')
  const [alignItems, setAlignItems] = useState('center')
  const layoutStyle = { flexDirection, justifyContent, alignItems }

  const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
  const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

  return (
    <View style={styles.container}>
      <Toggle
        label={'Primary axis (flexDirection)'}
        value={flexDirection}
        options={flexDirectionOptions}
        onChange={(option) => {
          setFlexDirection(option)
        }}
      />
      <Toggle
        label={`${primaryAxis} distribution (justifyContent)`}
        value={justifyContent}
        options={justifyContentOptions}
        onChange={(option) => {
          setJustifyContent(option)
        }}
      />
      <Toggle
        label={`${secondaryAxis} alignment (alignItems)`}
        value={alignItems}
        options={alignItemsOptions}
        onChange={(option) => {
          setAlignItems(option)
        }}
      />
      <Image source={logo} style={styles.img} />
    <TouchableOpacity onPress={()=>{
        setPageI(2)
    }}>
     <Text>Pagina2</Text>
     </TouchableOpacity>
      <View style={[styles.layout, layoutStyle]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </View>
  )
}

const flexDirectionOptions = ['row', 'column']
const justifyContentOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-around',
  'space-between',
]
const alignItemsOptions = ['flex-start', 'center', 'flex-end', 'stretch']

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: '#FF69B4',
    margin: 5,
  },
  img: {
    width: 150,
    height: 150
  }
})