// import CreateIcon from '@mui/icons-material/Create';
import EditIcon from '@mui/icons-material/Edit';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
// import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import QuizIcon from '@mui/icons-material/Quiz';
// import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import GestureIcon from '@mui/icons-material/Gesture';
import MicIcon from '@mui/icons-material/Mic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import PublicIcon from '@mui/icons-material/Public';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
// import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import BrushIcon from '@mui/icons-material/Brush';
import Grid from '@mui/material/Grid';
import PaletteIcon from '@mui/icons-material/Palette';
import SpeakerIcon  from '@mui/icons-material/Speaker';
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";
import "./participants.css";
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
export default function Participants(){

    const data = [
        { event: "Pencil Sketching", link: "/PencilSketch" ,icon: <EditIcon/>},
        { event: "Treasure Hunt", link: "/TreasureHunt" ,icon: <ExploreIcon/> },
        { event: "Cultural & Screening", link: "/CulturalScreening" ,icon: <PublicIcon   /> },
        { event: "Anchoring & Screening", link: "/Anchoring" ,icon: <SpeakerIcon  /> },
        { event: "Dumb Sharades", link: "/DumbSharades" ,icon: <GestureIcon/> },
        { event: "Cooking Without Fire", link: "/Cooking" ,icon: <OutdoorGrillIcon/> },
        { event: "Essay Writing", link: "/EssayWriting" ,icon: <EditIcon/>},
        { event: "Photography", link: "/Photography" ,icon: <CameraAltIcon/>},
        { event: "Anthyakshari", link: "/Anthyakshari",icon: <MusicNoteIcon/> },
        { event: "Painting", link: "/Painting",icon: <PaletteIcon/> },
        { event: "Singing", link: "/Singing" ,icon: <MicIcon/>},
        { event: "Rangoli", link: "/Rangoli" ,icon: <ColorLensIcon/>},
        { event: "Dance", link: "/Dance" ,icon: <DirectionsRunIcon/>},
        { event: "Debate", link: "/Debate" ,icon: <RecordVoiceOverIcon/>},
        { event: "Skit", link: "/Skit" ,icon: <TheaterComedyIcon/>},
        { event: "Quiz", link: "/Quiz" ,icon: <QuizIcon/>},
        { event: "Mehandi", link: "/Mehandi" ,icon: <BrushIcon/>},
        // Add more objects with different event, link, and icon values
      ];


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return(<>
    {/* <h3 style={{color:"black"}}>webpage under construction please dont forget to check out tmr at above 1:00 Pm ist😊😊(●'◡'●)</h3> */}
<Grid container spacing={2} alignItems="center" justifyContent="flex-start" style={{ width: '100%', height: '65vh', padding: '30px 0 0 15px' }}>
  {data.map((item, index) => {
    // Determine if the item is 'Dance', 'Rangoli', or 'Mehandi'
    const isSpecialItem = ['Singing','Rangoli','Dance',].includes(item.event);
    const isSpecialItemtwo = ['Debate','Skit','Quiz'].includes(item.event);
    const displayitemmed = ['Dance','Debate','Skit','Quiz'].includes(item.event);
    // Determine if the item is 'Cooking Without Fire'
    // const isCookingWithoutFire = item.event === 'Cooking Without Fire';

    return (
      <Grid item xs={isSpecialItem ? 4:isSpecialItemtwo?4:6} sm={displayitemmed?2:3} key={index} >
        <Link to={item.link}>
          <Button startIcon={item.icon}
            variant="contained" 
            size={matches ? 'small' : 'large'}
            className="animatedButton"
            sx={{ mb: 2 ,fontFamily:"'Lugrasimo', Arial, sans-serif" }}
             // Add bottom margin to each button
             disabled={item.status === 'inactive'} 
         >
            {item.event}
          </Button>
        </Link>
      </Grid>
    );
  })}
</Grid>
<br/>
  <br/>
  <br/>
    </>)
}