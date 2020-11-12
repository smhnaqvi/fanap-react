import React,{useState} from "react";
import { toast } from "react-toastify";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "components/Button";
import { ArticleService } from "components/Article";
import { useForm } from "react-hook-form";
import { Editor } from '@tinymce/tinymce-react';
import {storage} from 'services/firebase'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  articleImage:{
    height:"200px",
    objectFit: 'content',
  }
}));

export default function AddArticle() {
  const { register, errors, reset, handleSubmit } = useForm();
  const [body,setBody] = useState("");
  const [image,setImage] = useState(null);
  const [articleImageUrl,setArticleImageUrl] = useState({imageUrl:null,isUploaded:false});
  const [loading, setLoading] = React.useState(false);


  const onSubmit = article => {
    if(!!image === false){
      toast.error("select image");
      return;
    }

    setLoading(true);
    const uploadTask = storage.ref(`articles/${image.name}`).put(image);
    uploadTask.on("state_chnaged",snapshot=>{},error=>{console.log(error)},() => {
      storage.ref("articles").child(image.name).getDownloadURL().then(url=>{
        setArticleImageUrl({
          imageUrl:url,
          isUploaded:true,
        });
        article.body = body;
        article.imageUrl = url;
        console.log(article);
        ArticleService.create(article)
          .then(() => toast.success("article is added successfully!"))
          .catch(error => toast.error(error.message));
          setLoading(false);
      })
    })
  };

  const handleEditorChange = (content, editor) => {
    setBody(content)
  }


  const handelFile = e => {
    const file = e.target.files[0];
    if(file){
      console.log("file is selected:",file)
      setImage(file);
      setArticleImageUrl({
        imageUrl:URL.createObjectURL(file),
        isUploaded:false,
      })
    }else{
      toast.warn("please select article image cover");
    }
  }

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} style={{ marginTop: 16 }}>
      <Grid item xs={12}>
         <img src={articleImageUrl.imageUrl} className={classes.articleImage}/>
      </Grid>
      <Grid item xs={12}>
          <input
          accept="image/*"
            name="cover"
            label="cover"
            defaultValue=""
            variant="outlined"
            onChange={handelFile}
            type="file"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="title"
            label="Title"
            defaultValue=""
            variant="outlined"
            fullWidth
            inputRef={register({
              required: "Title is required",
              maxLength: {
                value: 250,
                message: "Title must be less than 250 characters"
              }
            })}
            error={!!errors.title}
            helperText={!!errors.title && errors.title.message}
          />
        </Grid>
        <Grid item xs={12}>
          <Editor
           name="body"
           label="Body"
            helperText={!!errors.body && errors.body.message}
            inputRef={register({ required: "Body is required" })}
            error={!!errors.body}
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help'
            }}
            onEditorChange={handleEditorChange}
       />
        </Grid>
        <Grid item xs={12}>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            loading={loading}
          >submit</Button>
        </Grid>
      </Grid>
    </form>
  );
}
