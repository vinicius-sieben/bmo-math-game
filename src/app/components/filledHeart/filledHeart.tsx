import Image from "next/image";

const FilledHeart = () => {
  return (
    <>
      <Image
        src={"/filled-heart.svg"}
        alt="Gray filled heart"
        width={45}
        height={45}
      />
    </>
  );
};

export default FilledHeart;
