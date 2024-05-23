import got from 'got';
import {HttpProxyAgent} from "hpagent";

for(let i = 0;i<10;i++){
    const response = await got("https://httbin.org/ip", {
        agent:{
            http : new HttpProxyAgent({
                proxy : `http://country-TR,groups-RESIDENTIAL:apify_proxy_S4SvG4Mq3M9boAVDli5S0kUJjt4NdV2WmFMC@proxy.apify.com:8000`,
            }),
        },
    });

    console.log(response.ip);
}
