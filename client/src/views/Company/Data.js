import React, { Component } from 'react';
import axios from 'axios';

class CompanyData extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // axios.get(`/api/company/${this.props.match.params.symbol}`)
    // .then((r) => {
    //   this.setState({ company: r.data });
    // })
  }

  render() {
    let c = this.props.company;
    return (
      <div className="columns">
        data screen
      </div>
    );
  }
}

export default CompanyData;
