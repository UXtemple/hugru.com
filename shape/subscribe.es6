import React from 'react';

export default function Subscribe(props) {
  return (
    <div id="mc_embed_signup">
      <form action="//uxtemple.us6.list-manage.com/subscribe/post?u=fe72821aee40cd0a966ce0927&amp;id=95ac2cb41f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
      <div id="mc_embed_signup_scroll">
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">Email Address </label>
          <input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL" style={{height: 100}} />
        </div>

        <input type="hidden" value={props.pattern} name="PATTERN" />
        <input type="hidden" value={props.shape} name="SHAPE" />

        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
          <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
        </div>
        <div style={{position: 'absolute', left: -5000}}><input type="text" name="b_fe72821aee40cd0a966ce0927_95ac2cb41f" tabindex="-1" value="" /></div>
        <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
        </div>
      </form>
    </div>
  );
}
