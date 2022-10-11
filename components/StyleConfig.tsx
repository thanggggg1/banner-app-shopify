import {memo} from "react";
import styled from "styled-components";
import {Col, Divider, InputNumber, Row, Slider} from "antd";
import {fontScale} from "../utils/fontScale";

export const StyleConfig = memo(function StyleConfig() {
    return (
        <Container>
            <TextBold res={true}>Background Style</TextBold>
            <Divider/>
            <RowSection>
                <LeftSection>
                    <TextNormal res={true}>Background Color</TextNormal>
                    <br/>
                    <ConfigWrapper>
                        <ColorPreview/>
                        <TextNormal res={true}>#00000</TextNormal>
                    </ConfigWrapper>
                </LeftSection>
                <MiddleSection>
                    <TextNormal res={true}>Image</TextNormal>
                    <br/>
                    <ConfigWrapper>
                        <ColorPreview/>
                        <TextNormal res={true}>Select an image</TextNormal>
                    </ConfigWrapper>
                </MiddleSection>
                <LastSection>
                    <TextNormal res={true}>Opacity</TextNormal>
                    <br/>
                    <Row>
                        <Col>
                            <SmallNumberInput
                                res={true}
                                min={0}
                                max={100}
                                defaultValue={8}/>
                        </Col>
                       <Col>
                           <Slider
                               min={1}
                               max={100}
                           />
                       </Col>
                    </Row>
                </LastSection>
            </RowSection>

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
const RowSection = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`
const LeftSection = styled.div`
  display: inline-block;
margin-right: 10%;
`
const MiddleSection = styled.div`
  display: inline-block;
  margin-right: 10%;
`
const LastSection = styled.div`
  display: inline-block;
  margin-right: 10%;
`
const TextNormal = styled.span<{ res: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.res && fontScale(12)}px;
  line-height: 15px;
  letter-spacing: 0.03em;
  color: #1D1B29;
`
const ConfigWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  background-color: #eae9e9;
  margin-top: 12px;
`
const ColorPreview = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background-color: black;
  margin-right: 8px;
`
const SmallNumberInput = styled(InputNumber)<{res:boolean}>`
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.res && fontScale(12)}px;
  line-height: 12px;
  color: #1D1B29;
  background-color: #eae9e9;
  margin-top: 12px;
  padding:2px 0;
`