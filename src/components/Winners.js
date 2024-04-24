import  {  useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme,createTheme ,ThemeProvider } from '@mui/material/styles';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import "../components/table.css"
const SHEET_ID="1Ew8DnIdPGH3hYMVAbAodUa_d0BmpCK4GmP7coAyxO28";
const APIKEY = "AIzaSyAGlO1an1E5OexMPgebcp9t2C_coUEphHs";
//table styling
const useStyles = makeStyles(() =>{
    const theme=useTheme();
    return {
        table: {
            minWidth: 650,
            [theme.breakpoints.down('sm')]: {
              minWidth: 300, // Adjust table size for small devices
            },
          },
          header: {
            fontWeight: 'bold', // Make the text bold
            backgroundColor: '#0099ff', // Header background color
            color: ' #ffffff', // Header text color
            // Add additional styling for bold color appearance
            textShadow: '1px 1px 2px black',
          },
          cell: {
            border: '1px solid #e0e0e0',
            color:'',
            [theme.breakpoints.down('sm')]: {
              padding: '8px', // Adjust cell padding for small devices
            },
          },
          list: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
            fontFamily:'Jersey 15',
            
          },
          listItem: {
            padding: '2px 0',
            margin:0,
            fontFamily:'Jersey 15',
            // borderBottom:'1px solid black'
          },
          timeItem:{
            padding: '2px 0',
            margin:0,
            fontFamily:'Jersey 15',
            // borderBottom:'1px solid black',
            width:'105px',
          },
          row: {
            '&:nth-of-type(odd)': {
              backgroundColor: '#FFFFFF', // White background for odd rows
              color: 'black', // Black text for odd rows
            },
            '&:nth-of-type(even)': {
              backgroundColor: '#9ded91', // Light blue background for even rows
              color: 'white !important', // White text for even rows
            },
            '&:hover': {
              backgroundColor: '#FFA500', // Orange background when hovered
              color: 'black', // White text when hovered
            },
          },

    }
   
  });
  
  const tableTheme = createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily: '"Jersey 15", Arial, sans-serif',
            fontSize:'16px',
            color:'black'
          }
        }
      }
    }
  });


export default function Winners(){
    const classes = useStyles();
    const [data,setData]=useState([]);
    useEffect(() => {
        async function fetchData() {
            try{
                const doc=new GoogleSpreadsheet(SHEET_ID,{apiKey:APIKEY});
           
            await doc.loadInfo();
            // console.log(doc.title);
            const firstSheet=doc.sheetsByIndex[0];
            // console.log()
            // console.log(firstSheet);
            const rows = await firstSheet.getRows();
            // console.log(rows);
            // alert(rows);

            //displaying values of cells
            const mappedData = rows.map(row => ({
              timestamp: row._rawData[0],
              name: row._rawData[1],
              usn: row._rawData[2],
              sem: row._rawData[3],
              branch: row._rawData[4],
              event:row._rawData[5],
              position:row._rawData[6],
             
              }));
              setData(mappedData);
              // console.log(mappedData);

           
            }catch(error){
                alert(error);
                
            }
            
        
          }
       fetchData();
        
      }, []);
    return(<>
    <ThemeProvider theme={tableTheme}>
    <Typography variant="h4" style={{ 
  fontFamily: '"Feast of Flesh BB", cursive',
  color: 'white', 
  fontWeight: 'bold', 
  textShadow: '4px 4px 8px #000000',
  letterSpacing:'0.2em',
//   WebkitTextStroke: '1px black'
}}>
            Winners
            </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
          <TableRow className='header'>
            <TableCell className={classes.header}>Sl.no</TableCell>
              <TableCell className={classes.header}>NAME</TableCell>
              <TableCell className={classes.header}>USN</TableCell>
              <TableCell className={classes.header}>SEM</TableCell>
              <TableCell className={classes.header}>BRANCH</TableCell>
              <TableCell className={classes.header}>EVENT</TableCell>
              <TableCell className={classes.header}>POSITION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data.map((item, index) => (

    <TableRow key={index} className={classes.row}>
      <TableCell className={classes.cell}>{index + 1}</TableCell>
      <TableCell className={classes.cell}>{item.name}</TableCell>
      <TableCell className={classes.cell}>{item.usn}</TableCell>
      <TableCell className={classes.cell}>{item.sem}</TableCell>
      <TableCell className={classes.cell}>{item.branch}</TableCell>
      <TableCell className={classes.cell}>{item.event}</TableCell>
      <TableCell className={classes.cell}>{item.position}</TableCell>
    </TableRow>
  
  ))}
          </TableBody>
        </Table>
      </TableContainer>
      </ThemeProvider>
    </>)
}