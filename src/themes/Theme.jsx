import React from "react";
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { extendTheme } from "native-base";
  
 export const theme = extendTheme({
  
    colors: {
      light: 'rgba(217, 236, 242, 1)',
      box: 'rgba(255, 77, 96, 0.1)',
      primery: "rgba(0, 45, 64, 1)",
      secoundery: "1AA687",
      textMute: "D9ECF2",
      disabled: "D9ECF2",
      red: "F56A79",
      yellow: "F9AD6A",
    },
    fontConfig: {
      Lato: {
        400: {
          normal: "Lato_400Regular",
        },
        700: {
          normal: "Lato_700Bold",
        },
      },
    },

    fonts: {
      heading: "Lato",
      body: "Lato",
      mono: "Lato",
    },

    components: {
      Text: {
        baseStyle: {
          fontFamily: "body",
          fontWeight: '400',
          fontSize: "16px",
        },
        defaultProps:{
          color:'light',
        }
      },
      VStack:{
        baseStyle: {
          w : '100%', 
        },
        defaultProps: {
          borderRadius: 10,
          space: '5'
          
        }
      },
      
    },
    
  });
