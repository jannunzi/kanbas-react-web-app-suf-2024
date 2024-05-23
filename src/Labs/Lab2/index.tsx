import React from "react";
import StyleAttribute from "./StyleAttribute";
import "./index.css";
import IdSelector from "./IdSelector";
import ClassSelectors from "./ClassSelectors";
import DocumentStructureStyle from "./DocumentStructureStyle";
import ForegroundColor from "./ForegroundColor";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import RelativePosition from "./RelativePosition";
import AbsolutePosition from "../AbsolutePosition";
import FixedPosition from "./FixedPosition";
import ZIndex from "./zIndex";
import FloatImages from "./FloatImages";
import FloatDivs from "./FloatDivs";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIconsSampler";
import GridSystem from "./GridSystem";
export default function Lab2() {
  return (
    <div className="container-fluid">
      <h2>Lab 2</h2>
      <StyleAttribute />
      <IdSelector />
      <ClassSelectors />
      <DocumentStructureStyle />
      <ForegroundColor />
      <Padding />
      <Margins />
      <Corners />
      <Dimensions />
      <RelativePosition />
      <AbsolutePosition />
      <FixedPosition />
      <ZIndex />
      <FloatImages />
      <FloatDivs />
      <GridLayout />
      <Flex />
      <ReactIconsSampler />
      <GridSystem />
    </div>
  );
}
