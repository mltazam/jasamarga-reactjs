import React from 'react';
import axios from 'axios';
import Chart from '../chart/Show';
import TabelRuas from '../Tabel/Ruas';

class Home extends React.Component { 
    state = {
        dataRuas: []
    }

    componentDidMount() {
        axios.get(`https://630c319983986f74a7bb0dc5.mockapi.io/jm/ruas/ruas`)
          .then(res => {
            const dataRuas = res.data;
            this.setState({ dataRuas });
        })
    }

    render() { 
      return (
        <div id="page-content-wrapper">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-12">
                      <h1 className="font-weight-bold mb-4">Home</h1>
                      <h4 className="font-weight-bold my-3">Chart</h4>
                      <Chart/>
                      <h4 className="font-weight-bold my-3">Image Gallery</h4>
                        <div className="list-group list-group-horizontal scrollImg">
                          { 
                            this.state.dataRuas.map(query => 
                              <img src={query.picture} class="img-thumbnail m-3" alt="Gambar" width="250" height="auto" loading="lazy"></img> 
                              )
                          }
                        </div>
                      <h4 className="font-weight-bold my-3">Table</h4>
                      <TabelRuas
                        lokasi='home'
                      />
                  </div>
              </div>
          </div>
        </div>
        );
    }
}
 
export default Home;