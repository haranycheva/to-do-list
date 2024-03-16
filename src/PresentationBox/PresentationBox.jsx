import { Desc, Title } from "./PresentationBox.styled";
import { Box } from "./PresentationBox.styled";

export function PresentationBox({ selected }) {
  return (
    <Box>
      <Title>{selected.title}</Title>
      <Desc>{selected.description}</Desc>
    </Box>
  );
}
