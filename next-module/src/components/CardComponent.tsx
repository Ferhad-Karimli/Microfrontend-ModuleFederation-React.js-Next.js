// import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  image?: string | undefined;
  text: string;
}

export default function CardComponent(props: CardProps) {
  const { title, image, text } = props;
  return (
    <div>
      <p>{title}</p>
      <p>{text}</p>
      {/* <Image alt="cardImage" src={image} width={100} height={100} /> */}
    </div>
  );
}
