export interface Hosts {
    center: string;
    uq: string;
    res: string;
}
export declare function buildHosts(center: string): Promise<Hosts>;
export declare function buildDebugHosts(center: string, debugHosts: Hosts): Promise<Hosts>;
