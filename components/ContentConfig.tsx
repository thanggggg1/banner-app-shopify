import {memo} from "react";
import styled from "styled-components";
import {Checkbox, Divider, Input} from "antd";
import {fontScale} from "../utils/fontScale";

export const ContentConfig = memo(function ContentConfig(){
    return (
        <Container>
            <TextBold res={true}>Display Message</TextBold>
            <Divider/>
            <TextNormal res={true}>Initial Message</TextNormal>
            <br/>
            <RowSection>
                <SInput defaultValue={'Free shipping for orders over'} style={{width:'40%'}}/>
                <SInput defaultValue={'1,000,000 VND'} style={{width:'20%',marginLeft:8,marginRight:8}}/>
                <SInput defaultValue={'Name of the campaign'} style={{width:'40%'}}/>
            </RowSection>
            <br/>
            <br/>
            <TextNormal res={true}>Progress Message</TextNormal>
            <br/>
            <RowSection>
                <SInput defaultValue={'Only'} style={{width:'40%'}}/>
                <SInput defaultValue={'900,000 VND'} style={{width:'20%',marginLeft:8,marginRight:8}}/>
                <SInput defaultValue={'away from free shipping'} style={{width:'40%'}}/>
            </RowSection>
            <br/>
            <br/>
            <TextNormal res={true}>Success Message</TextNormal>
            <br/>
                <SInput defaultValue={'Congratulations! You\'ve got free shipping'} style={{width:'60%'}}/>
            <br/>
            <br/>
            <TextBold res={true}>Interaction</TextBold>
            <Divider/>
            <SectionCheckbox>
                <Checkbox>Add Link to the Bar (optional)</Checkbox>
                <Checkbox>Include Close Button</Checkbox>
            </SectionCheckbox>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  height: 100%;
  padding-top: 20px;
`
const TextBold = styled.span<{ res: boolean }>`
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.res && fontScale(12)}px;
  color: #1D1B29;
  margin-bottom: -12px;
`
const TextNormal = styled.span<{res:boolean}>`
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.res && fontScale(12)}px;
  line-height: 15px;
  color: #1D1B29;
`
const SInput = styled(Input)`
`
const RowSection = styled.div`
display: flex;
  align-items: center;
`
const SectionCheckbox = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`