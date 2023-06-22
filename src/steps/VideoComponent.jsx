import ReactPlayer from 'react-player'
export default function VideoComponent({ url = "https://www.youtube.com/watch?v=wLRe4rJzdgY" }) {
    return <div style={{
        width: "100%",
        position: "relative",
        paddingTop: "56.25%",
    }}>
        <ReactPlayer
            width="100%" height="100%"
            style={{
                position: "absolute", 
                top: 0, 
                left: 0,
            }}
            url={url} />
    </div>
}