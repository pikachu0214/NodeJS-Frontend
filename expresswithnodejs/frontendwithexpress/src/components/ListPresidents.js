import React, { Component } from 'react';

class ListPresidents extends Component {
    state = {
        data: []
    }
    componentDidMount(){
        fetch('/api/presidents')
            .then(res => res.json())
            .then(data => this.setState({
                data
            }));
    };
    //getPresidents = () => {
      //  fetch('http://localhost:5000/api/presidents')
       // .then(req => req.json())
        //.then(res => this.setState({
          //  data: res })); console.log(this.state.data); };
    render() {
        const president = this.state.data.map(d => 
            <ul key={d.id}>
                <li>{d.firstName} {d.lastName}</li>
            </ul>
            );
        return (
            <div>
                <h1>List of Previous Famous Presidents</h1>
                <h3>{president}</h3>
            </div>
        );
    }
}

export default ListPresidents;