import React from "react";

import { Link } from "react-router-dom";

const Card = ({ images, name, desc, price, rating }) => {
  return (
    <Link to={name} className="shadow-md rounded-md w-1/4 h-full">
      <img src={images} alt={name} />
      <div className="mx-4 my-3">
        <div className="text-[25px] font-medium">{name}</div>
        <div className="text-[14px] leading-5 mt-2">{desc}</div>
        <div className="text-[18px] mt-4 text-[#060E1A] font-semibold">
          {price}
        </div>
        <div className="flex items-center gap-x-2">
          <svg
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2"
          >
            <g clip-path="url(#clip0_58_176)">
              <path
                d="M11.5538 0.632812C11.3606 0.246094 10.9523 0 10.5038 0C10.0554 0 9.65072 0.246094 9.45384 0.632812L7.10957 5.28398L1.87416 6.0293C1.43666 6.09258 1.07207 6.38789 0.937178 6.79219C0.802282 7.19648 0.911657 7.64297 1.2252 7.9418L5.02416 11.5664L4.12728 16.6887C4.05436 17.1105 4.23666 17.5395 4.59759 17.7891C4.95853 18.0387 5.43614 18.0703 5.82989 17.8699L10.5075 15.4617L15.1851 17.8699C15.5788 18.0703 16.0564 18.0422 16.4174 17.7891C16.7783 17.5359 16.9606 17.1105 16.8877 16.6887L15.9872 11.5664L19.7861 7.9418C20.0997 7.64297 20.2127 7.19648 20.0742 6.79219C19.9356 6.38789 19.5747 6.09258 19.1372 6.0293L13.8981 5.28398L11.5538 0.632812Z"
                fill="#FFE600"
              />
            </g>
            <defs>
              <clipPath id="clip0_58_176">
                <rect width="21" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="text-[18px] mt-2">{rating}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
