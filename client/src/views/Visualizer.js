import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Breadcrumb from '../components/Breadcrumb.js';
import axios from 'axios';

class Visualizer extends Component {
  constructor(props){
    super(props);
    this.state = {
      stocksMaster: [],
      month: '',
      stocks: [
        {symbol: 'Stock 1', data: [], lineColor: '#8884d8'},
        {symbol: 'Stock 2', data: [], lineColor: '#82ca9d'},
        {symbol: 'Stock 3', data: [], lineColor: '#3180fb'}
      ]
    }
  }

  componentDidMount(){
    axios.get('/api/companies')
    .then((r) => {
      this.setState({ stocksMaster: r.data.sort((a, b) => a.symbol.localeCompare(b.symbol)) });
    })
  }

  monthChanged = (e) => {
    let update = this.state.month !== '';
    this.setState({ month: e.target.value });

    if (update) {
      this.state.stocks.map((s, idx) => {
        this.stockChanged(null, idx, s.symbol);
      });
    }
  }

  stockChanged = (e, index, sbl) => {
    let symbol = sbl || e.target.value;
    axios.get(`/api/company/${symbol}/info?month=${this.state.month || 'Jan'}`)
    .then((r) => {
      let stocks = this.state.stocks;
      stocks[index].symbol = symbol;
      stocks[index].data = r.data.map(s => {
        s.date = s.date.split("-")[2];
        return s; //ensure only day is presented
      });
      this.setState(stocks);
    });
  }

  render() {
    return (
      <div>
      <Breadcrumb />
        <nav className="navbar has-shadow is-primary" aria-label="breadcrumbs">
          <b className="navbar-item is-fluid">Stock Visualizer</b>
           <div className="navbar-item is-fluid">
             <div className="select is-rounded" onChange={this.monthChanged}>
               <select defaultValue="Select Month">
                 <option disabled>Select Month</option>
                 <option>January</option>
                 <option>February</option>
                 <option>March</option>
                 <option>April</option>
                 <option>May</option>
                 <option>June</option>
                 <option>July</option>
                 <option>August</option>
                 <option>September</option>
                 <option>October</option>
                 <option>November</option>
                 <option>December</option>
               </select>
             </div>
           </div>
             {
               Array.apply(null, Array(3)).map((i, idx) => {
                 return (
                   <div key={idx} className="navbar-item is-fluid select-stock">
                       <div className="select is-rounded" onChange={ (e) => this.stockChanged(e, idx)}>
                         <select defaultValue="Select Stock">
                           <option disabled>Select Stock</option>
                           {
                             this.state.stocksMaster.map(s => {
                               return <option key={s._id} value={s.symbol}>{`${s.name} (${s.symbol})`}</option>
                             })
                           }
                         </select>
                       </div>
                     </div>
                 );
               })
             }
         </nav>
         <div className="container">
           <br></br>
           <br></br>
           <ResponsiveContainer height={400}>
             <LineChart>
               <XAxis dataKey="date" type="category" allowDuplicatedCategory={false}/>
               <YAxis dataKey="close"/>
               <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
               <Tooltip/>
               <Legend />
               {
                 this.state.stocks.map(s => {
                   return  <Line key={s.symbol} type="monotone" stroke={s.lineColor} name={s.symbol} data={s.data} dataKey="close" />
                 })
               }
             </LineChart>
           </ResponsiveContainer>
         </div>
      </div>
    );
  }
}

export default Visualizer;
