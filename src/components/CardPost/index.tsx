import { CardContainer, CardContente, CardHeader, CardText } from "./styles";

export function CardPost() {
  return (
    <CardContainer>
      <CardContente>
        <CardHeader>
          <h3>JavaScript data types and data structures</h3>
          <span>Há 1 dia</span>
        </CardHeader>
        <CardText>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in...
        </CardText>
      </CardContente>
    </CardContainer>
  );
}
