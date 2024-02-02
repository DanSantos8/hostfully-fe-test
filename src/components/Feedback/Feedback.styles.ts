import { colors, fontSize, space, weight } from "@/utils/helpers"
import styled from "styled-components"

export const Container = styled.div<{ variant: "SUCCESS" | "WARNING" }>`
  display: flex;
  flex-direction: column;
  gap: ${space("xxsmall")};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${space("medium")} 0;
  background-color: ${({ variant }) =>
    variant === "WARNING" ? colors("error") : colors("success")};
`

export const Title = styled.h2`
  color: white;
  font-size: ${fontSize("xlarge")};
  font-weight: ${weight("semibold")};
`
