import Image from "next/image";

const EmptyHeart = () => {
  return (
    <>
      <Image
        src={"/empty-heart.svg"}
        alt="Gray empty heart"
        width={45}
        height={45}
      />
    </>
  );
};

export default EmptyHeart;
