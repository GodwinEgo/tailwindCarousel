import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const slides = [
  {
    title: "Slide 1",
    content: "This is the content for slide 1",
  },
  {
    title: "Slide 2",
    content: "This is the content for slide 2",
  },
  {
    title: "Slide 3",
    content: "This is the content for slide 3",
  },
  {
    title: "Slide 4",
    content: "This is the content for slide 4",
  },
];

function FullPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="carousel">
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].content}</p>
      </div>

      <div className="arrow">
        <button onClick={handlePrevSlide}>
          <MdOutlineKeyboardDoubleArrowLeft className="icon1" />
        </button>
        <button onClick={handleNextSlide}>
          <MdOutlineKeyboardDoubleArrowRight className="icon2" />
        </button>
      </div>
    </div>
  );
}

export default FullPage;
