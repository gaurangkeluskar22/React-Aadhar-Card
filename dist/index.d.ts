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
declare const AadharCard: React.FC<AadharCardProps>;

export { AadharCard as default };
