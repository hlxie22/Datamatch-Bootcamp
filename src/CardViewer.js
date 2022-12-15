import React from 'react';

class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardIndex: 0, sideFront: true };
  }

  nextCard = () => {
    if (this.state.cardIndex < this.props.cards.length - 1) {
      this.setState({ 
        cardIndex: this.state.cardIndex + 1, 
        sideFront: true 
      });
    }
  }

  prevCard = () => {
    if (this.state.cardIndex > 0) {
      this.setState({ 
        cardIndex: this.state.cardIndex - 1, 
        sideFront: true 
      });
    }
  }
  
  flipCard = () => {
    this.setState({ sideFront: !this.state.sideFront });
  }
  
  render() {
    const card = this.props.cards[this.state.currentIndex][
      this.state.displayFront ? 'front' : 'back'
    ];

    return (
      <div>
        <h2>Card Viewer</h2>
        Card {this.state.currentIndex + 1} out of {this.props.cards.length}.
        <div className="card" onClick={this.flipCard}>
          {card}
        </div>
        <br />
        <button
          disabled={this.state.currentIndex === 0}
          onClick={this.prevCard}
        >
          Prev card
        </button>
        <button
          disabled={this.state.currentIndex === this.props.cards.length - 1}
          onClick={this.nextCard}
        >
          Next card
        </button>
        <hr />
        <Link to="/editor">Go to card editor</Link>
      </div>
    );
  }
}

export default CardViewer;