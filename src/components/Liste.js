import React from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';


class Liste extends React.Component {
    state = {data: []};

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({data: response.data}));
    }

    renderData() {
        return this.state.data.map(responseData =>
            <Text> {responseData.title} </Text>
        );
    }

    render() {
        return (
            <View style={{marginTop: 15, alignItems: 'center',}}>
               {this.renderData()}
            </View>
        );
    }
}

export default Liste;
