import React from 'react';
import SongSelector from '../components/SongSelector';
import SongDetail from '../components/SongDetail';

class SongContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null,
      selectedSongPosition: 0
    };
    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  handleSongSelected(index) {
    const selectedSong = this.state.songs[index];
    this.setState({selectedSong: selectedSong})
    this.setState({selectedSongPosition: parseInt(index)+1})
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({ songs: songs.feed.entry }))
    .catch(err => console.error);
  }

  render(){
    return (
      <div id="container">
        <SongSelector songs={this.state.songs} onSongSelected={this.handleSongSelected} />
        <SongDetail song={this.state.selectedSong} chartPosition={this.state.selectedSongPosition}/>
      </div>
    );
  }
}

export default SongContainer;
