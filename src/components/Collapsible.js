import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Collapse from "@material-ui/core/Collapse";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from "@material-ui/core/IconButton";
  
const styles = {
    italic: {
      fontStyle: 'italic',
    },
  };
  
const Collapsible = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Card elevation={0}>
                <CardHeader
                    title={props.title}
                    titleTypographyProps={{ style: styles.italic }}
                    onClick={() => setOpen(!open)}
                    action={
                        <IconButton>
                            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                    }
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