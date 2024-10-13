import "./AadharCard.css";
import aadharUserImg from "../../assets/images/aadharUserPhoto.jpg";
import qrCodeImg from "../../assets/images/qr code.png";
import AadharCardHeader from "../AadharCardHeader/AadharCardHeader";
import AadharCardFooter from "../AadharCardFooter/AadharCardFooter";
import { useEffect, useRef, useState } from "react";

interface AadharCardProps {
  name?: string;
  dob?: string;
  gender?: string;
  number?: string;
  profilePic?: string;
  width?: number;
  address?: string;
  frontSide?: boolean;
  backSide?: boolean;
  rotate?: boolean;
}
const AadharCard: React.FC<AadharCardProps> = ({
  name = "YOUR NAME HERE",
  dob = "06/03/2000",
  gender = "Male",
  number = "1234 5678 4321",
  profilePic = aadharUserImg,
  width = 500,
  address = "7th Floor, MTNL Exchange, GD Somani Marg, Cuff Parade, Colaba, Mumbai - 400 005",
  frontSide = true,
  backSide = false,
  rotate = true,
}) => {
  const [cardWidth, setCardWidth] = useState(width < 350 ? 350 : width);
  const [height, setHeight] = useState(200);
  const aadharCard = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heightVal = cardWidth / (16 / 11);
    setHeight(heightVal);
  }, [cardWidth]);

  useEffect(() => {
    if (frontSide && aadharCard.current) {
      aadharCard.current.style.transform = "rotateY(0deg)";
    }
    if (backSide && aadharCard.current) {
      aadharCard.current.style.transform = "rotateY(180deg)";
    }
  }, [frontSide, backSide, aadharCard]);

  const handleMouseEnter = () => {
    if (aadharCard.current && rotate) {
      if (frontSide) {
        aadharCard.current.style.transform = "rotateY(180deg)";
      }
      if (backSide) {
        aadharCard.current.style.transform = "rotateY(0deg)";
      }
    }
  };

  const handleMouseLeave = () => {
    if (aadharCard.current && rotate) {
      if (frontSide) {
        aadharCard.current.style.transform = "rotateY(0deg)";
      }
      if (backSide) {
        aadharCard.current.style.transform = "rotateY(180deg)";
      }
    }
  };

  return (
    <div
      className="aadharCard-wrapper"
      style={{ width: `${cardWidth}px`, height: `${height}px` }}
      ref={aadharCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aadharCard-front">
        <div className="aadharCard-details-wrapper">
          <div className="aadharCard-details-section">
            <AadharCardHeader frontSide={true} />
            <div className="aadharCard-details-section-body">
              <div className="aadharCard-details-section-body-wrapper">
                <img
                  src={profilePic}
                  draggable={false}
                  className="aadharCard-details-section-user-img"
                ></img>
                <div className="aadharCard-details-section-body-user-data">
                  <div className="user-data-text">{name}</div>
                  <div className="user-data-text">DOB : {dob}</div>
                  <div className="user-data-text">{gender}</div>
                </div>
                <div className="qr-code-wrapper">
                  <img
                    src={qrCodeImg}
                    draggable={false}
                    className="aadharCard-details-section-qr-code"
                  />
                </div>
              </div>
              <div className="aadharCard-details-section-body-bottom">
                {number}
              </div>
            </div>
          </div>
        </div>
        <AadharCardFooter frontSide={true} />
      </div>
      <div className="aadharCard-back">
        <div className="aadharCard-details-wrapper">
          <div className="aadharCard-details-section">
            <AadharCardHeader frontSide={false} />
            <div className="aadharCard-details-section-body">
              <div className="aadharCard-back-details-section-body-wrapper">
                <div className="aadharCard-back-user-address">
                  <span style={{ fontWeight: "bold" }}>Address:</span> <br />
                  {address}
                </div>
                <div className="aadharCard-back-qr-code-wrapper">
                  <img
                    src={qrCodeImg}
                    draggable={false}
                    className="aadharCard-back-details-section-qr-code"
                  />
                </div>
              </div>
              <div className="aadharCard-details-section-body-bottom">
                {number}
              </div>
            </div>
          </div>
        </div>
        <AadharCardFooter frontSide={false} />
      </div>
    </div>
  );
};

export default AadharCard;
