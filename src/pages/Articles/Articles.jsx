import React, { useEffect, useState } from 'react';
import { ArticleService } from "components/Article"
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { toast } from 'react-toastify';
import ReactHtmlParser from "react-html-parser"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  content: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }
}));

export default function Articles() {
  const [articles, setArticlesList] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let data = ArticleService.getAll();
    data.on("value", (snapshot) => {
      const a = snapshot.val();
      const articlesList = [];
      for (let id in a) {
        articlesList.push({
          "id":id,
          "title":a[id].title,
          "body":a[id].body,
          "image":a[id].imageUrl,
        });
      }

      setLoading(false);
      console.log(articlesList);
      setArticlesList(articlesList);
      // setArticlesList(articlesList);
    });
  }, []);

  return (<Container style={{ marginTop: 50, marginBottom: 50 }} maxWidth="md">
    <Grid container justify="center" spacing={4}>
      {
        loading ? <CircularProgress size={24} /> : articles ? articles.map((item, index) => <ArticleCard item={item} key={index} />) : <h1>article list is empty</h1>
      }
    </Grid>
  </Container>)
}




export const ArticleCard = (props) => {
  const itemId = props.item.id;
  const item = props.item;
  const classes = useStyles();

  const handleDelete = () => {
    ArticleService.delete(itemId).then(() => {
      toast.success("article is removed successfully!");
    }).catch(error => toast.error(error.message));
  }

  return (
    <Grid item>
      <Card key={`card${itemId}`} className={classes.root}>
        <CardHeader classes={{ content: classes.content }} title={item.title} />
        <CardMedia className={classes.media} image={item.image} title={item.title}/>
        <CardContent>
          <Typography noWrap variant="body2" color="textSecondary" component="p">
            {ReactHtmlParser(item.body)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button size="small" variant="contained" color="primary">Read More</Button>
          <Button size="small" variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

