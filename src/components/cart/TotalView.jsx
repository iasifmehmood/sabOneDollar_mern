import { useState, useEffect } from "react";

import { Box, Typography, styled } from "@mui/material";
import { useCallback } from "react";
import GroupedButton from "./GroupButton";

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  borderbottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

const Price = styled(Typography)`
  float: right;
`;

const TotalAmount = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  border-top: 1px dashed #e0e0e0;
  padding: 20px 0;
  border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
  font-size: 16px;
  color: green;
`;

// component: {
//     // width: '30%'
// },

const TotalView = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const totalAmount = useCallback(() => {
    let price = 0,
      discount = 0;
    let amount = cartItems.map(item => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  }, [cartItems]);

  useEffect(() => {
    totalAmount();
  }, [cartItems, totalAmount]);

  return (
    <Box>
      {" "}
      {/* className={classes.component}> */}
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
        <Typography>
          Price ({cartItems?.length} item)
          <Price component="span">Rs:{price}</Price>
        </Typography>
        <Typography>
          Discount
          <Price component="span">-Rs:{discount}</Price>
        </Typography>
        <Typography>
          Delivery Charges
          <Price component="span">Rs:40</Price>
        </Typography>
        <TotalAmount>
          Total Amount
          <Price>Rs:{price - discount + 40}</Price>
        </TotalAmount>
        <Discount>You will save Rs:{discount - 40} on this order</Discount>
      </Container>
    </Box>
  );
};

export default TotalView;

// import { Typography, Box } from "@mui/material";

// const TotalView = ({ cartItems }) => {
//   return (
//     <Box>
//       <Box>
//         <Typography>Price details</Typography>
//       </Box>
//       <Box>
//         <Typography>Price {cartItems.length} item</Typography>
//       </Box>
//     </Box>
//   );
// };

// export default TotalView;
