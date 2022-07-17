import React from 'react'
import GridFlatList from 'grid-flatlist-react-native'
import { FlatList as List } from 'native-base'



export function GridList(props) {


  return (
    <GridFlatList
      w="100%"
      numColumns={props.numColumns ? props.numColumns : 2 }
      data={props.data}
      columnWrapperStyle={props.numColumns > 1 ? {...props.wraperStyle} : null}
      renderItem={props.renderItem}
      keyExtractor={item => item.id}
      paddingTop={20}
      gap={20}
      paddingHorizontal={10}
      ListHeaderComponent={props.header}
      ListHeaderComponentStyle={{ paddingHorizontal: 10 }}
      backgroundColor={"rgba(0, 45, 64, 1)"}
    />
  )
}

export function FlatList(props) {


  return (
    <List
      w="100%"
      numColumns={props.numColumns ? props.numColumns : 2 }
      data={props.data}
      columnWrapperStyle={props.numColumns > 1 ? {...props.wraperStyle} : null}
      renderItem={props.renderItem}
      keyExtractor={item => item.id}
      paddingHorizontal={10}
      ListHeaderComponent={props.header}
      backgroundColor={"rgba(0, 45, 64, 1)"}
    />
  )
}
