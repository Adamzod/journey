import * as React from "react";
import { VStack, Center, HStack, Box, Text } from "native-base";
import { List } from "react-native-paper";

function Top() {
  return (
    <Center padding="10px" >
      <HStack space={"20px"}   alignItems={'center'}>
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

function HomeScreen() {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <VStack alignItems={'center'} padding="20px" space={'30px'} flex='1'  >
      <Top />
      <VStack space={'20px'} >
        <List.Accordion
          title="Today’s Tasks"
          titleStyle={{ color: "rgba(217, 236, 242, 1)"  }}
          style={{ backgroundColor: "rgba(0, 45, 64, 1)" , height:50, justifyContent:'center' }}
          right={props => <List.Icon style={{alignItems:'flex-end', padding:0 , margin:0}} color="white" icon='plus' />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="tomorrow’s Tasks"
          titleStyle={{ color: "rgba(217, 236, 242, 1)"  }}
          style={{ backgroundColor: "rgba(0, 45, 64, 1)" , height:50, justifyContent:'center' }}
          right={props => <List.Icon style={{alignItems:'flex-end', padding:0 , margin:0}} color="white" icon='plus' />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="someday’s Tasks"
          titleStyle={{ color: "rgba(217, 236, 242, 1)"  }}
          style={{ backgroundColor: "rgba(0, 45, 64, 1)" , height:50, justifyContent:'center' }}
          right={props => <List.Icon style={{alignItems:'flex-end', padding:0 , margin:0}} color="white" icon='plus' />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
       
      </VStack>
      <Box width={'70%'}  height='1px'  backgroundColor="white" ></Box>

    </VStack>
  );
}

export default HomeScreen;
