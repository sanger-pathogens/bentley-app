import React, { useState } from "react";
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from "@mui/material/IconButton";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';


const useStyles = makeStyles(() => ({
    cardHeaderAction: {
        margin: "auto"
    }
}));
  
  
const Collapsible = (props) => {
    const [open, setOpen] = useState(false);

    const classes = useStyles()

    return <>
        <Card>
            <CardHeader
                title={<Typography style={{ fontStyle: 'italic' }} variant={"h5"}>{props.title}</Typography>}
                onClick={() => setOpen(!open)}
                action={
                    <IconButton size="large">
                        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                }
                avatar={
                    <Avatar 
                        src={props.logo}
                        style={{ width: '100px', height: '100px' }}
                    />
                }
                classes={{
                    action: classes.cardHeaderAction
                }}
            ></CardHeader>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <CardContent style={{textAlign: 'justify'}}>
                    {props.children}
                </CardContent>
            </Collapse>
        </Card>
    </>;
}

export default Collapsible