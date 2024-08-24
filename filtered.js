



  import React from 'react';
  import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/slice';
  

  
  const Filtered = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.data.filter);
    const filteredItems = useSelector((state) => state.data.filteredItems);
  
    const handleSearchChange = (event) => {
      dispatch(setFilter(event.target.value));
    };
  
    return (
      <div className="container mt-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={filter}
            onChange={handleSearchChange}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              <i className="glyphicon glyphicon-search"></i> Search
            </button>
          </div>
        </div>
        <ul className="list-group">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <li key={item.id} className="list-group-item">
                {item.name}
              </li>
            ))
          ) : (
            <li className="list-group-item">No items found</li>
          )}
        </ul>
      </div>
    );
  };
  
  export default Filtered;
  