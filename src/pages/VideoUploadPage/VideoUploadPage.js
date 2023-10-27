import "./VideoUploadPage.scss"
import UploadVideo from "../../assets/images/Upload-video-preview.jpg"
const VideoUploadPage = () => {
    return (
        <>
            <section>
                <p className="section__title">Upload Video</p>
                <div className="section__thumbnail">
                    <p className="section__thumbnail--title">VIDEO THUMBNAIL</p>
                    <img className="section__image" src={UploadVideo} alt="riding bike upload"/>
                </div>
            </section>
            <article>

            </article>
        </>
    )
}