import React,{useState} from "react";
import { toast } from "react-toastify";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "components/Button";
import { ArticleService } from "components/Article";
import { useForm } from "react-hook-form";
import { Editor } from '@tinymce/tinymce-react';

export default function AddArticle() {
  const { register, errors, reset, handleSubmit } = useForm();
  const [body,setBody] = useState("");
  const onSubmit = article => {
    article.body = body;
    console.log(article);
    ArticleService.create(article)
      .then(() => toast.success("article is added successfully!"))
      .catch(error => console.log(error));
  };

  const handleEditorChange = (content, editor) => {
    setBody(content)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} style={{ marginTop: 16 }}>
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
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginRight: 8 }}
          >
            Submit
          </Button>
          <Button variant="contained" type="reset" onClick={reset}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
