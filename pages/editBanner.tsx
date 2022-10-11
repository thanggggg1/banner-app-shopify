import React, {memo} from "react";
import {TopBarComponent} from "../components/TopBarComponent";
import {BackTop, Button, Input, Tabs} from "antd";
import styled from "styled-components";
import {fontScale} from "../utils/fontScale";
import {NextPage} from "next";
import UseWindowSize from "../hooks/useWindowSize";
import Image from "next/image";
import {iconCalendar, iconDelete, iconTutorial} from "../public";
import {TemplateConfig} from "../components/TemplateConfig";
import {ContentConfig} from "../components/ContentConfig";
import {StyleConfig} from "../components/StyleConfig";

const EditBanner: NextPage = memo(function EditBanner() {
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
                        <TextTitle res={res}>Banner App / Edit Banner</TextTitle>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                            marginTop: 16,
                            alignItems: "center"
                        }}>
                            <TextNameBanner res={res} placeholder={'Name of the Banner'} bordered={false}/>
                            <IconButton src={iconTutorial}/>
                            <IconButton src={iconDelete}/>
                            <IconButton src={iconCalendar}/>
                        </div>
                    </HeaderSection>
                    <br/>
                    <DivBackgroundWhite width={width}>
                        <TextBold res={true}>Preview Banner</TextBold>
                        <br/>
                        <br/>
                        <BannerItem>
                            <TextBanner res={true}>Day la text cua Banner</TextBanner>
                        </BannerItem>
                        <BannerItem>
                            <TextBanner res={true}>Day la text cua Banner</TextBanner>
                        </BannerItem>
                        <BannerItem>
                            <TextBanner res={true}>Day la text cua Banner</TextBanner>
                        </BannerItem>
                        <Tabs
                            defaultActiveKey="1"
                            tabBarExtraContent={<DivBetween>
                                <RowCenter>
                                    <ButtonCancel>
                                        <TextCancel res={true}>Cancel</TextCancel>
                                    </ButtonCancel>
                                    <ButtonNext>
                                        <TextNext res={true}>Next</TextNext>
                                    </ButtonNext>
                                </RowCenter>
                            </DivBetween>}
                            items={[
                                {
                                    label: `Template`,
                                    key: '1',
                                    children: <TemplateConfig/>,
                                },
                                {
                                    label: `Config Content`,
                                    key: '2',
                                    children: <ContentConfig/>,
                                },
                                {
                                    label: `Config Style`,
                                    key: '3',
                                    children: <StyleConfig/>,
                                },
                                {
                                    label: `Config Appearance`,
                                    key: '4',
                                    children: `Content of Tab Pane 3`,
                                },
                            ]}
                        />

                    </DivBackgroundWhite>
                </ContentContainer>
                {width > 1000 && <RightContainer/>}
            </Container>
            <BackTop/>
        </div>
    )
})
export default EditBanner

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
  min-height: 700px;
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
const RowCenter = styled.div`
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
const TextNameBanner = styled(Input)<{ res: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.res && fontScale(20)}px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;
  color: rgba(29, 27, 41, 0.5);
`
const HeaderSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-bottom: 1px solid #00000033;
  padding-bottom: 8px;
`
const TextBold = styled.span<{ res: boolean }>`
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.res && fontScale(12)}px;
  color: #1D1B29;
  margin-bottom: 12px;
`
const BannerItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #adadb2;
  min-height: 40px;
  margin-bottom: 20px;
`
const TextBanner = styled.span<{ res: boolean }>`
  font-style: normal;
  font-weight: 700;
  font-size: ${p => p.res && fontScale(12)}px;
  line-height: 17px;
  color: #292D32;
  margin-bottom: 12px;
`
const IconButton = styled(Image)`
  margin: 0 12px;
  cursor: pointer;
  padding: 0 12px;
`
const DivBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ButtonCancel = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #CACACA;
  border-radius: 6px;
  margin-right: 12px;
`
const TextCancel = styled.span<{ res: boolean }>`
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.res && fontScale(12)}px;
  text-align: center;
  color: #CACACA;
`
const ButtonNext = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #18A0FB;
  border-radius: 6px;

  &:hover {
    background-color: #106ba8;;
  }
`
const TextNext = styled.span<{ res: boolean }>`
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.res && fontScale(12)}px;
  text-align: center;
  color: #F6F6F7;
`
