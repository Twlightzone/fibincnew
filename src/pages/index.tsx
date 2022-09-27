import { useState } from "react";
import Image from "next/image";

import Fib from "../assets/Fib.svg"

function App() {
  const [name,setName] = useState("");
  return (
    <div className="container">
      <div className="row">
        <span className="logos">
          <a href="https://friendbase.tech/" target="_blank">
            <Image
              width={288}
              height={288}
              src={Fib}
              className="logo tauri"
              alt="Tauri logo"
            />
          </a>
        </span>
      </div>
      <div className="row">
        <div>
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Join anonymously :)"
          />
          <a href="https://friendbase.tech/" target="_blank"> 
          <button type="button">
           Press here
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
