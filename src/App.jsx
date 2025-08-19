import { useState } from "react";
import "./index.css";

export default function App() {
    const [color, setColor] = useState("");

    return (
        <div className="traffic-light">
            <div
                className="light"
                onClick={() => { }}
                style={{}}
            ></div>
            <div
                className="light"
                onClick={() => { }}
                style={{}}

            ></div>
            <div
                className="light"
                onClick={() => { }}
                style={{}}

            ></div>
        </div>
    );
}
