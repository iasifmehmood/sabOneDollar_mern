import { styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import { bannerData } from "../../data";
import "react-multi-carousel/lib/styles.css";
import React from "react";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 500,

  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 180,
  },
}));

const Banner = () => {
  return (
    <React.Fragment key={bannerData.id}>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        key={bannerData.id}
      >
        {bannerData.map(data => (
          <Image src={data.url} alt="banner" id={data.id} />
        ))}
      </Carousel>
    </React.Fragment>
  );
};

export default Banner;

// import { Typography, useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/system";
// import {
//   BannerContainer,
//   BannerContent,
//   BannerDescription,
//   BannerImage,
//   BannerShopButton,
//   BannerTitle,
// } from "../../styles/banner";

// export default function Banner() {
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <BannerContainer>
//       <BannerImage src="/images/banner/decoration_banner.png" />
//       <BannerContent>
//         <Typography variant="h6">Massive Variety</Typography>
//         <BannerTitle variant={matches ? "h2" : "h1"}>SALE</BannerTitle>

//         <BannerDescription variant="subtitle">
//           Flash sale on now! Get 50% off until Friday, online at sab one dollar.
//           Use discount code x4235 at sabonedollar.pk Text STOP to opt-out.
//         </BannerDescription>

//         <BannerShopButton color="primary">Shop Now</BannerShopButton>
//       </BannerContent>
//     </BannerContainer>
//   );
// }
