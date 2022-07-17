import React from "react";
import { Box, VStack, Center, Text } from "native-base";
import { FlatList } from "../components/GridFlatList";
import Category from "../components/Category";
import { List } from "react-native-paper";

const TaskData = [
  {
    id: 1,
    topic: "this is a task",
  },
  {
    id: 2,
    topic: "this is a task",
  },
  {
    id: 3,
    topic: "this is a task",
  },
  {
    id: 4,
    topic: "this is a task",
  },
  {
    id: 5,
    topic: "this is a task",
  },
  {
    id: 6,
    topic: "this is a task",
  },
  {
    id: 7,
    topic: "this is a task",
  },
];

function Top() {
  return (
    <VStack>
      <Box borderRadius={10} height={82} backgroundColor={"box"}>
        this is the header
      </Box>
      <Center borderRadius={10} height={170} backgroundColor={"box"}>
        75%
      </Center>
      <List.Accordion
        title="Today’s Tasks"
        titleStyle={{ color: "rgba(217, 236, 242, 1)" }}
        style={{
          backgroundColor: "rgba(0, 45, 64, 1)",
          height: 50,
          justifyContent: "center",
        }}
        right={(props) => (
          <List.Icon
            style={{ alignItems: "flex-end", padding: 0, margin: 0 }}
            color="white"
            icon="plus"
          />
        )}
      >
        <List.Item title="name" />
      </List.Accordion>
      <List.Accordion
        title="Today’s Tasks"
        titleStyle={{ color: "rgba(217, 236, 242, 1)" }}
        style={{
          backgroundColor: "rgba(0, 45, 64, 1)",
          height: 50,
          justifyContent: "center",
        }}
        right={(props) => (
          <List.Icon
            style={{ alignItems: "flex-end", padding: 0, margin: 0 }}
            color="white"
            icon="plus"
          />
        )}
      >
        <List.Item title="name" />
      </List.Accordion>
      <List.Accordion
        title="Today’s Tasks"
        titleStyle={{ color: "rgba(217, 236, 242, 1)" }}
        style={{
          backgroundColor: "rgba(0, 45, 64, 1)",
          height: 50,
          justifyContent: "center",
        }}
        right={(props) => (
          <List.Icon
            style={{ alignItems: "flex-end", padding: 0, margin: 0 }}
            color="white"
            icon="plus"
          />
        )}
      >
        <List.Item title="name" />
      </List.Accordion>
      <Center>
        <Box width={"70%"} height="1px" backgroundColor="white"></Box>
      </Center>
      <List.Section
        titleStyle={{ color: "rgba(217, 236, 242, 1)" }}
        title={'All Tasks'}
        style={{
          flex: 1,
        }}
      >
      </List.Section>
    </VStack>
  );
}

function Item(item) {
  return <List.Item title={item.name} />;
}

function Task({ item }) {
  return (
    <List.Section
      borderRadius={10}
      style={{ backgroundColor: "rgba(255, 77, 96, 0.1)", height: 50, flex: 1 }}
      
    >
      <Item name={"name"} />
    </List.Section>
  );
}

function ProjectDetail() {
  return (
    <FlatList data={TaskData} renderItem={Task} header={Top} numColumns={1} />
  );
}

export default ProjectDetail;
