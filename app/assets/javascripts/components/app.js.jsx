var Content = React.createClass({

  render: function() {
    return (
      <div className="main-content">
        <ShareForm />
      </div>
    );
  }
});

$(function() {
  React.render(
    <Content />,
    document.querySelector('#content')
  );
  $('form input:first-child').focus();
});
