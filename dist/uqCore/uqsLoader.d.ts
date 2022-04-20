import { UQsMan } from "./uqsMan";
import { Net } from '../net';
import { UqConfig } from "../tool";
export declare class UQsLoader {
    protected readonly net: Net;
    protected readonly uqConfigVersion: string;
    protected readonly uqConfigs: UqConfig[];
    protected isBuildingUQ: boolean;
    uqsMan: UQsMan;
    constructor(net: Net, uqConfigVersion: string, uqConfigs: UqConfig[]);
    build(): Promise<string[]>;
    loadUqs(): Promise<string[]>;
    private loadUqData;
    private loadLocal;
}
export declare class UQsBuildingLoader extends UQsLoader {
    build(): Promise<string[]>;
}
