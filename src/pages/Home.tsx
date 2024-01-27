import Property from "@/components/Property"
import * as S from "./Home.styles"
const arr = Array(12).fill({
  title: "São Vicente, Brasil",
  image:
    "https://chnapartments.com/assets/images/cache/kitchen-and-living-room-a4be940df9ffd81de9014c7fc0f53336.jpg",
  price: 345,
  priceType: "noite",
  rate: 4.97,
  reference: "8 minuto(s) a pé até Itararé Beach",
})

const Home = () => {
  return (
    <S.Container>
      <Property.List>
        {arr.map((property) => (
          <Property.Card {...property} />
        ))}
      </Property.List>
    </S.Container>
  )
}

export default Home
