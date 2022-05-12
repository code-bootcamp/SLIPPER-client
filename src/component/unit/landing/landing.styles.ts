import styled2 from "@emotion/styled";
import { styled } from "@mui/material/styles";
import LandingPresenter from "./landing.presenter";
import ButtonBase from "@mui/material/ButtonBase";

export const WrapperOut = styled2.div``;

// landing top
export const WrapperTop = styled2.div`
  width: 100%;
`;
export const Ham = styled2.img`
  position: absolute;
  right: 0;
  width: 100px;
  padding: 10px;
  margin: 30px;
`;
export const MainFlex = styled2.div`
  display: flex;
`;
export const MainImg = styled2.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
export const MainOrange = styled2.div`
  width: 100%;
  height: 100vh;
  background-color: #f69c5a;
  text-align: center;
`;
export const TextBox = styled2.div`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translate(-10%, -50%);
`;
export const MainText = styled2.div`
  font-size: 40px;
  font-weight: 700;
  color: white;
  margin-bottom: 100px;
`;
export const SubText = styled2.div`
  color: white;
  font-size: 20px;
`;
export const Slipper = styled2.img`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// landing bottom
// export const WrapperBottom = styled.div`
//   width: 100%;
//   height: 100vh;
//   background-color: lightgray;
// `;
// export const ImageBox = styled.div`
//   display: flex;
//   height: 100%;
// `;

// export const ButtonBox = styled.div`
//   width: 33.3%;
// `;
export const WriteImage = styled2.img`
  width: 60%;
  display: block;
  margin: 0 auto;
  margin-bottom: 200px;
`;
export const SearchImage = styled2.img`
  width: 60%;
  display: block;
  margin: 0 auto;
  margin-bottom: 150px;

`;
export const MypageImage = styled2.img`
  width: 60%;
  display: block;
  margin: 0 auto;
  margin-bottom: 150px;
`;
export const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  // height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

export const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

export const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

export const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

export const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));
