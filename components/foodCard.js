import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";

const FoodCard = ({title, text, action}) => {
  return (
    <div id="card-wrapper">
      <Card raised>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{action}</Button>
        </CardActions>
      </Card>
      <style jsx>{`
        #card-wrapper {
          margin-bottom: 30px
        }
      `}</style>
    </div>
  );
};

export default FoodCard;
