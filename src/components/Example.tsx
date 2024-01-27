type Props = {
  variant: "green" | "yellow" | "red"
}

const Example = ({ variant = "green" }: Props) => (
  <div style={{ padding: 20, background: variant }}>This is an example</div>
)

export default Example
