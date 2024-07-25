import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
//1. parent App component which renders QuoteBox which is a child component 
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div class="main">
        <QuoteBox/>
      </div>
    );
  }
}
//2. quote data 
const quotesList = [{text: 'To live is the rarest thing in the world. Most people exist, that is all.', author: ' – Oscar Wilde' }, 
                   {text: 'That it will never come again is what makes life so sweet.', author: '– Emily Dickinson'},
                   {text: 'It is never too late to be what you might have been.', author: '– George Eliot'},
                   {text: 'Pain is inevitable. Suffering is optional.', author: '– Haruki Murakami'},
                   {text: 'Be kind, for everyone you meet is fighting a hard battle.', author: '– Plato'},
                   {text: 'Let me live, love, and say it well in good sentences.', author: '– Sylvia Plath'},
                   {text: 'Self-awareness and self-love matter. Who we are is how we lead.', author: '– Brene Brown'}];

//3. Child Component QuoteBox
class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotesList[0]
    }
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }
  handleNewQuote() {
    this.setState({
      quote: quotesList[Math.floor(Math.random()*quotesList.length)]
    });
  }
  render() {
    return(
      <div id="quote-box">
        <p id="text">{this.state.quote.text}</p>
        <h2 id="author">{this.state.quote.author}</h2>
        <div class="buttons">
          <button id="new-quote" class="button" onClick={this.handleNewQuote}>new quote</button>
          <a  id="tweet-quote" href="https://twitter.com/intent/tweet" target="_top">tweet</a>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));