import styled from "@emotion/styled";
import { Menu, Dropdown, Button } from "antd";
import { useMovetoPage } from "../hooks/movePage";

const HamMenu = styled.div`
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const HamIcon = styled.img`
  width: 70px;
  height: 70px;
`;

export default function Ham() {
  const { onClickMoveToPage } = useMovetoPage();

  const menu = (
    <Menu
      items={[
        {
          label: (
            <HamMenu onClick={onClickMoveToPage("/login")}>로그인</HamMenu>
          ),
        },
        {
          label: (
            <HamMenu onClick={onClickMoveToPage("/mypage")}>마이페이지</HamMenu>
          ),
        },
        {
          label: (
            <HamMenu onClick={onClickMoveToPage("/myboards")}>
              내가 쓴 글
            </HamMenu>
          ),
        },
        {
          label: (
            <HamMenu onClick={onClickMoveToPage("/payment")}>
              이용권 결제
            </HamMenu>
          ),
        },
      ]}
    />
  );

  return (
    <>
      {/* <Dropdown overlay={menu} placement="bottom" arrow> */}
      {/* <Dropdown overlay={menu} arrow> */}
      <Dropdown overlay={menu}>
        <HamIcon src="/image/ham.png" />
        {/* <Button>bottom</Button> */}
      </Dropdown>
    </>
  );
}
