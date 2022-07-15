import { Avatar, Text } from "../";
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
      <CardBody></CardBody>
    </CardContent>
  );
}
