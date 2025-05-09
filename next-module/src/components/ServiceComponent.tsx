import React from 'react';
import Image from 'next/image';

interface ServiceProps {
  title: string;
  description: string;
  image: string;
}
export default function ServiceComponent(props: ServiceProps) {
  const { title, description, image } = props;

  console.log(image, 'image');
  return (
    <div>
      <div className="">{title}</div>
      {/* <Image src={image} alt="ServiceImage" width={100} height={100} /> */}
      <img src={image} />
      <p>image compinent servise</p>
      <p> {description} </p>
    </div>
  );
}
