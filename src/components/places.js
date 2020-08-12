import React, {Component} from 'react';

class Places extends Component {

    state = {
        places: []
      }

    componentDidMount() {
    fetch('https://app.gwoodhouse.com/places')
    .then(res => res.json())
    .then((data) => {
        this.setState({ places: data })
    })
    .catch(console.log)
    }    

  render () {
    return (
      // JSX to render goes here...
    );
  }
}

export default Places;