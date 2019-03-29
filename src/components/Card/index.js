import React from "react";
import { Card as RebassCard } from "rebass";
import { css } from "styled-components";
import PropTypes from "prop-types";

const Card = ({ gradient, gradientHeight, shadow, ...rest }) => {
  const gradientTypes = {
    gossamer: "linear-gradient(to right, #1D566D, #44EBA5);",
    richblue: "linear-gradient(to right, #6672E5, #43458A);",
    tapestry: "linear-gradient(to right, #F67180, #6B567A);"
  };

  const gradientHeights = {
    thin: "2px",
    thick: "6px"
  };

  return (
    <RebassCard
      {...rest}
      css={css`
        position: relative;

        /* Gradient Top Border Style */
        ${gradient &&
          css`
            &::before {
              position: absolute;
              content: "";
              left: 0;
              right: 0;
              top: 0;
              height: ${gradientHeights[gradientHeight]};
              background-image: ${gradientTypes[gradient]};
            }
          `}

        /* BEEG Shadow Style */
        ${shadow &&
          css`
            &:hover::after {
              opacity: 1;
            }

            &::after {
              transition: opacity 250ms ease-in-out;
              position: absolute;
              opacity: 0;
              content: "";
              left: 5%;
              right: 5%;
              top: 5%;
              bottom: 5%;
              z-index: -1;
              box-shadow: 0 10px 40px 10px #000000;
            }
          `}
      `}
    />
  );
};

Card.propTypes = {
  gradient: PropTypes.oneOf(["gossamer", "richblue", "tapestry"]),
  gradientHeight: PropTypes.oneOf(["thin", "thick"]),
  shadow: PropTypes.bool
};

Card.defaultProps = {
  gradientHeight: "thick"
};

export default Card;
