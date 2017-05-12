import $ from "jquery";
import "../node_modules/jquery-validation/dist/jquery.validate.js";
import content from "./sample.txt!text";
import { ModuleOne } from "./module-one.ts";
export let run = () => {
    console.log(content);
}

$("body").html("This is text");
run();
let mod = new ModuleOne();
mod.log();