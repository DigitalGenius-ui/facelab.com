import React from 'react';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import "./Filters.scss";

const Filters = () => {
  return (
    <div className="filter__btn">
        <div className="btn">
          <span><FilterListOutlinedIcon className='icon'/></span>
          <p>filter</p>
        </div>
        <div className="btn">
          <span><FilterAltOutlinedIcon className='icon'/></span>
          <p>sort by</p>
        </div>
    </div>
  )
}

export default Filters