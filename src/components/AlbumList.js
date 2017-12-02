import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Component
class AlbumList extends Component {
    // Default inital State
    state = {albums: []};

    // Get data from cloud and set state with data
    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />);
    }

    // render component
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}


const styles = {};

// Make component available to other parts os the app
export default AlbumList;

