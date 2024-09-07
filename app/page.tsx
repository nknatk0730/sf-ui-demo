import { Clock } from "./components/clock";
import { Chart } from "./components/chart";
import { VideoPlayerFrame } from "./components/video-player-frame";
import { Widget } from "./components/widget";



export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <Clock />
      <div className="grid grid-cols-4">
      <Widget hotKey='c'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          voluptatibus quasi ducimus assumenda repellat porro similique ut
          asperiores vero unde animi sapiente, consequatur tenetur harum enim
          necessitatibus, laboriosam reprehenderit optio.
        </p>
      </Widget>
      <Widget hotKey="j">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe atque ea obcaecati asperiores, distinctio dicta alias non recusandae consectetur dolor accusantium adipisci rerum corrupti quia aliquid, doloremque corporis dolores? Qui.</p>
      </Widget>
      <div className="col-span-2 *:h-full">
        <Widget hotKey="l" noPadding>
          <VideoPlayerFrame />
        </Widget>
      </div>
      <Widget hotKey="p">
        <Chart />
      </Widget>
    </div>
    </div>
  );
}
