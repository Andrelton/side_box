var ShareForm = React.createClass({

  render: function() {
    return (
      <div className="new-share-form">
        <p className="ta-c fz-m fw-b">Choose a location and share your link!<br />
        sidebox.com/...</p>
        <form>
          <input className="fc-blue" type="text" placeholder="side box location:" />
          <input className="fc-blue" type="text" placeholder="Link:" /><br />



          <input type="text" placeholder="Title: (Optional)" />
          <input type="text" placeholder="Description: (Optional)" />
        </form>
            <p className="ta-c fc-white">
              <em>Example:</em> If you choose the location <span className="fc-black">"apple-party",</span><br/>
              your link can be found at <span className="fc-black">"sidebox.com/apple-party".</span>
            </p>

      </div>
    );
  }
});
