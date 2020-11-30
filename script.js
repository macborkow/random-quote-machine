const QUOTES = [
{ author: 'geoff mangum', quote: 'i love you jesus christ' },
{ author: 'still jeff', quote: 'jesus christ i love you' },
{ author: 'yep it\'s jeff', quote: 'yes i do' }];


class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '' };

    this.change = this.change.bind(this);
  }
  componentDidMount() {
    this.change();
  }
  change() {
    let temp = Math.floor(Math.random() * QUOTES.length);
    this.setState(state => ({
      quote: QUOTES[temp].quote,
      author: QUOTES[temp].author }));

  }
  render() {
    return (
      React.createElement("div", { id: "quote-box", style: { textAlign: 'center', border: 'solid 2px black', width: '20%', margin: 'auto' } },
      React.createElement("h1", { id: "text" }, "\"", this.state.quote, "\""),
      React.createElement("h2", { id: "author" }, this.state.author),
      React.createElement("button", { id: "new-quote", onClick: this.change }, "New quote"),
      React.createElement("br", null),
      React.createElement("a", { id: "tweet-quote", href: "https://twitter.com/intent/tweet", target: "_blank" }, "tweet")));


  }}
;

ReactDOM.render(React.createElement(Presentational, null), document.getElementById('root'));