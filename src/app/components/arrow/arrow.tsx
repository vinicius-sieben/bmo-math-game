"use client";

import Image from "next/image";

interface ArrowProps {
  id: string;
  src: string;
  className: string;
}

const Arrow = ({ id, className, src }: ArrowProps) => {
  const handleArrowClick = () => {
    alert(id);
  };

  return (
    <>
      <div id={id} className={className} onClick={handleArrowClick}>
        <Image src={src} alt="Yellow triangle arrow" width={30} height={30} />
      </div>
    </>
  );
};

export default Arrow;
