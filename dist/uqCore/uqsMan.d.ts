import { UqMan } from './uqMan';
import { Net, UqData } from '../net';
import { UqConfig } from '../tool';
export declare class UQsMan {
    private readonly net;
    private collection;
    proxy: any;
    uqMans: UqMan[];
    constructor(net: Net);
    buildUqs(uqDataArr: UqData[], version: string, uqConfigs: UqConfig[], isBuildingUQ: boolean): Promise<string[]>;
    uq(uqName: string): UqMan;
    getUqUserRoles(uqLower: string): Promise<string[]>;
    init(uqsData: UqData[]): Promise<void>;
    load(): Promise<string[]>;
    private buildUQs;
    private errUndefinedUq;
    getUqMans(): UqMan[];
    setTuidImportsLocal(): string[];
    private setInner;
}
