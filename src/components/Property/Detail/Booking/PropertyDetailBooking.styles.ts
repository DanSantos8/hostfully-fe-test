import { toRem } from "@/utils/helpers"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Sticky = styled.div`
  position: sticky;
  top: 120px;
  right: 0;
`

export const Booking = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  max-width: ${toRem(400)};

  @media (max-width: 1024px) {
    margin: auto;
  }

  > div {
    position: sticky;
    top: ${toRem(120)};
    right: 0;
    width: 100%;
  }
`
