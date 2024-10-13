import satyamevJayteLogo from "../../assets/images/satyamevjayte.jpg";
import govOfIndiaFront from "../../assets/images/aadharCardFront1.jpg";
import aadharLogo from "../../assets/images/Aadhar-Color.svg";
import govOfIndiaBack from '../../assets/images/aadharCardBack1.jpg'

interface AadharCardHeaderProp{
  frontSide: boolean
}

const AadharCardHeader : React.FC<AadharCardHeaderProp> = ({frontSide = true}) => {
  return (
    <div className="aadharCard-details-section-header">
      <img
        src={satyamevJayteLogo}
        draggable={false}
        className="satyamev-jayte-logo"
      />
      <img
        src={frontSide ? govOfIndiaFront : govOfIndiaBack}
        draggable={false}
        className="gov-of-india-logo"
      />
      <img src={aadharLogo} draggable={false} className="aadhar-card-logo" />
    </div>
  );
};

export default AadharCardHeader;
