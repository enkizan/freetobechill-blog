'use client'

import React, { useState } from 'react';
import { urlFor } from '@/lib/urlFor'
import Image from 'next/image'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  UncontrolledCarousel,
} from 'reactstrap';
import ClientSideRoute from './ClientSideRoute';

type CarouselProps = {
  carouselPosts: Post[]
}

function ReactStrapCarousel({ carouselPosts }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  carouselPosts = carouselPosts.slice(0, 4)

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === carouselPosts.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? carouselPosts.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = carouselPosts.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.slugCurrent}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}

      >
        <ClientSideRoute route={`/post/${item.slugCurrent}`} key={item.slugCurrent}>
          {item.mainImage && (
            <Image
              className='
                w-full
                h-full
                lg:object-center
                object-cover
                object-center
                '
              src={urlFor(item.mainImage).url()}
              // width={200}
              // height={200}
              alt={item.authorName}
              fill={true}
            />
          )}

          <div className='
                  absolute 
                  bottom-40

                  flex 
                  flex-col 
                  justify-center
                  items-center
                  w-full
                  h-40
                  

                  bg-opacity-30 
                  bg-stone-100
                  backdrop-brightness-50 
                  rounded 
                  drop-shadow-md

                  text-slate-50
                  shadow-black
                  text-shadow-md

                  p-16
                  sm:p-5 
                  '>
            {/* <p className='

            text-xl
            sm:text-l 
            font-semibold 
            subpixel-antialiased
            
            px-3'>{item.title}</p> */}

            <div className='
            text-xl
            sm:text-l 
            font-semibold
            line-clamp-2
            indent-8
            subpixel-antialiased


            hover:scale-105
            transition-transform 
            duration-200 
            ease-out
            px-3
            '
            >{item.description}
            </div>

          </div>


        </ClientSideRoute>

      </CarouselItem>
    );
  });



  return (
    <div className='mx-14' >
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
      </style>

      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={5000}
        // slide={false}
        fade={true}
        enableTouch={true}
      >
        <CarouselIndicators
          items={carouselPosts}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
          className='
          '
        />
        {slides}
        <CarouselControl
          className='
          bg-slate-500 
          bg-opacity-10 
          opacity-5
          hover:opacity-50
          hover:bg-opacity-50
          hidden
          '
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          className='
          bg-slate-500 
          bg-opacity-10 
          opacity-5
          hover:opacity-50
          hover:bg-opacity-50
          hidden
          '
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>


    </div>
  );
}

export default ReactStrapCarousel;