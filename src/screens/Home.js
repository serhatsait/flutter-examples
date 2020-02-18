import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

type Props = {};
export default class Home extends Component<Props> {
    render() {
        return (
            <View>
                <Text>Merhaba React Navigation!</Text>
                <Text>Bu ekran ana ekran...</Text>
                <Button
                    title="Ekran 2'ye git..."
                    onPress={() =>
                        this.props.navigation.navigate('Ekran2')
                    }
                />
            </View>
        );
    }
}
