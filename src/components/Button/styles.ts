import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export const styles = StyleSheet.create({
    customButton: {
        backgroundColor: theme.colors.BLACK,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: theme.colors.WHITE,
        fontSize: 16,
        fontWeight: 'bold', 
    },
});