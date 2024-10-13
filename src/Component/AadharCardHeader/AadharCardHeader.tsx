import satyamevJayteLogo from "../../assets/images/satyamev jayte.png";
import govOfIndiaFront from "../../assets/images/aadhar card front.svg";
import aadharLogo from "../../assets/images/Aadhar-Color.svg";
import govOfIndiaBack from '../../assets/images/aadhar card back.svg'

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
