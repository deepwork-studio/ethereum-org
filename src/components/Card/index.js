import React from "react";
import { Card as RebassCard } from "rebass";
import { css } from "styled-components";
import PropTypes from "prop-types";

const Card = ({ gradient, gradientHeight, ...rest }) => {
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
        /* Gradient Top Border Style */
        ${gradient &&
          css`
            position: relative;

            &::before {
              position: absolute;
              content: "";
              height: ${gradientHeights[gradientHeight]};
              left: 0;
              right: 0;
              top: 0;
              background-color: blue;
              background-image: ${gradientTypes[gradient]};
            }
          `}
      `}
    />
  );
};

Card.propTypes = {
  gradient: PropTypes.oneOf(["gossamer", "richblue", "tapestry"]),
  gradientHeight: PropTypes.oneOf(["thin", "thick"])
};

Card.defaultProps = {
  gradientHeight: "thick"
};

export default Card;
