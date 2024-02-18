import { GroupInput, GroupTextarea } from '@components/compound';
import { Button } from '@components/primitive';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const CommentForm = () => {
  return (
    <div className="ks-blog-comment-form">
      <div className="wrapper">
        <h1 className="title">Leave A Reply </h1>
        <p className="comment-note">
          <span className="email-note">Your email address will not be published. </span>
          <span className="require-field-message">Required fields are marked </span>
          <span className="require">*</span>
        </p>
        <div className="form col-12 col-lg-12">
          <GroupTextarea
            placeholder="Comment"
            textareaClassName="ks-blog-field"
            name="comment"
            fadePlaceholderShown
          />
        </div>
        <div className="form  col-md-4 col-lg-4 col-sm-12">
          <GroupInput
            type="text"
            placeholder="Your Name *"
            className="author"
            fadePlaceholderShown
          />
          <GroupInput
            type="text"
            placeholder="Email Address *"
            className="email"
            fadePlaceholderShown
          />
          <GroupInput type="text" placeholder="Your Website" className="url" fadePlaceholderShown />
        </div>
        <FormGroup className="checkbox">
          <FormControlLabel
            control={<Checkbox size="small" color="default" />}
            className="icon"
            label="Save my name, email, and website in this browser for the next time I comment"
          />
        </FormGroup>
        <Button
          variant="outlined"
          endAdornment={<i className="fa-solid fa-chevron-right icon"></i>}
          color="primary"
          className="button"
        >
          Post Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentForm;
