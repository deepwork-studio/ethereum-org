import styled, { css } from "styled-components";
import { Link as RebassLink } from "rebass";
import { Link as GatsbyLink } from "gatsby";
import {
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf
} from "styled-system";

const linkStyles = {
  textDecoration: "none"
};

const ExternalLink = styled(RebassLink)(linkStyles);

ExternalLink.defaultProps = {
  color: "inherit"
};

const InternalLink = styled(GatsbyLink)(
  linkStyles,
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf
);

InternalLink.defaultProps = {
  color: "inherit"
};

export { InternalLink, ExternalLink };
