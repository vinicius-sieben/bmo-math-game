import Image from "next/image";

interface OperationIconProps {
  src: string;
}

const OperationIcon = ({ src }: OperationIconProps) => {
  return (
    <>
      <Image src={src} alt="" width={50} height={50} />
    </>
  );
};

export default OperationIcon;
