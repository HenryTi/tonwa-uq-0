import { HttpChannel } from './httpChannel';
import { Caller } from './caller';
import { Net } from './Net';
export declare function refetchApi(channel: HttpChannel, url: string, options: any, resolve: (values: any) => any, reject: (reason: any) => void): Promise<void>;
export declare abstract class ApiBase {
    protected readonly net: Net;
    protected token: string;
    protected path: string;
    constructor(net: Net, path: string);
    protected abstract getHttpChannel(): Promise<HttpChannel>;
    xcall(caller: Caller<any>): Promise<any>;
    call(url: string, method: string, body: any): Promise<any>;
    get(path: string, params?: any): Promise<any>;
    post(path: string, params: any): Promise<any>;
    put(path: string, params: any): Promise<any>;
    delete(path: string, params: any): Promise<any>;
}
