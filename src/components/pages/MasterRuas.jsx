import React from 'react';
import TambahData from '../modal/TambahData';
import TabelRuas from '../Tabel/Ruas';

class MasterRuas extends React.Component { 
    state = {
      dataRuas: []
    }
    
    render() { 
      return (
        <div id="page-content-wrapper">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-12">
                      <h1 className="font-weight-bold mb-4">Daftar Ruas</h1>
                      <TambahData/>
                      <TabelRuas
                        lokasi='master'
                      />
                  </div>
              </div>
          </div>
        </div>
        );
    }
}
 
export default MasterRuas;