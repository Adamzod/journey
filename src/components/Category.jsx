import React from 'react'
import { List } from "react-native-paper";

function Category(props) {
  return (
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
          {props.children}
        </List.Accordion>
        
  )
}

export default Category