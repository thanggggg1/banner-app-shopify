import {memo} from "react";
import styled from "styled-components";
import {fontScale} from "../utils/fontScale";
import Image from "next/image";
import {iconDelete, iconEdit, iconStar} from "../public";

export const Banner = memo(function Banner() {
    return (
        <Container>
            <BannerItem>
                <TextBanner res={true}>Day la text cua Banner</TextBanner>
            </BannerItem>
            <TextBanner res={true}>Banner Demo 01</TextBanner>
            <DivBetween>
                <TextTime res={true}>Last Updated: Yesterday 04:20</TextTime>
                <Row>
                    <Image src={iconStar} />
                    <Image src={iconDelete} />
                    <Image src={iconEdit} />
                </Row>
            </DivBetween>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #F8F8F8;
  border: 1px solid rgba(29, 27, 41, 0.1);
  border-radius: 10px;
  padding: 12px;
  margin: 0 12px;
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
const TextBanner = styled.span<{res:boolean}>`
  font-style: normal;
  font-weight: 700;
  font-size: ${p => p.res && fontScale(12)}px;
  line-height: 17px;
  color: #292D32;
  margin-bottom: 12px;
`
const TextTime = styled.span<{res:boolean}>`
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.res && fontScale(12)}px;
  line-height: 15px;
  color: rgba(29, 27, 41, 0.5);
`
const DivBetween = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Row = styled.div`
display: flex;
  align-items: center;
`