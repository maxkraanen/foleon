import React from "react";
import { Article } from "../types";

import * as S from "./styled/styledCard";

const Card: React.FC<Article> = ({ name }) => {
  return (
    <S.Card>
      <S.Title>{name}</S.Title>
    </S.Card>
  );
};

export default Card;
