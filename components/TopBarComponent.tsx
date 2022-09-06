import {memo} from "react";
import styled from "styled-components";
import {iconExit, iconNotification, iconSearch, iconSetting, iconTag, logoImage} from "../public/index";
import Image from 'next/image'
import UseWindowSize from "../hooks/useWindowSize";

export const TopBarComponent = memo(function TopBarComponent(props:any) {
    const {width}=UseWindowSize()
    return (
        <TabBarContainer>
            <LeftBarContainer width={width}>

            </LeftBarContainer>
            <MidSection width={width}>
                <LogoTextApp src={logoImage}/>
                <RowSection width={width}>
                    <IconTag src={iconTag}/>
                    <TextShop>{props.shopName}</TextShop>
                </RowSection>
            </MidSection>
            <RightContainer  width={width}>
            </RightContainer>
        </TabBarContainer>
    )
})

const TabBarContainer = styled.div`
  position: fixed;
  display: flex;
  flex: 1;
  width: 100%;
  background-color: white;
  align-items: center;
  box-shadow: 0 2px 4px 0 #0000001A;
  padding: 12px;
  z-index: 1;
`

const LeftBarContainer = styled.div<{width:number}>`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-basis: 17%;
  align-items: center;
  justify-content: center;
`
const RightContainer = styled.div<{width:number}>`
  display: flex;
  flex-basis: 25%;
  
`

const RowSection = styled.div<{width:number}>`
  align-items: center;
  justify-content: flex-end;
  display: ${p=>p.width > 1000 ? 'flex' : 'none'};
`


const MidSection = styled.div<{width:number}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: ${p=>p.width > 1000 && 100}px;
  padding-right:  ${p=>p.width > 1000 && 140}px;
  justify-content: ${p=>p.width > 1000 ? 'space-between' : 'center'};
  


`
const LogoTextApp = styled(Image)`
  min-width:150px;
  height: 30px;
  box-shadow: 0 4px 4px 0 #00000040;
`
const IconTag = styled(Image)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`
const TextShop = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  margin-left: 12px;
`

