import { Avatar, Text, SocialItem } from "../";
import {
  CardContent,
  CardHeader,
  TextHeader,
  CardBody,
} from "./styles";

export function Card() {
  return (
    <CardContent>
      <CardHeader>
        <Avatar />
        <TextHeader>
          <Text>Emerson Freitas</Text>
        </TextHeader>
      </CardHeader>
      <CardBody>
        <SocialItem
          name="github"
          title="emersonfreitas"
          link="https://github.com/emersonfreitas"
        />
        <SocialItem
          name="linkedin"
          title="emersonfreitas"
          link="https://www.linkedin.com/in/emersonfreitasn/"
        />
        <SocialItem
          name="email"
          title="emersonfreitasn@gmail.com"
          link="mailto:emersonfreitasn@gmail.com"
        />
      </CardBody>
    </CardContent>
  );
}
