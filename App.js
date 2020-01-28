import React from 'react';
import {ImageBackground, View} from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';

export default class App extends React.Component<Props> {
    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('./img/space-bg.jpg')}>
                    <Header/>
                    <Liste/>
                </ImageBackground>
            </View>
        );
    }
}
const styles = {
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
    }
};
