import { space, toRem } from "@/utils/helpers"
import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  gap: ${space("xxlarge")} ${space("medium")};
  grid-template-columns: repeat(auto-fit, minmax(${toRem(280)}, 1fr));
  place-items: center;
`
