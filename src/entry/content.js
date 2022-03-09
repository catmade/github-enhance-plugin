import {config} from "@/entry/background";

chrome.storage.sync.get(
    [
        config.repoHeaderStickyTag,
        config.headerStickyTag
    ], function (value) {
        let headerSticky =value[config.headerStickyTag]
        let repoHeaderSticky = value[config.repoHeaderStickyTag]

        // header
        let bh = document.querySelector("body > div.position-relative.js-header-wrapper > header")

        // 1. repository-container-header
        let rh = document.querySelector("#repository-container-header")

        // 2. repository body
        let ch = document.querySelector("body")

        // 3. readme markdown header
        let mh = document.querySelector("#readme").children[0]


        if (headerSticky) {
            bh.classList.remove("position-relative")  // exists when not login in
            bh.style.position = "fixed"
            bh.style.width = "100%"
            bh.style.top = 0

            ch.style.marginTop = `${bh.offsetHeight}px`;
        }

        if (repoHeaderSticky) {
            rh.style.zIndex = 1000
            // let crh = getComputedStyle(rh)
            // let rhHeight = rh.offsetHeight - parseInt(crh.marginBottom)
            rh.classList.add("js-sticky")           // set sticky style
            rh.classList.add("js-position-sticky")  // set sticky style
            if (headerSticky) {
                rh.style.top = `${bh.offsetHeight}px`
            }

            mh.classList.remove("top-0");         // notice1: remove this first, conflict with style.top as below
            if (headerSticky) {
                mh.style.top = `${rh.offsetHeight + bh.offsetHeight}px` // notice1: remain height for #repository-container-header
            } else {
                mh.style.top = `${rh.offsetHeight}px` // notice1: remain height for #repository-container-header
            }
        }
    })