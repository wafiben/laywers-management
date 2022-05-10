import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core/";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
/*   */
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function CardCase() {
    const classes=useStyles()
  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase component="span" name="test" className={classes.cardAction}>
        <CardMedia component="img" className={classes.media} />

        <div className={classes.overlay}>
          {/* <Typography variant="h6">{post && post.price} dt</Typography> */}
          <Typography variant="body2">
           {/*  {moment(post.createdAt).fromNow()} */}
           date 
          </Typography>
        </div>
        <div className={classes.overlay2}></div>
        <div className={classes.details}>
          <Typography variant="h6" color="textSecondary">
            title
          </Typography>
        </div>
        <CardContent>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
         descreption
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="secondary">
          <DeleteIcon fontSize="small" />
          &nbsp;Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardCase;
