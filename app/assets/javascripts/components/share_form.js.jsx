var ShareForm = React.createClass({

  render: function() {
    return (
      <form>
        <input className="fc-blue" type="text" placeholder="side box location:" />
        <input className="fc-blue" type="text" placeholder="Link:" /><br />

          <p className="ta-c mt-no fc-grey">
            <em>Example:</em> If you choose the location "apple-party",<br/>
            it can be found at "sidebox.com/apple-party".
          </p>

        <input type="text" placeholder="Title: (Optional)" />
        <input type="text" placeholder="Description: (Optional)" />
      </form>
      // <h1>Form</h1>
    );
  }
});
