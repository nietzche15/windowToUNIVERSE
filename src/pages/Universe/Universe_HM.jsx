import React, { useEffect } from 'react';
import '../../components/universe/UniverseViewer.css';
import DrawerToggler from '../../components/common/DrawerToggler';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpFetch } from '../../store/modules/apod';
import { InfinitySpin } from 'react-loader-spinner';
import UniverseBtn from '../../components/universe/UniverseBtn';
import UniverseHMPlayer from '../../components/universe/UniverseHMPlayer';

export default function Universe_HM() {
  const { url } = useSelector((state) => {
    return state.asyncThunk.data;
  });
  const asyncLoading = useSelector((state) => {
    return state.asyncThunk.loading;
  });
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(asyncUpFetch());
  // }, []);

  return (
    <div
      className="Univ_ViewContainer"
      style={{ backgroundImage: `url('${url}')` }}
    >
      <DrawerToggler />
      <UniverseBtn isGame={true} />
      <div className="Univ_loader">
        {asyncLoading && <InfinitySpin width="100" color=" cornflowerblue" />}
      </div>

      {/* <Tooltip title="Go UNIVERSE MAIN">
        <MyBtn
          ghost
          size="large"
          icon={<WestOutlined color="white" />}
          onClick={goPage}
        />
      </Tooltip> */}
      <UniverseHMPlayer />
    </div>
  );
}
