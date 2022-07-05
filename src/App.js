import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
    // Select picker de meses
    // input text -primera linea
    // input text - segunda linea
    // botton exportar

    const [linea1, setLinea1] = useState("");
    const [linea2, setLinea2] = useState("");
    const [imagen, setImagen] = useState("");

    const handleLinea1 = (e) => setLinea1(e.target.value);
    const handleLinea2 = (e) => setLinea2(e.target.value);
    const handleImagen = (e) => setImagen(e.target.value);
    const handleExport = () => {
        html2canvas(document.querySelector("#meme")).then((canvas) => {
            var img = canvas.toDataURL("image/png");
            var link = document.createElement("a");
            link.download = "meme.png";
            link.href = img;
            link.click();
        });
    };
    return (
        <div className="App">
            <select onChange={handleImagen}>
                <option value="one"> meme 1 </option>
                <option value="dos"> meme 2 </option>
                <option value="tres"> meme 3 </option>
                <option value="cuatro"> meme 4 </option>
                <option value="cinco"> meme 5 </option>
            </select>
            <br />
            <input type="text" onChange={handleLinea1} /> <br />
            <input type="text" onChange={handleLinea2} /> <br />
            <button onClick={handleExport}>Exportar</button>
            <div id="meme">
                <div className="meme">
                    <span className="span01">{linea1}</span>
                    <br />
                    <img src={`/imagen/${imagen}.jpg`} alt="" />
                    <span className="span02">{linea2}</span>
                </div>
            </div>
        </div>
    );
}

export default App;
