import React from 'react';
import {View} from 'react-native';
import Header from "./src/components/Header";
import Liste from "./src/components/Liste";

export default class App extends React.Component <Props> {
    render() {
        return (
            <View>
                <Header/>
                <Liste/>
            </View>

        )
    }
}
