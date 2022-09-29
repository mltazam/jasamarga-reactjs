import React, {useEffect, useState} from 'react';
import axios from 'axios';
import dateFormat from 'dateformat';
import Button from 'react-bootstrap/Button';
import PreviewGambar from '../modal/PreviewGambar';
import EditData from '../modal/EditData';
import { ThreeDots } from  'react-loader-spinner'
import Pagination from './Pagination';

function TabelRuas({lokasi}){
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10) //7 Per Page
 
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://630c319983986f74a7bb0dc5.mockapi.io/jm/ruas/ruas')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])
 
  if (loading && posts.length === 0) {
    return <ThreeDots/>
  }

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(posts.length/postsPerPage)
   
  //Delate
  const deleteRuas = (id, e) => {
    axios.delete(`https://630c319983986f74a7bb0dc5.mockapi.io/jm/ruas/ruas/${id}`)  
      .then(res => {  
        const dataRuas = this.state.dataRuas.filter(query => query.id !== id);  
        this.setState({ dataRuas });  
      })  
  }  

  let styleAksi;
  if (lokasi=='home') {
      styleAksi = 'hideAksi';
  } else {
      styleAksi = '';
  }
  let no=indexOfFirstPost+1
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th width="2px">No</th>
            <th>Ruas</th>
            <th>Unit Kerja</th>
            <th>Gambar</th>
            <th>Tanggal</th>
            <th className={styleAksi}>Aksi</th>
          </tr>
        </thead>
        <tbody>  
            { 
            currentPosts.map(query => 
              <tr key={query.id}>
                <th scope="row">{no++}</th>
                <td>{query.ruas}</td>
                <td>{query.unit}</td>
                <td>
                  <PreviewGambar urlGambar={query.picture}/>
                </td>
                <td>
                  {dateFormat(query.date_create, "d-mm-yyyy")}
                </td>
                <td className={styleAksi}>
                  <EditData 
                    id={query.id}
                    ruas={query.ruas}
                    unit={query.unit}
                    date_create={dateFormat(query.date_create, "yyyy-mm-dd")}
                  />
                  <Button className="btn-sm btn-danger m-1" 
                      onClick={(e) => {
                        if(window.confirm('Hapus data ini ? '+query.id)){
                          deleteRuas(query.id, e)
                          };
                        }
                      }>
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
              )
          }
        </tbody>
      </table>

      <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage}/>
    </>
  );
}
 
export default TabelRuas;