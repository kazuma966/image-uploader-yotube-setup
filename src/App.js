import "./App.css";
import ImageUploader from "./ImageUploader";

function App() {
  return (
    <div className="App">
      {/* uplodaer */}
      <ImageUploader />
    </div>
  );
}

export default App;


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//npm run buldする前にpackage.jsonに["homepage": "./",]を追加すること
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//homepage===プロジェクトのホームページURL。