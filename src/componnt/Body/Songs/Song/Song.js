import "./Song.css";

export default function Song(props) {
  return (
    <div>
      <div className="body_container">
        <article className="postcard dark blue">
          <div className="postcard__img_link">
            <img
              className="postcard__img"
              // src={props.songs.artist.avatar}
              alt=""
            />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title blue">
              {/* {props.songs.artist.name} */}
            </h1>
            <div className="postcard__subtitle small">Mon, May 25th 2020</div>
            <div className="postcard__bar">
              {/* <audio controls src={props.songs.artist.weburl}>
									<code>audio</code>
								</audio> */}
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <i className="fas fa-tag mr-2"></i>Podcast
              </li>
              <li className="tag__item">
                <i className="fas fa-clock mr-2"></i>55 mins.
              </li>
              <li className="tag__item play blue">
                <i className="fas fa-play mr-2"></i>Play Episode
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
