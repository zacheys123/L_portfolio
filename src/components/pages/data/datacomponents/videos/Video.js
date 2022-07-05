import React, { useState, useEffect } from 'react';
import { Card, Typography, CardContent } from '@mui/material';
import { allvideos } from './api/vids';
function Video() {
	const [videos, setVideos] = useState(allvideos);
	useEffect(() => {}, []);

	return (
		<>
			<div className="">
				<menu>
					<CardContent>
						{videos &&
							videos.map((vids) => {
								return (
									<li key={vids.id}>
										<video
											width="95rem"
											height="90rem"
											src={vids.url}
											controls
										></video>
										<p>{vids.title}</p>
									</li>
								);
							})}
					</CardContent>
				</menu>

				{}
			</div>
		</>
	);
}

export default Video;
