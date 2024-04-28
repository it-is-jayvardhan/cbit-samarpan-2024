import React from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme,createTheme ,ThemeProvider } from '@mui/material/styles';
import "./table.css";
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
              backgroundColor: '#c4e7ff', // Light blue background for even rows
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


  function createData(date, timeSlots, events,coordinatorsOne,coordinatorsTwo,links) {
    return { date, timeSlots, events,coordinatorsOne,coordinatorsTwo,links };
  }
  
  const rows = [
    createData('24/04/2024', ['10.00-11.30 AM', '12.00-01.00 PM','2.00-03.00 PM','3.00-04.00 PM'], ['1.PENCIL SKETCHING', '2.PAINTING', '3.DEBATE', '4.ESSAY WRITING'],['PROF.MONISH NV(CV)','PROF.NARAYANA SWAMY (CV)','DR.DEEPIKA LOKESH(AIML)','DR.VASUDEVA R(CSE)'],['PROF.SAMSON J (ECE)','PROF.LALITHA (CSE)','PROF.JAGADISH GM (ECE)','PROF.EASWARA M (ECE)'],[{href:"https://forms.gle/oP8ign8j7PX1Z7WY8", text:"Pencil Sketch Link"},{href:"https://forms.gle/LZsQBko6rk74KcS89", text:"Painting Link"},{href:"https://forms.gle/yaa2MDgCiB3ifiDG9", text:"Debate Link"},{href:"https://forms.gle/r55CcAna2N4eqAmk9",text:"Essay Writing Link"}]),
    createData('25/04/2024', ['10.00-11.30 AM'], ['5.COOKING WITHOUT FIRE'],['PROF.ASHWINI(PHY)'],['PROF.MANJULA S(CSE)'],[{href:"https://forms.gle/oU8BuD7D6Z4bCutEA", text:"Cooking Without Fire"}]),
    createData('25/04/2024', [ '12.00-01.00 PM'], [ '6.QUIZ'],['PROF.SATISH M S (ME)'],['PROF.PRAVEEN (CSE)'],[{href:"https://forms.gle/u5LyJxq7Xp9cM7aE6", text:"Quiz Link"}]),
    createData('25/04/2024', ['2.00-04.00 PM'], [ '7.TREASURE HUNT'],['PROF.SANDEEP SN (ME)'],['PROF.RAJA(CSE)','PROF.PAVITHRA (MAT)'],[{href:"https://forms.gle/vdzMsvF4yXhxPDpo8", text:"Treasure Hunt"}]), 
    createData('29/04/2024', ['10.00-11.30 AM', '12.00-01.00 PM', '2.00-04.00 PM'], ['8.PHOTOGRAPHY', '9.DUMB-SHARADES', '10.SINGING(SOLO&GROUP)'],['PROF.SUJANI G (ECE)','PROF.SARIKA C G(CSE)','PROF.SMITHA R (CV)'],['PROF.SRIKANTH KT(ME)','PROF.BINDHU(ECE)','PROF.SUKUMAR BS (ECE)'],[{href:"https://forms.gle/cTkBJ6SB61pV3GS69", text:"Photography"},{href:"https://forms.gle/tPg7pEwXNmmMp7zW6", text:"DUMB SHARADES"},{href:"https://forms.gle/oYfj4g2JdgRGd7ar7", text:"Singing(solo&Group)"}]),
    createData('30/04/2024', ['11.30-12.30 PM'], ['11.SKIT'],['PROF.NARAYANASWAMY H (AIML)'],['PROF.MANJUNATH SINGH(CSE)'],[{href:"https://forms.gle/XykgaZCdtEB9sMjq5", text:"Skit link"}]),
    createData('30/04/2024', [ '2.00-4.00 PM'], [ 'ANCHORING SCREENING'],['DR G K VENKATESH (ECE)'],['PROF.KAVYA S (ECE)','PROF.EASWARA M (ECE)'],[{href:"https://forms.gle/QY1FYwkyZ79FSv228", text:"Anchoring & Screening"}]),
    createData('30/04/2024', [ '2.00-4.00 PM'], [ '12.DANCE(SOLO&GROUP)'],['PROF.KAVYA S (ECE)'],['PROF.KAVITHA N(CSE)','PROF.VANITHA(PHY)'],[{href:"https://forms.gle/jaRsdU7GKJ9BnVqj6", text:"Dance(solo&group)"}]),
   
    createData('02/05/2024', ['10.00-11.30 AM'], ['13.RANGOLI'],['PROF.CHAITRA(MAT)'],['PROF.VANITHA(CSE)'],[{href:"https://forms.gle/5XbVYXTBvq294eMP8", text:"Rangoli Link"}]),
    createData('02/05/2024', [ '12.00-01.00 PM'], [ '14.MEHANDI'],['PROF.SWATHI J A (CSE)'],['PROF.KRITHIKA(CSE)'],[{href:"https://forms.gle/zJHBymAQvJNnVEY79", text:"Mehandi Link"}]),
    createData('02/05/2024', [ '2.00-04.00 PM'], [ 'CULTURAL SCREENING'],['PROF.BHANUPRAKASH(MAT)'],['Basic Science Dept'],[{href:"https://forms.gle/7GMaAMWuzA8zNWhR6", text:"Cultural Screening link"}]),
    
    createData('03/05/2024', ['10.00-1.00 PM'], ['SAMARPAN INAGURATION'],['PROF.CHOWDA REDDY (ME)'],['PROF.KAVYA S (ECE)'],[{}]),
    createData('03/05/2024', ['10.00-12.00 PM'], ['ANTHAKSHARI'],['PROF.MANJULA SS (CSE)'],['PROF.VIDHYA (ME)'],[{href:"https://forms.gle/NuKSLVG72DwFn9aF9",text:"Anthyakshari Reg link"}]),
    createData('03/05/2024', [ '2.00-4.00 PM'], [ 'MR&MRS ETHNIC (ETHNIC DAY)'],['PROF.VEDHAVATHY RP(CV)'],['PROF.THANUJA PN (BIO)','PROF.ASHOK BABU(AIML)'],[{}]),
    
    // ... add more rows as needed
  ];
  
  export default function StyledListTable() {
    const classes = useStyles();
  
    return (
      <ThemeProvider theme={tableTheme}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow className='header'>
              <TableCell className={classes.header}>DATE</TableCell>
              <TableCell className={classes.header}>TIME</TableCell>
              <TableCell className={classes.header}>EVENTS</TableCell>
              <TableCell className={classes.header}>CO-ORDINATOR INCHARGE</TableCell>
              <TableCell className={classes.header}> ASSOCIATE CO-ORDINATOR </TableCell>
              <TableCell className={classes.header}>REGISTRATION LINK</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.date} className={classes.row}>
                <TableCell className={classes.cell}>{row.date}</TableCell>
                <TableCell className={classes.cell}>
                  <ul className={classes.list}>
                    {row.timeSlots.map((item, index) => (
                      <li key={index} className={classes.timeItem}>{item}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell className={classes.cell}>
                  <ol className={classes.list}>
                    {row.events.map((item, index) => (
                      <li key={index} className={classes.listItem}>{item}</li>
                    ))}
                  </ol>
                </TableCell>
                <TableCell className={classes.cell}>
                  <ol className={classes.list}>
                    {row.coordinatorsOne.map((item, index) => (
                      <li key={index} className={classes.listItem}>{item}</li>
                    ))}
                  </ol>
                </TableCell>
                <TableCell className={classes.cell}>
                  <ol className={classes.list}>
                    {row.coordinatorsTwo.map((item, index) => (
                      <li key={index} className={classes.listItem}>{item}</li>
                    ))}
                  </ol>
                </TableCell>
                <TableCell className={classes.cell}>
          <ol className={classes.list}>
            {row.links.map((link, index) => (
              <li key={index} className={classes.listItem}>
                <a href={link.href} target="_blank" rel='noreferrer'>{link.text}</a>
              </li>
            ))}
          </ol>
        </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </ThemeProvider>
    );
  }