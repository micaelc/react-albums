import React          from 'react';
import { Text, View } from 'react-native';

// Component
const Header = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000000',
        elevation: 3,
        position: 'relative',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20

    }
};

// Make component available to other parts os the app
export default Header;

