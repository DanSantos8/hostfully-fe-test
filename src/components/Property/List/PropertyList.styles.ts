import { space, toRem } from "@/utils/helpers"
import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  width: 100%;
  gap: ${space("xxlarge")} ${space("large")};
  grid-template-columns: repeat(auto-fit, minmax(${toRem(280)}, 1fr));
`
