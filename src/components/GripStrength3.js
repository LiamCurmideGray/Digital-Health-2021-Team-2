import "./common/TemplatePage.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";

function maxVal(input, input2) {
  const values = [input, input2];
  const LeftMax = Math.max(...values);
  return LeftMax;
}

function LeftResultInputs() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  return (
    <div className="screen">
      <table style={{ width: "75%" }}>
        <tr>
          <td
            style={{
              textAlign: "left",
              width: "33%",
            }}
          >
            <label className="details">[Patient Name]</label>
          </td>
          <td
            style={{
              textAlign: "center",
              width: "33%",
            }}
          >
            <label className="details">[Date]</label>
          </td>
          <td
            style={{
              textAlign: "right",
              width: "33%",
            }}
          >
            <label className="details">[MR Name]</label>
          </td>
        </tr>
      </table>
      <div className="buttons-section space-between">
        <a href="/GripStrength2" className="back-button">
          &lt;
        </a>
        <label className="title">Results Entry</label>
        <a href="" className="help-button" style={{ backgroundColor: "green" }}>
          ?
        </a>
      </div>

      <div className="main-section">
        <label className="subtitle">Left Hand Results</label>
        <form>
          <table style={{ width: "100%" }}>
            <tr>
              <td
                style={{
                  textAlign: "left",
                  width: "33%",
                }}
              >
                 <label>1st Reading</label>
                <TextField
                  fullWidth
                  id="FirstReading"
                  className="gripInputs"
                  label="Required"
                  type="number"
                  variant="filled"
                  onChange={(event) => setInput1(event.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">kg</InputAdornment>
                    ),
                    inputMode: 'numeric',
                  }}
                />
              </td>
              <td
                style={{
                  textAlign: "center",
                  width: "33%",
                }}
              ></td>
              <td
                style={{
                  textAlign: "right",
                  width: "33%",
                }}
              >
                 <label>2nd Reading</label>
                <TextField
                  id="Second Reading"
                  className="gripInputs"
                  label="Required"
                  type="number"
                  variant="filled"
                  onChange={(event) => setInput2(event.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">kg</InputAdornment>
                    ),
                    inputMode: 'numeric',
                  }}
                />
              </td>
            </tr>
          </table>
          <table style={{ width: "100%" }}>
            <tr>
              <td
                style={{
                  textAlign: "left",
                  width: "33%",
                }}
              ></td>
              <td
                style={{
                  textAlign: "center",
                  width: "33%",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    maxVal(input1, input2);
                  }}
                >
                  Save Maximum Value
                </Button>
              </td>
              <td
                style={{
                  textAlign: "right",
                  width: "33%",
                }}
              ></td>
            </tr>
          </table>
        </form>
      </div>
      <a href="/GripStrength4" className="next-button">
        Next
      </a>
    </div>
  );
}

export default LeftResultInputs;

