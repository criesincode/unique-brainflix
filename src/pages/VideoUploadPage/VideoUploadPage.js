import "./VideoUploadPage.scss"
import UploadVideo from "../../assets/images/Upload-video-preview.jpg"
import { Link } from "react-router-dom"

const VideoUploadPage = () => {
    const uploadAlert = () => {
        window.alert("Video upload was successful! Return to homepage.")
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
                <form>
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
                            <Link to="/">
                                <button className="button" onSubmit={uploadAlert}>PUBLISH</button>
                            </Link>
                            <Link to="/">
                                <button className="button__b">CANCEL</button>
                            </Link>
                        </div>
                    </div>
                </form>

                {/* <Link to="/" className="button">
            </Link> */}

            </section>
        </>
    )
}

export default VideoUploadPage;