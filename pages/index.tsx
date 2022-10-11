import React from "react";
import styled from "styled-components";
import {NextPage} from "next";
import {TopBarComponent} from "../components/TopBarComponent";
import Image from 'next/image'
import {fontScale} from "../utils/fontScale";
import {BackTop, Select} from "antd";
import UseWindowSize from "../hooks/useWindowSize";
import {MailOutlined, MinusCircleOutlined, PlusCircleOutlined} from "@ant-design/icons";
import {WelcomeBox} from "../components/WelcomeBox";
import {FilterBanner} from "../components/FilterBanner";
import {Banner} from "../components/Banner";

const Home: NextPage = () => {
    const {width} = UseWindowSize();
    const res = true;

    return (
        <div>
            <TopBarComponent shopName={'www.sortEcom.com'}/>
            <Container>
                {width > 1000 && <SideBarContainer/>}
                <ContentContainer width={width}>
                    <br/>
                    <br/>
                    <HeaderSection>
                        <TextTitle res={res}>Banner app</TextTitle>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                            marginTop: 16,
                            alignItems: "center"
                        }}>
                            <TextHeading res={res}>Your Banner</TextHeading>
                        </div>
                    </HeaderSection>
                    <br/>
                    <WelcomeBox/>
                    <br/>
                    <FilterBanner/>
                    <br/>
                    <DivBackgroundWhite width={width}>
                        <RowBanner>
                            <Banner/>
                            <Banner/>
                        </RowBanner>
                        <RowBanner>
                            <Banner/>
                            <Banner/>
                        </RowBanner>
                    </DivBackgroundWhite>
                </ContentContainer>
                {width > 1000 && <RightContainer/>}

            </Container>
            <BackTop/>
        </div>
    )
}

export default Home


//footer
{/*<Footer>*/}
{/*    <SubTextLight*/}
{/*        res={res}>{width > 750 ? `© Copyright 2022. Powered by Sortecom. All rights reserved.` : `Powered by Sortecom.`}</SubTextLight>*/}
{/*    <RowSection>*/}
{/*        <ContactDiv onClick={(e) => {*/}
{/*            window.location.href = 'mailto:support@techverest.com';*/}
{/*            e.preventDefault();*/}
{/*        }}>*/}
{/*            <MailOutlined style={{marginRight: 6, fontSize: 16}}/>*/}
{/*            <SubTextLightHover res={res}>support@techverest.com</SubTextLightHover>*/}
{/*        </ContactDiv>*/}
{/*    </RowSection>*/}
{/*</Footer>*/}
const Container = styled.div`
  display: flex;
  background-color: #F6F6F7;
  padding-top: 40px;
  height: 100%;
`


const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 17%;
`
const DivBackgroundWhite = styled.div<{ width: number }>`
  background-color: white;
  padding: 20px 40px;
  border-radius: 6px;
  margin-top: 12px;
  transition: height 2s;
`
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
`
const ContentContainer = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5%;
`
const RowSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const TextTitle = styled.span<{ res: boolean }>`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.res && fontScale(16)}px;
  line-height: 20px;
  letter-spacing: 0.025em;
  color: #7C7C7C;
`
const TextHeading = styled.h1<{ res: boolean }>`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.res && fontScale(32)}px;
  line-height: 39px;
  letter-spacing: 0.025em;
  color: #000000;
`
const HeaderSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-bottom: 1px solid #00000033;
  padding-bottom: 8px;
`

const TextLight = styled.span<{ res: boolean }>`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: ${p => p.res && fontScale(12)}px;
  line-height: 15px;
  align-items: center;
  letter-spacing: 0.025em;
  color: #363636;
`
const SubTextLight = styled(TextLight)<{ res: boolean }>`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.res && fontScale(10)}px;
  line-height: 15px;
  align-items: center;
  letter-spacing: 0.025em;
  color: #7C7C7C;
`

const Footer = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -50px;
`
const ContactDiv = styled.button`
  display: flex;
  align-items: center;
  margin: 0 12px;
  justify-content: space-between;
  border: none;
  background-color: #F6F6F7;
  cursor: pointer;
`
const SubTextLightHover = styled(SubTextLight)`
  &:hover {
    color: #0070f3;
  }
`
const RowBanner = styled.div`
display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  margin-bottom: 20px;
`