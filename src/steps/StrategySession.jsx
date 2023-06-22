import VideoComponent from './VideoComponent'

export default function StrategySession() {
    return <>
        <VideoComponent url="https://youtu.be/wufTNcID8vc" />
        <div style={{marginTop: "16px", width: "100%"}}>
        <iframe src="https://app.hellobonsai.com/f/2d767823a1d1421?embed=true" frameborder="0" width="100%" height="100%" style={{ border: "none", minHeight: "600px" }}></iframe>
        </div>
    </>
}