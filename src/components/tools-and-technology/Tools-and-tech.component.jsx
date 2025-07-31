import Box from "./core/box.component";
import JS from "../../assets/tools-and-tech/JS.png";
import React from "../../assets/tools-and-tech/React.png";
import Node from "../../assets/tools-and-tech/Node.png";
import Next from "../../assets/tools-and-tech/Next.png";
import MySql from "../../assets/tools-and-tech/MySql.png";
import MongoDB from "../../assets/tools-and-tech/MongoDB.png";
import Django from "../../assets/tools-and-tech/Django.png";
import Figma from "../../assets/tools-and-tech/Figma.png";
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