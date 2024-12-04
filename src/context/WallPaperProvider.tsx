import React,{ReactNode} from "react";
import { createContext, useState, useContext, useCallback } from 'react';

const WallPaperContext = createContext({});


const WallPaperProvider = ({children}:{children?:ReactNode}) => {
  const initData = localStorage.getItem("initialize")
  const wallpaperURL = JSON.parse(initData)?.wallpaper || '/images/bg.jpg'
  const [wallpaper, setWallpaper] = useState(wallpaperURL);
  
  return(
    <WallPaperContext.Provider value={{ wallpaper, setWallpaper }}>
        { children }
    </WallPaperContext.Provider>
  )
}

function useWallPaper() {
  const context = useContext(WallPaperContext);
  const { wallpaper, setWallpaper } = context;
  
  const changeWallpaper=(data)=>{
        setWallpaper(data)
        const prevData = JSON.parse(localStorage.getItem("initialize"));
        const initialize = JSON.stringify({
            ...prevData,wallpaper:data
        })
        localStorage.setItem("initialize",initialize);
    }
  return [ wallpaper, changeWallpaper];
}

export { WallPaperProvider, useWallPaper };