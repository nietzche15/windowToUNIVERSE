import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  ComposableMap,
  Geographies,
  Geography,
  // Marker,
  // ZoomableGroup,
} from 'react-simple-maps';
import styled from 'styled-components';
import WindowBtn from '../../components/window/WindowBtn';
import './Window.css';
import { Switch, Space, Modal } from 'antd';
import GlobalStyle from '../../components/common/GlobalStyle';
import { switching } from '../../store/modules/window';
import DrawerToggler from '../../components/common/DrawerToggler';
// import { Tooltip as ReactTooltip } from 'react-tooltip';

const getUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json';

const StyledGeography = styled(Geography)`
  fill: #797284;
  stroke: #ffffff;
  stroke-width: 0.1;
  &:hover {
    fill: #c2cca8;
    outline: none !important;
  }
`;
const { warning } = Modal;

export default function Window_Map({ viewBox }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userid');
  // console.log('user_id', user_id);

  const btnClick = () => {
    if (user_id === null) {
      warning({
        title: '로그인이 필요합니다!',
        content: '버튼을 누르면 로그인 페이지로 이동합니다.',
        onOk() {
          navigate('/user/signin');
        },
      });
    } else {
      navigate('/window/upload');
    }
  };

  return (
    <div>
      <GlobalStyle />
      <DrawerToggler />
      <div className="switchCss">
        <Space direction="vertical">
          <Switch
            checkedChildren="Map"
            unCheckedChildren="Tag"
            defaultChecked
            onClick={() => {
              navigate('/window/tag');
              dispatch(switching());
            }}
          />
        </Space>
      </div>
      <div className="mapCss">
        <ComposableMap data-tip="" viewBox={viewBox}>
          <Geographies geography={getUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <StyledGeography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() =>
                    navigate(`/window/tag?country=${geo.properties.name}`)
                  }
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>

      <div className="shareWindowBtn">
        <WindowBtn
          clickEvent={btnClick}
          borderColor="#C2CCA8"
          color="#C2CCA8"
          backgroundColor="#ffffffac"
          hoverBackgroundColor="#C2CCA8"
          hoverBorderColor="#ffffff"
          hoverColor="#ffffff"
          fontSize="1.5em"
          height="auto"
          text="share your WINDOW"
        />
      </div>
    </div>
  );
}
