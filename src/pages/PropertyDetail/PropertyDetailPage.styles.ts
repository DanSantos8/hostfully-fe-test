import { space, toRem } from "@/utils/helpers"
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
  max-width: ${toRem(800)};
`

export const Booking = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  max-width: ${toRem(400)};

  > div {
    position: sticky;
    top: ${toRem(120)};
    right: 0;
    width: 100%;
  }
`
