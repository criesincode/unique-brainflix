// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const VideoDetailsPage = () => {
//   const { videoId } = useParams();
//   const [videoDetails, setVideoDetails] = useState(null);

//   useEffect(() => {
//     const getVideoDetails = async () => {
//       try {
//         const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=a508756-ed08-4d31-9de7-9a600696cc9e`);
//         setVideoDetails(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getVideoDetails();
//   }, [videoId]);

//   if (!videoDetails) {
//     return <div>Loading...</div>;
//   }

//   // return (
//   //   <div>
//   //     <h1>{videoDetails.title}</h1>
//   //     <p>Channel: {videoDetails.channel}</p>
//   //     <img src={videoDetails.image} alt={videoDetails.title} />
//   //   </div>
//   // );
// };

// export default VideoDetailsPage;
