import { useForm, ValidationError } from "@formspree/react";
import { styled } from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_APP_FORM_KEY);
  if (state.succeeded) {
    return (
      <Wrapper>
        <p>Thanks for getting in touch!</p>
        <FavoriteBorderIcon />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2 className="page-h2">Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="subject">Subject</label>
        <input id="subject" type="text" name="subject" required />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Let me know what you wanna talk about!"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="button primary"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 5px;
  }
  form {
    width: 500px;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    input {
      border: none;
      border-bottom: 1px solid black;
      margin-bottom: 5px;
      padding: 4px;
    }
    textarea {
      height: 100px;
      margin: 10px 0;
      padding: 10px;
    }
  }
  @media (max-width: 900px) {
    form {
      width: 400px;
    }
  }
  @media (max-width: 700px) {
    width: 100vw;
    form {
      width: 90%;
      margin: 0 auto;
    }
  }
  @media (max-width: 500px) {
    height: auto;
    width: 90vw;
  }
`;

export default Contact;
