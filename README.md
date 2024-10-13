
# React-Aadhar-Card
## A slick aadhar card component for React.

<img src="https://github.com/gaurangkeluskar22/React-Aadhar-Card/blob/master/src/assets/images/demo.gif?raw=true" width="500px"/>
<img src="https://githubusercontent.com/gaurangkeluskar22/React-Aadhar-Card/raw/master/src/assets/images/image.png" width="500px">

### Install

```
npm install react-aadhar-card
```
### Usage

```tsx
import AadharCard from "react-aadhar-card";
import "./App.css";
import profileImg from "./assets/profilephoto.jpeg";

function App() {
  return (
    <>
      <AadharCard
        name="Gaurang Baburao Keluskar"
        dob="06/03/2000"
        gender="Male"
        profilePic={profileImg}
        number='7224 5674 2993'
        width={450}
      />
    </>
  );
}

export default App;
```


## Props

- `name` {string}: Name on Aadhar card. 
- `dob` {string}: DOB on Aadhar card. 
- `gender` {string}: Gender of user. 
- `number` {string}: Aadhar card number. 
- `profilePic` {string}: Profile image of user. 
- `width` {number}: Width of aadhar card in px unit.
- `address` {string}: Address of user.
- `frontSide` {boolean}: true if front side need to be show to the user.
- `backSide` {boolean}: true if the back side needs to be shown to the user.
- `rotate` {boolean}: the card will rotate 180° when the user hovers over the Aadhaar card.




