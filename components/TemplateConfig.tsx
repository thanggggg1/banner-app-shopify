import {memo} from "react";
import styled from "styled-components";
import {fontScale} from "../utils/fontScale";
import {Divider} from "antd";

export const TemplateConfig = memo(function TemplateConfig(){
    return (
        <Container>
            <TextBold res={true}>Template Select</TextBold>
            <Divider/>
            <TextBold res={true}>This feature coming soon</TextBold>
        </Container>

    )
})
const Container =styled.div`
display: flex;
  flex: 1;
  width: 100%;
  background-color: transparent;
  flex-direction: column;
  padding-top: 20px;

`
const TextBold = styled.span<{ res: boolean }>`
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.res && fontScale(12)}px;
  color: #1D1B29;
  margin-bottom: -12px;
`