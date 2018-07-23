import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'evergreen-ui';

const OsugiButton = styled(Button)`
  background-color: #000;
  color: #fff;
  &:hover {
    background: #dbdbdb;
  }
`

const OButton = () => (
      <OsugiButton>I am using 🌲 Evergreen!</OsugiButton>
)


// const OButton = () => {
//   return (
//       <OsugiButton>I am using 🌲 Evergreen!</OsugiButton>
//   );
// }

// class OButton extends Component {
//   render() {
//     return (
//         <OsugiButton>I am using 🌲 Evergreen!</OsugiButton>
//     );
//   }
// }


export default OButton;
