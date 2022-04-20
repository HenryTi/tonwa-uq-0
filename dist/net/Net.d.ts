import { UqTokens } from "./UqTokens";
import { CenterApi } from "./centerApi";
import { CallCenterApi, UqTokenApi } from "./uqApi";
import { UserApi } from "./userApi";
import { HttpChannel } from './httpChannel';
import { MessageHub } from "./messageHub";
import { WsBridge } from "./wsChannel";
import { Hosts } from './host';
import { LocalDb } from "../tool";
export interface PromiseValue<T> {
    resolve: (value?: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
}
export interface NetProps {
    center: string;
    debug: Hosts;
    unit: number;
    testing: boolean;
    buildingUq?: boolean;
    localDb: LocalDb;
    createObservableMap(): Map<number, any>;
}
export declare class Net {
    logout(): void;
    private hosts;
    private testing;
    centerHost: string;
    centerToken: string | undefined;
    loginedUserId: number;
    centerChannel: HttpChannel;
    readonly props: NetProps;
    readonly isDevelopment: boolean;
    readonly localDb: LocalDb;
    readonly uqChannels: {
        [name: string]: HttpChannel | (PromiseValue<any>[]);
    };
    readonly centerApi: CenterApi;
    readonly uqTokens: UqTokens;
    readonly userApi: UserApi;
    readonly uqTokenApi: UqTokenApi;
    readonly callCenterapi: CallCenterApi;
    readonly messageHub: MessageHub;
    readonly wsBridge: WsBridge;
    language: string;
    culture: string;
    isBuildingUQ: boolean;
    _uqs: any;
    user: any;
    constructor(props: NetProps);
    init(): Promise<void>;
    getResUrl(res: string): string;
    createObservableMap: () => Map<number, any>;
    logoutApis(): void;
    setCenterUrl(url: string): void;
    setCenterToken(userId: number, token: string): void;
    clearCenterToken(): void;
    getCenterChannel(): HttpChannel;
    buildUqUrl(db: string, url: string, urlTest: string): string;
}
