import "./LandingPage.css";
import { Award, Beer, Users } from "lucide-react";
import React from "react";
import { Button } from "../../components/button/Button";
import {
  Card,
  CardHeader,
  CardHeading,
  CardIcon,
  CardTitle,
  CardAction,
  CardBody,
} from "../../components/card/Card";
import { colors } from "../../shared/colors";
import HeroSection from "./sections/heroSection/HeroSection";
import AboutSection from "./sections/aboutSection/AboutSection";
import StatsSection from "./sections/statsSection/StatsSection";
import BeersSection from "./sections/beersSection/BeersSection";
import BreweryTourSection from "./sections/breweryTourSection/BreweryTourSection";
import ContactSection from "./sections/contactSection/ContactSection";
import { scrollToSection } from "../../shared/utils/scrollToSection";

function LandingPage() {
  return (
    <Card>
      <CardHeader noBorder>
        {" "}
        {/* Flag para desabilitar borda */}
        <CardHeading>
          <CardIcon>
            <Beer size={36} style={{ color: colors.brand[600] }} />
          </CardIcon>
          <CardTitle>Serra & Malte</CardTitle>
        </CardHeading>
        <CardAction style={{ display: "flex", gap: 8 }}>
          <Button variant="link" onClick={() => scrollToSection("home")}>
            Início
          </Button>
          <Button variant="link" onClick={() => scrollToSection("about")}>
            Sobre
          </Button>
          <Button variant="link" onClick={() => scrollToSection("beers")}>
            Cervejas
          </Button>
          <Button variant="link" onClick={() => scrollToSection("contact")}>
            Contato
          </Button>
          <Button onClick={() => scrollToSection("contact")}>
            Fazer Pedido
          </Button>
        </CardAction>
      </CardHeader>
      <CardBody style={{ backgroundColor: colors.brand[50] }}>
        <HeroSection></HeroSection>
        <StatsSection></StatsSection>
        <AboutSection></AboutSection>
        <BeersSection></BeersSection>
        <BreweryTourSection></BreweryTourSection>
        <ContactSection></ContactSection>
      </CardBody>
    </Card>
  );
}

export default LandingPage;
