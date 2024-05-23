import got from 'got';
import {HttpProxyAgent} from "hpagent";
import * as htmlparser2 from "htmlparser2";

for(let i = 0;i<1;i++){
    const response = await got("https://www.youtube.com/", {
        agent:{
            http : new HttpProxyAgent({
                proxy : `http://country-TR,groups-RESIDENTIAL:apify_proxy_S4SvG4Mq3M9boAVDli5S0kUJjt4NdV2WmFMC@proxy.apify.com:8000`,
            }),
        },
    });

    console.log(response.body);
    /*const dom = htmlparser2.parseDocument(response.body);
    console.log(dom);*/
}
