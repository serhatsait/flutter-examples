import React from 'react';
import {Text, View, ImageBackground} from 'react-native';

const Header = () => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <ImageBackground style={ styles.backgroundImage} resizeMode='contain' source={require('./../../img/multimedia-audio-music-album-note-512.png')} >{}</ImageBackground>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5

    },
    backgroundImage:{
        position: 'absolute',
        top: -20,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3
    },
};

export default Header;
