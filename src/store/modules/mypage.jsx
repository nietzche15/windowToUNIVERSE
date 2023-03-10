// 초기 상태 설정
const initState = {
  mypost: [],
  userInfo: [],
  change: 1,
};

// 액션 타입 설정
const UPDATE = 'mypage/UPDATE';
const INFOCHANGE = 'mypage/INFOCHANGE';
const CHANGE = 'mypage/CHANGE';
const CHANGERESET = 'mypage/CHANGERESET';
const CLEAR = 'mypage/CLEAR';

// 액션 생성 함수 설정
export const update = (data) => ({ type: UPDATE, payload: data });
export const infochange = (data) => ({ type: INFOCHANGE, payload: data });
export const goInfo = (num) => ({ type: CHANGE, payload: num });
export const changeReset = () => ({ type: CHANGERESET });
export const mypageclear = () => ({ type: CLEAR });

// 리듀서 설정
export default function user(state = initState, action) {
  switch (action.type) {
    case UPDATE:
      return { ...state, mypost: action.payload };
    case INFOCHANGE:
      return { ...state, userInfo: action.payload };
    case CHANGE:
      return { ...state, change: action.payload };
    case CHANGERESET:
      return { ...state, change: 1 };
    case CLEAR:
      return {
        mypost: [],
        userInfo: [],
        change: 1,
      };
    default:
      return state;
  }
}
