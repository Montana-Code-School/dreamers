import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {FloatingActionButton,Paper} from 'material-ui';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Auth from '../modules/Auth';
import '../css/App.css'

const moment = require('moment');
const prodUrl = 'https://dreamers-mcs.herokuapp.com/api/journals/userToken';
const devUrl = 'http://localhost:5000/api/journals/userToken';

export default class Dreams extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      journals: []
    }
  }

  componentDidMount() {
    axios.get(
      devUrl,
      {
        headers:{
          authorization: `bearer ${Auth.getToken()}`
        }
      }
    )
    .then((res) => {
      for(var i in res.data) {
        res.data[i].dreamDate = moment(res.data[i].dreamDate).format('dddd' + ', ' + 'MMMM Do YYYY').toString()
      }

      return res
    })
    .then((res) => {
      this.setState({
        journals: res.data
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.journals.map((journal) => {
          return (
            <Paper style={{backgroundColor:'rgba(26, 37, 107, 0.39)'}} zDepth={5}>
              <article>
                <h3 className="dreamTitle">{journal.entryTitle}</h3>
                <p className="dreamDate">{journal.dreamDate}</p>
                <p className="dreamTime">{journal.dreamTime}</p>
                <p className="dreamDes">{journal.description}</p>
              </article>
            </Paper>
          )
        })}
        <Link to="/NewDream">
          <FloatingActionButton className="fab">
            <ContentAdd />
          </FloatingActionButton>
        </Link>
      </div>
    );
  }
}
