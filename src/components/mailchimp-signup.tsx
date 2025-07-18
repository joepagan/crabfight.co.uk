"use client"

export default function MailchimpSignup() {
  return (
    <section id="newsletter" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div id="mc_embed_shell">
          <div id="mc_embed_signup" className="max-w-md mx-auto">
            <form 
              action="https://crabfight.us5.list-manage.com/subscribe/post?u=88ff09011cb83ac647a094902&amp;id=b24fef60c8&amp;f_id=0075bcedf0" 
              method="post" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              className="validate" 
              target="_self"
            >
              <div id="mc_embed_signup_scroll" className="space-y-6">
                <div className="text-center">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-heading">
                    Join The <span className="text-primary">Fight</span>
                  </h2>
                </div>
                
                <div className="mc-field-group">
                  <label 
                    htmlFor="mce-EMAIL" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address <span className="asterisk text-primary">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="EMAIL" 
                    className="required email w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" 
                    id="mce-EMAIL" 
                    required 
                    defaultValue=""
                    placeholder="your@email.com"
                  />
                </div>
                
                <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                  <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                </div>
                
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                  <input type="text" name="b_88ff09011cb83ac647a094902_b24fef60c8" tabIndex={-1} defaultValue="" />
                </div>
                
                <div className="optionalParent">
                  <div className="clear foot space-y-4">
                    <input 
                      type="submit" 
                      name="subscribe" 
                      id="mc-embedded-subscribe" 
                      className="button w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer" 
                      value="Subscribe"
                    />
                    <p className="text-center m-0">
                      <a 
                        href="http://eepurl.com/jjw4w-" 
                        title="Mailchimp - email marketing made easy and fun"
                        className="inline-block"
                      >
                        <span className="inline-block bg-transparent rounded border border-border/20 hover:border-border/40 transition-colors">
                          <img 
                            className="refferal_badge" 
                            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" 
                            alt="Intuit Mailchimp" 
                            style={{width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center'}}
                          />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 