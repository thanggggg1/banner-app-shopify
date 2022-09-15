import React from "react";
import styled from "styled-components";
import {NextPage} from "next";
import {TopBarComponent} from "../components/TopBarComponent";
import Image from 'next/image'
import {fontScale} from "../utils/fontScale";
import {BackTop, Select} from "antd";
import UseWindowSize from "../hooks/useWindowSize";
import {MailOutlined, MinusCircleOutlined, PlusCircleOutlined} from "@ant-design/icons";

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
                        <TextTitle res={res}>Tên title</TextTitle>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                            marginTop: 16,
                            alignItems: "center"
                        }}>
                            <TextHeading res={res}>Tên Subtitle </TextHeading>
                            <ButtonSave>
                                <TextButton res={res}>
                                    Text Button
                                </TextButton>
                            </ButtonSave>
                        </div>
                    </HeaderSection>
                    <br/>
                    <DivBackgroundWhite width={width}>
                        <DivTextBold>
                            <TextBold res={res}>General Preview</TextBold>
                            <ButtonEnable>
                                <TextEnable res={res}>Example Text</TextEnable>
                            </ButtonEnable>
                        </DivTextBold>
                        <DivTextLight>
                            <TextLight res={res}>Example Text</TextLight>

                        </DivTextLight>

                        <DivTextLight>
                            <div>
                                <TextLight res={res}>Example 1</TextLight>
                                <br/>
                                <div style={{marginTop: 8, display: "flex", alignItems: 'center'}}>
                                    <SubTextLight res={res}>Example style</SubTextLight>
                                </div>
                            </div>


                        </DivTextLight>
                        <DivTextLight>
                            <div>
                                <TextLight res={res}>Example style</TextLight>
                                <br/>
                                <div style={{marginTop: 8}}>
                                    <SubTextLight res={res}>Example style</SubTextLight>
                                </div>
                            </div>
                        </DivTextLight>
                        <DivTextLight>
                            <div>
                                <TextLight res={res}>Example style</TextLight>
                                <br/>
                                <div style={{marginTop: 8, display: "flex", alignItems: 'center'}}>
                                    <SubTextLight res={res}>Example style </SubTextLight>
                                </div>
                            </div>

                        </DivTextLight>
                        <DivTextLight>
                            <div>
                                <TextLight res={res}>Example style</TextLight>
                                <br/>
                                <div style={{marginTop: 8, display: "flex", alignItems: 'center'}}>
                                    <SubTextLight res={res}>Example bottom width </SubTextLight>
                                </div>
                            </div>

                        </DivTextLight>
                        <br/>


                        <Footer>
                            <SubTextLight
                                res={res}>{width > 750 ? `© Copyright 2022. Powered by Sortecom. All rights reserved.` : `Powered by Sortecom.`}</SubTextLight>
                            <RowSection>

                                <ContactDiv onClick={(e) => {
                                    window.location.href = 'mailto:support@techverest.com';
                                    e.preventDefault();
                                }}>
                                    <MailOutlined style={{marginRight: 6, fontSize: 16}}/>
                                    <SubTextLightHover res={res}>support@techverest.com</SubTextLightHover>
                                </ContactDiv>
                            </RowSection>
                        </Footer>
                    </DivBackgroundWhite>
                </ContentContainer>
                {width > 1000 && <RightContainer/>}

            </Container>
            <BackTop/>
        </div>
    )
}

export default Home
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
const ButtonSave = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #18A0FB;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  padding: 12px;

  &:hover {
    background-color: #004AF7;
  }
`
const TextButton = styled.span<{ res: boolean }>`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.res && fontScale(12)}px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #FFFFFF;
`
const DivTextBold = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #00000033;
  padding-bottom: 12px;
  margin: 30px 0;
`
const DivTextLight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 20px 0;
  background-color: white;
`
const DivTextLightRes = styled.div<{ width: number }>`
  display: flex;
  align-items: ${p => p.width > 580 && 'center'};
  flex-direction: ${p => p.width < 580 && 'column'};
  justify-content: ${p => p.width > 580 && 'space-between'};
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 20px 0;
  background-color: white;
`
const TextBold = styled.span<{ res: boolean }>`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${p => p.res && fontScale(16)}px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #000000;
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
const ButtonEnable = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`
const TextEnable = styled(SubTextLight)`
  &:hover {
    color: #18A0FB;
  }
`
const BannerContainer = styled.div<{ isShow: boolean }>`
  display: none;
  position: relative;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1.5px solid #1D1B291A;
  padding: 28px 40px;
  border-radius: 6px;
  opacity: ${p => p.isShow ? 1 : 0.5}
  transition: all 2s;
`

const TextBannerLight = styled.span<{ res: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.res && fontScale(14)}px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextBannerBold = styled(TextBannerLight)`
  font-weight: 700;
`
const ButtonRate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #18A0FB;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  padding: 12px 24px;

  &:hover {
    background-color: #004AF7;
  }
`
const ButtonRateBorder = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #18A0FB;
  border-radius: 6px;
  cursor: pointer;
  padding: 12px 24px;

  &:hover {
    background-color: #004AF7;
  }
`
const IconExit = styled.button`
  display: flex;
  position: absolute;
  align-items: center;
  background-color: white;
  justify-content: center;
  border: none;
  right: 12px;
  top: 12px;
  cursor: pointer;
`
const ImageExit = styled(Image)`
  width: 12px;
  height: 12px;

`

const SelectOption = styled(Select)<{ width: number }>`
  border: 2px solid #0000004D;
  border-radius: 10px;
  width: ${p => p.width > 580 ? '40%' : '100%'};
  margin-top: ${p => p.width < 580 && 12}px;
`
const ColumnSection = styled.div<{ width: number }>`
  width: ${p => p.width > 580 ? '40%' : '100$'};
`

const AddSpecialPage = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #0000004D;
  border-radius: 10px;
  width: 100%;
  padding: 8px;
  cursor: pointer;
  margin: 12px 0;
`

const MinusSpecialPage = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #0000004D;
  border-radius: 10px;
  width: 100%;
  padding: 2px 8px;
  cursor: pointer;
  margin: 12px 0;


`
const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: white;

`

const SMinusOutlineCircle = styled(MinusCircleOutlined)`
  transition: all .15s ease-in-out;

  &:hover {
    animation: pulse 1s infinite;
    transition: .3s;
  }
`
const SPlusOutlineCircle = styled(PlusCircleOutlined)`
  cursor: pointer;
  transition: .3s;

  &:hover {
    animation: pulse 1s infinite;
    transition: .3s;
  }
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