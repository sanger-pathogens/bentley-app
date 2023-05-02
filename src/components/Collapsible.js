import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Collapse from "@material-ui/core/Collapse";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from "@material-ui/core/IconButton";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({
    cardHeaderAction: {
        margin: "auto"
    }
}));
  
  
const Collapsible = (props) => {
    const [open, setOpen] = useState(false);

    const classes = useStyles()

    return (
        <>
            <Card elevation={0}>
                <CardHeader
                    title={<Typography style={{ fontStyle: 'italic' }} variant={"h5"}>{props.title}</Typography>}
                    onClick={() => setOpen(!open)}
                    action={
                        <IconButton>
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
                    <CardContent>
                        {props.children}
                    </CardContent>
                </Collapse>
            </Card>
        </>
    );
}

export default Collapsible