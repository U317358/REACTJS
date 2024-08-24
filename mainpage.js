



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchDataFailure, fetchDataStart, fetchDataSuccess } from '../redux/slice';
import Filtered from './filtered';
import { Link } from 'react-router-dom';

const MainPage = () => {

  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.data);

  

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataStart());
      try {
        const response = await axios.get('http://localhost:4001/products');
        dispatch(fetchDataSuccess(response.data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };

    fetchData();
  }, [dispatch]);




  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
    <Filtered/>
    <ul className="list-group">
      {items.map(item => (
        <li key={item.id} className="list-group-item">
          {item.name}             
          <Link to={`/details/${item.id}`}>
              <button className="btn btn-primary btn-sm">details</button>
            </Link>

        </li>
      ))}
    </ul>
    </div>
  );
};

export default MainPage;


