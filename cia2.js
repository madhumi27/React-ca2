import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ColorChanger() {
  const [clr, setClr] = React.useState("");

  const handleChange = (event) => {
    setClr(event.target.value);
  };
  const Lime=()=>{
    document.getElementById('box').style.background="lime";
  }
  const Lavender=()=>{
    document.getElementById('box').style.background="lavender";
  }
  const Crimson=()=>{
    document.getElementById('box').style.background="crimson";
  }
  const Darkblue=()=>{
    document.getElementById('box').style.background="darkblue";
  }
  const Teal=()=>{
    document.getElementById('box').style.background="teal";
  }
  const RebeccaPurple=()=>{
    document.getElementById('box').style.background="rebeccapurple";
  }
  const GhostWhite=()=>{
    document.getElementById('box').style.background="ghostwhite";
  }
  const AquaMarine=()=>{
    document.getElementById('box').style.background="aquamarine";
  }
  const AliceBlue=()=>{
    document.getElementById('box').style.background="aliceblue";
  }


  return (
    <div  className="all">
    
    <div className="Drop_down">
   <h1 sx={{textAlign:"Center"}}>Color Changer</h1>
      <FormControl fullWidth>
        <InputLabel >Select</InputLabel>

        <Select value={clr} label="Color" onChange={handleChange}>

          <MenuItem value={10} onClick={Lime}>Lime</MenuItem>
          <MenuItem value={20} onClick={Lavender}>Lavender</MenuItem>
          <MenuItem value={30} onClick={Crimson}>Crimson</MenuItem>
          <MenuItem value={40} onClick={Darkblue}>Darkblue</MenuItem>
          <MenuItem value={50} onClick={Teal}>Teal</MenuItem>
          <MenuItem value={60} onClick={RebeccaPurple}>RebeccaPurple</MenuItem>
          <MenuItem value={70} onClick={GhostWhite}>GhostWhite</MenuItem>
          <MenuItem value={80} onClick={AquaMarine}>AquaMarine</MenuItem>
          <MenuItem value={90} onClick={AliceBlue}>AliceBlue</MenuItem>

        </Select>
        
      </FormControl>
    
    </div>

    <div className="box" id="box">

    </div>
    

    </div>
  );
}