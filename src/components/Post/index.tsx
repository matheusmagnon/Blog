import { CardRepository } from "../CardRepository";
import { PostsContainer } from "./styles";

export function Posts() {
  return (
    <PostsContainer>
      <CardRepository />
      <CardRepository />
      <CardRepository />
      <CardRepository />
      <CardRepository />
      <CardRepository />
      <CardRepository />
    </PostsContainer>
  );
}
