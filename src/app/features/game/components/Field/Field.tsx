import React from "react";
// import IconsContainer from "../Navigation/IconsContainer";
import Top from "./components/Top/Top";
import Bottom from "./components/Bottom/Bottom";
import Middle from "./components/Middle/Middle";
import ChooseAColor from "./components/Dialogs/ChooseAColor";
import Results from "./components/Dialogs/Results/Results";

export default function Field() {
    return (
        <div
            id="field"
            className="grid grid-rows-[30%,40%,30%] h-full 
        w-full "
        >
            <Results />
            <ChooseAColor />
            <Top />
            <Middle />
            <Bottom />
        </div>
    );
}
