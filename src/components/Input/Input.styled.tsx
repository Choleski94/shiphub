import { StyleSheet } from 'react-native';

const DEFAULT_SPACING = 12;

export const DEFAULT_ERROR_COLOR = '#D44950';

const styles = StyleSheet.create({
    root: {
        marginTop: DEFAULT_SPACING,
        marginBottom: DEFAULT_SPACING,
    },
    container: {
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        paddingHorizontal: 10,
        borderColor: '#e8e8e8',
        backgroundColor: 'white',
    },
    containerError: {
        borderColor: DEFAULT_ERROR_COLOR,
    },
    icon: {
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
    },
    input: {
        height: 40
    },
    inputIcon: {
        marginLeft: 25,
    },
    label: {
        marginBottom: 8,
        color: '#6C757D',
    },
    disabledContainer: {
        backgroundColor: '#f5f5f5',
        borderColor: '#dcdcdc',
    },
    disabledInput: {
        color: '#a9a9a9',
    },
    errorMessage: {
        marginTop: 4,
        fontSize: 12,
        color: DEFAULT_ERROR_COLOR,
    },
})

export default styles;
