import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: 'auto',
      position: 'relative',
      align: 'center',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      maxWidth: '100%',
      marginLeft: '.7rem',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
  }));

  export default function SimpleAccordion(props){
    const classes = useStyles();

  return (
    <div className={classes.root} style={{ color: '#033F63' }}>
      <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography
                    className={classes.heading}
                    style={{ fontWeight: 'bold' }}
                >
                    Invoice no: {props.no} Date/Time: {props.date} Total Price: {props.tprice}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <React.Fragment>
                    {props.itemList
                        && Object.keys(props.itemList).map((key, i) =>
                        <Typography className={classes.heading}>
                            <div>
                                {key} - {props.itemList[key].Name} {" "} Quantity: {props.itemList[key].Quantity} {" "} Cost per piece: {props.itemList[key].Price} {"||"}<br/> 
                            </div>
                        </Typography>
                        )}
                </React.Fragment>
                
            </AccordionDetails>
        </Accordion>
    </div>
    );
  }