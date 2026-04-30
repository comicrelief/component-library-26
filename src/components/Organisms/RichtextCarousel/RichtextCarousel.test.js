import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import RichtextCarousel from './RichtextCarousel';
const { RichtextCarouselItems } = require('../../../styleguide/data/data');

it('renders correctly', () => {
  const tree = renderWithTheme(
    <RichtextCarousel data={RichtextCarouselItems} />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      text-align: center;
    }

    .c0 {
      height: 100%;
      background: #FFFFFF;
      max-width: 760px;
      padding: 2.5rem 2rem 3.5rem;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: rgba(0,0,0,0.15) 0px 0px 1rem;
    }

    .c0 .carousel {
      position: relative;
      margin: 0 auto;
      padding-top: 2rem;
    }

    .c0 .carousel button.carousel__back-button,
    .c0 .carousel button.carousel__next-button {
      position: absolute;
      left: 0;
      top: 0;
      width: 33%!important;
      height: 100%;
      padding: 0!important;
      box-shadow: none;
      text-indent: -9999px;
      background-color: transparent;
      border: none;
    }

    .c0 .carousel button.carousel__back-button:after,
    .c0 .carousel button.carousel__next-button:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      transition: opacity 0.2s linear;
      background: linear-gradient(90deg,#FFFFFF,#FFFFFF7a,#FFFFFF00);
    }

    .c0 .carousel button.carousel__back-button:hover:after,
    .c0 .carousel button.carousel__next-button:hover:after {
      opacity: 0.5;
    }

    .c0 .carousel button.carousel__next-button {
      left: auto;
      right: 0;
    }

    .c0 .carousel button.carousel__next-button:before {
      transform: translate(0,-50%) rotate(-90deg);
    }

    .c0 .carousel button.carousel__next-button:after {
      left: auto;
      right: 0;
      background: linear-gradient(90deg,#FFFFFF00,#FFFFFF7a,#FFFFFF);
    }

    .c0 .carousel .richtext-carousel {
      transition: -webkit-transform 0.75s;
      -o-transition: transform 0.75s;
      transition: transform 0.75s;
      -webkit-transform: 0.75s;
      will-change: transform;
    }

    .c0 .carousel .richtext-carousel .last-slide .slide-copy-wrapper:after {
      content: none;
    }

    .c0 .carousel .richtext-carousel .carousel__slide {
      padding-bottom: 300px!important;
    }

    .c0 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide {
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
    }

    @media (min-width: 740px) {
      .c0 .carousel button.carousel__back-button,
      .c0 .carousel button.carousel__next-button {
        width: 33.3%!important;
      }

      .c0 .carousel button.carousel__back-button:after,
      .c0 .carousel button.carousel__next-button:after {
        width: 100%;
      }
    }

    @media (min-width: 740px) {
      .c0 .carousel .richtext-carousel .carousel__slide {
        padding-bottom: 350px!important;
      }

      .c0 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide >div:first-child {
        transition: transform 0.75s ease;
        transform-origin: center;
        transform: scale(0.8);
      }

      .c0 .carousel .richtext-carousel .carousel__slide .carousel__inner-slide >div:first-child:after {
        transition: transform 0.75s ease,width 0.75s ease,right 0.75s ease;
        width: 100%;
        right: calc(-100% - 6px);
        transform: scale(1);
      }

      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible .carousel__inner-slide >div:first-child:after {
        width: 33%;
        right: calc(-33% - 3px);
        transform: scale(1);
      }

      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible +.carousel__slide--visible .carousel__inner-slide >div:first-child {
        transform: scale(1);
      }

      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible +.carousel__slide--visible .carousel__inner-slide >div:first-child:after {
        width: 33%;
        right: calc(-33% + 3px);
        transform: scale(0.8);
      }

      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible +.carousel__slide--visible +.carousel__slide--visible >div>div:first-child {
        transform: scale(0.8);
      }

      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible +.carousel__slide--visible +.carousel__slide--visible >div>div:first-child:after {
        width: 50%;
        right: calc(-50% - 6px);
        transform: scale(1);
      }
    }

    @media (min-width: 1024px) {
      .c0 .carousel .richtext-carousel .carousel__slide {
        padding-bottom: 350px!important;
      }

      .c0 .carousel .richtext-carousel .carousel__slide.carousel__slide--visible +.carousel__slide--visible +.carousel__slide--visible .carousel__inner-slide >div:first-child:after {
        right: calc(-125% - 5px);
        width: 125%;
      }
    }

    <div
      carouselBackgroundColour="white"
      className="c0 CarouselWrapper"
      desktopHeight={350}
      id="nqIEHjiYE8Yd2A2a5cI3O"
      mobileHeight={300}
      tabletHeight={350}
    >
      <div
        className="c1"
      >
        Some heading copy that will be nicely constructed in-situ
      </div>
    </div>
  `);
});
