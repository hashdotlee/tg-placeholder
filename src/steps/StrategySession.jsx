import { InlineWidget } from 'react-calendly'
import VideoComponent from './VideoComponent'

export default function StrategySession() {
    return <>
        <VideoComponent url="https://youtu.be/wufTNcID8vc" />
        <div style={{ marginTop: "16px", width: "100%" }}>
            <InlineWidget url="https://calendly.com/tigen-agency/strategy-session" />
        </div>
    </>
}