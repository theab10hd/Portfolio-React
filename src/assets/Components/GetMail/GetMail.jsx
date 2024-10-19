import React from "react";
import "./GetMail.css";

const GetMail = () => {
  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us22.list-manage.com/subscribe/post?u=cdc1e6402717c5a64432a8ef4&amp;id=df3b3f47ab&amp;f_id=009fd4e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group input-group">
              <input
                type="email"
                name="EMAIL"
                className="required email form-control"
                id="mce-EMAIL"
                placeholder="Enter your email"
                required
                defaultValue=""
              />
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button btn btn-dark "
                value="Get a mail from Me"
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetMail;
