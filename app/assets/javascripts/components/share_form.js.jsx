var ShareContent = React.createClass({
  getInitialState: function() {
    return {
      shares: [],
      showForm: true
    }
  },

  componentDidMount: function() {
    this.getShares();
  },

  getShares: function() {
    var component = this;

    var request = $.ajax({
      url: '/',
      dataType: 'JSON'
    });
    request.done(function(sharesJSON) {
      component.setState({ shares: sharesJSON });
    });
    request.fail(function(xhr, status, error) {
      console.error(xhr, status, error);
    });

  },

  submitForm: function(event) {
    var component = this;

    console.log('You done it.');
    var data = $('form').serialize();
    console.log(data);

    var request = $.ajax({
      type: 'POST',
      url: '/shares',
      data: data,
      dataType: 'JSON'
    });
    request.done(function(newShare) {
      $('form input:text').val('');
      component.getShares();
    });
    request.fail(function(xhr, status, error) {
      console.log(xhr, status, error);
    });
  },

  displayForm: function() {
    if (this.state.showForm) {
      return <ShareForm handleSubmit={this.submitForm} />
    } else {
      return null
    };
  },

  changeFormDisplay: function(event) {
    this.setState({ showForm: !this.state.showForm })
  },

  render: function() {
    var shares = this.state.shares.map(function(share, index) {
      return (
        <Share title={ share.title ? share.title : share.link } link={share.link} />
      );
    });
    return (
      <div>
        {this.displayForm()}
        <p className="ta-c">
          <ShowFormButton handleClick={this.changeFormDisplay} /><br />
          <DisplayHelpButton />
        </p>
        <h3>Recent Shares in your circle:</h3>
        <ul>
          {shares}
        </ul>
      </div>
    )
  }
});

var DisplayHelpButton = React.createClass({
  getInitialState: function() {
    return {
      showHelp: false
    }
  },

  toggleDisplay: function() {
    this.setState({ showHelp: !this.state.showHelp });
  },

  showHelpInfo: function() {
    if (this.state.showHelp) {
      return (
        <p className="ta-c mt-no">
          <em>Example:</em> If you choose the location "apple-party",<br/>
          your link can be found at "sidebox.com/apple-party".
        </p>
        );
    } else {
      return null;
    };
  },

  render: function() {
    return (
      <div className="ta-c">
        <button onClick={this.toggleDisplay}>Show Help</button>
        {this.showHelpInfo()}
        {this.state.showHelp}
      </div>
    )
  }
});

var Share = React.createClass({

  render: function() {
    return (
      <div>
        <li>
          <a href={this.props.link}>
            {this.props.title}
          </a>
        </li>
      </div>
    );
  }
});

var ShowFormButton = React.createClass({
  getInitialState: function() {
    return {
      buttonText: "Hide Form"
    }
  },

  handleClick: function() {
    if (this.state.buttonText == "Hide Form") {
      this.setState({ buttonText: "Show 'New Share' Form"});
    } else {
      this.setState({ buttonText: "Hide Form"})
    };
    this.props.handleClick();
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>
      {this.state.buttonText}</button>
    )
  }
});

var ShareForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.handleSubmit();
  },

  render: function() {
    return (
      <div className="new-share-form">
        <p className="ta-c fz-m fw-b">Choose a location and share your link!<br />
        sidebox.com/...</p>
        <form onSubmit={this.handleSubmit} method="POST" action="/shares">
          <input className="fc-blue" name="share[path]" type="text" placeholder="side box - location:" />
          <input className="fc-blue" name="share[link]" type="text" placeholder="Link:" /><br />

            {/*<p className="ta-c mt-no fc-white">
              <em>Example:</em> If you choose the location <span className="fc-black">"apple-party",</span><br/>
              your link can be found at <span className="fc-black">"sidebox.com/apple-party".</span>
            </p>*/}

          <input type="text" name="share[title]" placeholder="Title: (Optional)" />
          <input type="text" name="share[description]" placeholder="Description: (Optional)" />
        <div className="submitButton">
          <input className="mt-md ta-c" type="submit" value="Create!" />
        </div>
        </form>

      </div>
    );
  }
});

