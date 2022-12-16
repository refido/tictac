import './VideoPlayer.css';
import Video from '../components/Video';

function VideoPlayer() {
    return (
        <div className="app">
            <div className="app__videos">
                <Video url="https://img.ifunny.co/videos/2937ebc584cc6eb91608716750a7852813f05817abcb7d26b8f39467db548722_1.mp4"
                    channel="tictac"
                    description="Hey papi"
                    song="I dont know"
                    likes={345}
                    shares={200}
                    messages={90}
                />
                <Video url="https://img.ifunny.co/videos/deeb3d49afac8a67d2ae492954bb28d126413dec2766a8abf85ed8174586673d_1.mp4"
                    channel="tictac"
                    description="Good boi"
                    song="no sound"
                    likes={445}
                    shares={290}
                    messages={109}
                />
            </div>
        </div>
    );
}

export default VideoPlayer;