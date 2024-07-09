import common from "./common";
import local from "./local";
import dev from "./dev";
import prod from "./prod";
import * as yaml from 'js-yaml';
import { readFileSync } from "fs";

// package.json에 설정된 NODE_ENV 값
const phase = process.env.NODE_ENV.trim();

let conf = {};
if (phase === "local"){
    conf = local;
} else if (phase === "dev"){
    conf = dev;
} else if (phase === "prod"){
    conf = prod;
}

const yamlConfig: Record<string, any> = yaml.load(
    readFileSync(`${process.cwd()}/envs/config.yaml`, 'utf8'),
);


export default() => ({
    ...common,
    ...conf,
    ...yamlConfig,
})