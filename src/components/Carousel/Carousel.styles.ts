import { rounded } from "@/utils/helpers"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
  flex: 1;
  overflow: visible;
`

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 70%;
  overflow: hidden;

  img {
    border-radius: ${rounded("medium")};
  }
`

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
