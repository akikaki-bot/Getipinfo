import axios , { AxiosResponse } from 'axios'
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
export class IPGet {
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
    get(IP: string): Promise<IP_Data_Type> {
     return new Promise<IP_Data_Type>(async (resolve, reject) => {
        await axios.get(`https://jpnic.rdap.apnic.net/ip/${IP}`)
        .then((data : any) => {
            const ip = new IP_Data(data.data);
            resolve(ip)
        })
        .catch((err : string) => {
            reject(err)
        })
     })
    }
    
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
    getinfo(IP: string): Promise<IP_Data_Old> {
        return new Promise<IP_Data_Old>(async (resolve, reject) => {
           await axios.get(`https://jpnic.rdap.apnic.net/ip/${IP}`)
           .then((data : any) => {
               resolve(data.data)
           })
           .catch((err : string) => {
               reject(err)
           })
        })
       }


}

export class IP_Data {
    country: string;
    status: Array<string>;
    type: string | null;
    endAddress: string;
    ipVersion: string;
    startAddress: string;
    objectClassName: string;
    handle: string;
    constructor(data: IP_Data_Old) {
      this.country = data.country
      this.status = data.status
      this.type = data.type
      this.endAddress = data.endAddress
      this.ipVersion = data.ipVersion
      this.startAddress = data.startAddress
      this.objectClassName = data.objectClassName
      this.handle = data.handle
    }
}

type IP_Data_Type = {
    country: string;
    status: Array<string>;
    type: string | null;
    endAddress: string;
    ipVersion: string;
    startAddress: string;
    objectClassName: string;
    handle: string;
}


export interface IP_Data_Old {
    "rdapConformance": string[]
    "notices": Array<Notice>
    "country": string;
    "events": Array<Event>
    "name": string;
    "remarks": Array<Notice>
    "links": Array<Notice_links>
    "status": Array<string>
    "type": string | null;
    "endAddress": string;
    "ipVersion": string;
    "startAddress": string;
    "objectClassName": string;
    "handle": string;
    "entities": Array<Entity>
    "roles" : Array<string>
    "cidr0_cidrs": Array<Cidr0_cidrs>
    "port43": string;
}

export type Cidr0_cidrs = {
  "v4prefix": string;
  "length": number
} 

export type Entity = {
    "role": string[];
    "events": Array<Event>
    "links": Array<Notice_links>
    "vcardArray": Array<Entity_VcardArray>
    "objectClassName": string;
    "handle": string;
}

export type Entity_VcardArray = {
    "vcard": Array<string>
}


export type Notice = [
    {
      "title": string;
      "description": string[];
      "links"?: Array<Notice_links>
    }
]

export type Notice_links = {
    "value"?: string
    "rel"? : string;
    "href"?: string;
    "type"?: string;
}

export type Event = {
    "eventAction": string;
    "eventDate": string;
}
