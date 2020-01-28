import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

const Header = () => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <ImageBackground style={styles.backgroundImage} resizeMode='contain'
                             source={require('./../../img/multimedia-audio-music-album-note-512.png')}>{}</ImageBackground>
            <Text style={textStyle}> Serhat Müzik Listem </Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 30,
        color: '#333',
    },
    viewStyle: {
        position: 'relative',
        backgroundColor: '#f8f8f8',
        height: 60,
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    backgroundImage: {
        width: 40,
        height:40,
        opacity: 0.3,
        flex: 1,
    },
};

export default Header;
