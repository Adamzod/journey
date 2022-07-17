import React from "react";
import { Box, Text, FlatList, Center, Pressable } from "native-base";
import GridFlatList from "grid-flatlist-react-native";

const ProjectData = [
  {
    id: 1,
    name: "math",
    complete: "20",
  },
  {
    id: 2,
    name: "math",
    complete: "20",
  },
  {
    id: 3,
    name: "math",
    complete: "20",
  },
  {
    id: 4,
    name: "math",
    complete: "20",
  },
  {
    id: 5,
    name: "math",
    complete: "20",
  },
  {
    id: 6,
    name: "math",
    complete: "20",
  },
  {
    id: 7,
    name: "math",
    complete: "20",
  },
];

function Header() {
  return (
    <Center borderRadius={10} height={150} backgroundColor={"box"}>
      <Text>75%</Text>
    </Center>
  );
}

function Projects({ navigation }) {
  function Item(item) {
    return (
      <Pressable
        backgroundColor="box"
        flex={1 / 2}
        height={200}
        borderRadius={10}
        onPress={() => navigation.navigate("home")}
        padding={"20px"}
      >
        <Box>{item.name}</Box>
      </Pressable>
    );
  }
  return (
    <GridFlatList
      w="100%"
      numColumns={2}
      data={ProjectData}
      renderItem={Item}
      keyExtractor={(item) => item.id}
      paddingTop={20}
      gap={20}
      paddingHorizontal={10}
      ListHeaderComponent={Header}
      ListHeaderComponentStyle={{ paddingHorizontal: 10 }}
      backgroundColor={"rgba(0, 45, 64, 1)"}
    />
  );
}

export default Projects;
