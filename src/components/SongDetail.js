import React from 'react';

const SongDetail = (props) => {
  if (!props.song) return null;
  return (
    <ul>
      <li>Name: {props.song["im:name"].label}</li>
      <li>Artist: {props.song["im:artist"].label}</li>
      <li>Price: {props.song["im:price"].label}</li>
      <li>Chart Position: {props.chartPosition}</li>
      <img src={props.song["im:image"][2].label} alt="Song artwork"/>
    </ul>

  )
}

export default SongDetail;
