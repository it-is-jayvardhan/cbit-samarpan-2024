import { Typography } from "@mui/material";
import ListTable from "./table";
export default function  Registration(){
    return(
        <div>
            {/* <h1>Event Calendar</h1> */}
            <Typography variant="h4" style={{ 
  fontFamily: '"Feast of Flesh BB", cursive',
  color: 'white', 
  fontWeight: 'bold', 
  textShadow: '4px 4px 8px #000000',
  letterSpacing:'0.2em',
//   WebkitTextStroke: '1px black'
}}>
            Event Calendar
            </Typography>
            <ListTable/>
        </div>
    );
}