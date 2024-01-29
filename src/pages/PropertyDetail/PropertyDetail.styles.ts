import { rounded, space, toRem } from "@/utils/helpers"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: ${space("xlarge")};
  position: relative;
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space("large")};
  flex: 1;
`

export const Booking = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  max-width: ${toRem(375)};

  > div {
    position: sticky;
    top: ${toRem(120)};
    right: 0;
    width: 100%;
    height: 400px;
    background-color: black;
    border-radius: ${rounded("medium")};
  }
`
