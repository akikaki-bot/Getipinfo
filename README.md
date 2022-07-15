# Get IP Info

IPから情報を取得します。

install
```
npm i https://github.com/akikaki-bot/Getipinfo/getipinfo
cd node_modules/getipinfo
npm install
```
※Pathは変わる可能性があります

# How to use
```ts
import { IPGet } from 'path/to/getipinfo'

const ipget = new IPGet()
ipget.get("IP")
// Return Promise of IP_Data_Type

ipget.getinfo("IP")
// Return Promise of IP_Data_Old

```

Types

```ts

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
```


