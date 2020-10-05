//const {BrowserWindow, app} = require("electron");
//const pie = require("puppeteer-in-electron")
const puppeteer = require("puppeteer-core")
    //const p = require('puppeteer')

var l = {
    headless: true,
    defaultViewport: null,
    executablePath: '/opt/google/chrome/google-chrome'
    //executablePath: '/usr/bin/google-chrome-stable'
    //executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
}



const chaturbate = async(modelo) => {
    const m1 = modelo
    const browser = await puppeteer.launch(l)
    const page = await browser.newPage()
    await page.goto('https://pt.chaturbate.com/' + m1)

    //<a href="#" id="close_entrance_terms">ACEITO</a>



    const info = await page.evaluate(() => {
        
        return {
            //site: videoJsPlayer.cache_["source"].src,
            site: JSON.parse(initialRoomDossier).hls_source,
            //online: document.getElementById('users-tab-default').innerText
                //localStorage.onlineFollowedTab
                //videoJsPlayer.cache_["source"].src
        }
    })    
    
    await browser.close()
    await abrir1(info, m1) 
    return info
}

const camSoda = async(modelo) => {    
    console.log('inicio')
    
    const browser = await puppeteer.launch(l)
    const page = await browser.newPage()
    await page.goto('https://www.camsoda.com/' + modelo)

    const info = await page.evaluate(() => {
        return {
            site: videojs.players.video_singleton__video["cache_"].src
        }
    })
  
    await browser.close()
    var teste = info.site
    teste = teste.substring(0, 4)
    if (teste === 'data') {
        console.log(modelo + " offline")
        document.getElementById('status').innerHTML = modelo + " offline"
        return ""
    } else {
        //console.log('fim')
        await abrir1(info, modelo)

        return info
    }
}
/*
const camSodaOnline = async(modelo) => {    
    console.log('inicio')
    
    const browser = await puppeteer.launch(l)
    const page = await browser.newPage()
    await page.goto('https://www.camsoda.com')
    await page.waitFor(3000)
    const info = await page.evaluate(() => {
        const names = []
        for (let index = 0; index < 50; index++) {
            names.push(document.getElementsByClassName('browse_item')[index])
        }
      
    })
  
    await browser.close()
    console.log(info)
}
document.getElementsByClassName('browse_item')

*/
const cam4 = async(modelo) => {
    const browser = await puppeteer.launch(l)
    const page = await browser.newPage()
    await page.goto('https://pt.cam4.com/' + modelo)

    //<a href="#" id="close_entrance_terms">ACEITO</a>



    const info = await page.evaluate(() => {
        return {
            site: lastHlsInstance.streamController.fragCurrent.baseurl
                //t: document.getElementById("Cam4HLSPlayer")
                //localStorage.onlineFollowedTab
                //videoJsPlayer.cache_["source"].src
        }
    })
    await browser.close()
        //console.log(info)
    return info
}

const flirt4free = async(modelo) => {
    const browser = await puppeteer.launch(l)
    const page = await browser.newPage()
    await page.goto('https://www.flirt4free.com/?model=' + modelo)

    //<a href="#" id="close_entrance_terms">ACEITO</a>

    const info = await page.evaluate(() => {
        return {
            site: VideoController.currentPlayer.networkUrl
                //localStorage.onlineFollowedTab
                //videoJsPlayer.cache_["source"].src
        }
    })
    await browser.close()
    console.log(info)
    return info
}

module.exports = { cam4, camSoda, chaturbate, flirt4free }
