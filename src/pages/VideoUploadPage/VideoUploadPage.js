import "./VideoUploadPage.scss"
import UploadVideo from "../../assets/images/Upload-video-preview.jpg"

const VideoUploadPage = () => {
    return (
        <>
            <section className="upload">
                <p className="upload__title">Upload Video</p>
                <div className="upload__thumbnail">
                    <p className="upload__thumbnail--title">VIDEO THUMBNAIL</p>
                    <img className="upload__image" src={UploadVideo} alt="riding bike upload" />
                </div>
            </section>
            <article>
                <form>
                    <p className="form__text">TITLE YOUR VIDEO</p>
                    <div className="form__input">
                        <label className="title" htmlFor="title"></label>
                        <input type="title" name="title" id="title" placeholder="Add a title to your page" />
                    </div>
                    <p className="form__text--b">ADD A VIDEO DESCRIPTION</p>
                    <div className="form__input--B">
                        <label className="description" htmlFor="description"></label>
                        <input type="description" name="description" id="description" placeholder="Add a description to your video" />
                        <br />
                        <button>PUBLISH</button>
                        <button className="button__b">CANCEL</button>
                    </div>
                </form>
            </article>
        </>
    )
}

export default VideoUploadPage;