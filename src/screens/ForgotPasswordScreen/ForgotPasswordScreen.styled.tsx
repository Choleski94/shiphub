import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: tw`bg-white h-full`,
    root: {
        alignItems: 'center',
        padding: 20, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
});

export default styles;
