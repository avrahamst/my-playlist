import "./Body.css";

export default function Body(props) {
	console.log(props.songs);
	return (
		<div>
			<section className=" ">
				<div className="container py-4">
					<article className="postcard dark blue">
						<a className="postcard__img_link" href="#">
							<img
								className="postcard__img"
								// src={props.songs.artist.avatar}
								alt=""
							/>
						</a>
						<div className="postcard__text">
							<h1 className="postcard__title blue">
								{/* {props.songs.artist.name} */}
							</h1>
							<div className="postcard__subtitle small">
								<time dateTime="2020-05-25 12:00:00">
									<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
								</time>
							</div>
							<div className="postcard__bar">
								{" "}
								{/* <audio controls src={props.songs.artist.weburl}>
									<code>audio</code>
								</audio> */}
							</div>
							<div className="postcard__preview-txt"></div>
							<ul className="postcard__tagbox">
								<li className="tag__item">
									<i className="fas fa-tag mr-2"></i>Podcast
								</li>
								<li className="tag__item">
									<i className="fas fa-clock mr-2"></i>55 mins.
								</li>
								<li className="tag__item play blue">
									<a href="#">
										<i className="fas fa-play mr-2"></i>Play Episode
									</a>
								</li>
							</ul>
						</div>
					</article>
				</div>
			</section>
		</div>
	);
}
