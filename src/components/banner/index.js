import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="/images/banner/decoration_banner.png" />
      <BannerContent>
        <Typography variant="h6">Massive Variety</Typography>
        <BannerTitle variant="h2">SALE</BannerTitle>

        <BannerDescription variant="subtitle">
          Flash sale on now! Get 50% off until Friday, online at sab one dollar.
          Use discount code x4235 at sabonedollar.pk Text STOP to opt-out.
        </BannerDescription>

        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
