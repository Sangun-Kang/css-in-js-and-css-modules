import { Wrapper, Title, Button, ColorBoxButton, HoverDiv, Input, Thing, Label } from '../components/cssnjs'
import Link from 'next/link'

export default function Cssinjs() {


  return (
    <>
      <Wrapper>
        <Link href="/">HOME</Link>
        <Title>
          Cssinjs World!
        </Title>
      </Wrapper>
      <Wrapper>
        <Button primary>test1</Button>
        <Button>test2</Button>
        <Button primary>test3</Button>
        <Button>test4</Button>
        <Button primary>test5</Button>
        <Button>test6</Button>
        <Button primary>test7</Button>
        <Button>test8</Button>
      </Wrapper>
      <Wrapper>
        <HoverDiv bg="lightgreen">
          hover green
        </HoverDiv>
        <HoverDiv bg="orange">
          hover orange
        </HoverDiv>
      </Wrapper>
      <Wrapper>
        <ColorBoxButton bg='lightgreen' color="yellow">test1</ColorBoxButton>
        <ColorBoxButton bg='blue' color="red">test2</ColorBoxButton>
        <ColorBoxButton bg='gray' color="brown">test3</ColorBoxButton>
        <ColorBoxButton bg='indigo' color="orange">test4</ColorBoxButton>
        <ColorBoxButton bg='yellow' color="green">test1</ColorBoxButton>
        <ColorBoxButton bg='brown' color="gray">test2</ColorBoxButton>
        <ColorBoxButton bg='red' color="blue">test3</ColorBoxButton>
        <ColorBoxButton bg='orange' color="white">test4</ColorBoxButton>
      </Wrapper>
      <Wrapper>
      <Wrapper>
        <Thing>test1</Thing>
        <Thing>test2</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>test3</div>
        <Thing>test4</Thing>
        <Thing>test5</Thing>
        <div className="something-else">
          <Thing>test6</Thing>
        </div>
      </Wrapper>
      </Wrapper>
      <Wrapper>
        <Input></Input>
        <Input></Input>
      </Wrapper>
      <Wrapper>
        <Label>
          test1
        </Label>
        <Label>
          test2
        </Label>
      </Wrapper>
    </>
  )
}
