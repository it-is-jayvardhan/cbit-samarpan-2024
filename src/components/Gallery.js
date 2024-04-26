import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from "../images/img4.jpg";
import { styled } from '@mui/system';
const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: 'auto', // Center the card horizontally
    background: 'linear-gradient(to right, #36EAEF, #6B0AC9)', // Gradient background
  }));
  function ImageView(props){
    return(
        <StyledCard>
                    <CardContent>
        <Typography variant='h4' style={{ 
    fontFamily: '"Pacifico", cursive',
    color: 'white', 
    fontWeight: 'bold', 
    textShadow: '3px 3px 6px #000000, 0 0 0 #000, 2px 2px 0 #000',
    letterSpacing:'0.2em',
    WebkitTextStroke: '1px black'
  }}>
    {props.title}
  </Typography>
        </CardContent>
        <CardMedia
          component="img"
          
          image={props.link}
          alt="Card Image"
          style={{ objectFit: 'cover',width:"100%",height:"100%",padding:"30px 10px 20px 10px" }} // Center the image
        />


      </StyledCard>
    );

  }
export default function Gallery(){
    return(<>
      <div style={{ display:"list-item", justifyContent:"flex-start" }}>
        < ImageView title="Cooking without fire" link="https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/cooking-without-fire/IMG-20240426-WA0002.jpg?raw=true"/>
        <br/>
        < ImageView title="" link="https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/cooking-without-fire/IMG-20240426-WA0003.jpg?raw=true"/>
        <br/>
        < ImageView title="" link="https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/cooking-without-fire/IMG-20240426-WA0004.jpg?raw=true"/>
        <br/>
        < ImageView title="" link="https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/cooking-without-fire/IMG-20240426-WA0005.jpg?raw=true"/>
        <br/>
        < ImageView title="" link="https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/cooking-without-fire/IMG-20240426-WA0006.jpg?raw=true"/>
        <br/>
        < ImageView title="" link="https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/cooking-without-fire/IMG-20240426-WA0010.jpg?raw=true"/>
        <br/>
        < ImageView title="Debate" link="https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/debate/WhatsApp%20Image%202024-04-25%20at%2013.49.20_636ef606.jpg?raw=true"/>
        <br/>
        < ImageView title="Pencil Sketching" link="https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/pencil-sketching/WhatsApp%20Image%202024-04-25%20at%2013.49.48_cb93a9ab.jpg?raw=true"/>
        <br/>
        < ImageView title="Quiz" link="https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/quiz/WhatsApp%20Image%202024-04-25%20at%2013.47.59_f644faa9.jpg?raw=true"/>
        <br/>
        < ImageView title="Treasure Hunt" link="https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/treasure-hunt/WhatsApp%20Image%202024-04-25%20at%2013.46.39_461fd678.jpg?raw=true"/>
        <br/>
        < ImageView title="" link="https://github.com/it-is-jayvardhan/samarpan-2024-gallery/blob/master/treasure-hunt/WhatsApp%20Image%202024-04-25%20at%2013.46.39_739db047.jpg?raw=true"/>
        <br/>
        {/* < ImageView title="" link=""/>
        <br/> */}
        
   
    </div>
    </>)
}