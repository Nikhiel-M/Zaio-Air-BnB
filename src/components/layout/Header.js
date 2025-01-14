import React from "react";
import './Header.css' ;
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';

const Header = () => {
  return (
    <div className="header">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA4CAMAAABnuDDbAAAAbFBMVEX/////REr/P0b/3N3/QUj/Rkz/+vr/SU//6+z/8vL/kpX/5+j/S1H/PUT/UFb/tbf/d3v/1db/sbP/rK7/wcP/l5r/bnL/4uP/oqX/YGX/p6n/VVr/c3f/0NH/hon/fID/Nj3/Zmv/jI//yMmpdqfGAAACKUlEQVRIie1V25arIAwlys0LKtY7Uqv+/z8OoOP0TFvGvpx5mSwXElc2SXYSROhPfl14GL2LGDHG01uoKIU4X0DRNzAFaLNWcD0PkTh27yu0pzEN2TJJ8HQWonG97xYcnsTM7JMwDsVZN92xj086+nJz2pEG5yZqo/OOGjDGbWP6YEyMozPUSTCktYTE5QKMG+pO1KjAkS1Q6+DGRxL82AyhbYEIFqdMjNpmSH7AXLGJhweDU2qg+yk+SbCNhJLdT+qiBf9MxNhlPDtjuhVH3tX4iUTBVsIcKrOWbjUngA8zuLkxHlK1L1ZWyD0Y1e+b3FRpgXXXstkT2lfkTRqzowNieD3kPDiCiJTqD8PBwxyFoxRcZf1huHH+QqZ9qFGbpTlTfFMS8FU1wbOzyyENkSbMcZ30/qJqINchVkHDnXGg6uEKTPogJo84E1B8klyNILL6xHVKPdqvir64V1jzu49t7R279Obumep2fwvom5e5dZvQKrg/WQcvLqywG8KSywqVOh9W0N2QIFqGl06aqlVD9+T6yQVTADImCLO0WTNQRGgqiMqCVWZEMVF9h5g5pmYwwzpDZLK/qwpFc+aaNpukGTo6ku+lkoG2i8VYO5dPhUMwNDaFtPmsD0mFIv8XY7jucOIwk8Pk4iGjnuVrww5MOukLKVCwYdioS/Y44HwWosEyZkgsNp9GiJHSm6F+HqXVmmetyrlpSOoe25qco61D7adN+5P/Lh+8Vx09ZSTsWQAAAABJRU5ErkJggg=="
        alt="Air-BnB logo"
        className="header_logo"
      />
      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <p>Airbnb your home</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
