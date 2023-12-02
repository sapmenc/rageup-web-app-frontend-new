import CardLayout from "../../../../layouts/CardLayout";
import { Grid, GridItem } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

interface ExposureInArticleshipProps {
  exposures: string[];
}
const ExposureInArticleship: React.FC<ExposureInArticleshipProps> = ({
  exposures,
}) => {
  const isLarge = useBreakpointValue({ base: false, sm: true });
  return (
    <CardLayout heading="Exposure in Articleship">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
        }}
        gap={2}
      >
        {exposures.map((e, key) => {
          return (
            <GridItem
              key={key}
              textAlign={!isLarge ? "start" : key % 2 === 0 ? "start" : "end"}
            >
              {e}
            </GridItem>
          );
        })}
      </Grid>
    </CardLayout>
  );
};

export default ExposureInArticleship;
