import * as S from "./landing.styles";
import * as React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

const images = [
  {
    src: "/image/writebutton.png",
    title: "Breakfast",
    width: "33.3%",
  },
  {
    src: "/image/searchbutton.png",
    title: "Burgers",
    width: "33.3%",
  },
  {
    src: "/image/mypagebutton.png",
    title: "Camera",
    width: "33.3%",
  },
];

export default function LandingPresenter() {
  return (
    <S.WrapperOut>
      <S.WrapperTop>
        <S.Ham src="/image/ham.png"></S.Ham>
        <S.Slipper src="/image/slipper.png"></S.Slipper>
        <S.MainFlex>
          <S.MainImg src="/image/test.jpeg"></S.MainImg>
          <S.MainOrange>
            <S.TextBox>
              <S.MainText>"슬리퍼가 대신 다녀올게."</S.MainText>
              <S.SubText>
                이사가는 곳 동네 인프라를 이제는 슬리퍼로 알아보세요!
              </S.SubText>
            </S.TextBox>
          </S.MainOrange>
        </S.MainFlex>
      </S.WrapperTop>
      {/* <S.WrapperBottom>
        <S.ImageBox>
          <S.ButtonBox>
            <S.WriteImage src="/image/writebutton.png"></S.WriteImage>
          </S.ButtonBox>
          <S.ButtonBox>
            <S.SearchImage src="/image/searchbutton.png"></S.SearchImage>
          </S.ButtonBox>
          <S.ButtonBox>
            <S.MypageImage src="/image/mypagebutton.png"></S.MypageImage>
          </S.ButtonBox>
        </S.ImageBox>
      </S.WrapperBottom> */}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
          height: "100vh",
        }}
      >
        {/* {images.map((image) => ( */}
        <S.ImageButton
          focusRipple
          // key={image.title}
          key={"Breakfast"}
          style={{
            width: "33.3%",
          }}
        >
          <S.WriteImage src="/image/writebutton.png"></S.WriteImage>
          <S.ImageBackdrop className="MuiImageBackdrop-root" />
          <S.Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {"내돈 내삶!"}
              <S.ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </S.Image>
        </S.ImageButton>

        <S.ImageButton
          focusRipple
          // key={image.title}
          key={"Burgers"}
          style={{
            width: "33.3%",
          }}
        >
          <S.SearchImage src="/image/searchbutton.png"></S.SearchImage>
          <S.ImageBackdrop className="MuiImageBackdrop-root" />
          <S.Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {"어떤 곳이 궁금한가요?"}
              <S.ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </S.Image>
        </S.ImageButton>

        <S.ImageButton
          focusRipple
          // key={image.title}
          key={"Camera"}
          style={{
            width: "33.3%",
          }}
        >
          <S.MypageImage src="/image/mypagebutton.png"></S.MypageImage>
          <S.ImageBackdrop className="MuiImageBackdrop-root" />
          <S.Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {"내 정보"}
              <S.ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </S.Image>
        </S.ImageButton>
        {/* ))} */}
      </Box>
    </S.WrapperOut>
  );
}
