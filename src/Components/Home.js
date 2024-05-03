import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";
import slide1 from '../Images/slide1.jpg'
import slide2 from "../Images/slide2.jpg";
import slide3 from "../Images/slide3.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import { FaIconName } from 'react-icons/fa';



import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import "./Home.css";

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && "page"}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
};

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  
  return (
    <div>
      
      
      <Carousel autoplay>
                <div>
                    <img src={slide1} alt="slide1" />
                </div>
                <div>
                <img src={slide2} alt="slide2" />
                </div>
                <div>
                <img src={slide3} alt="slide3" />
                </div>
            </Carousel>

      <div className="card1">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PBLdAB0V2XffU8-K_irAjXcBrOwq18GtHA&usqp=CAU"
          alt="inventory"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            INVENTORY
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Effortlessly manage inventory details and stock levels in one convenient location
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="data:image/jpeg;base64,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"
          alt="dashboard"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DASHBOARD
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Access key metrics and insights to make informed decisions and drive growth
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirx0fkaZo3-kRguox8BSdwG9qXazSqPtf0S9RzEqx9aKnrLux7AzLZBpMaImY_GPqteU&usqp=CAU"
          alt="profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PROFILE
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Personalize your experience and manage account settings with ease.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
    </div>
  );
}