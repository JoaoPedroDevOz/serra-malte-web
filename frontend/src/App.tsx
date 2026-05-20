import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardBody,
  CardFooter,
} from "./components/card/Card";
import { Button } from "./components/button/Button";
import { colors } from "./shared/colors";
import { FeaturesSection } from "./components/featureItem/FeatureItem";
import { Input } from "./components/input/Input";

function App() {
  return (
    <div>
      <Card
        style={
          {
            "--card-bg": colors.gray[800],
            "--card-color": colors.white,
            "--card-border": colors.gray[700],
            "--card-radius": "20px",
          } as React.CSSProperties
        }
      >
        <CardHeader>
          <CardTitle style={{ fontSize: "24px" }}>Meu Card</CardTitle>

          <CardAction style={{ display: "flex", gap: 8 }}>
            <Button variant="outline" style={{ color: colors.gray[700] }}>
              Início
            </Button>
            <Button variant="outline" style={{ color: colors.gray[700] }}>
              Sobre
            </Button>
            <Button variant="secondary" style={{ color: colors.gray[700] }}>
              Cervejas
            </Button>
            <Button variant="outline" style={{ color: colors.brand[600] }}>
              Contato
            </Button>
            <Button>Fazer Pedido</Button>
          </CardAction>
        </CardHeader>
        <CardBody>
          <Input type="text" placeholder="Seu nome" />
        </CardBody>
        <CardFooter>Rodapé</CardFooter>
        <FeaturesSection></FeaturesSection>
      </Card>
    </div>
  );
}

export default App;
