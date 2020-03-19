import Layout from "../components/MyLayout"
import ReactPlayer from "react-player"

const Index = () => (
  <Layout>
    <p>
      Example of video from the{" "}
      <a href="https://github.com/CookPete/react-player">react-player</a>{" "}
      library.
    </p>

    <ReactPlayer url="https://www.youtube.com/watch?v=gy1B3agGNxw" />
  </Layout>
)
export default Index
