import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import styled from 'styled-components';
import WindowBtn from '../../components/window/WindowBtn';
import './Window_Main.css';
// import { Tooltip as ReactTooltip } from 'react-tooltip';

const getUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json';

const StyledGeography = styled(Geography)`
  fill: #cbcbcb;
  stroke: #ffffff;
  stroke-width: 0.5;
  &:hover {
    fill: #c2cca8;
    outline: none !important;
  }
`;

export default function Window_Map() {
  const navigate = useNavigate();
  return (
    <div>
      <ComposableMap data-tip="">
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
      <div className="shareWindowBtn">
        <WindowBtn
          clickEvent={() => navigate('/window/upload')}
          borderColor="#C2CCA8"
          color="#C2CCA8"
          hoverBackgroundColor="#C2CCA8"
          hoverBorderColor="#ffffff"
          hoverColor="#ffffff"
          text="share your WINDOW"
        />
      </div>
    </div>
  );
}