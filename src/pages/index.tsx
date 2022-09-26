import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";

import Fib from "../assets/Fib.svg"

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

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
            placeholder="Enter a name..."
          />
          <button type="button" onClick={() => greet()}>
           Login jk
          </button>
        </div>
      </div>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
