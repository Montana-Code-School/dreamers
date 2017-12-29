import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Card, CardTitle, CardText,FloatingActionButton} from 'material-ui';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Auth from '../modules/Auth.js'

export default class Dreams extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      journals : []
    };
  }

  callToSomething() {
    axios
      .get('http://localhost:5000/api/journals',
            { headers : { Authorization: `bearer ${Auth.getToken()}` } }
      )
      .then(
        (response) => {
          this.setState({
            journals : response.data
          })
        }
      );
  }


  componentDidMount() {
    this.callToSomething();
  }

  render() {
    return (
      <div>
        Journals
        {
          this.state.journals.map(
            (journal, index) =>
            <Card key={index}>
              <CardTitle title={journal.entryTitle} subtitle={journal.dreamDate}/>
              <CardText>
                {journal.description}
              </CardText>
            </Card>
          )
        }
        <Link to="/NewDream">
         <FloatingActionButton className="fab">
           <ContentAdd />
         </FloatingActionButton>
       </Link>
      </div>
    );
  }
}
