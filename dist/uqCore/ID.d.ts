import { Entity } from "./entity";
import { Field } from "./uqMan";
export declare class UqID<M extends {
    id?: number;
}> extends Entity {
    get typeName(): string;
    create: boolean;
    update: boolean;
    owner: boolean;
    keys: Field[];
    NO(): Promise<string>;
    protected setKeys(): void;
    get isGlobal(): boolean;
    getIdFromObj(value: any): number;
    valueFromString(str: string): M;
    cacheTuids(defer: number): void;
    valueFromId(id: number): Promise<M>;
    loadValuesFromIds(divName: string, ids: number[]): Promise<M[]>;
    cacheTuidFieldValues(value: any): void;
    unpackTuidIds(values: string[]): any[];
}
export declare class ID extends UqID<any> {
}
export declare class UqIDX<M> extends Entity {
    get typeName(): string;
}
export declare class IDX extends UqIDX<any> {
}
export declare class UqIX<M> extends Entity {
    get typeName(): string;
}
export declare class IX extends UqIX<any> {
}
