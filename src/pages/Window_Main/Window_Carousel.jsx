import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
import './Window.css';
import GlobalStyle from '../../components/common/GlobalStyle';
import CarouselChange from '../../components/window/CarouselChange';
import queryString from 'query-string';
import { BsFillPencilFill, BsFillTrashFill, BsX } from 'react-icons/bs';
import { back, userId } from '../../store/modules/window';

export default function Window_Carousel({ posts }) {
  const num = useSelector((state) => state.window.carouselNum);
  const searchTag = useSelector((state) => state.window.searchTag);
  const dispatch = useDispatch();

  return (
    <div>
      <GlobalStyle />
      <div className="iconBox">
        <div onClick={() => dispatch(back())} className="backBtn">
          <BsX className="icon" color="#fff" size="30" />
        </div>

        {/* {user_id === true ? (
          <div className="iconBoxChild">
            <BsFillPencilFill className="icon" color="#fff" size="20" />
            <div className="trashIcon">
              <BsFillTrashFill className="icon" color="#fff" size="20" />
            </div>
          </div>
        ) : (
          true
        )} */}
      </div>
      <Carousel
        showArrows={false}
        indicators={false}
        autoPlay={false}
        navButtonsAlwaysVisible={true}
        index={num}
      >
        {searchTag.length !== 0
          ? searchTag.map((v, i) => <CarouselChange data={v} i={i} key={i} />)
          : posts.map((v, i) => <CarouselChange data={v} i={i} key={i} />)}
      </Carousel>
    </div>
  );
}
