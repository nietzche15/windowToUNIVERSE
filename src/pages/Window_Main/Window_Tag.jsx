import React from 'react';
import { Row, Modal } from 'antd';
import WindowBtn from '../../components/window/WindowBtn';
import { useNavigate } from 'react-router-dom';
import DrawerToggler from '../../components/common/DrawerToggler';
import styled from 'styled-components';
import PaginationImg from '../../components/window/PaginationImg';
import queryString from 'query-string';
import { useSelector } from 'react-redux';

const Toggle = styled.div`
  position: fixed;
  right: 0;
  top: 0;
`;
const { warning } = Modal;

export default function Window_Tag({ posts }) {
  const navigate = useNavigate();
  const user_id = localStorage.getItem('userid');
  const searchTag = useSelector((state) => state.window.searchTag);

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
    <div className="TagFullBox">
      <Toggle>
        <DrawerToggler />
      </Toggle>
      <Row gutter={[15, 15]}>
        {searchTag.length !== 0
          ? searchTag.map((v, i) => <PaginationImg data={v} i={i} key={i} />)
          : posts.length !== 0
          ? posts.map((v, i) => <PaginationImg data={v} i={i} key={i} />)
          : Array(8)
              .fill(0)
              .map((v, i) => <PaginationImg data="" i={i} key={i} />)}
      </Row>
      <div className="TagPageWindowBtn">
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
