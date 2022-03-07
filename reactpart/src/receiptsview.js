import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Receipts from './receipts';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: 'auto',
      position: 'relative',
      align: 'center',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      maxWidth: '100%',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
  }));

  export default function SimpleAccordion() {
    const classes = useStyles();

    /*Get API Call for digital receipts*/
    const [isLoading, setIsLoading] = React.useState(true);
    const [LoadedReceipts, setLoadedReceipts] = React.useState([]);
    React.useEffect(() => {
        fetch('http://127.0.0.1:8000/reciepts')
        .then((response) => response.json())
        .then((json) => {
            setLoadedReceipts(json);
        });
    },[]);
    console.log(LoadedReceipts);
    return (
        <div className={classes.root} style={{ color: '#033F63' }}>
        <Grid xs={12} align="center">
            <h1>Receipts Overview</h1>
        </Grid>
        {LoadedReceipts.map((data,key) => {
            return(
                <div>
                    <Receipts 
                    no = {key + 1} 
                    itemList={data.itemList} 
                    date = {data.dateTime} 
                    tprice = {data.total_price}/>
                </div>
                );
            })}
        
    </div>
    );
}