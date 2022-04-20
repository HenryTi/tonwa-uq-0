import { Net } from './Net';
export interface UqToken {
    name: string;
    db: string;
    url: string;
    token: string;
}
export declare class UqTokens {
    private readonly net;
    private readonly uqTokens;
    constructor(net: Net);
    logoutUqTokens(): void;
    buildAppUq(uq: string, uqOwner: string, uqName: string): Promise<void>;
    getUqToken(uq: string): UqToken;
}
