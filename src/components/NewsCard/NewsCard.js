import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Link } from 'react-router-dom';
import { newsContext } from '../../contexts/NewsContext';

const useStyles = makeStyles({
    root: {
        maxWidth: "95%",
        marginTop: "5vh",
        marginBottom: "5vh"
    },
    media: {
        height: "40vh",
    },
});

export default function NewsCard(props) {
    const classes = useStyles();
    const { addToFavourites, checkNewsInFavourites } = useContext(newsContext);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {
                            props.description
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions style={{ justifyContent: 'space-between' }}>
                <div>
                    <Link to={`/news-details/${props.id}`}>
                        <Button size="small" style={{ color: "orange" }}>
                            Читать подробнее
                    </Button>
                    </Link>
                    <Button onClick={() => addToFavourites({ news_id: props.id, title: props.title, image: props.image, description: props.description, date: props.date })} size="small" style={{ color: "orange" }}>
                        <BookmarkIcon style={{ color: checkNewsInFavourites(props.id) ? "green" : "orange" }} />
                    </Button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ScheduleIcon style={{ color: 'orange', marginRight: '5px' }} />
                    <Typography color="textSecondary" component="span">
                        {
                            props.date
                        }
                    </Typography>
                </div>
            </CardActions>

        </Card>
    );
}
