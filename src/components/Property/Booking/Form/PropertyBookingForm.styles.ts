import { colors, fontSize, rounded, space, weight } from "@/utils/helpers"
import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${space("large")};
  gap: ${space("small")};
  border-radius: ${rounded("medium")};
  background-color: white;
  border: 1px solid ${colors("border")};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;
`

export const Pricing = styled.div`
  display: flex;
  gap: ${space("small")};
  align-items: center;
`

export const RegularPrice = styled.span<{ hasPromoPrice?: boolean }>`
  font-size: ${fontSize("xxxlarge")};

  ${({ hasPromoPrice }) =>
    hasPromoPrice &&
    css`
      text-decoration: line-through;
      color: ${colors("lightText")};
    `}
`

export const Text = styled.span`
  font-size: ${fontSize("medium")};
  color: ${colors("lightText")};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${space("medium")};
`
export const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .DateRangePickerInput {
    width: 100%;
  }

  .DateInput {
    width: 50%;
  }
  .DateInput_input {
    font-size: ${fontSize("medium")};
    text-align: center;
    width: 100%;
  }
`

export const CalendarRow = styled.div`
  display: flex;
  width: 100%;
`

export const CalendarLabel = styled.span`
  font-size: ${fontSize("small")};
  color: ${colors("lightText")};
  width: 50%;
  text-align: center;
`

export const Guests = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GuestColumn = styled.div`
  display: flex;
  gap: ${space("small")};
  align-items: center;
  justify-content: center;
`

export const GuestCounter = styled.span`
  width: 12px;
  text-align: center;
  font-size: ${fontSize("large")};
  color: ${colors("text")};
  border: none;
  outline: none;
`

export const GuestControl = styled.button`
  border: none;
  background-color: transparent;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: ${rounded("full")};
`

export const Button = styled.button`
  padding: ${space("medium")};
  font-size: ${fontSize("medium")};
  font-weight: ${weight("semibold")};
  color: white;
  border-radius: 8px;
  border: none;
  background-color: ${colors("primary")};
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space("xsmall")};
  margin-top: ${space("small")};

  > div {
    &:last-child {
      border-top: 1px solid;
      padding-top: ${space("small")};
      margin-top: ${space("small")};
    }
  }
`

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${space("medium")};
`
