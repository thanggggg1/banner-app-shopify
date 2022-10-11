import {memo} from "react";
import styled from "styled-components";
import {fontScale} from "../utils/fontScale";
import {Button, Input, Select} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {SearchBox} from "./SearchBox";

export const FilterBanner = memo(function FilterBanner() {
    return (
        <Container>
            <LeftSection>
                <TextTitle res={true}>Search for Banner</TextTitle>
                <SearchBox/>
            </LeftSection>
            <RightSection>
                <DivSection>
                    <TextTitle res={true}>Sort by</TextTitle>
                    <SSelect defaultValue={'Time'} bordered={false}/>
                </DivSection>
                <DivSection>
                    <TextTitle res={true}>View mode</TextTitle>
                    <SSelect defaultValue={'Board'} bordered={false}/>
                </DivSection>
                <DivSection style={{justifyContent:'flex-end'}}>
                    <CreateButton>
                        <TextButton res={true}>Create Banner</TextButton>
                    </CreateButton>
                </DivSection>
            </RightSection>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: white;
  width: 100%;
  padding: 40px;
`
const LeftSection = styled.div`
  display: flex;
  width: 48%;
  flex-direction: column;
`
const DivSection = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex:1;
  margin: 0 8px;
`
const TextTitle = styled.span<{ res: boolean }>`
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.res && fontScale(12)}px;
  color: #1D1B29;
  margin-bottom: 12px;
`
const RightSection = styled.div`
  display: flex;
  width: 48%;
`
const SSelect = styled(Select)`
  border: 1.5px solid rgba(29, 27, 41, 0.3);
  border-radius: 10px;
`
const CreateButton = styled(Button)`
background-color: #18A0FB;
  display: flex;
  border-radius: 10px;
  padding:16px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #0363a1;
  }
`
const TextButton = styled.span<{res:boolean}>`
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.res && fontScale(12)}px;
  line-height: 17px;
  text-align: center;
  color: #F6F6F7;
`