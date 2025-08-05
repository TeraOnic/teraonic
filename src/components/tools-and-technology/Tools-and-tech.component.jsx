import Box from "./core/box.component";
import JS from "../../assets/tools-and-tech/JS.svg";
import React from "../../assets/tools-and-tech/React.svg";
import Node from "../../assets/tools-and-tech/Node.svg";
import Next from "../../assets/tools-and-tech/Next.svg";
import MySql from "../../assets/tools-and-tech/MySql.svg";
import MongoDB from "../../assets/tools-and-tech/MongoDB.svg";
import Django from "../../assets/tools-and-tech/Django.svg";
import Figma from "../../assets/tools-and-tech/Figma.svg";
const ToolsAndTechnology = () => {
    return (
        <section className="mx-32 my-32">
            <h2 className="text-3xl mb-6">Tools and technology</h2>
            <div className="flex w-full justify-between flex-wrap gap-y-5">
                <Box img={JS} alt={"Java Script"}/>
                <Box img={React} alt={"React"}/>
                <Box img={Node} alt={"Node"}/>
                <Box img={Next} alt={"Next"}/>
                <Box img={MySql} alt={"MySql"}/>
                <Box img={MongoDB} alt={"MongoDB"}/>
                <Box img={Django} alt={"Django"}/>
                <Box img={Figma} alt={"Figma"}/>
            </div>
        </section>
    )
}

export default ToolsAndTechnology;