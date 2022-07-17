import * as React from "react";
import { VStack, Center, FlatList, HStack, Box, Text } from "native-base";
import { List } from "react-native-paper";
import GridFlatList from "grid-flatlist-react-native";

function Top() {
  return (
    <Center padding="10px">
      <HStack space={"20px"} alignItems={"center"}>
        <Box width="60px" height="80px" rounded={"10px"}>
          <VStack
            backgroundColor="rgba(26, 166, 135, 1)"
            alignItems="center"
            flex={1}
            justifyContent={"center"}
            p={"10px"}
            rounded={"10px"}
            space="10px"
          >
            <Text
              fontWeight={700}
              color="light"
              fontSize="12px"
              textTransform="uppercase"
            >
              Total
            </Text>
            <Text
              fontWeight={700}
              color="light"
              fontSize="14px"
              textTransform="uppercase"
            >
              1
            </Text>
          </VStack>
        </Box>
        <Box width="70px" height="90px" rounded={"10px"}>
          <VStack
            backgroundColor="rgba(26, 166, 135, 1)"
            alignItems="center"
            justifyContent={"center"}
            flex={1}
            p={"10px"}
            rounded={"10px"}
            space="10px"
          >
            <Text
              fontWeight={700}
              color="light"
              fontSize="12px"
              textTransform="uppercase"
            >
              Total
            </Text>
            <Text
              fontWeight={700}
              color="light"
              fontSize="14px"
              textTransform="uppercase"
            >
              1
            </Text>
          </VStack>
        </Box>
        <Box width="60px" height="80px" rounded={"10px"}>
          <VStack
            backgroundColor="rgba(22, 166, 135, 1)"
            alignItems="center"
            justifyContent={"center"}
            p={"10px"}
            flex={1}
            rounded={"10px"}
            space="10px"
          >
            <Text
              fontWeight={700}
              color="light"
              fontSize="12px"
              textTransform="uppercase"
            >
              Total
            </Text>
            <Text
              fontWeight={700}
              color="light"
              fontSize="14px"
              textTransform="uppercase"
            >
              1
            </Text>
          </VStack>
        </Box>
      </HStack>
    </Center>
  );
}

const projects = [
  {
    id: 1,
    name: "math",
    compleation: 20,
  },
  {
    id: 2,
    name: "math",
    compleation: 20,
  },
  {
    id: 3,
    name: "math",
    compleation: 20,
  },
  {
    id: 4,
    name: "math",
    compleation: 20,
  },
  {
    id: 5,
    name: "math",
    compleation: 20,
  },
  {
    id: 6,
    name: "math",
    compleation: 20,
  },
];

function ProjectBox(item) {
  return (
    <Box
      backgroundColor="box"
      flex={1 / 2}
      height={"200"}
      borderRadius={10}
      padding={"20px"}
    >
      {item.name}
    </Box>
  );
}

function HomeMain() {
  return (
    <VStack alignItems={"center"} space={"30px"} flex="1">
      <Top />
      <VStack space={"20px"}>
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
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="tomorrow’s Tasks"
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
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="someday’s Tasks"
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
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </VStack>
      <Box width={"70%"} height="1px" backgroundColor="white"></Box>
      <Text w={"100%"} px={"20px"} color={"white"}>
        Today’s project’s
      </Text>
    </VStack>
  );
}

function HomeScreen() {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <GridFlatList
      w="100%"
      numColumns={2}
      data={projects}
      renderItem={ProjectBox}
      paddingTop={20}
      keyExtractor={(item) => item.id}
      paddingHorizontal={10}
      ListHeaderComponent={HomeMain}
      backgroundColor={"rgba(0, 45, 64, 1)"}
    />
  );
}

export default HomeScreen;
