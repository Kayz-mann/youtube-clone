import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow 
             image="https://yt3.ggpht.com/ytc/AAUvwniAIuJTf8tYaEkS8CxoEtSi04EvKpr3ou1tTKLFkg=s176-c-k-c0x00ffffff-no-rj"
             channel="Tech Lead"
             verified
             subs="2.3M"
             noOfVideos={382}
             description="Commentary show for ex Google Tech Lead"/>
             <hr />
             <VideoRow 
             views="1.4M"
             subs="3M"
             description="Full Aluminium Mechanical Keyboard"
             timestamp="3 months ago"
             channel="Tech Lead"
             title="My Luxury Mechanical Keyboard experience"
             image="https://i.ytimg.com/an_webp/vjpTFaHD7x4/mqdefault_6s.webp?du=3000&sqp=CNjPiP8F&rs=AOn4CLASXLyLHN428JU7oZLoM94rf5xHQA"/>
             <VideoRow 
             views="1.4M"
             subs="3M"
             description="We'll run through the full analysis of coding a discord bot "
             timestamp="5 seconds ago"
             channel="Tech Lead"
             title="Coding a Discord Bot"
             image="https://i.ytimg.com/an_webp/qnlXQMSXkBQ/mqdefault_6s.webp?du=3000&sqp=CJDMiP8F&rs=AOn4CLCERj-Q7te1W1z-xEC47jVrOlsX5A"/>
             <VideoRow 
             views="1.4M"
             subs="3M"
             description="Facebook sued for H1-B visa abuse by US justice Dept"
             timestamp="25 seconds ago"
             channel="Tech Lead"
             title="facebook insights"
             image="https://i.ytimg.com/an_webp/WdGS__VdATM/mqdefault_6s.webp?du=3000&sqp=CMr0h_8F&rs=AOn4CLAi1dzkbhD6iK2j_x_B-Vkc3KMd3A"/>
             <VideoRow 
             views="1.4M"
             subs="3M"
             description="Watch Techlead's View about working at the most prestigious Google"
             timestamp="20 mins ago"
             channel="Tech Lead"
             title="Why I Dont Want To Work At Google"
             image="https://i.ytimg.com/an_webp/_65PCtG1S5I/mqdefault_6s.webp?du=3000&sqp=CIiviP8F&rs=AOn4CLCjoW5OvBHt2I8f5sp5D2_y2y6Q_w"/>
             <VideoRow 
             views="1.4M"
             subs="3M"
             description="Will Deno replace Node.js anytime soon: Which programming language is better"
             timestamp="4 hours ago"
             channel="Tech Lead"
             title="DENO vs NODE.JS"
             image="https://i.ytimg.com/an_webp/HLEfnrRlRtA/mqdefault_6s.webp?du=3000&sqp=CMDAiP8F&rs=AOn4CLA5Qo8xIqXvwp2_aWcP5YRhdfrsJQ"/>
        </div>
    )
}

export default SearchPage
