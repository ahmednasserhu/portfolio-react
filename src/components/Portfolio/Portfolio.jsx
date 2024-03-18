import PortfolioCard from "../PortfolioCard/PortfolioCrad";
import ActionAreaCard from "../../reusable-component/card/Card";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="Portfolio-Section">
      <div className="row-style">
        <ActionAreaCard
          renderContent={
            <PortfolioCard
              cardHeader="PYTHON"
              cardTitle="Hieroglyphs Translation"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          }
        />
        <ActionAreaCard
          renderContent={
            <PortfolioCard
              cardHeader="JAVA"
              cardTitle="Management System"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          }
        />
        <ActionAreaCard
          renderContent={
            <PortfolioCard
              cardHeader="WEB DESIGN"
              cardTitle="Gaming Website"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          }
        />
      </div>
      <div className="row-style">
        <ActionAreaCard
          renderContent={
            <PortfolioCard
              cardHeader="GAME DEVELOPMENT"
              cardTitle="King Slayer Game using Unity"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          }
        />
        <ActionAreaCard
          renderContent={
            <PortfolioCard
              cardHeader="BLENDER"
              cardTitle="Short Episode for a Series"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          }
        />
        <ActionAreaCard
          renderContent={
            <PortfolioCard
              cardHeader="BASH SCRIPTING"
              cardTitle="DBMS"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          }
        />
      </div>
    </div>
  );
};

export default Portfolio;
