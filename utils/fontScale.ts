import UseWindowSize from "../hooks/useWindowSize";

export const fontScale = (fontSize:number)=>{
    const {width} = UseWindowSize();
    if (width > 960 && width <1440 ) return fontSize * 1.3
    if (width > 1440) return fontSize * 1.5
    return fontSize * 1.1
}