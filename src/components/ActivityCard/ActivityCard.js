import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: "40%",
        marginTop: "5vh"
    },
    media: {
        height: "40vh",
    },
    link: {
        textDecoration: "none",
        color: "orange",
        fontSize: "16px"
    }
});

export default function ActivityCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description.slice(0, 200) + "..."}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link className={classes.link} to={props.link}>
                    <Button size="small" className={classes.link}>
                        Подробнее
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}