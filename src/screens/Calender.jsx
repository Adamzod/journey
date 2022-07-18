import React from "react";
import { FlatList } from "../components/GridFlatList";
import { Box, Center, Text, HStack } from "native-base";

const TaskData = [
  {
    id: 1,
    name: "task",
    complete: false,
    time: "6:00 to 7:00",
  },
  {
    id: 2,
    name: "task",
    complete: false,
    time: "6:00 to 7:00",
  },
  {
    id: 3,
    name: "task",
    complete: false,
    time: "6:00 to 7:00",
  },
  {
    id: 4,
    name: "task",
    complete: false,
    time: "6:00 to 7:00",
  },
  {
    id: 5,
    name: "task",
    complete: false,
    time: "6:00 to 7:00",
  },
  {
    id: 6,
    name: "task",
    complete: false,
    time: "6:00 to 7:00",
  },
  {
    id: 7,
    name: "task",
    complete: false,
    time: "6:00 to 7:00",
  },
];

function Date() {
  return (
    <Center
      backgroundColor={"box"}
      height={90}
      marginBottom={5}
      borderRadius={10}
      padding={3}
    >
      <HStack flex={1}>
        <Box
          alignItems={"center"}
          backgroundColor={"green.500"}
          flex={1}
          justifyContent={"space-evenly"}
          borderRadius={10}
        >
          <Text fontSize={14} fontWeight={700}>
            Mon
          </Text>
          <Text fontWeight={700}>12</Text>
        </Box>
        <Box
          alignItems={"center"}
          flex={1}
          justifyContent={"space-evenly"}
          borderRadius={10}
        >
          <Text fontSize={14} fontWeight={700}>
            Mon
          </Text>
          <Text fontWeight={700}>12</Text>
        </Box>
        <Box
          alignItems={"center"}
          flex={1}
          justifyContent={"space-evenly"}
          borderRadius={10}
        >
          <Text fontSize={14} fontWeight={700}>
            Mon
          </Text>
          <Text fontWeight={700}>12</Text>
        </Box>
        <Box
          alignItems={"center"}
          flex={1}
          justifyContent={"space-evenly"}
          borderRadius={10}
        >
          <Text fontSize={14} fontWeight={700}>
            Mon
          </Text>
          <Text fontWeight={700}>12</Text>
        </Box>
        <Box
          alignItems={"center"}
          flex={1}
          justifyContent={"space-evenly"}
          borderRadius={10}
        >
          <Text fontSize={14} fontWeight={700}>
            Mon
          </Text>
          <Text fontWeight={700}>12</Text>
        </Box>
        <Box
          alignItems={"center"}
          flex={1}
          justifyContent={"space-evenly"}
          borderRadius={10}
        >
          <Text fontSize={14} fontWeight={700}>
            Mon
          </Text>
          <Text fontWeight={700}>12</Text>
        </Box>
        <Box
          alignItems={"center"}
          flex={1}
          justifyContent={"space-evenly"}
          borderRadius={10}
        >
          <Text fontSize={14} fontWeight={700}>
            Mon
          </Text>
          <Text fontWeight={700}>12</Text>
        </Box>
      </HStack>
    </Center>
  );
}

function Item({ item }) {
  return (
    <HStack
      backgroundColor={"box"}
      paddingX={3}
      paddingY={5}
      borderRadius={10}
      marginBottom={5}
      flex={1}
      space={2}
    >
      {item.complete ? <Box>true</Box> : <Box>false</Box>}
      <Text flex={1}>{item.name}</Text>
      <Text>{item.time}</Text>
    </HStack>
  );
}

function Calender() {
  return (
    <FlatList data={TaskData} numColumns={1} renderItem={Item} header={Date} />
  );
}

export default Calender;
