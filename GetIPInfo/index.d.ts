/**
 * `IPGet Version 1` create by akikaki
 *
 * /////////////////////////////////////////////////
 *
 * the class of get the info of ip
 *
 * IPの情報をゲットするクラス。
 *
 * -------------------------------------------------
 *
 * `.get()` - IPに関しての簡単な情報を取得します
 *
 * `Return` Promise : IP_Data_Type
 *
 * _________________________________________________
 *
 * `.getinfo()` - IPに関しての詳しい情報を取得します
 *
 * `Return` Promise : IP_Data_Old
 *
 */
export declare class IPGet {
    /**
     *
     * @param IP String
     * @returns IP_Data_Type
     *
     * IPに関しての簡単な情報を送信します。
     *
     * 詳しい情報も取得する場合には、
     * `.getinfo()`
     * を使用してください。
     */
    get(IP: string): Promise<IP_Data_Type>;
    /**
     *
     * @param IP String
     * @returns IP_Data_Old
     *
     * IPに関しての詳しい情報を送信します。
     * (ほぼ生データ)
     *
     * 簡単な情報だけで良い場合は、
     * `.get()`
     * を使用してください。
     */
    getinfo(IP: string): Promise<IP_Data_Old>;
}
export declare class IP_Data {
    country: string;
    status: Array<string>;
    type: string | null;
    endAddress: string;
    ipVersion: string;
    startAddress: string;
    objectClassName: string;
    handle: string;
    constructor(data: IP_Data_Old);
}
declare type IP_Data_Type = {
    country: string;
    status: Array<string>;
    type: string | null;
    endAddress: string;
    ipVersion: string;
    startAddress: string;
    objectClassName: string;
    handle: string;
};
export interface IP_Data_Old {
    "rdapConformance": string[];
    "notices": Array<Notice>;
    "country": string;
    "events": Array<Event>;
    "name": string;
    "remarks": Array<Notice>;
    "links": Array<Notice_links>;
    "status": Array<string>;
    "type": string | null;
    "endAddress": string;
    "ipVersion": string;
    "startAddress": string;
    "objectClassName": string;
    "handle": string;
    "entities": Array<Entity>;
    "roles": Array<string>;
    "cidr0_cidrs": Array<Cidr0_cidrs>;
    "port43": string;
}
export declare type Cidr0_cidrs = {
    "v4prefix": string;
    "length": number;
};
export declare type Entity = {
    "role": string[];
    "events": Array<Event>;
    "links": Array<Notice_links>;
    "vcardArray": Array<Entity_VcardArray>;
    "objectClassName": string;
    "handle": string;
};
export declare type Entity_VcardArray = {
    "vcard": Array<string>;
};
export declare type Notice = [
    {
        "title": string;
        "description": string[];
        "links"?: Array<Notice_links>;
    }
];
export declare type Notice_links = {
    "value"?: string;
    "rel"?: string;
    "href"?: string;
    "type"?: string;
};
export declare type Event = {
    "eventAction": string;
    "eventDate": string;
};
export {};
