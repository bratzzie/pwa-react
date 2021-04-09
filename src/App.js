import "./App.css";
import video from "./assets/ballet.mp4";
function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(
  //       "https://orangevalleycaa.org/api/videos"
  //     ).then((response) => response.json());
  //     setData(result);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Video</p>
      </header>

      {/* {data.map((video) => (
        <div key={video.id}>
          <video height={400} controls src={video.src} />
        </div>
      ))} */}
      <video height={"100%"} width={"70%"} controls src={video} />
    </div>
  );
}

export default App;
