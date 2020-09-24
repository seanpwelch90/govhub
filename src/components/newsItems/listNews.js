import React, {Component} from 'react';
import { Button, Card, Divider, Row, Spin } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import User from '../../robots/UserRobot';
import Places from '../places/listPlaces';

const { Meta } = Card;

class NewsList extends Component {

    state = {
        newsItems: [],
        isLoading: false
      }

    componentDidMount() {
    this.setState({ isLoading: true })
    axios.get('https://app.gwoodhouse.com/news-items', {
        headers: {
            'Authorization': 'Bearer ' + User.getCurrentUser().jwt
        }
    })
    .then(({ data })=> {
        this.setState({ 
        newsItems: data, 
        isLoading: false
      });
    })
    .catch((err)=> {})
      
    };

  render () {

    const { newsItems, isLoading } = this.state

    if (isLoading) {
      return <Spin />
    } else {

    return (
      <div>
      <Divider>News</Divider>
      <Row>
      {newsItems.map((news) => (
            
            <Card
            hoverable
            style={{ width: 250 }}
            cover={
              <img
                alt="example"
                src={"https://app.gwoodhouse.com" + news.mainImage.formats.medium.url}
              />
            }
            
          >

<Meta
      
      title={news.title}
      description={news.subtitle}
    />
            
          </Card>


                  ))}

          
          </Row>
      

    </div>

    )}
 
    
    // return (
    //   <div>
    //     <MapView />
    //       {places.map((place) => (
            
    //         <div key={place.id} class="card" style={{ margin: '15px' }}>
    //           <div class="card-body">
    //             <h5 class="card-title">{place.label}</h5>
    //             <h6 class="card-subtitle mb-2 text-muted">{place.latitude}</h6>
    //             <p class="card-text">{place.longitude}</p>
                
    //             <Link to={{ pathname: `/edit/${place.id}`, state: { id: place.id} }}>
    //               <Button style={{float: 'right'}} type="primary">Edit</Button>
    //             </Link>
    //             <Link to={{ pathname: '/edit/', state: { id: place.id} }}>
    //               <Button style={{float: 'right'}} type="primary" danger>Delete </Button>
    //             </Link>
                
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    // );
  }
}

export default NewsList;