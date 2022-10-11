import {memo} from "react";
import styled from "styled-components";
import {SearchOutlined} from "@ant-design/icons";
import {Input} from "antd";

export const SearchBox = memo(function SearchBox() {
    return (
        <SInput placeholder="Search" prefix={<SSearchOutlined/>}/>
    )
})
const SInput = styled(Input)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 8px;
  border: 1.5px solid #CACACA;
  border-radius: 10px;
`
const SSearchOutlined = styled(SearchOutlined)`
  opacity: 0.5;
`
