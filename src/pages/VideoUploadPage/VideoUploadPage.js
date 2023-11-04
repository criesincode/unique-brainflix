import "./VideoUploadPage.scss"
import UploadVideo from "../../assets/images/Upload-video-preview.jpg"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const VideoUploadPage = () => {
    const navigate = useNavigate()
    const uploadAlert = () => {
        window.alert("Video upload was successful! Return to homepage.")
    } 
    const handleFormSubmission = (event) => {
        event.preventDefault();  
    const newVideo = {
        title: event.target.title.value,
        description: event.target.description.value,
        image: "Upload-video-preview.jpg"
    } 
    const postVideo = async () => {
        try {
          const response = await axios.post(`http://localhost:8080/videos`, newVideo);
          navigate("/")
        } catch (error) {
          console.error(error);
        }
      };
      postVideo()   
    }
    
    return (
        <>
            <div className="title__container">
                <p className="upload__title">Upload Video</p>
            </div>
            <section className="upload">

                <div className="upload__thumbnail">
                    <p className="upload__thumbnail--title">VIDEO THUMBNAIL</p>
                    <img className="upload__image" src={UploadVideo} alt="riding bike upload" />
                </div>
                <form onSubmit={handleFormSubmission}>
                    <p className="form__text">TITLE YOUR VIDEO</p>
                    <div className="form__input">
                        <label className="title" htmlFor="title"></label>
                        <input type="text" name="title" id="title" placeholder="Add a title to your page" />
                    </div>
                    <p className="form__text--b">ADD A VIDEO DESCRIPTION</p>
                    <div className="form__input--B">
                        <label className="description" htmlFor="description"></label>
                        <input type="text" name="description" id="description" placeholder="Add a description to your video" />
                        <br />
                        <div className="button__container">
                                <button className="button" type="submit" onSubmit={uploadAlert}>PUBLISH</button>
                            <Link to="/">
                                <button className="button__b">CANCEL</button>
                            </Link>
                        </div>
                    </div>
                </form>

            </section>
        </>
    )
}

export default VideoUploadPage;