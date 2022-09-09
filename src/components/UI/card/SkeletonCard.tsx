import { SkeletonCardStyle } from "./Card.style";

const SkeletonCard = ({ title }: { title: string }) => {
  return <SkeletonCardStyle>{title} </SkeletonCardStyle>;
};

export default SkeletonCard;
