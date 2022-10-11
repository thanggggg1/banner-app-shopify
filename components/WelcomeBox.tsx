import { memo } from "react";
import styled from "styled-components";
import {fontScale} from "../utils/fontScale";
import {CloseOutlined} from "@ant-design/icons";

export const WelcomeBox = memo(function WelcomeBox(){
    return (
<Container>
    <SCloseOutlined/>
    <TextTitle res={true}>Welcome,  merchant!</TextTitle>
    <br/>
    <TextContent res={true}> It’s time to create the first banner to boost up your sales!</TextContent>
</Container>
    )
})
const Container = styled.div`
  position:relative;
display:flex;
flex:1;
  flex-direction: column;
padding:40px;
  width: 100%;
  background-color: #F6F6F7;
  border: 1.5px solid rgba(29, 27, 41, 0.1);
  border-radius: 6px;
`
const TextTitle = styled.span<{ res: boolean }>`
  font-style: normal;
  font-weight: 700;
  font-size: ${p => p.res && fontScale(14)}px;
  line-height: 17px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`

const TextContent = styled.span<{ res: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.res && fontScale(14)}px;
  color: #1D1B29;
`
const SCloseOutlined = styled(CloseOutlined)`
position: absolute;
  top:10px;
  right:10px;
`