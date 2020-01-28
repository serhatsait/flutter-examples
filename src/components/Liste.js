import React from 'react';
import { ScrollView} from 'react-native';
import axios from 'axios';
import Detay from "./Detay";


class Liste extends React.Component {
    state = {data: []};

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({data: response.data}));
    }

    renderData() {
        return this.state.data.map((responseData, Id) =>
            <Detay key={Id} data={responseData} />
        );
    }

    render() {
        return (
            <ScrollView style={{marginTop: 15}}>
                {this.renderData()}
            </ScrollView>
        );
    }
}

export default Liste;
