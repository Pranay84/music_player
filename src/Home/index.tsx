import { Component } from "react";
import EachCard from "../EachCard";

class Home extends Component {
  state = { songs: [], song_name: "" };
  componentDidMount(): void {
    this.getSongs();
  }

  getSongs = async () => {
    const data = await fetch("https://cms.samespace.com/items/songs");
    const response = await data.json();
    // console.log(response);
    this.setState({ songs: response.data });
  };

  songName = (event) => {
    this.setState({ song_name: event.target.value });
  };

  render() {
    const { songs, song_name } = this.state;
    let filteredList = undefined;
    if (songs.length > 0 && song_name.length > 0) {
      filteredList = songs.filter((each) => {
        if (each.name.toLowerCase() === song_name.toLowerCase()) {
          return each;
        }
      });
    }

    // console.log(filteredList);

    return (
      <div>
        <p>Songs</p>
        <div>
          <input
            placeholder="Enter song name"
            onChange={this.songName}
            value={song_name}
          />
        </div>
        <div>
          {filteredList
            ? filteredList.map((each) => (
                <EachCard value={each} key={each.id} />
              ))
            : undefined}
        </div>
      </div>
    );
  }
}

export default Home;
