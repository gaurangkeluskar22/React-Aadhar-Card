import envelope from "../../assets/images/envelope.svg";
import internet from "../../assets/images/internet.svg";
import telephone from "../../assets/images/telephone.svg";
import "./AadharCardFooter.css";

interface AadharCardFooterProp {
  frontSide: boolean;
}

const AadharCardFooter: React.FC<AadharCardFooterProp> = ({
  frontSide = true,
}) => {
  return (
    <div className="aadharCard-bottom-section">
      {frontSide ? (
        <div className="aadharCard-botton-section-text">
          <span className="red-color">आधार</span> - आम आदमी का अधिकार
        </div>
      ) : (
        <div className="aadharCard-back-bottom-section">
          <div className="aadharCard-bottom-section-wrapper">
            <img src={telephone} className="aadharCard-bottom-section-icons" />
            1947
          </div>
          
          <div className="aadharCard-bottom-section-wrapper">
            <img src={envelope} className="aadharCard-bottom-section-icons" />
            help@uidai.gov.in
          </div>
          
          <div className="aadharCard-bottom-section-wrapper">
            <img src={internet} className="aadharCard-bottom-section-icons" />
            www.uidai.gov.in
          </div>
        </div>
      )}
    </div>
  );
};

export default AadharCardFooter;
