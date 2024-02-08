import { useFonts, Inter_400Regular, Inter_700Bold,  } from "@expo-google-fonts/inter";

// const [fontsLoaded] = useFonts({
//     Inter_400Regular, Inter_700Bold,
// })
export const theme = {
    colors: {
        WHITE: '#FFFFFF',
        BLACK: '#000000',
        GRAY: '#E3E3E3',
        GREEN: '#1A8009',
    },

    font_family: {
        regular: Inter_400Regular,
        bold: Inter_700Bold,
    },

    font_size: {
        pattern14: 14,
        title: 24,
        title_2: 20,
        button: 12,
    },
};